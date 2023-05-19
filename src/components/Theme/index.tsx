import { FC } from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGTheme } from "@assets/svg/Theme/theme.svg";

const Theme: FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["aside"]}>
        <div className={styles["title-cn"]}>
          <div className={styles["title-content"]}>比赛主题</div>
        </div>
        <div className={styles["small-word"]}>
          <ol className={styles["small-word-content"]}>
            <li>Reorganize or change the positions of...</li>
            <li>(playing cards) again</li>
          </ol>
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["first-line"]}>
          <div className={styles["time"]}></div>
          <div className={styles["location"]}></div>
          <div className={styles["candidate"]}></div>
        </div>
        <div className={styles["second-line"]}>
          <SVGTheme className={styles["svg-theme"]} />
        </div>
        <div className={styles["third-line"]}>
          <img
            src="./src/assets/image/theme-picture.png"
            className={styles["theme-img"]}
          />
        </div>
        <div className={styles["fourth-line"]}></div>
      </div>
    </div>
  );
};

export default Theme;
