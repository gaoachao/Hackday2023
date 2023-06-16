import { FC,useCallback} from "react";
import styles from "./index.module.scss";
import { ReactComponent as SVGClose } from "@assets/svg/Menu/close.svg";
import { ReactComponent as SVGMenu } from "@assets/svg/Menu/menu.svg";
import {itemArray} from "@consts/index";

interface MenuProps {
  isMenu:boolean,
  pageIndex:number,
  setIsMenu:(state:boolean)=>void,
  setPageIndex:(pageIndex:number)=>void;
}

const Menu: FC<MenuProps> = (props:MenuProps) => {
  const {isMenu,pageIndex,setIsMenu,setPageIndex} = props;
  const handleClick = useCallback(()=>{
    setIsMenu(false);
  },[isMenu]);
  const handleSetPage = useCallback((page:number)=>{
    setPageIndex(page);
    setIsMenu(false);
  },[pageIndex])
  
  return (
    <div className={styles["menu-container"]}>
      <div className={styles["menu-items-container"]}>
        <div className={styles["menu-title"]}>
          <SVGMenu className={styles["svg-menu"]} />
        </div>
        {itemArray.map((item,index)=>{
          return (
            <div className={styles["menu-item"]} key={index}>
              <div className={styles["menu-item-content"]}>
                <span className={styles["menu-item-number"]}>{'0'+`${index+1}`}</span>
                <span 
                  className={styles["menu-item-text"]}
                  onClick={() => handleSetPage(index)}
                >{item}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles["menu-aside"]}>
        <div className={styles["svg-close-container"]}>
          <SVGClose 
            className={styles["svg-close"]}
            onClick={handleClick}
          />
        </div>
        <div className={styles["menu-aside-icon"]}>
          <img
            src="/image/icon.png"
            className={styles["menu-aside-picture"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
