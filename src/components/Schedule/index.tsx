import { FC } from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGSchedule } from "@assets/svg/Remain/schedule.svg";

const Schedule: FC = () => {
  return (
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
  );
};

export default Schedule;
