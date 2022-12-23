import Image from "next/image";
import { Row, Col, Button } from "react-bootstrap";
import { useState, useRef, useEffect } from 'react';
import styles from "./Steps.module.scss";

export default function Steps() {

  const myRef1 = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  const [myElementIsVisible, updateMyElementIsVisible] = useState("");
  let observer = null

  useEffect(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((data)=>{
        if(data.isIntersecting){
          updateMyElementIsVisible(data.target.id);
        }
      })
      
    });
    observer.observe(myRef1.current);
    observer.observe(myRef2.current);
    observer.observe(myRef3.current);
  }, []);

  return (
    <Row
      className={[styles.fullPageScroll, styles.container].join(" ")}
      id="work"
    >
      <Col md={7} className={styles.fixed}>
        <div className={styles.headerText}>
          The collaboration we do and the product we build.
        </div>
        <div className={[styles.imageContainer, styles.hiddenMobile].join(" ")}>
          <div className={[styles.video, myElementIsVisible === "myref1" ? styles.active : ''].join(" ")}>
            <Image
              src="/image/image-placeholder1.png"
              viewBox="0 0 1500 1538"
              width={1500}
              height={750}
              className={styles.svgStyles}
            />
          </div>
          <div className={[styles.video, myElementIsVisible === "myref2" ? styles.active : ''].join(" ")}>
            <Image
              src="/image/image-placeholder2.png"
              viewBox="0 0 1500 1538"
              width={1500}
              height={750}
              className={styles.svgStyles}
            />
          </div>
          <div className={[styles.video, myElementIsVisible === "myref3" ? styles.active : ''].join(" ")}>
            <Image
              src="/image/image-placeholder3.png"
              viewBox="0 0 1500 1538"
              width={1500}
              height={750}
              className={styles.svgStyles}
            />
          </div>
        </div>
        <div>
          <Button className={styles.moreWork} variant="primary-text">See more work<img className='rightIcon' src="/icon/arrowright.svg" alt="add item" width="30"/></Button>
        </div>
      </Col>
      <Col md={5} className={styles.scrolling}>
        <div className={styles.section}>
          <div className={styles.sectionData}>
            <div ref={myRef1} id="myref1" className={styles.sectionHeader}>Project Name</div>
            <div className={styles.sectionBody}>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, scrambled it to make a type specimen book.
            </div>
            <div className={styles.sectionFooter}>View work</div>
            <div
              className={[styles.imageContainer, styles.visibleMobile].join(" ")}>
              <div className={styles.mobileImage}>
                <Image
                  src="/image/image-placeholder1.png"
                  viewBox="0 0 1500 1538"
                  width={500}
                  height={250}
                  className={styles.svgStyles}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionData}>
            <div ref={myRef2} id="myref2" className={styles.sectionHeader}>Project Name</div>
            <div className={styles.sectionBody}>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, scrambled it to make a type specimen book.
            </div>
            <div className={styles.sectionFooter}>View work</div>
            <div
              className={[styles.imageContainer, styles.visibleMobile].join(" ")}>
              <div className={styles.mobileImage}>
                <Image
                  src="/image/image-placeholder2.png"
                  viewBox="0 0 1500 1538"
                  width={500}
                  height={250}
                  className={styles.svgStyles}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionData}>
            <div ref={myRef3} id="myref3" className={styles.sectionHeader}>Project Name</div>
            <div className={styles.sectionBody}>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, scrambled it to make a type specimen book.
            </div>
            <div className={styles.sectionFooter}>View work</div>
            <div
              className={[styles.imageContainer, styles.visibleMobile].join(" ")}>
              <div className={styles.mobileImage}>
                <Image
                  src="/image/image-placeholder3.png"
                  viewBox="0 0 1500 1538"
                  width={500}
                  height={250}
                  className={styles.svgStyles}
                />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
