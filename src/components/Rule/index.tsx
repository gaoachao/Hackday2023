import { FC } from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGRule } from "@assets/svg/Remain/rule.svg";

const Rule: FC = () => {
  return (
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
  );
};

export default Rule;
