import { FC } from "react";
import "./index.scss";

import { ReactComponent as SVGUniqueStudio } from "@assets/svg/TopBar/uniquestudio.svg";
import { ReactComponent as SVGList } from "@assets/svg/TopBar/list.svg";

const TopBar: FC = () => {
  return (
    <div className="topbar-container">
      <SVGUniqueStudio className="uniquestudio" />
      <SVGList className="list" />
    </div>
  );
};

export default TopBar;
