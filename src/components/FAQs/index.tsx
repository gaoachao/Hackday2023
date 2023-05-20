import {FC} from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGFAQs } from "@assets/svg/Remain/FAQs.svg";

const FAQs:FC = ()=>{
  return (
    <div className={styles["question-container"]}>
    <div className={styles["aside"]}>
      <div className={styles["title-cn"]}>
        <div className={styles["top-line"]}></div>
        <div className={styles["title-content"]}>常见问题</div>
      </div>
    </div>
    <div className={styles["content"]}>
      <div className={styles["first-line"]}>
        <SVGFAQs className={styles["svg-FAQs"]} />
      </div>
      <div className={styles["second-line"]}></div>
    </div>
  </div>
  )
}

export default FAQs;