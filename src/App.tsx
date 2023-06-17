import { 
  FC, 
  lazy,
  Suspense,
  useState, 
  useRef, 
  useCallback, 
  useEffect 
} from 'react';
import "./index.scss";

import TopBar from '@components/TopBar';
import Home from "@pages/Home";
import Menu from "@pages/Menu";
const Introduction =  lazy(()=>import("@pages/Introduction"));
const Rules = lazy(()=>import('@pages/Rules'));
const Awards = lazy(()=>import('@pages/Awards'));
const Access = lazy(()=>import('@pages/Access'));
const Sponsor = lazy(()=>import('@pages/Sponsor'));

const MainMobile = lazy(()=>import('@mobile/Main'));

const PageMax: number = 6;

const enum Direction {
  Prev,
  Next,
}


const App: FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isPC, setIsPC] = useState<boolean>(true);

  const LayoutRef = useRef<HTMLDivElement | null>(null);
  // 六个page
  const HomeRef = useRef<HTMLDivElement | null>(null);
  const IntroductionRef = useRef<HTMLDivElement | null>(null);
  const RulesRef = useRef<HTMLDivElement | null>(null);
  const AwardsRef = useRef<HTMLDivElement | null>(null);
  const AccessRef = useRef<HTMLDivElement | null>(null);
  const SponsorRef = useRef<HTMLDivElement | null>(null);
  // canvas
  // const CanvasRef = useRef<HTMLCanvasElement | null>(null);
  // mouse
  // const MouseRef = useRef({x:0,y:0});

  const switchPage = useCallback((pageIndex: number) => {
    if (
      HomeRef.current &&
      IntroductionRef.current &&
      RulesRef.current &&
      AwardsRef.current &&
      AccessRef.current &&
      SponsorRef.current
    ) {
      switch (pageIndex) {
        case 0:
          return HomeRef.current.scrollIntoView({ behavior: "smooth" });
        case 1:
          return IntroductionRef.current.scrollIntoView({ behavior: "smooth" });
        case 2:
          return RulesRef.current.scrollIntoView({ behavior: "smooth" });
        case 3:
          return AwardsRef.current.scrollIntoView({ behavior: "smooth" });
        case 4:
          return AccessRef.current.scrollIntoView({ behavior: "smooth" });
        case 5:
          return SponsorRef.current.scrollIntoView({ behavior: "smooth" });
        default:
          break;
      }
    }
  }, []);

  const handleScroll = useCallback(
    (direction: Direction) => {
      setPageIndex((index) => {
        let ret: number = index;
        switch (direction) {
          case Direction.Next: {
            ret = index === PageMax - 1 ? index : index + 1;
            break;
          }
          case Direction.Prev: {
            ret = index === 0 ? index : index - 1;
            break;
          }
          default:
            break;
        }
        switchPage(ret);
        return ret;
      });
    },
    [setPageIndex]
  );

  // 控制鼠标滚动事件为翻页
  useEffect(() => {
    // 节流
    // setTimeout返回一个数字类型的标识符，表示一个定时器的唯一标识符。
    let throttle: ReturnType<typeof setTimeout> | null = null;
    const handler = (event: WheelEvent) => {
      event.preventDefault();
      if (throttle) return;
      if (event.deltaY > 0) {
        handleScroll(Direction.Next);
      } else {
        handleScroll(Direction.Prev);
      }
      throttle = setTimeout(() => {
        throttle = null;
      }, 1300);
    };
    if (LayoutRef.current) {
      LayoutRef.current.addEventListener("wheel", handler);
      return () => {
        if (LayoutRef.current) {
          LayoutRef.current.removeEventListener("wheel", handler);
          throttle && clearTimeout(throttle);
        }
      };
    }
  }, [handleScroll]);

  // 禁止键盘“上”和“下”事件
  useEffect(() => {
    switchPage(pageIndex);

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        // 阻止默认的滚动行为
        event.preventDefault();
      }
    })
  }, [pageIndex]);

  // 判断是PC端还是移动端
  useEffect(() => {
    const checkIsPC = () => {
      if (window.innerWidth / window.innerHeight < 0.8) {
        setIsPC(false);
      } else {
        setIsPC(true);
      }
    }
    checkIsPC();
    window.addEventListener('resize',checkIsPC);
  }, [isPC])

  return (
    <div className='h-container' ref={LayoutRef}>
      <TopBar isPC={isPC} setIsMenu={setIsMenu} />
      {
        isPC &&
        <div>
          <Home ref={HomeRef} />
          <Suspense>
            <Introduction ref={IntroductionRef} />
            <Rules ref={RulesRef} />
            <Awards ref={AwardsRef} />
            <Access ref={AccessRef} />
            <Sponsor ref={SponsorRef} />
          </Suspense>
        </div>
      }
      {
        isMenu && isPC &&
        <Menu
          isMenu={isMenu}
          setIsMenu={setIsMenu}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      }
      {
        !isPC && 
        <Suspense>
          <MainMobile />
        </Suspense>
        
      }
      {/* <canvas 
        className='mouse-track'
        ref={CanvasRef}
      /> */}
    </div>
  )
}

export default App;
