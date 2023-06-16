import { forwardRef } from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGHackday } from "@assets/svg/Home/hackday.svg";
import { ReactComponent as SVGYear } from "@assets/svg/Home/year.svg";
import { ReactComponent as SVGReshuffle } from "@assets/svg/Home/Reshuffle.svg";
import { ReactComponent as SVGUniqueStudio } from "@assets/svg/Home/UniqueStudio.svg";

interface Props {
  //Home组件不需要Props
}
const Home = forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className={styles["container"]} ref={ref}>
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
          <SVGHackday className={styles["svg-hackday"]}/>
        </div>
        <div className={styles["year"]}>
          <SVGYear className={styles["svg-year"]}/>
        </div>
      </div>
      <div className={styles["third-line"]}>
        <div className={styles["content"]}>
        From mind to machine, in the Hackday scene, we craft the unseen, making innovation supreme.
        </div>
        <div className={styles["button-shadow"]}></div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["left"]}>
          <div className={styles["left-top"]}></div>
        </div>
        <div className={styles["right"]}></div>
      </div>
      <a href="https://console.hack.hustunique.com" target="_blank">
        <div className={styles["button"]}>
          <p>立即报名</p>
        </div>
      </a>
    </div>
  );
});

export default Home;
