import { FC, CSSProperties } from "react";
import "./index.scss";

import { ReactComponent as SVGUniqueStudio } from "@assets/svg/TopBar/uniquestudio.svg";
import { ReactComponent as SVGList } from "@assets/svg/TopBar/list.svg";

interface TopBarProps {
  setIsMenu: (state: boolean) => void,
  isPC: boolean,
}

const TopBar: FC<TopBarProps> = (props: TopBarProps) => {
  const { isPC, setIsMenu } = props;
  const mobileStyle: CSSProperties = {
    height: '8vh',
    borderBottom:'1px solid var(--deeper-white)',
  }
  const handleClick = () => {
    setIsMenu(true);
  }
  return (
    <div className="topbar-container" style={!isPC ? mobileStyle : undefined}>
      <SVGUniqueStudio className="uniquestudio" />
      { isPC && <SVGList
        className="list"
        onClick={handleClick}
      />}
    </div>
  );
};

export default TopBar;
