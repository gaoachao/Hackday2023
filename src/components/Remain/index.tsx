import { FC } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGRule } from "@assets/svg/Remain/rule.svg";
import { ReactComponent as SVGAward } from "@assets/svg/Remain/award.svg";
import { ReactComponent as SVGSchedule } from "@assets/svg/Remain/schedule.svg";


const Remain: FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["rule-container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>参赛规则</div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGRule className={styles["svg-rule"]} />
          </div>
          <div className={styles["second-line"]}></div>
        </div>
      </div>
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
      <div className={styles["schedule-container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>流程安排</div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGSchedule className={styles["svg-schedule"]} />
          </div>
          <div className={styles["second-line"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Remain;
