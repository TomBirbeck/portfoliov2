import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function NavBar(){
    return (
        <div className={styles.navbar}>
            <Link href = '/'>Home |</Link>
            <Link href = '/contact'>Contact Me |</Link>
            <Link href = '/projects'>Projects |</Link>
            <Link href = '/tech'>Tech Stack |</Link>
            <Link href = '/about'>About Me |</Link>
        </div>
    )
}