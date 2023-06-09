import { forwardRef } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGSponsor } from "@assets/svg/Sponsor/sponsor.svg";

import {sponsorArray} from "@consts/index";
interface Props {
  //Sponsor组件不需要Props
}

const Sponsor= forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className={styles["awards-container"]} ref={ref}>
      <div className={styles["fake-topbar"]}>
        <div className={styles["fake-aside"]}></div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>主办商与赞助商</div>
          </div>
          <div className={styles["organizers-container"]}>
            <div className={[styles["big-title"],styles["organizers-title-text"]].join(' ')}>主办方</div>
            <div className={styles["organizers-us"]}>
              <img 
                src="/image/Sponsor/1.png"
                className={styles["organizers-picture"]}
              />
              <div className={styles["organizers-us-text"]}>华中科技⼤学联创团队</div>
            </div>
            <div className={styles["organizers-us"]}>
              <img 
                src="/image/Sponsor/2.png"
                className={styles["organizers-picture"]}
              />
              <div className={styles["organizers-us-text"]}>华中科技⼤学启明学院</div>
            </div>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGSponsor className={styles["svg-sponsor"]} />
          </div>
          <div className={styles["second-line"]}>
            <div className={[styles["big-title"],styles["sponsor-title-text"]].join(' ')}>赞助商</div>
            <div className={styles["sponsor-box"]}>
            {
              sponsorArray.map((item,index)=>{
                return (
                  <div className={styles["sponsor-item"]} key={index}>
                    <img
                        src={`/image/Sponsor/sponsor${index+1}.png`}
                        className={styles["sponsor-picture"]}
                    />
                    <div className={styles["sponsor-item-title"]}>{Object.keys(item)[0]}</div>
                    <div className={styles["sponsor-item-content"]}>{Object.values(item)[0]}</div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Sponsor;
