import { forwardRef } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGAwards } from "@assets/svg/Awards/awards.svg";
import { awardsArray , awardsArrayCN} from "@/consts";

interface Props {
  //Awards组件不需要Props
}

const Awards= forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className={styles["awards-container"]} ref={ref}>
      <div className={styles["fake-topbar"]}>
        <div className={styles["fake-aside"]}></div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>奖项设置</div>
          </div>
          <div className={styles["awards-items"]}>
            {awardsArrayCN.map((item,index) => {
              return <div className={styles["big-name"]} key={index}>{item}</div>
            })}
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGAwards className={styles["svg-awards"]} />
          </div>
          <div className={styles["second-line"]}>
            <div className={styles["awards-en-items"]}>
              {awardsArray.map((item,index) => {
                return <div className={styles["awards-en-item"]} key={index}>
                  <div>{Object.keys(item)[0]}</div>
                  <div>{Object.values(item)[0]}</div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/image/Awards/1.png"
        className={[styles["awards-picture"],styles["awards-picture-1"]].join(' ')}
      />
      <img
        src="/image/Awards/2.png"
        className={[styles["awards-picture"],styles["awards-picture-2"]].join(' ')}
      />
      <img
        src="/image/Awards/3.png"
        className={[styles["awards-picture"],styles["awards-picture-3"]].join(' ')}
      />
    </div>
  );
});

export default Awards;
