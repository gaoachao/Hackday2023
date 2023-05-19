import { FC } from "react";
import styles from "./index.module.scss";

import Introduction from "@components/Introduction";
import Theme from "@components/Theme";
import Remain from "@components/Remain";

const Main:FC = ()=>{
  return(
    <div className={styles["container"]}>
      <Introduction/>
      <Theme/>
      <Remain/>
    </div>
  )
}

export default Main;