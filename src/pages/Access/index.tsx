import { forwardRef } from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGAccess } from "@assets/svg/Access/access.svg";

interface Props {
  //Access组件不需要Props
}

const Access= forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div className={styles["awards-container"]} ref={ref}>
      <div className={styles["fake-topbar"]}>
        <div className={styles["fake-aside"]}></div>
      </div>
      <div className={styles["container"]}>
        <div className={styles["aside"]}>
          <div className={styles["title-cn"]}>
            <div className={styles["title-content"]}>联系我们</div>
          </div>
          <div className={styles["mail-container"]}>
            <img
              src="/image/Access/1.png"
            />
            <a href="mailto:contact@hustunique.com" className={styles["mail-text"]}>
              contact@hustunique.com
            </a>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["first-line"]}>
            <SVGAccess className={styles["svg-access"]} />
          </div>
          <div className={styles["second-line"]}>
          <img
              src="/image/Access/2.png"
              className={styles["access-picture-2"]}
          />
          <div className={styles["access-contact-text"]}>湖北省 武汉市 洪⼭区 珞喻路1037号 华中科技⼤学 启明学院</div>
          <div className={styles["access-contact-text"]}>官⽅FAQ QQ群组：832899431</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Access;
