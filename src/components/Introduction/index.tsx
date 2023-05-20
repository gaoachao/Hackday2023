import { FC } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGPicture } from "@assets/svg/Introduction/picture.svg";
import { ReactComponent as SVGIntroduction } from "@assets/svg/Introduction/introduction.svg";
import { ReactComponent as SVGHackday } from "@assets/svg/Introduction/hackday.svg";

const Introduction: FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["aside"]}>
        <div className={styles["title-cn"]}>
          <div className={styles["title-content"]}>比赛介绍</div>
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["first-line"]}>
          <div className={styles["title-en"]}>
            <SVGIntroduction className={styles["svg-introduction"]} />
          </div>
          <div className={styles["hackday-container"]}>
            <SVGHackday className={styles["svg-hackday"]} />
          </div>
        </div>
        <div className={styles["second-line"]}>
          <div className={styles["picture"]}>
            <SVGPicture className={styles["svg-picture"]} />
          </div>
          <div className={styles["description"]}>
            <div className={styles["description-title"]}>联创团队</div>
            <div className={styles["description-content"]}>
              联创团队（Unique Studio）创建于 2000 年 6 月。队名“联创”寓意联众人之志，创非凡之事。
            </div>
            <div className={styles["description-content"]}>
              我们秉承不断创新和锐意进取的核心精神，立足互联网与信息技术，旨在建立一个精英学生的IT技术平台。
            </div>
            <div className={styles["description-content"]}>
              作为一个以兴趣为主导、强调主动实践和自主创新的学生团队，团队致力于为有潜力、肯努力并富有激情的学生构建一流的学习环境，让兴趣变成能力，引导他们快速成长。
            </div>
          </div>
        </div>
        <div className={styles["third-line"]}></div>
        <div className={styles["fourth-line"]}></div>
      </div>
    </div>
  );
};

export default Introduction;
