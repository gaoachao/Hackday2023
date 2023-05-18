import { forwardRef } from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGHackday } from "@assets/svg/Home/hackday.svg";
import { ReactComponent as SVGYear } from "@assets/svg/Home/year.svg";
import { ReactComponent as SVGReshuffle } from "@assets/svg/Home/Reshuffle.svg";
import { ReactComponent as SVGUniqueStudio } from "@assets/svg/Home/UniqueStudio.svg";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["fake-topbar"]}></div>
      <div className={styles["first-line"]}>
        <div className={styles["reshuffle"]}>
          <SVGReshuffle className={styles["svg-reshuffle"]} />
          <div className={styles["content"]}>
            <div>1.Reorganize or change the positions of...</div>
            <div>2.(playing cards) again</div>
          </div>
        </div>
        <div className={styles["uniquestudio"]}>
          <SVGUniqueStudio className={styles["svg-uniquestudio"]} />
        </div>
      </div>
      <div className={styles["second-line"]}>
        <div className={styles["hackday"]}>
          <SVGHackday />
        </div>
        <div className={styles["year"]}>
          <SVGYear />
        </div>
      </div>
      <div className={styles["third-line"]}>
        <div className={styles["content"]}>
          “Don’t know what to put here but there should be something here.
          English and full of meanings that no one give a shit.”
        </div>
        <div className={styles["button-shadow"]}></div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["left"]}>
          <div className={styles["left-top"]}></div>
        </div>
        <div className={styles["right"]}></div>
      </div>
      <div className={styles["button"]}>
        <p>立即报名</p>
      </div>
    </div>
  );
};

export default Home;
