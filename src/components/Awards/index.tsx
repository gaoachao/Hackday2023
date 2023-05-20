import { FC } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGAward } from "@assets/svg/Remain/award.svg";

const Awards: FC = () => {
  return (
    <div className={styles["award-container"]}>
      <div className={styles["aside"]}>
        <div className={styles["title-cn"]}>
          <div className={styles["title-content"]}>奖项设置</div>
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["first-line"]}>
          <SVGAward className={styles["svg-award"]} />
          <div className={styles["top-line"]}></div>
        </div>
        <div className={styles["second-line"]}></div>
      </div>
    </div>
  );
};

export default Awards;
