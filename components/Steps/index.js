import Image from "next/image";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useRef, useEffect, useMemo, createRef } from 'react';
import Link from 'next/link'
import styles from "./Steps.module.scss";
import { worklists } from "../../public/data/worklists.ts";

export default function Steps() {
  const [showMore, setShowMore] = useState([false]);

  const refsById = useMemo(() => {
    const refs = {}
    worklists.forEach((item) => {
      refs[item.id] = createRef()
    })
    return refs
  }, [worklists])

  const [myElementIsVisible, updateMyElementIsVisible] = useState("");
  let observer = null

  const changeText = (index) => {
    let newArray = showMore
    newArray[index] = !showMore[index]
    setShowMore([
      ...newArray
    ])
  }

  useEffect(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((data)=>{
        if(data.isIntersecting){
          updateMyElementIsVisible(data.target.id);
        }
      })
    });
    observer.observe(refsById[1].current);
    observer.observe(refsById[2].current);
    observer.observe(refsById[3].current);
  }, []);

  return (
    <div>
      <div className={['allCenter', styles.maxContainer].join(" ")}>
        <div className={'headerTitle'}>
          A glimpse of our work
        </div>
        <div className={'headerText'}>
          Take a look at some of our recent work and see how we can help bring your imagination to life.
        </div>
      </div>
      <div
          className={[styles.fullPageScroll, 'container'].join(" ")}
          id="work"
      >
        <Row>
          <Col md={7} className={styles.fixed}>
            <div className={[styles.imageContainer, styles.hiddenMobile].join(" ")}>
              {worklists.slice(0, 3).map((work, idx1)=>(
                <div key={work.id} id={work.id} className={[styles.video, myElementIsVisible === "myref".concat(work.id) ? styles.active : ''].join(" ")}>
                  
                  <Image
                    alt={work.images[0].src}
                    src={work.images[0].src}
                    viewBox="0 0 1500 1538"
                    width={584}
                    height={392}
                    className={styles.svgStyles}
                  />
                </div>
              ))}
            </div>
            <div className={styles.hiddenMobile}>
            <Link href="/work">
              <Button className={styles.moreWork} variant="primary-text">See more work<img className='rightIcon' src="/icon/arrowright.svg" alt="add item" width="30"/></Button>
            </Link>
            </div>
          </Col>
          <Col md={5} className={styles.scrolling}>
          {worklists.slice(0, 3).map((work, idx1)=>(
            <div key={work.id} className={[styles.section, showMore[idx1] ? styles.viewClick : ""].join(" ")}>
              <div className={styles.sectionData}>
                <div ref={refsById[work.id]} id={"myref"+work.id} className={styles.sectionHeader}>{work.project_name}</div>
                <div className={styles.sectionBody}>
                  {showMore[idx1] ? work.project_detail: work.project_detail.substring(0, 160) + "..."}
                </div>
                <Link href={"/work#"+work.id}>
                  <Button variant="primary-text" className={styles.sectionFooter}>View more</Button>
                  {/* <Button variant="primary-text" className={styles.sectionFooter} onClick={() => changeText(idx1)}>{showMore[idx1] ? "View less" : "View more"}</Button> */}
                </Link>
                <div
                  className={[styles.imageContainer, styles.visibleMobile].join(" ")}>
                  <div className={styles.mobileImage}>
                    <Image
                      alt={work.images[0].src}
                      src={work.images[0].src}
                      viewBox="0 0 1500 1538"
                      width={584}
                      height={392}
                      className={styles.svgStyles}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Col>
        </Row>
        <div className={styles.visibleMobile}>
          <Link href="/work">
            <Button className={styles.moreWork} variant="primary-text">See more work<img className='rightIcon' src="/icon/arrowright.svg" alt="add item" width="30"/></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
