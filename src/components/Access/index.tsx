import { FC } from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGAccess } from "@assets/svg/Remain/access.svg";

const Access: FC = () => {
  return (
    <div className={styles["access-container"]}>
      <div className={styles["aside"]}>
        <div className={styles["title-cn"]}>
          <div className={styles["title-content"]}>联系我们</div>
        </div>
        <div className={styles["contact-contanier"]}></div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["first-line"]}>
          <SVGAccess className={styles["svg-access"]} />
        </div>
        <div className={styles["second-line"]}></div>
      </div>
    </div>
  );
};

export default Access;
