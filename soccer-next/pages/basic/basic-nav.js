import Link from "next/link"
// import styles from "common/style/Nav.module.css"
import styles from "basic/style/basic-nav.module.css"

export default function BasicNav(){
    return (<>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}> <Link href='/basic/calc'>calc</Link> </li>
                <li className={styles.li}> <Link href='/basic/counter'>counter</Link> </li>
                <li className={styles.li}> <Link href='/basic/bmi'>bmi</Link> </li>
                <li className={styles.li}> <Link href='/basic/grade'>grade</Link> </li>
            </ul>
        </nav>
    </>

    )
}