import { FC } from 'react';
import styles from './index.module.scss';

import { ReactComponent as SVGHackday } from "@assets/svg/Mobile/hackday.svg";
import { ReactComponent as SVGYear } from "@assets/svg/Mobile/2023.svg";
import { ReactComponent as SVGUniqueStudio } from "@assets/svg/Mobile/UniqueStudio.svg";

import { 
  IntroductionArray, 
  timeLineArray,
  awardsMobile,
  sponsorArray,
} from '@consts/index';

const MainMobile: FC = () => {
  return (
    <div className={styles["mobile-main-container"]}>
      <div className={styles["fake-topbar"]}></div>
      <div className={styles["main-home"]}>
        <div className={styles["home-first-line"]}>
          <div className={styles["first-line-left"]}></div>
        </div>
        <div className={styles["home-second-line"]}>
          <div className={styles["second-line-left"]}>
            <SVGUniqueStudio className={styles["home-svg"]}/>
          </div>
        </div>
        <div className={styles["home-third-line"]}>
          <div className={styles["third-line-left"]}>
            <SVGHackday className={styles["home-svg"]}/>
          </div>
        </div>
        <div className={styles["home-fourth-line"]}>
          <div className={styles["fourth-line-left"]}>
            <SVGYear className={styles["home-svg"]}/>
          </div>
        </div>
        <div className={styles["home-bottom"]}>
          <a href="https://console.hack.hustunique.com" target="_blank">
            <div className={styles["home-bottom-button"]}>
              <div className={styles["bottom-button-text"]}>立即报名</div>
            </div>
          </a>
          <div className={styles["bottom-first-line"]}></div>
          <div className={styles["bottom-second-line"]}></div>
        </div>
      </div>
      <div className={styles["main-introduction"]}>
        <div className={styles["top-right-div"]}></div>
        <div className={styles["main-introduction-content"]}>
          <div className={styles["introduction-title"]}>比赛介绍</div>
          <div className={styles["introduction-hackday"]}>HACKDAY</div>
          <div className={styles["introduction-text"]}>
            UNIQUE HACKDAY 由联创团队发起，邀请来⾃全国各⼤⾼校的“极客”们⻬聚⼀堂，在⽐赛中切磋交流，在团队中碰撞思想，在天⻢⾏空的想象中创造改变世界的作品，⽤不受拘束的创意诠释年轻的科技势⼒。
          </div>
          <div className={styles["cover-box"]}></div>
        </div>
        <img
          src="/image/introduction-picture.png"
          className={styles["introduction-picture"]}
        />
      </div>
      {
        IntroductionArray.map((item, index) => {
          return (
            <div className={styles["main-arrange"]} key={index}>
              <div className={styles["main-arrange-item"]}>
                <span className={styles["main-arrange-title"]}>{Object.keys(item)[0]}</span>
                <span className={styles["main-arrange-content"]}>{Object.values(item)[0]}</span>
              </div>
            </div>)
        })
      }
      <div className={styles["main-rules"]}>
        <div className={[styles["mobile-main-title"], styles["main-rules-title"]].join(' ')}>参赛规则</div>
        <div className={styles["main-rules-signup"]}>
          <div className={styles["rules-signup-content"]}>
            <div className={styles["signup-content-bigtitle"]}>报名</div>
            <div className={styles["signup-content-smalltitle"]}>报名时间</div>
            <div className={styles["mobile-main-text"]}>即⽇起⾄ 2023-6-29 23:59</div>
            <div className={styles["signup-content-smalltitle"]}>报名方法</div>
            <div className={styles["mobile-main-text"]}>选⼿提交简历，完成报名流程 </div>
            <div className={styles["mobile-main-text"]}>选⼿⾃⾏组队或加⼊官⽅群⾃由组队(5⼈及以下) </div>
            <div className={styles["mobile-main-text"]}>⽐赛开始前公布参赛队伍名单</div>
          </div>
          <div className={styles["rules-signup-aside"]}></div>
        </div>
        <div className={styles["main-rules-rule"]}>
          <div className={styles["rules-signup-aside"]}></div>
          <div className={styles["rules-signup-content"]}>
            <div className={styles["signup-content-bigtitle"]}>
              <span>参赛规则</span>
              <span className={styles["online-game-title"]}>线上比赛</span>
            </div>
            <div className={styles["signup-content-smalltitle"]}>时间</div>
            <div className={styles["mobile-main-text"]}>2023-7-1 18:00 ⾄ 2023-7-5 18:00</div>
            <div className={styles["signup-content-smalltitle"]}>要求</div>
            <div className={styles["mobile-main-text"]}>各团队完成产品开发⽅案，并在截⽌时间前提交作品。</div>
            <div className={styles["mobile-main-text"]}>主办⽅对作品进⾏审核，于7-5 23:59前确定答辩⼈选。</div>
          </div>
        </div>
        <div className={styles["main-offline-game-container"]}>
          <div className={[styles["signup-content-bigtitle"], styles["offline-game-title"]].join(' ')}>
            <span>线下比赛</span>
            <span className={styles["online-game-title"]}>2023-7-8</span>
          </div>
          {timeLineArray.map((item) => {
            return (
              <div className={styles["online-game-item"]}>
                <span> {Object.keys(item)[0]}</span>
                <span> {Object.values(item)[0]}</span>
              </div>
            )
          })}
        </div>
        <div className={styles["main-game-standard"]}>
          <div className={styles["signup-content-bigtitle"]}>
            <span>考核标准</span>
          </div>
          <div className={styles["game-standard-content"]}>完成度，创意，技术⼒，美术，答辩表现</div>
          <div className={styles["image-container"]}>
            <div className={styles["image-item"]}>
              <img
                src="/mobile/1.png"
                className={styles["image-item-picture"]}
              />
              <img
                src="/mobile/2.png"
                className={styles["image-item-picture"]}
              />
            </div>
            <div className={styles["image-item"]}>
              <img
                src="/mobile/3.png"
                className={styles["image-item-picture"]}
              />
              <img
                src="/mobile/4.png"
                className={styles["image-item-picture"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["main-awards-container"]}>
          <div className={styles["main-awards-title"]}>奖项设置</div>
          {
            awardsMobile.map((item) => {
              return (
                <div className={styles["main-awards-item"]}>
                  <span className={styles["awards-item-title"]}> {Object.keys(item)[0]}</span>
                  <span className={styles["awards-item-content"]}> {Object.values(item)[0]}</span>
                </div>
                )
            })
          }
        </div>
        <div className={styles["main-contact-container"]}>
          <div className={styles["main-contact-title"]}>联系我们</div>
          <div className={styles["contact-item"]}>
            <div className={styles["contact-item-title"]}>地址：</div>
            <div className={styles["contact-item-content"]}>湖北省 武汉市 洪⼭区 珞喻路1037号</div>
            <div className={styles["contact-item-content"]}>华中科技⼤学 启明学院</div>
          </div>
          <div className={styles["contact-item"]}>
            <div className={styles["contact-item-title"]}>联系方式：</div>
            <div className={styles["contact-item-content"]}>
              <a href="mailto:contact@hustunique.com" className={styles["mail-text"]}>
                contact@hustunique.com
              </a>
            </div>
            <div className={styles["contact-item-content"]}>官⽅FAQ QQ群组：832899431</div>
            <div className={styles["right-top-box"]}></div>
          </div>
        </div>
        <div className={styles["main-sponsor-container"]}>
          <div className={styles["main-sponsor-title"]}>主办方和赞助商</div>
          <div className={styles["main-charge-item"]}>
            <div className={styles["charge-item-title"]}>主办方</div>
            <div className={styles["charge-item-content"]}>
              <div className={styles["charge-item-object"]}>华中科技大学联创团队</div>
              <div className={styles["charge-item-object"]}>华中科技大学启明学院</div>
            </div>
          </div>
          <div className={styles["main-sponsor-item"]}>
            <div className={styles["charge-item-title"]}>赞助商</div>
            <div className={styles["sponsor-item-content"]}>
              {
                sponsorArray.map((item,index)=>{
                  return (
                    <div className={styles["sponsor-item"]} key={index}>
                      <img
                        src={`/mobile/sponsor${index+1}.png`}
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
};

export default MainMobile;