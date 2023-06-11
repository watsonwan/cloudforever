export default {
  index: {
    imgs: {
      title: "http://8.134.165.47:8089/title/1683103853386.png",
      scene:
        "http://8.134.165.47:8089/bg/1683103523257.jpg",
      Amiya:
        "http://8.134.165.47:8089/cursor/1683106836169.png",
      tip: "http://8.134.165.47:8089/cursor/1683106987309.png",
      QRCode:
        "http://8.134.165.47:8089/QR/1683104938724.png",
      points: {
        image1:
          "http://8.134.165.47:8089/cursor/1683105242077.png",
        image2:
          "http://8.134.165.47:8089/cursor/1683107084040.png",
        image3:
          "http://8.134.165.47:8089/cursor/1683107145519.png",
      },
    },
    videos: [
      {
        id: 1,
        infoTitle: "THE PRELUDE",
        infoBgm: "BGM - MONSTER - STARSET",
        video: "",
      },
      {
        id: 2,
        infoTitle: "THE OVERTURE",
        infoBgm: "BGM - UNBECOMING - STARSET",
        video: "",
      },
      {
        id: 3,
        infoTitle: "THE ECHO",
        infoBgm: "BGM - INFECTED - STARSET",
        video: "",
      },
    ],
    playSvg: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="-50 -50 100 100"
  >
    <use
      xlink:href="#play-btn-outline"
      fill="none"
      stroke="#fff"
      transform="translate(-50 -50)"
    ></use>
    <use
      xlink:href="#play-btn-triangle"
      fill="none"
      stroke="#fff"
      transform="translate(-50 -50)"
    ></use>
  </svg>`,
    downloadSvgsTemplate: `<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 152 44"
>
  <g transform="translate(15, 8)">
    <use
      transform="scale(0.032734375, 0.032734375)"
      xlink:href="#download-ios"
      fill="#fff"
      id="downloadIcon"
    ></use>
  </g>
</svg>`,
    downloadHerf: ["#download-ios", "#download-android", "#taptap-icon"],
    showBtnSvg: `<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 300 300"
    style="fill:#B4B9C2;width:2vw;"
  >
    <circle cx="242" cy="49" r="35"></circle>
    <circle cx="242" cy="251" r="35"></circle>
    <circle cx="58" cy="150" r="35"></circle>
    <line
      x1="242"
      y1="49"
      x2="59"
      y2="150"
      stroke-width="20"
      style="stroke: #b4b9c2;transition: stroke 0.3s;"
    ></line>
    <line
      x1="242"
      y1="251"
      x2="59"
      y2="150"
      stroke-width="20"
      style="stroke: #b4b9c2;transition: stroke 0.3s;"
    ></line>
  </svg>`,
    showSvgTemplate: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2186.86 999.65"
    style="fill:#9B9A9C;width:3.5vw;"
  >
    <use
      xlink:href="#bilibili-text" 
      transform="translate(0, 60)"
    ></use></svg>`,
    showSvgTemplate2: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="-50 -75 612 612"
    style="fill:#9B9A9C;width: 2vw;"
  >
    <use
      xlink:href="#wechat-icon" 
      transform="translate(0, 60)"
    ></use></svg>`,
    showSvgTemplate3: `
    <svg xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    viewBox="-2 -2 28 28"
    style="fill:#9B9A9C;width: 2vw;"
    >
    <use xlink:href="#weibo-icon" >
    </use>
    </svg>`,
    showSvgTemplate4: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 220 220"
    style="fill:#9B9A9C;width: 2vw;"
  >
    <use
      xlink:href="#taptap-icon" 
      transform="translate(0, 60)"
    ></use></svg>`,
    showSvgTemplate5: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="-50 -50 400 398"
    style="fill:#9B9A9C;width: 2vw;"
  >
    <use
      xlink:href="#cs-icon" 
      transform="translate(0, 60)"
    ></use></svg>`,
    opacityWords:
      "realism is that you will probably never receive something back, but nonetheless still decide to give",
  },
  news: {
    imgs: [
      "https://web.hycdn.cn/arknights/official/pic/20230316/d2b26537368dc63fdda1f62d265c0f7a.jpg",
      "https://web.hycdn.cn/arknights/official/pic/20230306/930c709226d0bba9a8b6d271550a1039.jpg",
      "https://web.hycdn.cn/arknights/official/pic/20220926/2df918bb1e01c4f4eee1592a1fb9eadd.jpg",
    ],
    item: [
      {
        emix: "最新",
        title: "最新",
      },
      {
        emix: "広告",
        title: "公告",
        items: [
          {
            date: "2023-03-23",
            word: "[明日方舟]部分寻访规则调整说明",
            isTop: "1",
          },
          {
            date: "2023-03-22",
            word: "[明日方舟]03月22日封禁处理公示",
            isTop: "0",
          },
          {
            date: "2023-03-21",
            word: "[明日方舟]03月21日16:00闪断更新公告",
            isTop: "0",
          },
          {
            date: "2023-03-15",
            word: "[明日方舟]03月15日封禁处理公示",
            isTop: "0",
          },
          {
            date: "2023-03-14",
            word: "[明日方舟]03月14日16:00闪断更新公告",
            isTop: "0",
          },
          {
            date: "2023-03-08",
            word: "[明日方舟]03月08日封禁处理公示",
            isTop: "0",
          },
        ],
      },
      {
        emix: "活動",
        title: "活动",
        items: [
          {
            date: "2023-03-17",
            word: "[活动预告]主题曲第十二章预热限时活动即将开启",
            isTop: "1",
          },
          {
            date: "2023-03-16",
            word: "[活动预告] 危机合约#12赛季「起源行动」即将开启",
            isTop: "1",
          },
          {
            date: "2023-03-03",
            word: "[活动预告]【明日方舟×怪物猎人】SideStory「落叶逐火」限时活动即将开启",
            isTop: "0",
          },
          {
            date: "2023-03-03",
            word: "[狩猎凯旋干员寻访]【砺火成锋】限时寻访即将开启",
            isTop: "0",
          },
          {
            date: "2023-02-16",
            word: "[活动预告]SideStory「吾导先路」复刻即将开启",
            isTop: "0",
          },
          {
            date: "2023-02-07",
            word: "[活动预告]故事集「春分」即将开启",
            isTop: "0",
          },
        ],
      },
      {
        emix: "新聞",
        title: "新闻",
        items: [
          {
            date: "2023-03-23",
            word: "《明日方舟》制作组通讯#28期",
            isTop: "1",
          },
          {
            date: "2023-02-22",
            word: "《明日方舟》制作组通讯#27期",
            isTop: "1",
          },
          {
            date: "2023-01-01",
            word: "《明日方舟》制作组通讯#26期",
            isTop: "0",
          },
          {
            date: "2022-12-01",
            word: "《明日方舟》制作组通讯#25期",
            isTop: "0",
          },
          {
            date: "2022-10-16",
            word: "明日方舟》制作组通讯#24期",
            isTop: "0",
          },
          {
            date: "2022-09-13",
            word: "《明日方舟》制作组通讯#23期",
            isTop: "0",
          },
        ],
      },
    ],
  },
  roles: {
    staffSvgsTemplate: `<span class="staffItemCareer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 30 30" style="fill:#D5D6D9;width:2.5vw">
      <use xlink:href="" ref="staffIcon">
    </use>
    </svg>
    </span>`,
    audioSvg: `<svg style="width: 3vw;" class="staffDetailInfoCvButtonIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 20"><rect x="27" y="8 " width="2" height="4 " rx="1" ry="1" fill="#ffffff"></rect><rect x="23.5" y="6 " width="2" height="8 " rx="1" ry="1" fill="#ffffff"></rect><rect x="20" y="7 " width="2" height="6 " rx="1" ry="1" fill="#ffffff"></rect><rect x="16.5" y="5 " width="2" height="10 " rx="1" ry="1" fill="#ffffff"></rect><rect x="13" y="2 " width="2" height="16 " rx="1" ry="1" fill="#ffffff"></rect><rect x="9.5" y="5 " width="2" height="10 " rx="1" ry="1" fill="#ffffff"></rect><rect x="6" y="7 " width="2" height="6 " rx="1" ry="1" fill="#ffffff"></rect></svg>`,
    roleinfo: [
      {
        id: "01",
        name: "阿米娅",
        englishName: "Amiya",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/f40da70e0e3d2c89a89aa97c44b6498c.png",
        staff: "术师",
        staffHerf: "#staff-career-icon-caster",
        CV: "黑泽朋世",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/1bc6d074f0ad5b1d83a04c111a66c121.mp3",
        info: "罗德岛的公开领袖，在内部拥有最高执行权。虽然,从外表上看起来仅仅是个不成熟的少女，实际上,她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来,为了让这片大地挣脱矿石病的阴霾而不懈努力。",
      },
      {
        id: "02",
        name: "凯尔希",
        englishName: "KAL'TSIT",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/f5d1be51761704001cc9e7bd7529c849.png",
        staff: "医疗",
        staffHerf: "#staff-career-icon-medic",
        CV: "日笠阳子",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/7cdb76deae9d9836875c13d2f47390ab.mp3",
        info: "罗德岛最高管理者之一，阿米娅的直接辅导者。罗德岛医疗部门的总负责人。作为罗德岛的老成员,凯尔希医生是在阿米娅背后最稳固的援护者。",
      },
      {
        id: "03",
        name: "红",
        englishName: "PROJEKT RED",
        roleImage:
          "http://8.134.165.47:8089/roles/1683045095103.png",
        staff: "特种",
        staffHerf: "#staff-career-icon-special",
        CV: "小清水亚美",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/263326a42e7aa4687ec27ff84593e0e4.mp3",
        info: "红，身份不明，履历缺失，由凯尔希医生接收、监护并担保。于机动作战，特种作战与隐秘作战中表现出极高天赋，成绩斐然。现于凯尔希医生的指导下，作为特种干员为罗德岛提供服务。",
      },
      {
        id: "04",
        name: "杜宾",
        englishName: "DOBERMANN",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/774aa017f2a8a5654d661cda1051beea.png",
        staff: "近卫",
        staffHerf: "#staff-career-icon-warrior",
        CV: "种崎敦美",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/3087d0545a33a2dd990a6d71eaf39aab.mp3",
        info: "前玻利瓦尔军人，加入罗德岛后担任教官，主要负责基层和新晋干员培训，必要时刻，也会负责对俘虏的审讯。熟悉各种规模的军事行动，自身作为士兵的素养也极高，作为近卫干员，在第一线带领队伍冲锋陷阵。",
      },
      {
        id: "05",
        name: "临光",
        englishName: "NEARL",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/18469152aa1d779c037a259c61e60671.png",
        staff: "重装",
        staffHerf: "#staff-career-icon-tank",
        CV: "佐仓绫音",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/53b4f90429c3634b62b71e9c0d840b55.mp3",
        info: "临光，前卡西米尔耀骑士，感染者援助团体“使徒”的一员。在掩护己方队员、机动作战、歼灭战与开阔地带作战中体现出极高的战斗技巧和个人军事素养。现于罗德岛作为重装干员行动，并于现场提供战术指挥支援。",
      },
      {
        id: "06",
        name: "赫默",
        englishName: "SILENCE",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/21c96f723a4638c0103798c65b4f5195.png",
        staff: "医疗",
        staffHerf: "#staff-career-icon-medic",
        CV: "鬼头明里",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/57409d9624e2170525e9d3e98f67914a.mp3",
        info: "赫默，莱茵生命有限公司源石有关项目研究员，曾主管数项未知应用研究，同期亦主持数个矿石病临床试验项目。现于罗德岛为多项行动提供战场医疗救护服务。",
      },
      {
        id: "07",
        name: "伊芙利特",
        englishName: "Ifrit",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/5f84a8f3c8deded1bf8dfc28b2bd7146.png",
        staff: "术师",
        staffHerf: "#staff-career-icon-caster",
        CV: "花守由美里",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/a6ff165ff6702108fda9702219444b2f.mp3",
        info: "伊芙利特,前莱茵生命医疗对象,重度感染者。拥有极高的源石适应性，伴随有多发性点火现象。进入莱茵生命前的履历缺失。现于罗德岛接受治疗，由医疗干员赫默担任监护与担保人。",
      },
      {
        id: "08",
        name: "白面鸮",
        englishName: "Ptilopsis",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/aad79b4cc62d3d7adc2948a0990ebca1.png",
        staff: "医疗",
        staffHerf: "#staff-career-icon-medic",
        CV: "金元寿子",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/be5476104b851da963a28d51d99f6078.mp3",
        info: "白面鸮，前莱茵生命公司，数据维护专员。在医疗类源石技艺领域取得不菲成就，于医疗数据维护，常规医疗方案应用，多项目医疗行为等相关领域，拥有丰富经验。 现于罗德岛担任医疗干员，亦就职于医疗部门，某临床实验小组。同时，为罗德岛提供若干项医疗项目的相关辅助工作。",
      },
      {
        id: "09",
        name: "德克萨斯",
        englishName: "TEXAS",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/416445fede74d8d23c6d5f2476d827b2.png",
        staff: "先锋",
        staffHerf: "#staff-career-icon-pioneer",
        CV: "田所梓",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/a4356849af1a902fb53a885817fdd52b.mp3",
        info: "企鹅物流员工，单兵作战能力出类拔萃。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。",
      },
      {
        id: "10",
        name: "能天使",
        englishName: "EXUSIAI",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/ab532ac6f4df46164f9b097f2f6b677d.png",
        staff: "狙击",
        staffHerf: "#staff-career-icon-sniper",
        CV: "石见舞菜香",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/69483599a90b1194e2b917519dd08ead.mp3",
        info: "能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。",
      },
      {
        id: "11",
        name: "可颂",
        englishName: "CROISSANT",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/8752c3a0e09ab67178acebe117d536c1.png",
        staff: "重装",
        staffHerf: "#staff-career-icon-tank",
        CV: "久保百合花",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/4f53d9ae01495e89998f93579b5df823.mp3",
        info: "企鹅物流员工，于合约期内任企鹅物流驻罗德岛外派干员。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。",
      },
      {
        id: "12",
        name: "陈",
        englishName: "CHEN",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/87f341583ec61b4ce4f5b765464fe89d.png",
        staff: "近卫",
        staffHerf: "#staff-career-icon-warrior",
        CV: "石上静香",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/dda40ccf5efe095e3d1041c413a43710.mp3",
        info: "陈，龙门高级警司，龙门近卫局特别督查组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。",
      },
      {
        id: "13",
        name: "星熊",
        englishName: "HOSHIGUMA",
        roleImage:
          "https://web.hycdn.cn/arknights/official/pic/20210112/22ab7b3789969d9c381b82d0f24c3c83.png",
        staff: "重装",
        staffHerf: "#staff-career-icon-tank",
        CV: "安野希世乃",
        audio:
          "https://web.hycdn.cn/arknights/official/audio/20210202/4368b4f9fa1901f05d877c203c586c01.mp3",
        info: "星熊，龙门近卫局特别任务组精英干员。存在数项指控记录。经龙门总督魏彦吾交涉，龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督察组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。现作为重装干员协助罗德岛行动，并为现场提供战术执行与指挥支援。",
      },
    ],
  },
  design: {
    Originiums:
      "https://web.hycdn.cn/arknights/official/pic/20210401/708afda28edfb0c2a3b78745d58d1394.png",
    OriginiumsArts:
      "https://web.hycdn.cn/arknights/official/static/originium_arts.13526240f1a6ebaddd0b.png",
    Reunion:
      "https://web.hycdn.cn/arknights/official/static/reunion.bc6f43d5a485bd1c161f.png",
    Infected:
      "https://web.hycdn.cn/arknights/official/static/infected.fe3e5622b0381b933397.png",
    NomadicCity:
      "https://web.hycdn.cn/arknights/official/static/nomadic_city.0856ca1fc4da54177a9a.png",
    RodesIsland:
      "https://web.hycdn.cn/arknights/official/static/rhodes_island.a8b9f712d951012ec40a.png",
  },
  documents: {
    CelebrationReview:
      "https://web.hycdn.cn/arknights/official/static/celebReview.0ae9f4ea5533ea5fb304.png",
    OperatorDynamicCompie:
      "https://web.hycdn.cn/arknights/official/static/dynCompile.ac71803ad4fbdef368d5.png",
  },
  personlCenter: {
  login:{
    titleImg:"http://8.134.165.47:8089/personalCenter/1683176865517.png",
    toCustomImg:"http://8.134.165.47:8089/personalCenter/1683176906189.png",
    bgImg:
      "http://8.134.165.47:8089/personalCenter/1683176696108.png",
    bottom: [
      {
        img: "http://8.134.165.47:8089/personalCenter/1683176940954.png",
        words:
          " 沪公网安备 31010402005145号 沪ICP备17022476号-1 沪网文〔2018〕0803-067号",
      },
      {
        img: "http://8.134.165.47:8089/personalCenter/1683176982189.jpg",
        words:
          "亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。",
      },
      {
        img: "",
        words:
          "Copyright ©2017 上海鹰角网络科技有限公司 上海市嘉定区南翔镇银翔路799号昌辉大厦504-1室 电话： 021-64399377",
      },
    ],
    },
        home: {
        status:"0",
        datas:{
      navSvg: `<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="10,22 50,22 90,22 90,30 50,30 10,30" fill="#000"></polygon><polygon points="10,46 50,46 90,46 90,54 50,54 10,54" fill="#000"></polygon><polygon points="10,70 50,70 90,70 90,78 50,78 10,78" fill="#000"></polygon></svg>`,
      nav: [
        {
          name: "个人信息",
          icon: "http://8.134.165.47:8089/personalCenter/1684403171066.png",
          route: {
            path: "baseMsg/:userId",
            name: "BaseMessage",
            component: "center/basemsg/BaseMessage.vue",
            meta: {
              height:"125vh",
              gridTemplateRows:"1fr 12fr 1fr",
              isContain:false
            },
            beforeEnter: (to, from) => {
              to.meta.showFooter = true;
              from.meta.showFooter = false;
            },
          },
        },
        {
          name: "重置密码",
          icon: "http://8.134.165.47:8089/personalCenter/1684403711001.png",
          route: {
            path: "resetPsw/:userId",
            name: "ResetPassword",
            component: "center/resetpsw/ResetPassword.vue",
            meta: {
              height:"100vh",
              gridTemplateRows:"1fr 8.5fr 1fr",
              isContain:false
            },
            beforeEnter: (to, from) => {
              to.meta.showFooter = true;
              from.meta.showFooter = false;
            },
          },
        },
        {
          name: "礼包兑换",
          icon: "http://8.134.165.47:8089/personalCenter/1684403813144.png",
          route: {
            path: "exchange/:userId",
            name: "ExchangeGift",
            component: "center/exchange/ExchangeGift.vue",
            meta: {
              height:"100vh",
              gridTemplateRows:"1fr 8.5fr 1fr",
              isContain:false
            },
            beforeEnter: (to, from) => {
              to.meta.showFooter = true;
              from.meta.showFooter = false;
            },
          },
        },
        {
          name: "自助查询",
          icon: "http://8.134.165.47:8089/personalCenter/1684403856893.png",
          route: {
            path: "query/:userId",
            name: "SelfQuery",
            component: "center/query/SelfQuery.vue",
            meta: {
              height:"100vh",
              gridTemplateRows:"1fr 8.5fr 1fr",
              isContain:false
            },
            beforeEnter: (to, from) => {
              to.meta.showFooter = true;
              from.meta.showFooter = false;
            },
          },
        },
        {
          name: "个人信息清单",
          icon: "http://8.134.165.47:8089/personalCenter/1684403914710.png",
          route: {
            path: "list/:userId",
            name: "PersonalList",
            component: "center/list/PersonalList.vue",
            meta: {
              height:"100vh",
              gridTemplateRows:"1fr 8.5fr 1fr",
              isContain:false
            },
            beforeEnter: (to, from) => {
              to.meta.showFooter = true;
              from.meta.showFooter = false;
            },
          },
        },
        {
          name: "第三方共享个人信息清单",
          icon: "http://8.134.165.47:8089/personalCenter/1684403959126.png",
          route: {
            path: "share/:userId",
            name: "ThirdShare",
            component: "center/share/ThirdShare.vue",
            meta: {
              height:"375vh",
              gridTemplateRows:"1fr 36fr 1fr",
              isContain:true
            },
            beforeEnter: (to, from) => {
              to.meta.showFooter = true;
              from.meta.showFooter = false;
            },
          },
        },
        {
          name: "前往第三方数据库",
          icon: "http://8.134.165.47:8089/personalCenter/1684404036003.jpg",
          route: {
            path: "to/:userId",
            name: "ToDatabase",
            component: "center/to/ToDatabase.vue",
            meta: {
              height:"100vh",
              gridTemplateRows:"1fr 8.5fr 1fr",
              isContain:false
            },
            beforeEnter: (to, from) => {
              to.meta.showFooter = true;
              from.meta.showFooter = false;
            },
          },
        },
      ],
      loginOut: "http://8.134.165.47:8089/personalCenter/1684404981701.png",
      }
    },
    resetPsw:{
        img:"http://8.134.165.47:8089/personalCenter/1685341272523.png"
    },
    exchangeGift:{
        items:[
          {
            titleImg:"http://8.134.165.47:8089/personalCenter/1685341404743.png",
            title:"礼包兑换",
          },
          {
            titleImg:"http://8.134.165.47:8089/personalCenter/1685341493441.png",
            title:"历史兑换记录",
          }
        ],
    },
    selfInquiries:{
        titleImg:"http://8.134.165.47:8089/personalCenter/1685341404743.png",
        title:"自助查询",
        items:[
            {
                titleImg:"http://8.134.165.47:8089/personalCenter/1685341752011.png",
                title:"充值记录",
                children:[
                    {
                        Inumber:"130202304270519080025",
                        place:"BILIBILI",
                        amount:"648",
                        shopping:"源石礼包",
                        time:"2023-04-27 05:19"
                    },
                    {
                        Inumber:"130202304201721180025",
                        place:"BILIBILI",
                        amount:"648",
                        shopping:"源石礼包",
                        time:"2023-04-20 17:21"
                    },
                    {
                        Inumber:"1302023021911391240025",
                        place:"BILIBILI",
                        amount:"648",
                        shopping:"源石礼包",
                        time:"2023-02-19 11:39"
                    }
                ]
            },
             {
                titleImg:"http://8.134.165.47:8089/personalCenter/1685341796953.png",
                title:"专访记录",
                children:[
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"豆苗"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"讯使"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"芬"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"苇草"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"香草"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"夜半"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"斯卡蒂(近卫)"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"香草"
                    },
                    {
                        time:"2023-04-27 05:20",
                        cardPool:"斯卡蒂",
                        staff:"芬"
                    },
                ]
            },
             {
                titleImg:"http://8.134.165.47:8089/personalCenter/1685341822698.png",
                title:"源石记录",
                children:[
                    {
                        place:"BILIBILI",
                        change:"648",
                        store:"648",
                        time:"2023-04-27 05:19"
                    },
                    {
                        place:"BILIBILI",
                        change:"648",
                        store:"648",
                        time:"2023-04-20 17:21"
                    },
                    {
                        place:"BILIBILI",
                        change:"648",
                        store:"648",
                        time:"2023-02-19 11:39"
                    }
                ]
            }
        ]
    },
    personalList:{
      infoBasic:[
        {
            title:"昵称",
            scene:"设置-昵称",
            target:"完善网络身份标识",
            item:"nickName"
        },
        {
            title:"手机号",
            scene:"用户使用手机号进行账号注册、登录及账号安全页面绑定手机号",
            target:"用于创建账号、登录、找回账号密码，保护账号安全",
            item:"telephone"
        },
        {
            title:"邮箱",
            scene:"用户使用邮箱账号注册、登录及账号安全页面绑定手机号",
            target:"用于创建账号、登录、找回账号密码，保护账号安全",
            item:"email"
        },
    ],
    infoRealname:{
      title:"实名信息",
      type:"身份证",
      name:"",
      number:""
    },
    infoBehavior:{
      title:"订单信息",
      scene:"用户购买记录",
      target:"方便用户管理订单",
      item:"0条"
    },
    infoDevice: [
      {
        time: "当月",
        children: [
          {
            title: "IMEI",
            scene: "低版本安卓系统（安卓9及其以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "IDFA",
            scene: "用户关闭限制广告跟踪或低版本IOS系统（IOS14以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "IP",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "操作系统",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、兼容性等问题分析",
            item: "0条",
          },
          {
            title: "OAID",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "AndroidId",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "网络类型",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "硬件品牌",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "硬件型号",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
        ]
      },
      {
        time: "近6个月",
        children: [
          {
            title: "IMEI",
            scene: "低版本安卓系统（安卓9及其以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "IDFA",
            scene: "用户关闭限制广告跟踪或低版本IOS系统（IOS14以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "IP",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "11条",
            toCheck:"点击查看 >"
          },
          {
            title: "操作系统",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、兼容性等问题分析",
            item: "8条",
            toCheck:"点击查看 >"
          },
          {
            title: "OAID",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "8条",
            toCheck:"点击查看 >"
          },
          {
            title: "AndroidId",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "8条",
            toCheck:"点击查看 >"
          },
          {
            title: "网络类型",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "8条",
            toCheck:"点击查看 >"
          },
          {
            title: "硬件品牌",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "8条",
            toCheck:"点击查看 >"
          },
          {
            title: "硬件型号",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "8条",
            toCheck:"点击查看 >"
          },
        ]
      },
      {
        time: "近6个月",
        children: [
          {
            title: "IMEI",
            scene: "低版本安卓系统（安卓9及其以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "1条",
            toCheck:"点击查看 >"
          },
          {
            title: "IDFA",
            scene: "用户关闭限制广告跟踪或低版本IOS系统（IOS14以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "IP",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "12条",
            toCheck:"点击查看 >"
          },
          {
            title: "操作系统",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、兼容性等问题分析",
            item: "9条",
            toCheck:"点击查看 >"
          },
          {
            title: "OAID",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "8条",
            toCheck:"点击查看 >"
          },
          {
            title: "AndroidId",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "9条",
            toCheck:"点击查看 >"
          },
          {
            title: "网络类型",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "9条",
            toCheck:"点击查看 >"
          },
          {
            title: "硬件品牌",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "9条",
            toCheck:"点击查看 >"
          },
          {
            title: "硬件型号",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "9条",
            toCheck:"点击查看 >"
          },
        ]
      },
      {
        time: "近12个月",
        children: [
          {
            title: "IMEI",
            scene: "低版本安卓系统（安卓9及其以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "1条",
            toCheck:"点击查看 >"
          },
          {
            title: "IDFA",
            scene: "用户关闭限制广告跟踪或低版本IOS系统（IOS14以下），APP首次运行",
            target: "安全风控、广告投放",
            item: "0条",
          },
          {
            title: "IP",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "28条",
            toCheck:"点击查看 >"
          },
          {
            title: "操作系统",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、兼容性等问题分析",
            item: "22条",
            toCheck:"点击查看 >"
          },
          {
            title: "OAID",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "21条",
            toCheck:"点击查看 >"
          },
          {
            title: "AndroidId",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "22条",
            toCheck:"点击查看 >"
          },
          {
            title: "网络类型",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "23条",
            toCheck:"点击查看 >"
          },
          {
            title: "硬件品牌",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "22条",
            toCheck:"点击查看 >"
          },
          {
            title: "硬件型号",
            scene: "用户授权了设备状态权限下，APP首次运行",
            target: "安全风控、广告投放",
            item: "22条",
            toCheck:"点击查看 >"
          },
        ]
      }
    ]
    },
    shareList:[
      {
          title:"微信支付",
          type:"支付",
          master:"财付通支付科技有限公司",
          target:"用于支付",
          method:"SDK本机采集",
          messageType:"设备版本、系统版本、生成ID、手机样式、手机名、iccid、bssid、MAC地址、IMSI、IMEI",
          URL:"https://www.tenpay.com/v3/helpcenter/low/privacy.shtml"
      },
      {
          title:"支付宝支付",
          type:"支付",
          master:"支付宝(中国）网络技术有限公司",
          target:"用于支付",
          method:"SDK本机采集",
          messageType:"设备版本、系统版本、生成ID、手机样式、手机名、iccid、bssid、MAC地址、IMSI、IMEI",
          URL:"https://render.alipay.com/p/c/k2cx0tg8"
      },
      {
          title:"热云TrackingIO SDK（Android, iOS）",
          type:"广告追踪",
          master:"北京热云科技有限公司",
          target:"用于广告投放及数据监测",
          method:"SDK本机采集",
          messageType:"	iOS广告标识符（IDFA和IDFV）、安卓广告主标识符（Android ID）、网卡地址（MAC）、IP地址、国际移动设备识别码（IMEI）、移动设备识别码（MEID）、匿名设备标识码（OAID）、设备型号、终端制造厂商、终端设备操作系统版本、IP地址、陀螺仪、运行列表、运营商信息、IMEI、IMSI",
          URL:"https://new.trackingio.com/#/policy"
      },
      {
          title:"腾讯bugly",
          type:"定位游戏崩溃信息",
          master:"深圳市腾讯计算机系统有限公司",
          target:"收集崩溃信息",
          method:"SDK本机采集",
          messageType:"联网信息、日志信息、设备ID（Android ID）、设备型号、系统名称、系统版本、国家码",
          URL:"https://static.bugly.qq.com/bugly-sdk-privacy-statement.pdf"
      },
      {
          title:"极验GEETEST",
          type:"验证",
          master:"武汉极意网络科技有限公司",
          target:"用于人机校验",
          method:"SDK本机采集",
          messageType:"应用名称、电量状态、设备版本、网络类型、网络环境、国别、屏幕的高度、设备信息（分类、名称、型号、像素）、sdk的版本号、是否越狱、内存大小、系统类型、系统版本、app版本、时间戳、安装唯一标识、应用的唯一标识、光标移动的速度、点击的位置、iOS 独有：设备横竖屏、Android 独有：模拟器信息、电池指数、设备是否存在电源",
          URL:"https://www.geetest.com/Private"
      },
      {
          title:"MTP（ACE）",
          type:"反作弊",
          master:"深圳市腾讯计算机系统有限公司",
          target:"用于检测外挂、反作弊",
          method:"SDK本机采集",
          messageType:"设备型号、系统版本、IMEI、IMSI、Android ID、MAC地址、网络类型、WIFI名称、附近可连接WIFI名称、品牌、CPU架构、是否 Root、ROM 的唯一标识、设备屏幕分辨率、系统启动时间、是否运行在模拟器、语言地区、剩余内存、剩余内置和外置 SD 卡空间容量、安装的 APK 信息、运行的进程信息、host 文件、SD 卡应用缓存目录下文件名列表",
          URL:"https://www.anticheatexpert.com/#/doc-center/8fc4c1195346a2c74e472881bca42c4010698921"
      },
      {
          title:"unity 3D SDK",
          type:"游戏行为",
          master:"优三缔科技（上海）有限公司",
          target:"提供游戏引擎服务",
          method:"SDK本机采集",
          messageType:"运营商信息、IMEI、IMSI、IDFA、Android ID、旋转矢量传感器、运行列表信息",
          URL:"https://unity.cn/legal/china-privacy-policy"
      },
      {
          title:"移动智能终端补充设备标识体系统一调用SDK（OAID）",
          type:"广告追踪",
          master:"中国信息通信研究院泰尔终端实验室、移动安全联盟",
          target:"广告效果分析",
          method:"SDK本机采集",
          messageType:"生成匿名设备标识符（OAID）",
          URL:"http://www.msa-alliance.cn/col.jsp?id=122"
      },
      {
          title:"百度oCPX转化追踪应用SDK （仅官方服百度推广渠道包使用）",
          type:"广告追踪",
          master:"百度在线网络技术（北京）有限公司",
          target:"用于广告投放",
          method:"SDK本机采集",
          messageType:"联网信息、MAC地址、唯一设备识别码（IMEI、IDFA、Android ID、设备硬件序列号）、广告标识（OAID）",
          URL:"https://ocpx-devcenter.bj.bcebos.com/videoworks/console-upload/%E3%80%90%E7%99%BE%E5%BA%A6oCPX%E5%BA%94%E7%94%A8SDK%E8%BD%AC%E5%8C%96%E8%BF%BD%E8%B8%AA%E5%B7%A5%E5%85%B7%E3%80%91%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96.pdf?authorization=bce-auth-v1/e2ea496b5e7f4e20bd0e5d1ce5533588/2022-03-02T07%3A26%3A49Z/-1/host/a457d9fc218b82a94f1a1209ed821931c1f7703ffe40bd220ba25ce5e42f8056"
      },
      {
          title:"rangersApplog（仅官方服今日头条推广渠道包使用）",
          type:"广告投放",
          master:"北京巨量引擎网络技术有限公司",
          target:"用于广告投放",
          method:"SDK本机采集",
          messageType:"联网信息、MAC地址、唯一设备识别码（IMEI、IDFA、Android ID、设备硬件序列号）、广告标识（OAID）",
          URL:"https://open.oceanengine.com/labels/7/docs/1708428054592516"
      },
      {
          title:"哔哩哔哩游戏SDK",
          type:"合作渠道商",
          master:"上海宽娱数码科技有限公司",
          target:"提供账号登录、支付以及实名制服务时使用",
          method:"SDK本机采集",
          messageType:"个人常用设备信息（包括硬件序列号、硬件型号、设备MAC地址、操作系统类型、软件列表、唯一设备识别码）",
          URL:"https://www.bilibili.com/blackboard/privacy-pc.html"
      },
      {
          title:"听云",
          type:"网络拨测",
          master:"北京基调网络股份有限公司",
          target:"用于检测设备的网络状态",
          method:"SDK本机采集",
          messageType:"无",
          URL:"https://wukongdoc.tingyun.com/app/privacy.html"
      },
  ]
  },
  point:
    "https://web.hycdn.cn/arknights/official/static/cursor-inner.1d69419cb78ed4579ad9.png",
  icons: `<div style="position: absolute; display: none; visibility: hidden">
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2186.86 999.65"
  >
    <defs>
      <path
        id="bilibili-text"
        d="M2030.61,892.82c-9.77,0-18.55,0-26.37-0.98c-16.6-0.97-33.2-1.95-49.8-1.95c-10.74,0-10.74,0-11.72-10.74l-15.63-177.74l-15.62-147.46l-10.74-90.82l-9.77-79.1l-17.58-123.05c-5.86-43.94-12.69-86.91-21.48-130.86c-0.98-6.83-0.98-7.81,6.84-8.79c30.27-5.86,61.52-8.79,92.77-8.79h10.74c4.88,0.98,7.81,3.91,8.79,9.77l3.91,67.38l27.34,364.26l13.67,166.99l8.79,95.71L2030.61,892.82L2030.61,892.82z M833.34,112.54h17.58c8.79,0,10.74,2.93,10.74,11.72l7.82,118.17l17.58,245.11l10.74,127.93l7.81,98.64l15.63,169.92c0,7.81-0.98,8.79-8.79,8.79l-70.32-2.93c-4.88,0.98-7.81-1.95-7.81-6.84l-2.93-34.18c-2.93-29.29-5.86-58.59-7.81-88.86l-15.63-154.3l-16.6-139.65l-11.72-98.63l-12.69-89.85c-5.86-40.04-12.7-81.05-19.53-121.09l-4.89-27.34c-0.97-4.89,0-6.84,4.89-7.82C774.75,116.45,801.12,111.57,833.34,112.54L833.34,112.54L833.34,112.54z M1815.77,506.1c24.41,0,27.34,0.98,31.25,24.41c4.88,29.3,8.79,58.6,11.72,87.89l10.74,94.73l20.51,201.17c0.97,4.89,0,6.84-4.89,6.84l-76.17,8.79c-7.81,0.97-9.77,0-10.74-7.81l-43.95-224.61l-27.34-149.42l-3.91-20.51c-0.97-3.9,0.98-6.83,4.89-7.81C1758.15,512.94,1787.45,508.05,1815.77,506.1L1815.77,506.1L1815.77,506.1z M705.41,506.1c26.37-0.98,29.3,1.95,32.23,26.37c6.84,40.04,11.72,79.1,15.63,119.14l12.69,117.18l7.81,79.11l6.84,63.47c0,8.79-0.98,10.75-8.79,11.72l-72.26,6.84c-7.82,0.97-9.77,0-10.75-7.81l-59.57-306.65l-15.62-86.91c-0.98-4.88,0.97-7.81,5.86-8.79C649.75,512.94,678.07,508.05,705.41,506.1L705.41,506.1L705.41,506.1z M1078.46,808.83v121.1v3.9c0.98,5.86-1.95,8.79-7.81,7.82h-23.44c-16.6,0-33.2,0.97-49.8,1.95c-8.79,0.98-9.77,0.98-10.75-9.77l-15.62-175.78l-7.81-86.91l-11.72-132.81c-0.98-10.75,0.98-12.7,9.76-13.68c27.35-2.93,54.69-2.93,82.04-1.95l20.5,2.93c7.82,2.93,8.79,3.91,8.79,11.72l2.93,52.73l0.98,58.6C1077.49,702.39,1078.46,755.12,1078.46,808.83L1078.46,808.83L1078.46,808.83z M2186.86,814.69v114.26v5.86c0,4.88-1.95,7.81-6.84,6.84h-35.15c-13.67,0-27.35,0.97-40.04,1.95c-7.81,0.98-8.79,0-9.77-8.79l-20.5-228.52l-10.75-113.28l-3.9-57.61c-0.98-7.82,0.97-9.77,8.79-9.77c32.22-3.91,65.43-4.88,97.65-0.98c12.7,0.98,14.65,4.89,15.63,17.58l2.93,129.88L2186.86,814.69L2186.86,814.69z M1787.45,298.09c9.76,0,18.55,0.98,25.39,1.95c4.88,0.98,6.83,2.93,7.81,7.82l12.69,135.74c2.93,11.72,0.98,13.67-10.74,13.67l-33.2,1.95c-6.84,0.98-9.77,1.96-9.77-8.78l-13.67-110.36l-3.9-31.25c-0.98-5.86,0.97-8.79,6.83-9.76L1787.45,298.09L1787.45,298.09z M681,298.09c7.81,0,15.63,0.98,22.46,1.95c3.91,0.98,5.86,2.93,6.84,7.82l3.9,34.18l9.77,106.44c0.98,7.81,0.98,8.79-6.84,8.79l-38.08,1.95c-7.81,0.98-8.79,0-9.77-7.81l-8.79-78.12l-7.81-65.43c-0.98-4.89,0.98-7.82,5.86-7.82C665.38,299.07,673.19,298.09,681,298.09L681,298.09L681,298.09zM1070.65,395.75v67.38c0.98,10.74-0.98,10.74-9.77,10.74c-12.69,0-24.41-0.97-36.13-1.95c-7.81-0.98-8.79-0.98-7.81-8.79l-2.93-83.01c0-18.55,0-37.11-0.98-55.66c-0.97-8.79,0-9.77,8.79-9.77c13.67,0,27.34,0.98,41.02,2.93c7.81,0,7.81,1.96,7.81,9.77V395.75L1070.65,395.75z M2180.02,396.72v67.39c0,8.79-0.97,9.76-9.76,9.76l-37.11-1.95c-5.86-0.98-8.79-3.91-7.81-8.79l-2.93-139.65c0-7.81,0.97-8.79,8.79-8.79c12.69,0,24.41,0.98,36.13,1.96c14.65,0.97,12.69,3.9,12.69,14.64L2180.02,396.72L2180.02,396.72z M650.73,449.46c0.97,11.72,0,13.67-11.72,14.65l-23.44,5.86c-7.81,2.93-8.79,0.97-9.76-5.86l-24.42-137.7c-2.93-8.79-0.98-10.74,7.81-11.72l34.18-5.86c7.82-0.97,9.77-0.97,9.77,6.84c2.93,16.6,5.86,33.2,7.81,49.8l9.77,78.13L650.73,449.46L650.73,449.46z M1689.79,315.67c14.65-2.93,30.27-4.88,45.9-6.84c4.88-0.97,6.83,1.96,7.81,6.84l7.81,53.71c3.91,26.37,6.84,52.73,7.82,79.1v7.81c0.97,3.91-0.98,6.84-4.89,7.82l-31.25,6.83c-4.88,0.98-6.83-0.97-7.81-5.86l-25.39-145.5V315.67L1689.79,315.67z M996.43,421.14c0,15.62-0.98,30.27-1.95,43.94c0,4.89-1.96,6.84-6.84,7.82l-30.27,2.93c-4.88,0.97-6.84-1.96-6.84-6.84c-1.95-14.65-2.93-28.32-3.9-42.97c-1.96-26.37-3.91-53.71-4.89-81.05l-1.95-19.53c-0.98-3.91,0.98-5.86,4.88-5.86l40.04-2.93c6.84,0,8.79,0.97,8.79,8.79L996.43,421.14L996.43,421.14z M2103.85,405.51c0.98,18.56,0.98,38.09,0,56.64c0.98,8.79-0.97,10.75-9.76,10.75l-27.35,2.93c-4.88,0.97-7.81-1.96-7.81-6.84c-0.98-24.41-2.93-49.8-4.88-74.22l-3.91-68.36c-0.98-4.88,0.98-6.83,4.88-6.83l39.07-2.93c6.83,0,7.81,0.97,7.81,8.79C2103.85,351.8,2104.83,379.15,2103.85,405.51L2103.85,405.51L2103.85,405.51z M612.64,738.52c15.63,18.56,18.56,39.06,11.72,61.52c-5.86,21.49-16.6,40.04-32.23,55.67c-25.39,26.37-54.68,47.85-86.91,64.45c-55.66,29.3-113.28,49.81-174.81,60.55c-43.94,8.79-87.89,14.65-131.83,17.58c-13.67,0.97-27.34,0.97-41.02,0.97h-29.29c-7.82,0-9.77-1.95-10.75-9.76l-6.83-94.73L92.13,708.25l-20.5-177.74l-11.72-94.72l-12.7-90.82c-6.83-49.81-15.62-99.61-24.41-149.42C15.96,155.51,9.13,115.47,0.34,75.44c-0.98-4.89,0-8.79,4.88-9.77L140.96,9.03c8.79-3.91,16.6-6.84,25.39-8.79c5.86-0.98,8.79,0.98,7.81,6.84c0,15.62,0,31.25-0.97,47.85l-0.98,12.69c-0.97,56.64-0.97,113.28,0,170.9c0.98,49.81,3.91,100.59,6.84,150.39c4.88,78.13,12.69,156.25,20.51,233.4c0,7.81,0.97,7.81,9.76,6.84c16.6-2.93,32.23-3.91,48.83-3.91c51.76,0,103.51,5.86,153.32,18.55c43.94,10.75,85.94,25.4,127.93,43.95c20.51,9.77,39.06,21.48,56.64,35.16C602.88,727.78,607.76,732.66,612.64,738.52L612.64,738.52L612.64,738.52z M1713.23,729.73c20.51,16.6,27.34,39.06,21.48,65.43c-4.88,21.49-14.65,40.04-29.3,56.64c-23.43,26.37-50.78,46.88-81.05,63.48c-58.59,32.23-121.09,54.69-187.5,66.41c-36.13,6.83-72.27,12.69-108.4,15.62c-20.51,1.95-42.97,2.93-65.43,1.95h-26.37c-5.85,0.98-8.78-1.95-8.78-7.81c-1.96-27.34-3.91-54.69-6.84-82.03l-15.63-166.99l-16.6-145.51l-20.5-164.06c-2.93-28.32-6.84-57.62-11.72-85.94l-17.58-109.38c-7.81-51.75-17.58-103.51-28.32-155.27l-0.98-6.83c-1.95-4.89,0-8.79,4.88-9.77c47.86-19.53,94.73-41.02,142.58-59.57c12.7-4.88,28.32-10.74,27.35,0.98c-3.91,36.13-2.93,72.26-3.91,107.42c-0.98,29.29-0.98,58.59,0.98,86.91v22.46c0,35.16,0.97,70.32,3.9,104.49c1.96,45.9,4.89,92.78,8.79,138.68l8.79,98.63c0.98,18.55,2.93,36.13,5.86,54.69c0,10.74,1.95,9.76,10.74,8.79c17.58-2.93,35.16-3.91,52.74-3.91c61.52,0.98,121.09,10.74,179.68,27.34c40.04,10.75,78.13,25.39,115.24,44.93C1683.93,706.29,1698.58,717.04,1713.23,729.73L1713.23,729.73L1713.23,729.73zM301.12,901.61c14.65-8.79,40.04-26.37,75.19-53.71c35.16-28.32,56.64-46.88,65.43-56.64c-52.73-23.44-107.42-43.95-164.06-62.5L301.12,901.61L301.12,901.61z M1548.19,796.14c2.93-2.93,1.95-4.88-0.98-6.84l-23.44-9.76c-41.01-17.58-82.03-33.21-124.02-46.88l-5.86-1.95c-1.95-0.98-3.9,0-6.83,0.98l23.43,168.94c2.93,0,4.89-0.98,5.86-1.95c38.09-27.35,76.17-55.67,114.26-85.94L1548.19,796.14L1548.19,796.14z"
      ></path>
      <g id="wechat-icon">
        <path
          d="m313.242188 47.59375c-34.640626-30.691406-80.582032-47.59375-129.355469-47.59375-48.78125 0-94.722657 16.902344-129.367188 47.59375-35.160156 31.148438-54.519531 72.707031-54.519531 117.023438 0 51.480468 26.71875 99.601562 72.011719 130.683593l-9.148438 38.914063c-1.382812 5.890625.90625 12.035156 5.808594 15.582031 2.617187 1.894531 5.703125 2.851563 8.796875 2.851563 2.703125 0 5.414062-.730469 7.820312-2.203126l45.917969-28.0625c11.890625 3.175782 24.097657 5.230469 36.484375 6.199219-2.761718-11.808593-4.164062-23.894531-4.164062-36.175781 0-23.710938 5.183594-46.703125 15.40625-68.34375 9.75-20.628906 23.628906-39.105469 41.257812-54.910156 35.621094-31.941406 82.703125-49.53125 132.574219-49.53125 2.722656 0 5.4375.0625 8.140625.164062-8.496094-27.082031-24.710938-51.855468-47.664062-72.191406zm-178.851563 74.09375c-2.796875 2.789062-6.667969 4.398438-10.609375 4.398438-3.949219 0-7.820312-1.609376-10.609375-4.398438-2.789063-2.792969-4.390625-6.660156-4.390625-10.601562 0-3.949219 1.601562-7.820313 4.390625-10.609376 2.789063-2.789062 6.660156-4.398437 10.609375-4.398437 3.941406 0 7.8125 1.609375 10.609375 4.398437 2.792969 2.789063 4.390625 6.660157 4.390625 10.609376 0 3.941406-1.597656 7.808593-4.390625 10.601562zm98.511719 0c-2.800782 2.789062-6.671875 4.398438-10.609375 4.398438-3.949219 0-7.820313-1.609376-10.609375-4.398438-2.792969-2.792969-4.390625-6.660156-4.390625-10.601562 0-3.949219 1.597656-7.820313 4.390625-10.609376 2.796875-2.789062 6.660156-4.398437 10.609375-4.398437 3.9375 0 7.808593 1.609375 10.609375 4.398437 2.789062 2.789063 4.390625 6.660157 4.390625 10.609376 0 3.941406-1.601563 7.808593-4.390625 10.601562zm0 0"
        ></path>
        <path
          d="m512 292.402344c0-78.730469-71.433594-142.785156-159.234375-142.785156-87.804687 0-159.238281 64.054687-159.238281 142.785156 0 78.730468 71.433594 142.785156 159.238281 142.785156 19.011719 0 37.554687-2.960938 55.207031-8.816406l39.390625 14.867187c1.722657.652344 3.515625.964844 5.292969.964844 3.773438 0 7.472656-1.417969 10.3125-4.097656 4.171875-3.945313 5.726562-9.925781 4.003906-15.402344l-7.609375-24.1875c33.59375-27.0625 52.636719-65.183594 52.636719-106.113281zm-204.496094-27.554688c-2.792968 2.789063-6.660156 4.390625-10.601562 4.390625-3.949219 0-7.820313-1.601562-10.609375-4.390625-2.789063-2.789062-4.402344-6.660156-4.402344-10.609375 0-3.953125 1.613281-7.8125 4.402344-10.613281 2.789062-2.789062 6.660156-4.386719 10.609375-4.386719 3.941406 0 7.808594 1.597657 10.601562 4.386719 2.796875 2.800781 4.398438 6.660156 4.398438 10.613281 0 3.949219-1.601563 7.820313-4.398438 10.609375zm103.957032 0c-2.789063 2.789063-6.660157 4.390625-10.597657 4.390625-3.949219 0-7.820312-1.601562-10.609375-4.390625-2.792968-2.789062-4.390625-6.660156-4.390625-10.609375 0-3.953125 1.597657-7.8125 4.390625-10.613281 2.789063-2.789062 6.660156-4.386719 10.609375-4.386719 3.9375 0 7.808594 1.597657 10.597657 4.386719 2.792968 2.800781 4.394531 6.660156 4.394531 10.613281 0 3.949219-1.601563 7.820313-4.394531 10.609375zm0 0"
        ></path>
      </g>
      <g id="weibo-icon">
        <path
          d="m23.977 8.171c.103 1.315-.123 2.891-1.006 2.969-1.442.127-.69-1.435-.671-2.375.053-2.725-2.312-4.618-4.629-4.618-.656 0-2.181.438-1.946-.924.106-.6.623-.592 1.14-.66 3.897-.51 6.838 2.125 7.112 5.608z"
        ></path>
        <path
          d="m17.604 11.337c1.675.901 3.687 1.35 3.354 4.024-.614 4.929-11.054 8.24-17.575 4.618-1.788-.994-3.639-2.448-3.354-5.344.246-2.493 1.95-4.424 3.623-6.069 1.596-1.57 3.278-2.798 5.567-3.364 2.484-.614 3.218 1.422 2.549 3.43 1.439-.095 4.488-1.674 5.836-.132.594.68.367 1.897 0 2.837zm-1.811 6.333c.537-.598 1.076-1.51 1.073-2.572-.01-4.395-7.635-5.376-11.806-2.969-4.747 2.74-2.743 7.664 3.086 8.048 3.088.204 6.179-.868 7.647-2.507z"
        ></path>
        <path
          d="m19.952 10.084c-.977.064-.612-.658-.671-1.517-.037-.529-.483-1.14-.872-1.32-.763-.352-1.945.256-1.945-.791 0-.778.686-.697 1.074-.726 3.555-.266 3.775 4.265 2.414 4.354z"
        ></path>
        <path
          d="m12.842 14.768c1.429 4.248-6.017 6.223-7.379 2.573-.911-2.441 1.277-4.383 3.555-4.618 1.945-.201 3.395.775 3.824 2.045zm-3.422.726c.303.516 1 .145.939-.264-.073-.473-.945-.403-.939.264zm-1.207 2.243c1.252-.293 1.42-2.612-.47-2.177-1.587.364-1.28 2.586.47 2.177z"
        ></path>
      </g>
      <g id="taptap-icon">
        <path
          d="M78.6,20.8H59.7c-1.5,0-2.8,1.3-2.8,2.8v65.6c0,1.5-1.3,2.8-2.8,2.8H38.3c-1.5,0-2.8-1.3-2.8-2.8V23.6c0-1.5-1.3-2.8-2.8-2.8H21.2c-8.5,0-13.4,0-16.1-6.9C3.9,10.7,5,4.5,8.6,0.5c0.9-1,2.6-0.3,2.5,1c-0.2,1.6,0.8,2.8,3.5,2.8h64c1.5,0,2.8,1.3,2.8,2.8V18C81.4,19.6,80.1,20.8,78.6,20.8z"
        ></path>
        <path
          d="M113.9,82.9c-0.4-1.1-1.8-1.3-2.5-0.3c-1.5,2.3-3.3,4.3-5.2,5.8c-2.7,2.2-6.3,3.3-10.7,3.3c-22,0-26.6-23.2-26.6-31.4c0-11.5,2.9-36.3,31.3-36.3c0,0,7.9-0.2,12.3,1.3l0.2-1.3c0.2-1.3,1.4-2.3,2.8-2.3h15.7c1.5,0,2.8,1.3,2.8,2.8v46.3c0,3.2-1,13,5.9,15.3c1.1,0.4,1.2,2,0.2,2.5C123.9,97.8,116.3,90,113.9,82.9z M101.3,76.4c2.6-0.4,4.9-0.9,6.9-2.2c2-1.2,4.2-3.9,4.2-6.5V38.5c0-1.2-0.8-2.3-1.9-2.7c-3.1-0.9-6.7-0.4-6.7-0.4C78.9,36.8,83.1,78.9,101.3,76.4z"
        ></path>
        <path
          d="M182.6,92c-3.3,0-6.2-0.6-8.8-1.9c-1.6-0.8-3-1.8-4.3-3c-0.9-0.8-2.4-0.3-2.4,1c0,6.5,0,20.3,0,26.2c0,1.5-1.3,2.8-2.8,2.8h-15.9c-1.5,0-2.8-1.3-2.8-2.8V37.8c0-11.9-1.9-15.8-6.5-16.6c-1.2-0.2-1.5-1.9-0.5-2.5c15-10.4,25.4,1.9,26.6,4.7c0.4,1,0.7,2,0.9,2.9c0.3,1.1,1.6,1.5,2.4,0.6c1.4-1.6,3-2.9,4.8-3.9c2.6-1.5,5.7-2.3,9.1-2.3c8.5,0,28.6,7,28.6,35.7C211.1,85.8,191.1,92,182.6,92z M192.6,56.5c0-16.8-11.3-19.6-15-19.6c-2.4,0-4.9,0.8-6.5,1.7c-1,0.5-1.8,1.2-2.6,2c-0.9,1-1.4,2.4-1.4,3.7V69c0,1.5,0.6,3.1,1.7,4.1c0.7,0.6,1.4,1,2.3,1.4c1.7,0.7,3.7,1.1,6.2,1.1C181.1,75.5,192.6,71,192.6,56.5z"
        ></path>
      </g>
      <g id="qq-icon">
        <path
          d="M25.694,13.182c0.268-0.915,0.416-1.88,0.416-2.881C26.11,4.612,21.5,0,15.81,0c-5.688,0-10.3,4.611-10.3,10.301c0,1.001,0.149,1.966,0.416,2.881c-1.297,1.042-6.331,5.557-4.26,11.412c0,0,1.752-0.15,3.191-2.811c0.437,1.703,1.251,3.25,2.361,4.543c-1.626,0.479-2.729,1.408-2.729,2.474c0,1.556,2.348,2.817,5.243,2.817c1.965,0,3.676-0.582,4.573-1.44c0.494,0.065,0.992,0.11,1.503,0.11c0.512,0,1.011-0.045,1.503-0.11c0.899,0.858,2.609,1.44,4.574,1.44c2.896,0,5.245-1.262,5.245-2.817c0-1.065-1.104-1.995-2.73-2.474c1.109-1.293,1.925-2.84,2.362-4.543c1.438,2.66,3.188,2.811,3.188,2.811C32.024,18.738,26.99,14.223,25.694,13.182z"
        ></path>
      </g>
      <g id="cs-icon">
        <path
          d="M283.88 158.699l-1.448 3.187-25.495-11.586 1.449-3.185c29.313-64.481 1.672-116.294.48-118.468l-1.675-3.056 24.486-13.553 1.697 3.055c1.478 2.659 35.784 66.011.506 143.606zm-52.07-26.366l-25.923-10.602 1.325-3.238c13.684-33.444.564-60.964.431-61.239l-1.525-3.117 3.097-1.564 21.917-10.957 1.565 3.128c.787 1.569 19.019 38.936.44 84.348l-1.327 3.241zm-79.331-4.665h-7.281c-12.341 10.641-29.723 16.731-47.944 16.731h-3.501v-28.002h3.501c19.78 0 37.126-11.078 37.126-23.714V60.761c0-12.846-16.629-32.499-37.126-32.499-16.227 0-29.302 11.813-34.571 22.786-1.68 3.483-2.573 6.843-2.573 9.713v66.907H42.011c-2.399 0-4.762-.21-7.002-.595C14.879 123.678.246 106.352.246 85.91c0-20.494 14.773-37.802 34.728-41.18C42.658 22.784 66.516.26 97.254.26c30.737 0 54.595 22.524 62.28 44.488 19.937 3.395 34.71 20.704 34.71 41.162 0 23.032-18.747 41.758-41.765 41.758zM35.604 66.151C27.29 68.864 21.251 76.687 21.251 85.91c0 9.206 6.039 17.046 14.353 19.759V66.151zm123.282.018v26.514c0 4.253-.7 8.366-2.031 12.303v1.225c9.348-2.012 16.384-10.36 16.384-20.301 0-9.223-6.039-17.028-14.353-19.741zM58.85 153.045h76.808c30.929 0 56.101 25.166 56.101 56.09v88.609H2.749v-88.609c0-30.924 25.171-56.09 56.101-56.09zM30.756 269.742h132.996v-60.607c0-15.488-12.603-28.089-28.094-28.089H58.85c-15.492 0-28.094 12.601-28.094 28.089v60.607z"
        ></path>
      </g>
      <g>
        <path
          id="download-ios"
          d="M908 694.272q-22.272 71.424-70.272 142.848-73.728 112-146.848 112-28 0-80-18.272-49.152-18.272-86.272-18.272-34.848 0-81.152 18.848-46.272 19.424-75.424 19.424-86.848 0-172-148-84-149.152-84-287.424 0-130.272 64.576-213.728 64-82.272 162.272-82.272 41.152 0 101.152 17.152 59.424 17.152 78.848 17.152 25.728 0 81.728-19.424 58.272-19.424 98.848-19.424 68 0 121.728 37.152 29.728 20.576 59.424 57.152-45.152 38.272-65.152 67.424-37.152 53.728-37.152 118.272 0 70.848 39.424 127.424t90.272 72zM693.152 24q0 34.848-16.576 77.728-17.152 42.848-53.152 78.848-30.848 30.848-61.728 41.152-21.152 6.272-59.424 9.728 1.728-85.152 44.576-146.848 42.272-61.152 142.848-84.576 0.576 1.728 1.44 6.272t1.44 6.272q0 2.272 0.288 5.728t0.288 5.728z"
        ></path>
        <path
          id="download-android"
          d="M652.026049 93.632629L696.312167 13.047253A8.806026 8.806026 0 0 0 680.95282 4.65081l-44.746899 81.404541a306.521373 306.521373 0 0 0-124.308317-26.008495c-44.490909 0-86.524323 9.266806-124.103525 25.906099L342.944785 4.65081a8.754828 8.754828 0 0 0-11.877895-3.53265 8.652432 8.652432 0 0 0-3.53265 11.877896l44.337315 80.482979c-87.036301 44.746898-145.913799 129.88888-145.8626 227.676724l571.674903-0.051198c0-97.787844-58.672706-182.776232-145.657809-227.52313z m-270.222116 124.410712a23.909384 23.909384 0 1 1 0.051198-47.818768 23.909384 23.909384 0 0 1 0 47.869966zM795.738341 343.068428l0.102396 410.196966c0 24.626153-13.41383 45.924448-33.17619 57.699948a67.06915 67.06915 0 0 1-34.558532 9.727587l-46.282832 0.051197v139.974851a63.331708 63.331708 0 0 1-76.233561 61.949368 63.382906 63.382906 0 0 1-50.685845-61.89817V820.744126H469.147421v140.026049A63.331708 63.331708 0 0 1 405.764515 1023.999488a63.434104 63.434104 0 0 1-63.382906-63.229313V820.744126h-46.12924c-26.674066 0-49.508296-15.359347-60.515828-37.681598a66.454776 66.454776 0 0 1-7.218893-29.745936l-0.102396-410.094571L795.738341 343.068428zM140.303797 331.292928c35.019312 0 63.485302 28.312397 63.485302 63.178115v264.692751a63.382906 63.382906 0 0 1-98.402218 52.733758 63.024521 63.024521 0 0 1-28.517188-52.733758L76.818495 394.419845c0-34.81452 28.414792-63.178115 63.485302-63.178115z m743.392406-0.051198c35.019312 0 63.485302 28.261199 63.485302 63.178115v264.641553c0 34.968114-28.414792 63.229313-63.434104 63.229313-35.07051 0-63.485302-28.261199-63.485302-63.229313V394.368647c0-34.916916 28.363595-63.229313 63.382906-63.178115zM642.042473 170.275771a23.909384 23.909384 0 0 1 0 47.76757 23.909384 23.909384 0 1 1 0-47.76757z"
        ></path>
      </g>
      <g id="arrow-btn">
        <circle
          id="arrow-btn-dot"
          r="4.5"
          cy="51.5"
          cx="36"
          transform="scale(0, 0)"
        ></circle>
        <path
          id="arrow-btn-tr"
          transform-origin="16.1% 15.9%"
          d="M31.274,7.155 L7.392,31.037 C5.870,32.559 3.402,32.559 1.880,31.037 C0.358,29.515 0.358,27.048 1.880,25.526 L25.762,1.644 C27.284,0.122 29.752,0.122 31.274,1.644 C32.795,3.166 32.795,5.633 31.274,7.155 Z"
        ></path>
        <path
          id="arrow-btn-br"
          transform-origin="16% 55%"
          d="M1.880,41.954 C3.402,40.432 5.870,40.432 7.392,41.954 L31.274,65.836 C32.795,67.358 32.795,69.825 31.274,71.347 C29.752,72.869 27.284,72.869 25.762,71.347 L1.880,47.465 C0.358,45.943 0.358,43.476 1.880,41.954 Z"
        ></path>
        <path
          id="arrow-btn-tl"
          transform-origin="16.1% 15.9%"
          d="M30.833,30.926 C29.311,32.448 26.844,32.448 25.322,30.926 L1.440,7.044 C-0.082,5.523 -0.082,3.055 1.440,1.533 C2.962,0.011 5.429,0.011 6.951,1.533 L30.833,25.415 C32.355,26.937 32.355,29.405 30.833,30.926 Z"
        ></path>
        <path
          id="arrow-btn-bl"
          transform-origin="16% 55%"
          d="M1.440,65.725 L25.322,41.843 C26.844,40.321 29.311,40.321 30.833,41.843 C32.355,43.365 32.355,45.832 30.833,47.354 L6.951,71.236 C5.429,72.758 2.962,72.758 1.440,71.236 C-0.082,69.714 -0.082,67.247 1.440,65.725 Z"
        ></path>
      </g>
      <g>
        <path
          id="play-btn-outline"
          d="M95.000,50.000 L86.406,76.450 L63.906,92.798 L36.094,92.798 L13.594,76.450 L5.000,50.000 L13.594,23.550 L36.094,7.202 L63.906,7.202 L86.406,23.550 Z"
        ></path>
        <path
          id="play-btn-triangle"
          d="M66.875,50.000 L41.562,64.614 L41.562,35.386 Z"
        ></path>
      </g>
      <g>
        <path
          id="staff-career-icon-special"
          d="M29.116,28.057 C28.428,27.707 27.740,27.356 27.049,27.010 C26.982,26.976 26.899,26.956 26.823,26.956 C19.138,26.953 11.452,26.953 3.767,26.956 C3.687,26.956 3.599,26.978 3.528,27.014 C2.687,27.437 1.849,27.864 1.010,28.290 C0.974,28.308 0.936,28.322 0.899,28.338 C0.895,28.329 0.890,28.320 0.885,28.311 C1.213,28.040 1.540,27.768 1.868,27.496 C2.320,27.123 2.773,26.752 3.220,26.374 C3.293,26.314 3.351,26.228 3.394,26.142 C4.493,23.978 5.590,21.813 6.682,19.646 C6.739,19.534 6.800,19.493 6.927,19.494 C7.658,19.501 8.388,19.498 9.119,19.498 C9.168,19.498 9.218,19.498 9.299,19.498 C8.461,21.152 7.637,22.780 6.803,24.428 C12.449,24.428 18.076,24.428 23.725,24.428 C23.394,23.771 23.068,23.126 22.730,22.458 C22.799,22.454 22.847,22.449 22.895,22.449 C23.635,22.448 24.375,22.451 25.115,22.446 C25.223,22.445 25.280,22.476 25.330,22.576 C25.913,23.736 26.499,24.894 27.089,26.049 C27.142,26.154 27.221,26.255 27.311,26.330 C28.069,26.965 28.833,27.593 29.594,28.223 C29.636,28.257 29.676,28.292 29.699,28.352 C29.505,28.254 29.311,28.155 29.116,28.057 ZM16.208,19.791 C16.588,19.038 16.971,18.286 17.348,17.532 C17.393,17.441 17.449,17.417 17.544,17.417 C18.359,17.421 19.174,17.419 19.989,17.419 C20.040,17.419 20.091,17.419 20.177,17.419 C18.538,14.184 16.911,10.970 15.265,7.719 C14.119,9.983 12.989,12.214 11.845,14.473 C13.176,14.473 14.479,14.473 15.811,14.473 C15.666,14.762 15.535,15.024 15.402,15.286 C15.135,15.813 14.866,16.338 14.603,16.866 C14.559,16.954 14.509,16.986 14.410,16.986 C12.335,16.983 10.261,16.984 8.186,16.983 C8.145,16.983 8.105,16.978 8.042,16.974 C8.158,16.743 8.266,16.527 8.375,16.311 C10.282,12.545 12.189,8.778 14.096,5.012 C14.314,4.581 14.518,4.142 14.756,3.723 C14.917,3.439 14.970,3.142 14.997,2.827 C15.072,1.944 15.157,1.062 15.238,0.180 C15.241,0.141 15.251,0.102 15.282,0.065 C15.310,0.370 15.338,0.674 15.367,0.979 C15.437,1.745 15.508,2.510 15.581,3.275 C15.586,3.325 15.604,3.376 15.627,3.420 C17.997,8.103 20.368,12.784 22.739,17.466 C23.131,18.239 23.522,19.013 23.913,19.787 C23.934,19.827 23.952,19.868 23.978,19.923 C21.364,19.923 18.771,19.923 16.155,19.923 C16.175,19.871 16.188,19.829 16.208,19.791 Z"
        ></path>
        <path
          id="staff-career-icon-caster"
          d="M28.239,29.879 C27.943,29.646 27.624,29.395 27.305,29.143 C27.257,29.106 27.211,29.065 27.161,29.031 C27.034,28.946 26.940,28.853 26.984,28.676 C26.994,28.636 26.941,28.568 26.902,28.529 C25.817,27.440 24.731,26.353 23.645,25.265 C22.194,23.813 20.745,22.361 19.293,20.911 C19.224,20.842 19.145,20.782 19.062,20.731 C18.535,20.407 18.006,20.088 17.478,19.766 C17.427,19.735 17.376,19.700 17.333,19.658 C16.888,19.215 16.445,18.770 16.001,18.326 C15.985,18.310 15.971,18.291 15.932,18.244 C16.059,18.136 16.177,18.036 16.307,17.925 C16.239,17.855 16.193,17.805 16.145,17.757 C13.728,15.337 11.311,12.916 8.893,10.498 C8.822,10.427 8.789,10.357 8.789,10.254 C8.793,9.147 8.792,8.040 8.792,6.933 C8.792,6.884 8.792,6.836 8.792,6.755 C8.849,6.807 8.881,6.832 8.909,6.861 C9.353,7.305 9.796,7.750 10.242,8.192 C10.312,8.261 10.336,8.332 10.335,8.427 C10.331,8.887 10.330,9.346 10.337,9.806 C10.338,9.872 10.369,9.955 10.415,10.001 C12.683,12.278 14.955,14.552 17.227,16.825 C17.246,16.845 17.268,16.863 17.328,16.916 C17.424,16.784 17.520,16.653 17.620,16.517 C17.700,16.591 17.734,16.621 17.767,16.653 C18.184,17.070 18.602,17.487 19.018,17.907 C19.073,17.963 19.123,18.026 19.164,18.093 C19.491,18.629 19.815,19.168 20.142,19.703 C20.183,19.771 20.233,19.834 20.289,19.890 C22.821,22.427 25.355,24.962 27.886,27.500 C27.964,27.579 28.036,27.606 28.145,27.583 C28.202,27.572 28.295,27.588 28.328,27.628 C28.656,28.031 28.975,28.442 29.290,28.843 C28.940,29.188 28.595,29.528 28.239,29.879 ZM15.000,0.775 C13.957,0.865 12.913,0.951 11.870,1.042 C10.961,1.121 10.053,1.205 9.145,1.285 C8.824,1.313 8.503,1.338 8.155,1.366 C8.483,2.422 8.805,3.459 9.139,4.532 C9.085,4.494 9.059,4.481 9.040,4.462 C7.725,3.147 6.411,1.832 5.098,0.516 C5.078,0.497 5.064,0.472 5.047,0.450 C9.513,0.450 13.979,0.450 18.446,0.450 C18.387,0.463 18.330,0.483 18.271,0.488 C17.181,0.585 16.091,0.681 15.000,0.775 ZM4.617,7.946 C4.542,7.945 4.449,7.911 4.397,7.859 C3.869,7.341 3.347,6.816 2.827,6.289 C2.785,6.247 2.743,6.181 2.743,6.125 C2.738,5.230 2.739,4.334 2.740,3.439 C2.740,3.420 2.744,3.402 2.749,3.369 C2.799,3.366 2.848,3.361 2.898,3.361 C3.750,3.360 4.602,3.358 5.454,3.364 C5.527,3.365 5.619,3.403 5.671,3.455 C6.196,3.970 6.715,4.491 7.231,5.015 C7.279,5.063 7.322,5.141 7.322,5.205 C7.328,6.082 7.326,6.959 7.326,7.836 C7.326,7.867 7.319,7.899 7.314,7.942 C7.259,7.945 7.209,7.949 7.158,7.949 C6.311,7.950 5.464,7.952 4.617,7.946 ZM1.965,2.968 C1.914,3.021 1.874,3.111 1.873,3.184 C1.868,4.356 1.868,5.527 1.873,6.699 C1.874,6.773 1.911,6.865 1.962,6.917 C2.544,7.508 3.130,8.094 3.721,8.675 C3.773,8.727 3.866,8.762 3.940,8.763 C5.189,8.768 6.439,8.766 7.688,8.766 C7.748,8.766 7.808,8.766 7.876,8.766 C7.876,9.222 7.876,9.661 7.876,10.115 C7.826,10.117 7.776,10.122 7.727,10.122 C6.276,10.122 4.825,10.121 3.374,10.124 C3.276,10.124 3.210,10.092 3.142,10.025 C2.300,9.178 1.456,8.333 0.610,7.490 C0.541,7.421 0.515,7.352 0.515,7.255 C0.518,5.713 0.516,4.171 0.520,2.629 C0.520,2.561 0.543,2.475 0.587,2.430 C1.036,1.971 1.491,1.519 1.945,1.065 C1.958,1.052 1.973,1.042 1.993,1.026 C2.308,1.346 2.617,1.659 2.935,1.982 C2.916,2.003 2.888,2.038 2.856,2.070 C2.558,2.368 2.257,2.664 1.965,2.968 ZM4.350,13.304 C3.315,12.981 2.281,12.659 1.226,12.331 C1.211,12.455 1.194,12.564 1.184,12.673 C1.095,13.719 1.008,14.765 0.917,15.810 C0.838,16.716 0.754,17.621 0.675,18.526 C0.585,19.572 0.498,20.617 0.409,21.663 C0.385,21.943 0.361,22.223 0.335,22.503 C0.331,22.544 0.312,22.582 0.300,22.622 C0.300,18.157 0.300,13.693 0.300,9.229 C0.330,9.249 0.364,9.265 0.389,9.290 C1.697,10.598 3.004,11.907 4.312,13.216 C4.330,13.234 4.347,13.255 4.350,13.304 Z"
        ></path>
        <path
          id="staff-career-icon-sniper"
          d="M28.348,1.103 C28.349,4.101 28.349,7.099 28.349,10.097 C28.349,10.137 28.346,10.177 28.317,10.219 C28.277,9.979 28.237,9.739 28.198,9.498 C28.056,8.630 27.913,7.763 27.772,6.895 C27.634,6.045 27.498,5.195 27.359,4.346 C27.254,3.699 27.144,3.054 27.041,2.407 C27.028,2.330 27.002,2.300 26.921,2.287 C26.040,2.144 25.160,1.998 24.280,1.851 C23.496,1.721 22.713,1.590 21.929,1.460 C21.040,1.313 20.150,1.168 19.260,1.021 C19.210,1.013 19.163,0.992 19.114,0.977 C22.194,0.977 25.274,0.977 28.354,0.977 C28.352,1.019 28.348,1.061 28.348,1.103 ZM8.297,8.072 C8.411,10.714 8.525,13.356 8.639,16.008 C8.397,16.008 8.175,16.008 7.929,16.008 C8.043,13.358 8.157,10.714 8.271,8.070 C8.280,8.070 8.288,8.071 8.297,8.072 ZM21.971,4.296 C22.328,4.641 22.679,4.992 23.027,5.346 C23.097,5.416 23.154,5.429 23.247,5.392 C23.708,5.212 24.172,5.039 24.636,4.863 C24.675,4.849 24.714,4.837 24.780,4.814 C24.758,4.884 24.745,4.935 24.727,4.984 C24.562,5.432 24.400,5.881 24.229,6.326 C24.184,6.443 24.198,6.518 24.290,6.607 C24.640,6.945 24.984,7.290 25.324,7.639 C25.386,7.702 25.437,7.790 25.458,7.875 C25.983,9.975 26.503,12.077 27.024,14.179 C27.262,15.142 27.500,16.104 27.734,17.068 C27.746,17.116 27.741,17.182 27.716,17.223 C26.825,18.653 25.931,20.082 25.036,21.511 C25.024,21.530 25.008,21.546 24.977,21.583 C24.772,21.374 24.573,21.171 24.374,20.969 C24.187,20.782 24.187,20.783 24.328,20.555 C24.486,20.302 24.643,20.049 24.816,19.770 C24.733,19.770 24.679,19.770 24.625,19.770 C20.647,19.787 16.669,19.811 12.691,19.812 C12.255,19.812 11.949,19.928 11.648,20.249 C10.901,21.044 10.114,21.801 9.343,22.573 C9.314,22.602 9.288,22.633 9.269,22.696 C10.126,22.628 10.984,22.561 11.863,22.491 C11.853,22.624 11.846,22.743 11.837,22.861 C11.796,23.384 11.752,23.907 11.716,24.430 C11.707,24.556 11.662,24.606 11.534,24.616 C10.881,24.663 10.228,24.717 9.575,24.769 C8.862,24.826 8.148,24.884 7.435,24.941 C7.076,24.970 6.717,25.003 6.358,25.023 C6.223,25.030 6.123,25.069 6.026,25.167 C4.665,26.535 3.301,27.899 1.939,29.265 C1.900,29.304 1.876,29.358 1.822,29.440 C1.269,28.877 0.756,28.353 0.242,27.829 C0.242,27.820 0.242,27.811 0.242,27.801 C0.282,27.771 0.326,27.746 0.361,27.711 C1.741,26.330 3.121,24.948 4.498,23.563 C4.551,23.509 4.595,23.422 4.601,23.346 C4.671,22.520 4.731,21.693 4.797,20.867 C4.863,20.036 4.933,19.205 5.001,18.375 C5.010,18.267 5.018,18.160 5.021,18.052 C5.023,17.960 5.064,17.920 5.157,17.913 C5.656,17.876 6.155,17.836 6.654,17.797 C6.807,17.785 6.960,17.773 7.140,17.759 C7.071,18.632 7.004,19.492 6.933,20.386 C6.989,20.339 7.020,20.315 7.048,20.287 C7.942,19.393 8.834,18.498 9.730,17.605 C9.803,17.533 9.831,17.459 9.833,17.359 C9.893,14.670 9.956,11.982 10.018,9.293 C10.053,7.794 10.088,6.295 10.122,4.796 C10.123,4.751 10.122,4.706 10.122,4.629 C9.685,4.902 9.271,5.161 8.866,5.414 C8.598,5.144 8.338,4.883 8.071,4.614 C8.098,4.594 8.130,4.568 8.164,4.547 C9.563,3.670 10.963,2.792 12.365,1.919 C12.419,1.885 12.506,1.871 12.569,1.887 C13.971,2.230 15.372,2.578 16.773,2.926 C18.423,3.335 20.074,3.743 21.723,4.157 C21.812,4.179 21.905,4.232 21.971,4.296 ZM20.794,10.707 C20.300,11.193 19.813,11.686 19.323,12.176 C19.290,12.209 19.256,12.239 19.191,12.299 C19.108,12.190 19.028,12.086 18.946,11.978 C18.884,12.036 18.849,12.067 18.817,12.099 C18.175,12.742 17.533,13.384 16.891,14.027 C15.395,15.525 13.899,17.023 12.401,18.518 C12.349,18.570 12.274,18.624 12.205,18.632 C11.898,18.668 11.590,18.688 11.282,18.711 C11.154,18.721 11.025,18.724 10.889,18.731 C10.889,18.679 10.886,18.642 10.889,18.605 C10.920,18.237 10.958,17.868 10.981,17.499 C10.989,17.377 11.035,17.293 11.119,17.209 C13.252,15.078 15.383,12.944 17.514,10.810 C17.550,10.774 17.583,10.737 17.652,10.664 C17.541,10.584 17.439,10.510 17.301,10.411 C17.381,10.353 17.427,10.328 17.464,10.292 C17.961,9.796 18.458,9.299 18.952,8.800 C19.006,8.746 19.054,8.677 19.083,8.605 C19.429,7.726 19.774,6.846 20.112,5.964 C20.139,5.893 20.139,5.799 20.119,5.725 C20.067,5.541 19.983,5.365 19.939,5.180 C19.899,5.013 19.806,4.953 19.648,4.915 C18.395,4.611 17.144,4.297 15.893,3.987 C14.800,3.715 13.708,3.442 12.614,3.176 C12.543,3.159 12.445,3.177 12.382,3.216 C11.796,3.576 11.215,3.944 10.631,4.307 C10.555,4.354 10.524,4.406 10.522,4.498 C10.475,7.027 10.425,9.557 10.374,12.086 C10.328,14.386 10.280,16.686 10.227,18.986 C10.226,19.055 10.182,19.138 10.132,19.188 C9.046,20.281 7.958,21.372 6.865,22.457 C6.733,22.588 6.738,22.732 6.738,22.895 C6.919,22.896 7.059,22.873 7.192,22.739 C8.261,21.656 9.340,20.583 10.413,19.504 C10.488,19.429 10.563,19.395 10.670,19.395 C11.321,19.399 11.971,19.397 12.622,19.395 C15.023,19.389 17.423,19.382 19.824,19.376 C21.514,19.372 23.203,19.369 24.892,19.371 C25.028,19.371 25.100,19.327 25.170,19.214 C25.569,18.564 25.974,17.917 26.384,17.273 C26.454,17.164 26.463,17.067 26.432,16.946 C26.034,15.354 25.640,13.761 25.245,12.168 C25.059,11.414 24.871,10.661 24.690,9.906 C24.664,9.796 24.611,9.740 24.505,9.708 C24.300,9.646 24.099,9.566 23.893,9.506 C23.824,9.486 23.734,9.484 23.668,9.509 C22.800,9.844 21.934,10.182 21.070,10.526 C20.970,10.566 20.871,10.631 20.794,10.707 ZM21.456,21.385 C18.852,21.497 16.247,21.610 13.633,21.723 C13.633,21.480 13.633,21.258 13.633,21.012 C16.242,21.125 18.848,21.237 21.455,21.349 C21.455,21.361 21.456,21.373 21.456,21.385 Z"
        ></path>
        <path
          id="staff-career-icon-pioneer"
          d="M29.313,14.190 C29.182,14.196 29.051,14.193 28.920,14.197 C28.497,14.208 28.073,14.219 27.650,14.234 C27.367,14.243 27.083,14.256 26.800,14.272 C26.455,14.291 26.110,14.320 25.766,14.335 C25.518,14.346 25.269,14.337 25.021,14.344 C24.814,14.351 24.606,14.358 24.402,14.386 C24.334,14.396 24.259,14.460 24.216,14.520 C24.106,14.675 24.010,14.842 23.910,15.004 C23.876,15.060 23.846,15.119 23.814,15.177 C23.726,15.342 23.554,15.391 23.404,15.471 C23.237,15.560 23.071,15.650 22.902,15.737 C22.701,15.841 22.497,15.938 22.298,16.047 C22.058,16.178 21.823,16.319 21.584,16.453 C21.489,16.506 21.391,16.553 21.293,16.602 C21.065,16.714 20.834,16.819 20.610,16.938 C20.407,17.046 20.214,17.173 20.013,17.284 C19.866,17.365 19.712,17.433 19.562,17.511 C19.404,17.593 19.248,17.679 19.092,17.765 C18.943,17.848 18.800,17.938 18.649,18.016 C18.495,18.097 18.332,18.160 18.179,18.243 C17.976,18.352 17.783,18.481 17.578,18.587 C17.339,18.711 17.089,18.814 16.849,18.936 C16.708,19.008 16.581,19.104 16.442,19.179 C16.316,19.246 16.178,19.292 16.052,19.360 C15.940,19.421 15.823,19.487 15.737,19.577 C15.695,19.622 15.716,19.729 15.714,19.808 C15.703,20.184 15.703,20.561 15.680,20.936 C15.660,21.263 15.600,21.587 15.583,21.914 C15.564,22.280 15.597,22.650 15.565,23.014 C15.525,23.462 15.582,23.914 15.478,24.361 C15.425,24.590 15.470,24.840 15.461,25.080 C15.450,25.385 15.424,25.689 15.416,25.994 C15.406,26.352 15.411,26.710 15.405,27.068 C15.403,27.230 15.391,27.392 15.383,27.562 C15.315,27.562 15.253,27.562 15.168,27.562 C15.168,27.293 15.171,27.030 15.167,26.767 C15.161,26.362 15.147,25.958 15.140,25.554 C15.135,25.271 15.135,24.988 15.132,24.705 C15.132,24.696 15.133,24.687 15.132,24.678 C15.097,24.419 15.046,24.162 15.032,23.902 C15.007,23.454 15.006,23.004 14.991,22.556 C14.986,22.399 14.963,22.243 14.958,22.086 C14.951,21.896 14.958,21.705 14.952,21.514 C14.949,21.423 14.928,21.332 14.918,21.241 C14.905,21.134 14.887,21.028 14.884,20.921 C14.879,20.690 14.880,20.458 14.883,20.226 C14.885,20.076 14.821,20.024 14.686,20.091 C14.560,20.154 14.446,20.239 14.323,20.309 C14.204,20.376 14.081,20.437 13.959,20.499 C13.782,20.590 13.605,20.681 13.427,20.770 C13.216,20.875 13.002,20.973 12.794,21.085 C12.663,21.155 12.546,21.252 12.414,21.322 C12.273,21.398 12.120,21.451 11.978,21.526 C11.746,21.650 11.520,21.787 11.289,21.912 C11.057,22.037 10.820,22.152 10.588,22.274 C10.494,22.324 10.405,22.382 10.313,22.436 C10.294,22.428 10.275,22.419 10.255,22.410 C10.271,22.344 10.274,22.271 10.304,22.212 C10.369,22.085 10.448,21.964 10.523,21.841 C10.564,21.774 10.610,21.711 10.649,21.643 C10.717,21.524 10.778,21.401 10.846,21.281 C10.967,21.070 11.093,20.861 11.212,20.648 C11.331,20.437 11.440,20.220 11.560,20.009 C11.634,19.878 11.724,19.755 11.802,19.625 C11.844,19.556 11.869,19.475 11.914,19.408 C12.029,19.234 12.208,19.151 12.393,19.066 C12.627,18.959 12.842,18.810 13.070,18.688 C13.274,18.580 13.487,18.490 13.691,18.382 C13.832,18.308 13.964,18.217 14.102,18.137 C14.208,18.076 14.315,18.018 14.423,17.963 C14.690,17.826 14.959,17.693 15.226,17.557 C15.566,17.384 15.908,17.213 16.245,17.035 C16.459,16.921 16.664,16.790 16.877,16.675 C17.087,16.561 17.305,16.460 17.517,16.349 C17.715,16.245 17.910,16.135 18.107,16.030 C18.188,15.987 18.277,15.959 18.356,15.913 C18.481,15.842 18.600,15.759 18.725,15.687 C18.838,15.622 18.957,15.565 19.072,15.502 C19.241,15.409 19.436,15.367 19.586,15.229 C19.658,15.163 19.775,15.149 19.865,15.100 C20.127,14.958 20.385,14.808 20.647,14.667 C20.749,14.611 20.853,14.554 20.964,14.524 C21.105,14.485 21.161,14.394 21.163,14.264 C21.164,14.130 21.157,13.995 21.140,13.863 C21.117,13.680 21.156,13.622 21.333,13.636 C21.522,13.651 21.709,13.688 21.898,13.706 C22.063,13.723 22.230,13.737 22.396,13.732 C22.468,13.731 22.542,13.686 22.609,13.651 C22.852,13.521 23.091,13.384 23.335,13.255 C23.469,13.184 23.612,13.129 23.748,13.059 C23.870,12.997 23.985,12.921 24.106,12.857 C24.368,12.719 24.635,12.590 24.894,12.448 C25.079,12.347 25.256,12.232 25.442,12.120 C25.532,12.210 25.493,12.283 25.435,12.373 C25.343,12.514 25.270,12.667 25.189,12.815 C25.179,12.835 25.180,12.865 25.165,12.877 C25.028,12.998 24.977,13.168 24.899,13.323 C24.842,13.435 24.750,13.530 24.685,13.638 C24.656,13.687 24.637,13.754 24.645,13.808 C24.649,13.834 24.730,13.872 24.768,13.865 C24.932,13.836 25.087,13.856 25.242,13.906 C25.268,13.914 25.298,13.907 25.326,13.908 C25.902,13.918 26.479,13.922 27.054,13.941 C27.544,13.956 28.034,13.990 28.523,14.012 C28.691,14.020 28.859,14.008 29.026,14.022 C29.135,14.030 29.242,14.066 29.348,14.094 C29.363,14.098 29.384,14.139 29.379,14.144 C29.362,14.164 29.336,14.189 29.313,14.190 ZM28.940,6.203 C28.849,6.355 28.754,6.506 28.667,6.661 C28.559,6.855 28.460,7.055 28.350,7.249 C28.224,7.472 28.088,7.690 27.959,7.912 C27.913,7.990 27.871,8.071 27.829,8.152 C27.761,8.281 27.708,8.422 27.623,8.539 C27.556,8.631 27.455,8.703 27.360,8.771 C27.284,8.825 27.193,8.859 27.109,8.903 C26.841,9.043 26.571,9.179 26.306,9.325 C26.091,9.443 25.884,9.575 25.671,9.696 C25.552,9.764 25.426,9.820 25.305,9.883 C25.074,10.002 24.844,10.124 24.612,10.242 C24.362,10.370 24.109,10.492 23.861,10.622 C23.738,10.687 23.622,10.767 23.501,10.836 C23.394,10.896 23.285,10.951 23.176,11.007 C22.862,11.168 22.547,11.325 22.235,11.490 C21.922,11.656 21.615,11.833 21.302,11.998 C20.977,12.169 20.643,12.326 20.319,12.499 C20.030,12.654 19.749,12.827 19.461,12.985 C19.322,13.062 19.173,13.119 19.032,13.194 C18.893,13.267 18.761,13.353 18.623,13.429 C18.515,13.489 18.403,13.539 18.294,13.597 C18.047,13.730 17.804,13.870 17.554,13.997 C17.325,14.113 17.087,14.210 16.859,14.328 C16.715,14.402 16.585,14.501 16.446,14.584 C16.358,14.637 16.268,14.687 16.176,14.732 C15.954,14.842 15.729,14.944 15.509,15.057 C15.296,15.165 15.087,15.282 14.876,15.395 C14.736,15.470 14.596,15.545 14.457,15.622 C14.308,15.704 14.164,15.794 14.013,15.871 C13.881,15.939 13.741,15.992 13.606,16.056 C13.508,16.103 13.412,16.155 13.317,16.210 C13.105,16.333 12.898,16.463 12.684,16.581 C12.556,16.652 12.416,16.700 12.287,16.769 C12.051,16.895 11.820,17.031 11.583,17.158 C11.447,17.230 11.303,17.290 11.164,17.358 C11.048,17.416 10.934,17.475 10.820,17.537 C10.685,17.611 10.552,17.690 10.417,17.765 C10.170,17.901 9.924,18.038 9.674,18.171 C9.550,18.237 9.419,18.290 9.294,18.355 C9.159,18.424 9.028,18.502 8.893,18.572 C8.569,18.742 8.243,18.910 7.918,19.079 C7.841,19.119 7.766,19.163 7.690,19.206 C7.540,19.292 7.391,19.381 7.239,19.463 C7.125,19.525 7.006,19.575 6.891,19.636 C6.725,19.724 6.562,19.816 6.396,19.906 C6.309,19.953 6.221,20.000 6.133,20.045 C5.922,20.152 5.708,20.254 5.499,20.365 C5.269,20.488 5.044,20.621 4.814,20.745 C4.583,20.870 4.348,20.985 4.116,21.109 C3.900,21.225 3.688,21.352 3.470,21.465 C3.244,21.582 3.011,21.684 2.786,21.801 C2.633,21.881 2.489,21.977 2.339,22.061 C2.240,22.117 2.137,22.164 2.035,22.214 C1.814,22.323 1.589,22.425 1.373,22.542 C1.164,22.655 0.964,22.787 0.758,22.905 C0.633,22.977 0.504,23.039 0.365,23.111 C0.354,23.099 0.330,23.073 0.306,23.047 C0.306,23.000 0.306,22.954 0.306,22.907 C0.344,22.885 0.397,22.873 0.417,22.840 C0.494,22.714 0.556,22.579 0.632,22.453 C0.708,22.326 0.798,22.208 0.874,22.081 C0.929,21.991 0.968,21.891 1.018,21.798 C1.134,21.585 1.247,21.371 1.370,21.161 C1.533,20.881 1.705,20.606 1.872,20.327 C1.925,20.238 1.963,20.139 2.025,20.057 C2.082,19.982 2.153,19.910 2.233,19.861 C2.378,19.773 2.534,19.706 2.683,19.625 C2.893,19.511 3.098,19.389 3.309,19.279 C3.536,19.160 3.770,19.055 3.997,18.936 C4.206,18.826 4.409,18.703 4.618,18.593 C4.764,18.516 4.921,18.456 5.066,18.376 C5.205,18.300 5.332,18.204 5.469,18.125 C5.593,18.053 5.723,17.992 5.851,17.927 C5.995,17.854 6.139,17.784 6.282,17.709 C6.382,17.657 6.478,17.598 6.579,17.546 C6.791,17.438 7.008,17.336 7.218,17.223 C7.458,17.095 7.690,16.953 7.929,16.826 C8.145,16.711 8.368,16.607 8.587,16.497 C8.686,16.447 8.785,16.397 8.882,16.342 C9.107,16.216 9.326,16.081 9.554,15.961 C9.690,15.890 9.839,15.846 9.978,15.781 C10.064,15.742 10.143,15.687 10.225,15.638 C10.351,15.562 10.472,15.477 10.602,15.408 C10.741,15.334 10.888,15.276 11.029,15.206 C11.145,15.149 11.258,15.085 11.372,15.024 C11.617,14.894 11.863,14.766 12.108,14.634 C12.432,14.460 12.756,14.283 13.080,14.108 C13.294,13.994 13.511,13.885 13.724,13.770 C13.953,13.645 14.179,13.512 14.409,13.387 C14.532,13.321 14.661,13.266 14.787,13.203 C14.849,13.172 14.907,13.135 14.969,13.103 C15.108,13.033 15.249,12.966 15.388,12.894 C15.510,12.831 15.629,12.759 15.752,12.696 C15.897,12.623 16.047,12.559 16.190,12.483 C16.307,12.421 16.416,12.343 16.532,12.279 C16.682,12.198 16.837,12.125 16.989,12.047 C17.085,11.999 17.182,11.950 17.275,11.897 C17.491,11.773 17.702,11.639 17.920,11.521 C18.137,11.403 18.364,11.303 18.583,11.188 C18.727,11.113 18.865,11.024 19.007,10.944 C19.100,10.891 19.195,10.841 19.290,10.793 C19.516,10.680 19.744,10.574 19.967,10.456 C20.183,10.342 20.391,10.216 20.605,10.099 C20.740,10.025 20.881,9.962 21.017,9.889 C21.154,9.816 21.287,9.734 21.425,9.661 C21.535,9.602 21.652,9.553 21.763,9.494 C21.937,9.402 22.107,9.302 22.281,9.211 C22.510,9.091 22.742,8.976 22.973,8.860 C23.157,8.768 23.346,8.682 23.526,8.583 C23.663,8.508 23.786,8.411 23.922,8.335 C24.044,8.266 24.178,8.217 24.303,8.153 C24.523,8.040 24.741,7.922 24.961,7.807 C25.094,7.738 25.230,7.674 25.363,7.604 C25.487,7.539 25.609,7.469 25.733,7.403 C25.877,7.326 26.024,7.251 26.168,7.173 C26.301,7.100 26.431,7.024 26.562,6.950 C26.680,6.885 26.798,6.819 26.916,6.756 C27.080,6.668 27.245,6.582 27.409,6.495 C27.518,6.438 27.628,6.383 27.736,6.325 C27.891,6.242 28.044,6.154 28.199,6.072 C28.320,6.008 28.446,5.951 28.567,5.886 C28.748,5.787 28.927,5.684 29.108,5.583 C29.124,5.574 29.143,5.571 29.168,5.563 C29.251,5.656 29.258,5.732 29.167,5.837 C29.074,5.944 29.014,6.079 28.940,6.203 ZM18.870,7.160 C18.809,7.273 18.753,7.389 18.687,7.499 C18.514,7.789 18.330,8.074 18.161,8.367 C18.043,8.570 17.952,8.790 17.830,8.990 C17.712,9.183 17.624,9.391 17.359,9.475 C17.131,9.548 16.939,9.728 16.724,9.846 C16.584,9.923 16.426,9.968 16.282,10.039 C16.153,10.102 16.032,10.183 15.905,10.252 C15.678,10.376 15.451,10.497 15.224,10.620 C15.004,10.739 14.785,10.860 14.565,10.979 C14.450,11.041 14.333,11.099 14.218,11.160 C13.981,11.286 13.745,11.414 13.506,11.538 C13.277,11.657 13.044,11.769 12.815,11.890 C12.598,12.004 12.384,12.124 12.170,12.242 C12.043,12.312 11.917,12.384 11.790,12.453 C11.626,12.543 11.462,12.634 11.296,12.719 C11.165,12.785 11.030,12.839 10.898,12.903 C10.787,12.957 10.678,13.015 10.570,13.074 C10.431,13.152 10.297,13.237 10.156,13.311 C9.951,13.418 9.739,13.514 9.535,13.624 C9.433,13.678 9.399,13.775 9.403,13.894 C9.410,14.090 9.404,14.287 9.395,14.483 C9.393,14.508 9.341,14.553 9.315,14.551 C9.162,14.541 9.010,14.510 8.856,14.504 C8.551,14.491 8.245,14.477 7.941,14.490 C7.837,14.495 7.736,14.577 7.635,14.626 C7.542,14.672 7.447,14.714 7.358,14.767 C7.220,14.851 7.090,14.949 6.950,15.029 C6.837,15.094 6.712,15.138 6.594,15.196 C6.372,15.307 6.152,15.420 5.932,15.533 C5.792,15.605 5.650,15.675 5.513,15.753 C5.371,15.834 5.237,15.932 5.092,16.010 C4.960,16.081 4.815,16.129 4.683,16.200 C4.544,16.273 4.415,16.364 4.278,16.441 C4.223,16.471 4.131,16.519 4.105,16.498 C4.025,16.433 4.102,16.377 4.143,16.313 C4.229,16.181 4.297,16.038 4.375,15.901 C4.425,15.814 4.477,15.728 4.532,15.644 C4.614,15.521 4.705,15.404 4.783,15.279 C4.827,15.208 4.848,15.122 4.889,15.049 C4.985,14.880 5.091,14.718 5.184,14.548 C5.215,14.490 5.216,14.415 5.241,14.306 C4.848,14.306 4.488,14.317 4.128,14.303 C3.810,14.291 3.493,14.250 3.175,14.227 C3.058,14.219 2.939,14.226 2.822,14.224 C2.280,14.211 1.739,14.197 1.172,14.182 C1.192,14.144 1.199,14.106 1.221,14.094 C1.389,14.004 1.575,14.019 1.756,14.011 C2.219,13.989 2.683,13.971 3.146,13.954 C3.581,13.939 4.015,13.925 4.449,13.914 C4.756,13.907 5.064,13.906 5.372,13.902 C5.423,13.901 5.637,13.715 5.663,13.665 C5.753,13.492 5.855,13.324 6.035,13.232 C6.365,13.064 6.702,12.910 7.031,12.739 C7.239,12.630 7.436,12.498 7.640,12.382 C7.754,12.317 7.876,12.266 7.992,12.206 C8.304,12.042 8.613,11.876 8.925,11.713 C9.070,11.637 9.221,11.570 9.366,11.493 C9.516,11.412 9.661,11.321 9.811,11.238 C9.922,11.176 10.037,11.119 10.150,11.060 C10.214,11.026 10.279,10.990 10.344,10.958 C10.483,10.890 10.623,10.825 10.761,10.756 C10.871,10.701 10.978,10.639 11.087,10.581 C11.245,10.497 11.405,10.416 11.561,10.329 C11.788,10.202 12.011,10.068 12.237,9.940 C12.329,9.888 12.426,9.844 12.521,9.798 C12.662,9.730 12.805,9.668 12.944,9.597 C13.078,9.529 13.208,9.455 13.339,9.382 C13.434,9.329 13.527,9.271 13.623,9.221 C13.842,9.107 14.064,9.001 14.281,8.884 C14.451,8.792 14.619,8.696 14.778,8.587 C14.824,8.555 14.854,8.472 14.857,8.411 C14.876,7.996 14.883,7.581 14.901,7.166 C14.906,7.038 14.945,6.911 14.952,6.783 C14.971,6.434 14.983,6.085 14.994,5.736 C15.009,5.279 15.014,4.821 15.034,4.364 C15.041,4.194 15.086,4.027 15.099,3.858 C15.115,3.660 15.113,3.461 15.120,3.263 C15.132,2.889 15.147,2.514 15.156,2.139 C15.166,1.752 15.171,1.364 15.175,0.977 C15.177,0.878 15.171,0.779 15.168,0.680 C15.243,0.680 15.319,0.680 15.394,0.680 C15.392,0.878 15.388,1.076 15.391,1.273 C15.400,1.817 15.413,2.361 15.423,2.904 C15.427,3.109 15.401,3.320 15.435,3.519 C15.524,4.030 15.540,4.544 15.552,5.060 C15.560,5.361 15.561,5.662 15.572,5.963 C15.577,6.114 15.599,6.264 15.609,6.414 C15.636,6.800 15.662,7.186 15.686,7.571 C15.692,7.654 15.689,7.738 15.697,7.821 C15.703,7.895 15.719,7.969 15.730,8.043 C15.818,8.027 15.913,8.027 15.991,7.989 C16.149,7.913 16.296,7.815 16.450,7.728 C16.580,7.655 16.712,7.586 16.843,7.515 C17.048,7.405 17.255,7.298 17.459,7.187 C17.697,7.057 17.933,6.923 18.171,6.794 C18.276,6.737 18.385,6.689 18.491,6.633 C18.673,6.536 18.851,6.430 19.038,6.340 C19.121,6.300 19.220,6.292 19.311,6.269 C19.324,6.287 19.337,6.306 19.349,6.324 C19.251,6.486 19.149,6.647 19.054,6.810 C18.988,6.924 18.931,7.043 18.870,7.160 Z"
        ></path>
        <path
          id="staff-career-icon-support"
          d="M15.170,0.031 C19.186,0.031 23.201,0.031 27.216,0.031 C27.224,0.091 27.240,0.151 27.240,0.211 C27.241,8.844 27.241,17.476 27.244,26.108 C27.244,26.244 27.207,26.279 27.073,26.279 C23.226,26.275 19.380,26.276 15.534,26.276 C15.484,26.276 15.434,26.276 15.376,26.276 C15.376,25.464 15.376,24.670 15.376,23.877 C15.399,23.871 15.412,23.864 15.425,23.864 C16.499,23.863 17.573,23.862 18.647,23.863 C18.677,23.863 18.707,23.879 18.737,23.889 C18.793,23.909 18.849,23.948 18.905,23.948 C20.856,23.952 22.807,23.950 24.759,23.954 C24.890,23.954 24.923,23.914 24.923,23.786 C24.921,16.701 24.921,9.616 24.923,2.531 C24.923,2.405 24.893,2.365 24.760,2.365 C22.536,2.370 20.313,2.368 18.090,2.368 C18.040,2.368 17.990,2.368 17.940,2.368 C17.940,3.047 17.940,3.705 17.940,4.378 C19.535,4.378 21.118,4.378 22.702,4.378 C22.702,9.525 22.702,14.656 22.702,19.787 C22.684,19.801 22.667,19.815 22.650,19.829 C22.625,19.784 22.609,19.730 22.574,19.695 C18.469,15.590 14.363,11.485 10.256,7.382 C10.177,7.303 10.142,7.225 10.142,7.112 C10.145,5.593 10.144,4.074 10.144,2.555 C10.144,2.496 10.138,2.438 10.133,2.368 C10.072,2.368 10.026,2.368 9.980,2.368 C9.389,2.368 8.798,2.373 8.207,2.365 C8.068,2.363 8.037,2.406 8.037,2.539 C8.042,3.997 8.040,5.456 8.045,6.914 C8.046,7.049 8.010,7.086 7.874,7.086 C6.420,7.081 4.966,7.083 3.512,7.083 C3.326,7.083 3.326,7.083 3.326,7.264 C3.326,12.740 3.326,18.217 3.326,23.694 C3.326,23.744 3.326,23.794 3.326,23.850 C3.374,23.855 3.405,23.861 3.437,23.861 C4.811,23.862 6.185,23.861 7.560,23.864 C7.664,23.864 7.684,23.825 7.684,23.732 C7.681,23.151 7.680,22.569 7.685,21.988 C7.686,21.879 7.647,21.855 7.546,21.856 C6.936,21.860 6.327,21.858 5.717,21.858 C5.662,21.858 5.607,21.858 5.538,21.858 C5.538,21.792 5.538,21.746 5.538,21.700 C5.538,17.579 5.539,13.457 5.536,9.336 C5.535,9.209 5.573,9.179 5.695,9.179 C6.497,9.184 7.299,9.180 8.101,9.186 C8.175,9.187 8.266,9.226 8.319,9.278 C12.484,13.436 16.646,17.597 20.808,21.759 C20.831,21.783 20.851,21.811 20.882,21.849 C19.035,21.849 17.208,21.849 15.367,21.849 C15.367,21.785 15.367,21.730 15.367,21.675 C15.367,20.428 15.368,19.180 15.364,17.933 C15.364,17.862 15.339,17.770 15.291,17.722 C14.662,17.084 14.028,16.452 13.394,15.819 C13.373,15.798 13.346,15.784 13.298,15.749 C13.298,19.270 13.298,22.765 13.298,26.276 C13.221,26.276 13.162,26.276 13.102,26.276 C9.143,26.276 5.184,26.276 1.226,26.276 C0.978,26.276 1.005,26.298 1.005,26.059 C1.005,20.522 1.005,14.984 1.005,9.446 C1.005,6.375 1.005,3.304 1.006,0.233 C1.006,0.165 1.030,0.098 1.042,0.031 C5.048,0.031 9.054,0.031 13.060,0.031 C13.070,0.099 13.090,0.167 13.090,0.235 C13.092,3.048 13.091,5.861 13.095,8.674 C13.095,8.754 13.123,8.856 13.176,8.910 C13.801,9.545 14.432,10.173 15.063,10.803 C15.083,10.823 15.110,10.837 15.150,10.865 C15.150,10.787 15.150,10.731 15.150,10.675 C15.150,7.192 15.150,3.709 15.151,0.225 C15.151,0.161 15.164,0.096 15.170,0.031 ZM3.326,2.373 C3.326,2.434 3.326,2.480 3.326,2.525 C3.326,3.660 3.328,4.794 3.322,5.929 C3.322,6.066 3.369,6.089 3.491,6.089 C4.621,6.085 5.751,6.086 6.882,6.086 C6.931,6.086 6.981,6.086 7.032,6.086 C7.032,4.837 7.032,3.608 7.032,2.373 C5.797,2.373 4.574,2.373 3.326,2.373 Z"
        ></path>
        <path
          id="staff-career-icon-tank"
          d="M22.659,3.601 C24.067,2.484 25.481,1.362 26.895,0.241 C26.903,0.248 26.912,0.256 26.921,0.263 C25.799,1.676 24.678,3.089 23.559,4.500 C23.252,4.194 22.962,3.903 22.659,3.601 ZM24.174,6.594 C24.067,8.240 23.972,9.887 23.876,11.533 C23.786,13.076 23.700,14.620 23.610,16.164 C23.527,17.571 23.443,18.979 23.354,20.387 C23.351,20.440 23.304,20.505 23.259,20.541 C21.832,21.676 20.404,22.809 18.975,23.942 C17.223,25.331 15.470,26.719 13.721,28.110 C13.638,28.177 13.589,28.174 13.507,28.111 C10.279,25.589 7.048,23.071 3.820,20.548 C3.766,20.506 3.719,20.423 3.714,20.356 C3.637,19.249 3.568,18.141 3.496,17.033 C3.427,15.981 3.356,14.929 3.288,13.877 C3.234,13.040 3.185,12.203 3.131,11.366 C3.064,10.324 2.995,9.281 2.928,8.238 C2.889,7.654 2.855,7.069 2.812,6.485 C2.804,6.388 2.859,6.367 2.925,6.338 C4.051,5.842 5.177,5.342 6.306,4.850 C6.419,4.801 6.457,4.743 6.455,4.622 C6.448,4.144 6.452,3.666 6.452,3.188 C6.452,3.138 6.452,3.088 6.452,3.021 C6.525,3.021 6.580,3.021 6.635,3.021 C7.648,3.021 8.661,3.018 9.673,3.023 C9.812,3.024 9.924,2.987 10.038,2.912 C11.175,2.159 12.316,1.411 13.453,0.658 C13.548,0.595 13.613,0.591 13.711,0.656 C14.847,1.419 15.986,2.178 17.128,2.933 C17.207,2.985 17.317,3.016 17.412,3.017 C18.359,3.023 19.307,3.023 20.254,3.018 C20.376,3.017 20.414,3.048 20.412,3.174 C20.405,3.661 20.413,4.148 20.406,4.636 C20.405,4.749 20.443,4.799 20.545,4.842 C21.692,5.326 22.837,5.817 23.985,6.300 C24.127,6.360 24.185,6.423 24.174,6.594 ZM22.576,7.290 C21.530,6.868 20.487,6.438 19.441,6.015 C19.342,5.975 19.308,5.925 19.310,5.819 C19.317,5.463 19.313,5.107 19.313,4.751 C19.313,4.487 19.313,4.487 19.042,4.487 C18.338,4.487 17.635,4.489 16.932,4.484 C16.854,4.483 16.764,4.456 16.699,4.413 C15.702,3.755 14.707,3.092 13.715,2.427 C13.620,2.363 13.556,2.355 13.455,2.422 C12.456,3.086 11.454,3.745 10.448,4.399 C10.368,4.451 10.259,4.482 10.163,4.483 C9.352,4.490 8.541,4.490 7.730,4.484 C7.594,4.483 7.543,4.509 7.548,4.659 C7.560,5.043 7.547,5.428 7.554,5.812 C7.556,5.921 7.525,5.974 7.420,6.018 C6.418,6.439 5.421,6.868 4.419,7.289 C4.284,7.345 4.222,7.407 4.248,7.565 C4.277,7.749 4.272,7.939 4.282,8.126 C4.283,8.126 4.284,8.126 4.284,8.126 C4.333,9.010 4.382,9.894 4.432,10.778 C4.486,11.728 4.542,12.677 4.596,13.627 C4.654,14.665 4.712,15.704 4.770,16.742 C4.823,17.687 4.878,18.632 4.925,19.577 C4.930,19.688 4.969,19.755 5.053,19.821 C6.027,20.577 6.998,21.336 7.970,22.095 C9.817,23.537 11.664,24.978 13.511,26.421 C13.581,26.476 13.629,26.499 13.714,26.432 C16.520,24.223 19.327,22.015 22.137,19.810 C22.216,19.749 22.248,19.683 22.251,19.587 C22.263,19.189 22.279,18.791 22.296,18.393 C22.335,17.424 22.374,16.455 22.415,15.485 C22.472,14.142 22.532,12.798 22.588,11.455 C22.642,10.158 22.690,8.861 22.752,7.565 C22.759,7.408 22.713,7.345 22.576,7.290 ZM21.141,17.873 C21.123,18.200 21.115,18.528 21.090,18.855 C21.084,18.929 21.044,19.021 20.988,19.065 C18.574,20.970 16.156,22.869 13.740,24.771 C13.670,24.826 13.623,24.851 13.538,24.784 C11.109,22.875 8.679,20.970 6.246,19.067 C6.158,18.998 6.131,18.925 6.126,18.819 C6.072,17.860 6.012,16.901 5.955,15.942 C5.902,15.035 5.851,14.128 5.798,13.220 C5.745,12.299 5.689,11.378 5.634,10.456 C5.593,9.769 5.551,9.081 5.509,8.394 C5.504,8.316 5.506,8.256 5.598,8.215 C6.177,7.962 6.753,7.701 7.330,7.442 C7.346,7.435 7.365,7.433 7.400,7.424 C7.428,7.831 7.456,8.224 7.481,8.616 C7.539,9.518 7.595,10.421 7.652,11.323 C7.717,12.370 7.782,13.418 7.848,14.465 C7.908,15.419 7.967,16.373 8.033,17.326 C8.036,17.379 8.088,17.442 8.134,17.477 C8.916,18.075 9.700,18.670 10.484,19.265 C11.380,19.946 12.275,20.626 13.171,21.306 C13.336,21.431 13.696,21.439 13.853,21.319 C15.590,20.003 17.326,18.685 19.064,17.371 C19.139,17.314 19.174,17.255 19.180,17.163 C19.219,16.466 19.262,15.769 19.304,15.072 C19.346,14.371 19.388,13.669 19.430,12.968 C19.485,12.051 19.539,11.135 19.595,10.218 C19.649,9.315 19.705,8.413 19.760,7.510 C19.763,7.475 19.773,7.440 19.783,7.388 C20.042,7.514 20.289,7.634 20.536,7.754 C20.873,7.918 21.209,8.084 21.548,8.243 C21.634,8.283 21.658,8.332 21.653,8.427 C21.561,10.121 21.475,11.815 21.383,13.508 C21.305,14.963 21.221,16.418 21.141,17.873 ZM18.464,13.122 C18.385,14.422 18.301,15.721 18.223,17.021 C18.217,17.114 18.184,17.172 18.110,17.229 C16.633,18.345 15.158,19.463 13.685,20.583 C13.604,20.645 13.555,20.637 13.480,20.578 C11.969,19.406 10.456,18.237 8.945,17.066 C8.909,17.038 8.872,16.987 8.869,16.945 C8.803,16.118 8.743,15.292 8.682,14.465 C8.625,13.708 8.569,12.951 8.513,12.195 C8.447,11.298 8.382,10.401 8.316,9.504 C8.260,8.757 8.189,8.010 8.153,7.262 C8.128,6.716 8.148,6.168 8.148,5.598 C8.214,5.598 8.270,5.598 8.325,5.598 C9.075,5.598 9.825,5.596 10.575,5.600 C10.699,5.601 10.798,5.568 10.897,5.494 C11.560,4.996 12.227,4.503 12.893,4.008 C12.921,3.987 12.953,3.970 13.009,3.936 C13.009,4.015 13.009,4.069 13.009,4.123 C13.009,7.032 13.009,9.942 13.009,12.852 C13.009,13.048 13.009,13.048 13.206,13.048 C13.515,13.048 13.824,13.048 14.148,13.048 C14.148,10.012 14.148,6.988 14.148,3.925 C14.215,3.971 14.255,3.996 14.292,4.024 C14.947,4.518 15.600,5.015 16.259,5.503 C16.334,5.559 16.444,5.593 16.538,5.594 C17.242,5.602 17.945,5.601 18.648,5.595 C18.773,5.594 18.802,5.631 18.805,5.754 C18.830,7.104 18.755,8.451 18.664,9.797 C18.589,10.905 18.532,12.014 18.464,13.122 ZM0.400,0.273 C0.409,0.264 0.418,0.255 0.426,0.247 C1.837,1.365 3.247,2.484 4.647,3.594 C4.347,3.892 4.053,4.184 3.746,4.489 C2.638,3.092 1.519,1.682 0.400,0.273 ZM4.649,23.765 C3.245,24.879 1.831,26.001 0.416,27.124 C0.408,27.115 0.400,27.107 0.393,27.099 C1.515,25.685 2.637,24.271 3.753,22.864 C4.055,23.168 4.347,23.462 4.649,23.765 ZM26.923,27.101 C26.916,27.109 26.908,27.118 26.901,27.126 C25.485,26.002 24.069,24.879 22.660,23.761 C22.964,23.460 23.259,23.168 23.563,22.867 C24.677,24.271 25.800,25.686 26.923,27.101 Z"
        ></path>
        <path
          id="staff-career-icon-medic"
          d="M21.821,13.422 C21.716,13.482 21.640,13.491 21.531,13.426 C20.971,13.094 20.407,12.768 19.839,12.450 C19.720,12.383 19.682,12.309 19.684,12.175 C19.691,11.524 19.690,10.874 19.684,10.223 C19.683,10.107 19.715,10.041 19.820,9.981 C21.993,8.733 24.164,7.481 26.335,6.229 C26.383,6.202 26.431,6.176 26.493,6.142 C27.157,7.289 27.815,8.426 28.480,9.576 C28.426,9.610 28.380,9.640 28.333,9.667 C26.162,10.918 23.990,12.168 21.821,13.422 ZM23.531,6.231 C23.119,6.224 22.706,6.223 22.294,6.232 C22.158,6.235 22.132,6.186 22.133,6.063 C22.138,5.268 22.136,4.472 22.136,3.677 C22.136,3.490 22.135,3.490 21.942,3.490 C21.140,3.490 20.339,3.488 19.537,3.492 C19.423,3.493 19.384,3.462 19.386,3.343 C19.393,2.922 19.392,2.501 19.386,2.080 C19.384,1.967 19.423,1.938 19.531,1.939 C20.201,1.943 20.872,1.941 21.542,1.941 C22.207,1.941 22.873,1.943 23.538,1.938 C23.654,1.938 23.691,1.969 23.690,2.088 C23.686,3.416 23.686,4.745 23.690,6.074 C23.691,6.199 23.653,6.233 23.531,6.231 ZM28.679,20.318 C28.016,21.463 27.357,22.603 26.691,23.754 C26.578,23.689 26.477,23.632 26.377,23.574 C22.733,21.474 19.088,19.375 15.445,17.272 C15.331,17.206 15.250,17.199 15.131,17.268 C11.297,19.481 7.462,21.689 3.626,23.898 C3.583,23.924 3.538,23.948 3.477,23.981 C2.814,22.835 2.157,21.699 1.492,20.550 C1.543,20.517 1.587,20.485 1.634,20.458 C5.478,18.244 9.321,16.030 13.166,13.820 C13.271,13.759 13.301,13.690 13.301,13.574 C13.298,9.343 13.298,5.112 13.298,0.881 C13.298,0.825 13.304,0.769 13.308,0.713 C14.630,0.713 15.952,0.713 17.274,0.713 C17.274,4.996 17.275,9.278 17.271,13.561 C17.271,13.695 17.310,13.768 17.428,13.836 C21.140,15.969 24.849,18.106 28.559,20.242 C28.595,20.263 28.629,20.287 28.679,20.318 ZM8.575,3.487 C8.442,3.486 8.413,3.528 8.413,3.653 C8.419,4.463 8.414,5.273 8.419,6.082 C8.419,6.201 8.384,6.232 8.268,6.231 C7.846,6.225 7.424,6.225 7.002,6.230 C6.894,6.232 6.857,6.201 6.857,6.088 C6.861,4.754 6.861,3.420 6.857,2.087 C6.857,1.967 6.897,1.938 7.010,1.939 C8.346,1.942 9.682,1.941 11.018,1.941 C11.059,1.941 11.100,1.946 11.149,1.949 C11.149,2.462 11.149,2.965 11.149,3.490 C11.088,3.490 11.034,3.490 10.980,3.490 C10.179,3.490 9.377,3.493 8.575,3.487 ZM10.883,10.260 C10.873,10.906 10.876,11.552 10.882,12.197 C10.883,12.314 10.850,12.382 10.745,12.441 C10.162,12.770 9.582,13.105 9.004,13.443 C8.917,13.495 8.857,13.484 8.776,13.438 C6.692,12.234 4.606,11.033 2.521,9.832 C2.286,9.696 2.050,9.561 1.815,9.425 C1.776,9.402 1.737,9.377 1.689,9.347 C2.352,8.201 3.010,7.064 3.674,5.917 C3.730,5.946 3.779,5.969 3.826,5.996 C6.119,7.317 8.410,8.639 10.705,9.955 C10.835,10.030 10.885,10.108 10.883,10.260 ZM3.951,12.079 C4.316,12.445 4.675,12.804 5.040,13.170 C4.421,13.787 3.779,14.427 3.131,15.074 C3.792,15.728 4.433,16.363 5.063,16.985 C4.683,17.363 4.323,17.721 3.950,18.092 C3.940,18.082 3.902,18.050 3.867,18.016 C2.942,17.093 2.017,16.170 1.092,15.248 C1.039,15.195 0.984,15.144 0.929,15.093 C0.929,15.083 0.929,15.074 0.929,15.064 C0.972,15.030 1.019,14.999 1.057,14.960 C1.993,14.028 2.928,13.095 3.863,12.162 C3.896,12.130 3.930,12.099 3.951,12.079 ZM6.859,23.960 C7.386,23.960 7.894,23.960 8.414,23.960 C8.414,24.866 8.414,25.763 8.414,26.686 C9.337,26.686 10.239,26.686 11.148,26.686 C11.148,27.209 11.148,27.717 11.148,28.241 C11.088,28.241 11.038,28.241 10.988,28.241 C9.670,28.241 8.353,28.239 7.036,28.244 C6.892,28.245 6.856,28.205 6.856,28.064 C6.861,26.749 6.859,25.434 6.859,24.119 C6.859,24.069 6.859,24.019 6.859,23.960 ZM13.445,20.980 C14.021,20.656 14.593,20.325 15.163,19.993 C15.251,19.941 15.317,19.939 15.406,19.992 C15.984,20.331 16.564,20.665 17.147,20.996 C17.240,21.049 17.277,21.106 17.277,21.215 C17.274,23.986 17.274,26.757 17.274,29.528 C15.952,29.528 14.630,29.528 13.308,29.528 C13.304,29.472 13.298,29.416 13.298,29.360 C13.298,26.655 13.299,23.949 13.295,21.244 C13.295,21.116 13.332,21.044 13.445,20.980 ZM19.396,26.686 C19.466,26.686 19.522,26.686 19.577,26.686 C20.379,26.686 21.180,26.683 21.981,26.689 C22.106,26.690 22.139,26.656 22.138,26.532 C22.133,25.727 22.136,24.922 22.136,24.118 C22.136,24.068 22.136,24.018 22.136,23.959 C22.657,23.959 23.161,23.959 23.680,23.959 C23.683,24.014 23.687,24.063 23.687,24.112 C23.688,25.432 23.686,26.751 23.691,28.071 C23.691,28.204 23.657,28.245 23.519,28.244 C22.198,28.239 20.876,28.240 19.554,28.243 C19.431,28.244 19.382,28.218 19.385,28.082 C19.394,27.666 19.388,27.249 19.389,26.833 C19.389,26.792 19.393,26.750 19.396,26.686 ZM26.316,12.096 C27.306,13.088 28.311,14.093 29.304,15.086 C28.314,16.076 27.309,17.081 26.304,18.086 C25.952,17.734 25.592,17.374 25.220,17.003 C25.854,16.372 26.495,15.733 27.139,15.091 C26.492,14.445 25.853,13.808 25.220,13.177 C25.595,12.807 25.959,12.448 26.316,12.096 Z"
        ></path>
        <path
          id="staff-career-icon-warrior"
          d="M30.032,27.175 C28.608,23.640 27.184,20.106 25.759,16.572 C25.769,16.565 25.778,16.558 25.788,16.551 C26.864,17.719 27.940,18.886 29.046,20.087 C29.379,17.012 29.707,13.980 30.035,10.947 C30.044,10.948 30.053,10.948 30.062,10.949 C30.062,16.356 30.062,21.763 30.062,27.171 C30.052,27.172 30.042,27.173 30.032,27.175 ZM28.906,28.538 C28.922,28.570 28.936,28.603 28.968,28.672 C28.295,28.331 27.661,28.009 27.027,27.687 C25.621,26.973 24.214,26.261 22.810,25.544 C22.739,25.508 22.672,25.445 22.630,25.378 C22.224,24.743 21.826,24.104 21.421,23.469 C21.354,23.363 21.275,23.263 21.186,23.175 C17.670,19.673 14.152,16.172 10.634,12.672 C9.519,11.562 8.405,10.452 7.288,9.345 C7.216,9.273 7.184,9.202 7.185,9.099 C7.190,8.608 7.187,8.117 7.187,7.626 C7.187,7.585 7.187,7.544 7.187,7.504 C7.197,7.498 7.208,7.492 7.219,7.485 C11.416,11.663 15.613,15.840 19.807,20.014 C19.951,19.866 20.084,19.729 20.234,19.574 C16.051,15.410 11.852,11.231 7.639,7.038 C7.683,7.029 7.712,7.019 7.740,7.018 C8.269,7.017 8.799,7.015 9.328,7.022 C9.392,7.023 9.469,7.066 9.517,7.113 C10.979,8.564 12.438,10.019 13.898,11.472 C17.091,14.649 20.281,17.828 23.481,20.998 C23.669,21.185 23.924,21.307 24.154,21.451 C24.649,21.762 25.149,22.066 25.644,22.379 C25.711,22.421 25.774,22.487 25.810,22.557 C26.845,24.550 27.875,26.544 28.906,28.538 ZM10.712,6.093 C9.278,6.089 7.845,6.090 6.411,6.090 C6.352,6.090 6.292,6.090 6.217,6.090 C6.217,7.644 6.217,9.181 6.217,10.730 C5.573,10.730 4.944,10.730 4.297,10.730 C4.297,10.663 4.297,10.604 4.297,10.544 C4.297,8.986 4.297,7.428 4.299,5.871 C4.299,5.770 4.273,5.696 4.200,5.623 C3.053,4.486 1.908,3.346 0.763,2.208 C0.724,2.170 0.676,2.142 0.633,2.110 C0.633,2.100 0.633,2.091 0.633,2.082 C1.148,1.567 1.664,1.052 2.179,0.538 C2.189,0.538 2.198,0.538 2.208,0.538 C2.235,0.574 2.258,0.614 2.289,0.646 C3.430,1.783 4.572,2.918 5.710,4.057 C5.800,4.147 5.889,4.185 6.016,4.184 C7.577,4.180 9.137,4.182 10.697,4.182 C10.752,4.182 10.808,4.182 10.876,4.182 C10.880,4.232 10.885,4.272 10.885,4.313 C10.886,4.851 10.881,5.389 10.889,5.926 C10.892,6.069 10.841,6.093 10.712,6.093 ZM14.658,29.365 C15.504,29.274 16.351,29.185 17.198,29.094 C17.938,29.015 18.678,28.933 19.417,28.853 C19.678,28.825 19.938,28.799 20.199,28.771 C20.230,28.768 20.261,28.761 20.326,28.750 C19.133,27.661 17.960,26.591 16.787,25.521 C16.792,25.511 16.796,25.501 16.800,25.492 C16.844,25.506 16.888,25.519 16.930,25.536 C20.404,26.923 23.877,28.309 27.350,29.698 C27.399,29.717 27.439,29.760 27.483,29.791 C21.991,29.791 16.499,29.791 11.007,29.791 C11.470,29.730 11.933,29.662 12.397,29.609 C13.150,29.522 13.904,29.445 14.658,29.365 Z"
        ></path>
      </g>
    </defs>
  </svg>
</div>`,
  pageTitle: "https://ak.hypergryph.com/favicon.ico",
};
