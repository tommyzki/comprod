import { Navbar, Nav, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link'
import AppContext from "../AppContext/AppContext"
import styles from './Header.module.scss';

export default function Header() {
  const context = useContext(AppContext);

  return (
    <div className={[styles.fixedHeader, context.themeContext === "white" ? styles.whiteColor : styles.blueColor].join(" ")}     >
      <Navbar className={styles.container} expand="md">
        <Navbar.Brand href="#home">
          <Link href="/">
            <div className={styles.imageWrapper}>
              <Image
                src="/logo.svg"
                alt="Concise Logo"
                layout="fill"
              />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Image
            src={context.themeContext === "white" ? "/icon/list-black.svg" : "/icon/list-white.svg"} //
            width={24}
            height={24}
            className={styles.checkIcon}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className='ms-auto'>
            <Nav className='p-2'>
              <Link href="#work">
                Work
              </Link>
            </Nav>
            <Nav className='p-2'> 
              <Link href="#about">
                About Us
              </Link>
            </Nav>
            {/* <Nav className='p-2'>
              <Link href="/">
                Career
              </Link>
            </Nav> */}
          </Nav>
          <Nav className='ms-auto'>
            <Link href="#contact">
              <Button variant="primary"><img className='leftIcon' src="/icon/chatbubble.svg" alt="add item" width="30"/>Let&apos;s Talk</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
