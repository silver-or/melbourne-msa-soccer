import style from "../common/styles/Layout.module.css"
import {BasicNav} from "../basic"

export default function BasicLayout({children}){
  return (<>
      <BasicNav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
  </>)
}