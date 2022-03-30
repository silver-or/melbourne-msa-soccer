import Link from "next/link"
import styles from "styles/Nav.module.css"

export default function Nav(){
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}> <Link href='/'>Home</Link> </li>
                <li className={styles.li}> <Link href='/basic/calc'>calc</Link> </li>
                <li className={styles.li}> <Link href='/basic/counter'>counter</Link> </li>
                <li className={styles.li}> <Link href='/basic/bmi'>bmi</Link> </li>
                <li className={styles.li}> <Link href='/basic/grade'>grade</Link> </li>
                <li className={styles.li}> <Link href='/basic/login'>login</Link> </li>
                <li className={styles.li}> <Link href='/basic/todo'>todo</Link> </li>
            </ul>
        </nav>
    )
}