import { FC } from "react";
import styles from "./index.module.scss";

import Introduction from "@components/Introduction";

const Main:FC = ()=>{
  return(
    <div className={styles["container"]}>
      <Introduction/>
    </div>
  )
}

export default Main;