import { FC } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGPicture } from "@assets/svg/Introduction/picture.svg";
import { ReactComponent as SVGIntroduction } from "@assets/svg/Introduction/introduction.svg";
import { ReactComponent as SVGHackday } from "@assets/svg/Introduction/hackday.svg";


const Introduction:FC = ()=>{
  return(
    <div className={styles["container"]}>
      <div className={styles["aside"]}>
        <div className={styles["title-cn"]}>
          <div className={styles["title-content"]}>比赛介绍</div>
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["first-line"]}>
          <div className={styles["title-en"]}>
            <SVGIntroduction className={styles["svg-introduction"]}/>
          </div>
          <div className={styles["hackday-container"]}>
            <SVGHackday className={styles["svg-hackday"]}/>
          </div>
        </div>
        <div className={styles["second-line"]}>
          <div className={styles["picture"]}>
            <SVGPicture className={styles["svg-picture"]}/>
          </div>
          <div></div>
        </div>
        <div className={styles["third-line"]}></div>
        <div className={styles["fourth-line"]}></div>
      </div>
    </div>
  )
}

export default Introduction;