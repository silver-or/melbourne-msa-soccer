import style from "common/style/Layout.module.css"
import BasicNav from "basic/basic-nav"

export default function BasicLayout({children}){
  return (<>
      <BasicNav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
  </>)
}