import Link from "next/link"
import styles from "common/style/Nav.module.css"

export default function Nav(){
    return (<>
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}> <Link href='/'>Home</Link> </li>
                <li className={styles.li}> <Link href='/basic/basic-layout'>Basic</Link> </li>
                <li className={styles.li}> <Link href='/game/game-list'>Game List</Link> </li>
                <li className={styles.li}> <Link href='/game/team-list'>Team List</Link> </li>
                <li className={styles.li}> <Link href='/todo/todo-list'>Todo</Link> </li>
                <li className={styles.li}> <Link href='/admin/dashboard'>Dashboard</Link> </li>
                <li className={styles.li}> <Link href='/board/board-list'>Board List</Link> </li>
                <li className={styles.li}> <Link href='/board/board-form'>Board Form</Link> </li>
                <li className={styles.li}> <Link href='/board/team-form'>Team Form</Link> </li>
                <li className={styles.li}> <Link href='/user/sign-in'>Sign In</Link> </li>
                <li className={styles.li}> <Link href='/user/sign-up'>Sign Up</Link> </li>
            </ul>
        </nav>
    </>)
}