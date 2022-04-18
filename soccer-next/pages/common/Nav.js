import Link from "next/link"
import styles from "../common/styles/Nav.module.css"

export default function Nav(){
    return (<>
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}> <Link href='/'>Home</Link> </li>
                <li className={styles.li}> <Link href='/basic/basic-layout'>Basic</Link> </li>
                <li className={styles.li}> <Link href='/game/addGame'>경기 등록</Link> </li>
                <li className={styles.li}> <Link href='/game/getGames'>경기 목록</Link> </li>
                <li className={styles.li}> <Link href='/game/modifyGame'>경기 수정</Link> </li>
                <li className={styles.li}> <Link href='/game/removeGame'>경기 삭제</Link> </li>
                <li className={styles.li}> <Link href='/game/addTeam'>팀 등록</Link> </li>
                <li className={styles.li}> <Link href='/game/getTeams'>팀 목록</Link> </li>
                <li className={styles.li}> <Link href='/game/modifyTeam'>팀 정보 수정</Link> </li>
                <li className={styles.li}> <Link href='/game/removeTeam'>팀 삭제</Link> </li>
                <li className={styles.li}> <Link href='/todo/addTodo'>스케줄 등록</Link> </li>
                <li className={styles.li}> <Link href='/todo/getTodos'>스케줄 목록</Link> </li>
                <li className={styles.li}> <Link href='/todo/modifyTodo'>스케줄 수정</Link> </li>
                <li className={styles.li}> <Link href='/todo/removeTodo'>스케줄 삭제</Link> </li>
                <li className={styles.li}> <Link href='/admin/dashboard'>대시보드</Link> </li>
                <li className={styles.li}> <Link href='/board/addArticle'>게시글 등록</Link> </li>
                <li className={styles.li}> <Link href='/board/getArticles'>게시글 목록</Link> </li>
                <li className={styles.li}> <Link href='/board/modifyArticle'>게시글 수정</Link> </li>
                <li className={styles.li}> <Link href='/board/removeArticle'>게시글 삭제</Link> </li>
                <li className={styles.li}> <Link href='/user/join'>회원가입</Link> </li>
                <li className={styles.li}> <Link href='/user/login'>로그인</Link> </li>
                <li className={styles.li}> <Link href='/user/logout'>로그아웃</Link> </li>
                <li className={styles.li}> <Link href='/user/getUsers'>회원 목록</Link> </li>
                <li className={styles.li}> <Link href='/user/updateUser'>회원 정보 수정</Link> </li>
                <li className={styles.li}> <Link href='/user/withdrawUser'>회원 탈퇴</Link> </li>
            </ul>
        </nav>
    </>)
}