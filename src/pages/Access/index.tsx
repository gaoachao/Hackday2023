import { FC } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGAwards } from "@assets/svg/Awards/awards.svg";

const Awards: FC = () => {
  return (
    <div className={styles["awards-container"]}>
      <div className={styles["fake-topbar"]}></div>
      <div className={styles["container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>奖项设置</div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGAwards className={styles["svg-awards"]} />
          </div>
          <div className={styles["second-line"]}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
