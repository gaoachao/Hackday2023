import { forwardRef } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGIntroduction } from "@assets/svg/Introduction/introduction.svg";
import { ReactComponent as SVGHackday } from "@assets/svg/Introduction/hackday.svg";
import { ReactComponent as SVGHackdayContent } from "@assets/svg/Introduction/hackday-content.svg";

interface Props {
  //Introduction组件不需要Props
}

const Introduction = forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className={styles["introduction-container"]} ref={ref}>
      <div className={styles["fake-topbar"]}>
        <div className={styles["fake-aside"]}></div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>比赛介绍</div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGIntroduction className={styles["svg-introduction"]} />
            <SVGHackday className={styles["svg-hackday"]} />
          </div>
          <div className={styles["second-line"]}>
            <div className={styles["picture"]}>
              <img
                src="./src/assets/image/introduction-picture.png"
                className={styles["introduction-picture"]}
              />
            </div>
            <div className={styles["description"]}>
              <SVGHackdayContent />
              <div className={styles["description-content"]}>
                UNIQUE HACKDAY 由联创团队发起，邀请来⾃全国各⼤⾼校的“极客”们⻬聚⼀堂，在⽐赛中切磋交流，在团队中碰撞思想，在天⻢⾏空的想象中创造改变世界的作品，⽤不受拘束的创意诠释年轻的科技势⼒。
              </div>
            </div>
          </div>
          <div className={styles["third-line"]}>
            <div className={styles["time"]}>
              <div className={styles["third-line-title"]}>时间</div>
              <div className={styles["third-line-content"]}>2023.7.1-2023.7.8</div>
            </div>
            <div className={styles["shape"]}>
              <div className={styles["third-line-title"]}>形式</div>
              <div className={styles["third-line-content"]}>线上参赛，线下答辩</div>
            </div>
            <div className={styles["contestant"]}>
              <div className={styles["third-line-title"]}>参赛对象</div>
              <div className={styles["third-line-content"]}>通过简历筛选，来⾃全国各⼤⾼校的学⽣团队</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Introduction;
