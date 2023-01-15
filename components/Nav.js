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
          <div className={styles.navbar}>
            <Link href = '/'>Home |</Link>
            <Link href = '/contact'>Contact Me |</Link>
            <Link href = '/projects'>Projects |</Link>
            <Link href = '/tech'>Tech Stack |</Link>
            <Link href = '/about'>About Me |</Link>
        </div> :
        <>
        <div className={styles.mobileNav} onClick={()=>{setMenu(!menu)}}>
          <GiHamburgerMenu/>
          </div>
          {menu &&
          <div className={styles.dropdown}>
        <Link href = '/'><span onClick={()=>{setMenu(false)}}>Home</span></Link>
        <Link href = '/contact'><span onClick={()=>{setMenu(false)}}>Contact Me</span></Link>
            <Link href = '/projects'><span onClick={()=>{setMenu(false)}}>Projects</span></Link>
            <Link href = '/tech'><span onClick={()=>{setMenu(false)}}>Tech Stack</span></Link>
            <Link href = '/about'><span onClick={()=>{setMenu(false)}}>About Me</span></Link>
            </div>
          }
          </>
        
          }
        </>
    ) 
}