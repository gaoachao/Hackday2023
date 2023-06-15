import { forwardRef } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGRules } from "@assets/svg/Rules/rules.svg";


interface Props {
  //Rules组件不需要Props
}

const Rules = forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className={styles["introduction-container"]} ref={ref}>
      <div className={styles["fake-topbar"]}>
        <div className={styles["fake-aside"]}></div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>参赛规则</div>
          </div>
          <div className={styles["sign-up"]}>
            <div className={styles["big-name"]}>报名</div>
            <div className={styles["sign-up-item"]}>
              <div className={styles["middle-name"]}>报名时间</div>
              <div className={styles["content-text"]}>即⽇起⾄ 2023-6-29 23:59</div>
            </div>
            <div className={styles["sign-up-item"]}>
              <div className={styles["middle-name"]}>报名方式</div>
              <div className={styles["content-text"]}>选⼿提交简历，完成报名流程 </div>
              <div className={styles["content-text"]}>选⼿⾃⾏组队或加⼊官⽅群⾃由组队(5⼈及以下) </div>
              <div className={styles["content-text"]}>⽐赛开始前公布参赛队伍名单</div>
            </div>
          </div>
          <div className={styles["standard"]}>
            <div className={styles["big-name"]}>考核标准</div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGRules className={styles["svg-rules"]} />
          </div>
          <div className={styles["second-line"]}>
            <div className={styles["big-name"]}>参赛规则</div>
            <div className={styles["rules-container"]}>
              <div className={styles["rules-online"]}>
                <div className={styles["middle-name"]}>线上比赛</div>
                <div className={styles["rules-description"]}>
                  <div className={styles["small-name"]}>时间</div>
                  <div className={styles["content-text"]}>2023-7-1 00:00 ⾄ 2023-7-5 18:00</div>
                  <div className={[styles["small-name"],styles["online-padding"]].join(' ')}>要求</div>
                  <div className={styles["content-text"]}>各团队完成产品开发⽅案，并在截⽌时间前提交作品。</div>
                  <div className={styles["content-text"]}>主办⽅对作品进⾏审核，于7-6 18:00前确定答辩⼈选。</div>
                </div>
              </div>
              <div className={styles["rules-offline"]}>
                <div className={[styles["rules-item"],styles["middle-name"]].join(' ')}>
                    <div>线下比赛</div>
                    <div>2023-7-8</div>
                  </div>
                <div className={styles["rules-description"]}>
                  <div className={styles["rules-item"]}>
                    <div className={styles["rules-item-content"]}>08:00-09:00</div>
                    <div className={styles["rules-item-content"]}>签到⼊场</div>
                  </div>
                  <div className={styles["rules-item"]}>
                    <div className={styles["rules-item-content"]}>09:00-11:45</div>
                    <div className={styles["rules-item-content"]}>Hackday 开幕</div>
                  </div>
                  <div className={styles["rules-item"]}>
                    <div className={styles["rules-item-content"]}>11:45-14:00</div>
                    <div className={styles["rules-item-content"]}>午餐休息</div>
                  </div>
                  <div className={styles["rules-item"]}>
                    <div className={styles["rules-item-content"]}>14:00-16:30</div>
                    <div className={styles["rules-item-content"]}>产品路演</div>
                  </div>
                  <div className={styles["rules-item"]}>
                    <div className={styles["rules-item-content"]}>16:30-17:00</div>
                    <div className={styles["rules-item-content"]}>茶歇休息 & 奖项评选</div>
                  </div>
                  <div className={styles["rules-item"]}>
                    <div className={styles["rules-item-content"]}>17:00-17:30</div>
                    <div className={styles["rules-item-content"]}>奖项颁布 & 总结发⾔</div>
                  </div>
                  <div className={styles["rules-item"]}>
                    <div className={styles["rules-item-content"]}>17:30-18:00</div>
                    <div className={styles["rules-item-content"]}>⾃由交流 & 合影留念</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["third-line"]}>
            <div className={styles["item-content"]}>完成度，创意，技术⼒，美术，答辩表现</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Rules;
