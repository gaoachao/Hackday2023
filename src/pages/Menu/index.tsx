import { FC } from "react";
import styles from "./index.module.scss";

import { ReactComponent as SVGClose } from "@assets/svg/Menu/close.svg";

const Menu: FC = () => {
  return (
    <div className={styles["menu-container"]}>
      <div className={styles["aside"]}></div>
    </div>
  );
};

export default Menu;
