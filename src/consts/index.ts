import {
  awardsType,
  awardsTypeCN,
  IntroductionType,
  timeLineType,
  awardsMobileType,
} from '@myTypes/index';

export const awardsArray: awardsType[] = [
  {
    'Champion': '15,000 RMB',
  },
  {
    'Silver': '8,000 RMB',
  },
  {
    'Bronze': '5,000 RMB',
  },
  {
    'Best of Category': '2,500 RMB',
  },
  {
    'Corporate': 'TBD',
  },
];
export const awardsArrayCN: awardsTypeCN = [
  '冠军', 
  '亚军', 
  '季军', 
  '分类最佳奖', 
  '企业特色奖',
];
export const itemArray:string[] = [
  '首页 / Top',
  '比赛介绍 / Introduction',
  '参赛规则 / Rules',
  '奖项设置 / Awards',
  '联系我们 / Access',
  '赞助商 / Sponsor',
];
export const IntroductionArray:IntroductionType[] = [
  {'时间':'2023.7.1-2023.7.8'},
  {'形式':'线上参赛，线下答辩'},
  {'参赛对象':'通过简历筛选，来⾃全国各⼤⾼校的学⽣团队'},
];
export const timeLineArray:timeLineType[] = [
  {'08:00-09:00':'签到⼊场'},
  {'09:00-11:45':'Hackday 开幕'},
  {'11:45-14:00':'午餐休息'},
  {'14:00-16:30':'产品路演'},
  {'16:30-17:00':'茶歇休息 & 奖项评选'},
  {'17:00-17:30':'奖项颁布 & 总结发⾔'},
  {'17:30-18:00':'⾃由交流 & 合影留念'},
];
export const awardsMobile:awardsMobileType[] = [
  {
    '冠军': '15,000 RMB',
  },
  {
    '亚军': '8,000 RMB',
  },
  {
    '季军': '5,000 RMB',
  },
  {
    '分类最佳奖': '2,500 RMB',
  },
  {
    '企业特色奖': 'TBD',
  },
]