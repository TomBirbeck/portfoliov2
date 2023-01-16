import Link from 'next/link'
import { useEffect, useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import styles from '../styles/Nav.module.css'

export default function NavBar(){
  const [windowSize, setWindowSize] = useState(0)
  const [menu, setMenu] = useState(false)


    useEffect(()=>{
        const handleResizeWindow = () => setWindowSize(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        handleResizeWindow()
        window.addEventListener("resize", handleResizeWindow);
        return () => {
          // unsubscribe "onComponentDestroy"
          window.removeEventListener("resize", handleResizeWindow);
        };
      },[])

      return (
        <>
          {windowSize > 700 ?
            <ul className={styles.navbar}>
              <li>
              <Link href = '/'>Home |</Link>
                </li>
                <li>
                <Link href = '/contact'>Contact Me |</Link>
                </li>
                <li>
                <Link href = '/projects'>Projects |</Link>
                </li>
                <li>
            <Link href = '/tech'>Tech Stack |</Link>
                </li>
                <li>
            <Link href = '/about'>About Me |</Link>
                </li>
            </ul>:
        <>
        <div className={styles.mobileNav} onClick={()=>{setMenu(!menu)}}>
          <GiHamburgerMenu/>
          </div>
          <div hidden={menu}>
          <ul className={styles.dropdown}>
            <li onClick={()=>{setMenu(true)}}>
            <Link href = '/'>Home</Link>
            </li>
            <li onClick={()=>{setMenu(true)}}>
        <Link href = '/contact'>Contact Me</Link>
            </li>
            <li onClick={()=>{setMenu(true)}}>
            <Link href = '/projects'>Projects</Link>
            </li>
            <li onClick={()=>{setMenu(true)}}>
            <Link href = '/tech'>Tech Stack</Link>
            </li>
            <li onClick={()=>{setMenu(true)}}>
            <Link href = '/about'>About Me</Link>
            </li>
            </ul>
          </div>
          </>
          }
        </>
    ) 
}