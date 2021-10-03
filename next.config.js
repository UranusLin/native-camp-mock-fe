module.exports = {
    images: {
        domains: ['nativecamp.net'],
        minimumCacheTTL: 60,
    },
    publicRuntimeConfig: {
        navTab: [
            { name: "首頁", image: "https://nativecamp.net/user/images/gnavi/ic_home.svg", imageHov: "https://nativecamp.net/user/images/gnavi/ic_home-h.svg" },
            { name: "指南", image: "https://nativecamp.net/user/images/gnavi/ic_guide.svg", imageHov: "https://nativecamp.net/user/images/gnavi/ic_guide-h.svg" },
            { name: "學習", image: "https://nativecamp.net/user/images/gnavi/ic_study.svg", imageHov: "https://nativecamp.net/user/images/gnavi/ic_study-h.svg" },
            { name: "搜尋・預約講師", image: "https://nativecamp.net/user/images/gnavi/ic_search.svg", imageHov: "https://nativecamp.net/user/images/gnavi/ic_search-h.svg" },
            { name: "其他", image: "https://nativecamp.net/user/images/gnavi/ic_etc.svg", imageHov: "https://nativecamp.net/user/images/gnavi/ic_etc-h.svg" },
        ],
        navDetails: {
            "首頁": [],
            "指南": [
                {
                    "name": "使用方法",
                    "list": ["致初次使用者", "使用方法", "關於上課不限堂數"]
                },
                {
                    "name": "收費・套餐",
                    "list": ["關於費用"]
                },
                {
                    "name": "使用環境",
                    "list": ["支援的瀏覽器", "關於英語會話APP"]
                }
            ], "學習": [
                {
                    "name": "教材",
                    "list": ["瀏覽教材", "課程及教材診斷", "線上商店 (教材購買)"]
                },
                {
                    "name": "精選教材",
                    "list": ["Callan Method(凱倫學習法)", "TOEIC®L&R TEST對策"]
                },
                {
                    "name": "自學內容",
                    "list": ["口說測驗", "口語訓練"]
                }
            ], "搜尋・預約講師": [{
                "name": "講師介紹",
                "list": ["講師一覽", "排名", "評論"]
            },
            {
                "name": "關於講師",
                "list": ["關於母語人士", "關於卡通人物講師"]
            },
            ], "其他": [{
                "name": "推薦內容",
                "list": ["問卷結果 / 會員的心聲"]
            },
            {
                "name": "其他",
                "list": ["上課環境測試", "FAQ (聯絡我們)", "網站導覽"]
            },
            ]
        },
        footer: [
            { "name": "NativeCamp.", "list": ["首頁", "新用戶註冊", "登入", "重新加入", "FOR TUTORS"] },
            { "name": "指南", "list": ["致初次使用者", "使用方法", "關於上課不限堂數", "關於費用", "支援的瀏覽器", " 關於英語會話 App"] },
            { "name": "學習", "list": ["瀏覽教材", "課程及教材診斷", "線上商店 (教材購買)", "Callan Method(凱倫學習法)", "TOEIC®L&R TEST對策", "口說測驗", "口語訓練"] },
            { "name": "搜尋講師・預約", "list": ["講師一覽", " 排名", "評論", "關於母語人士", "關於卡通人物講師"] },
            { "name": "其他", "list": ["問卷結果 / 會員的心聲", "上課環境測試", "FAQ (聯絡我們)", "網站導覽"] },
            { "name": "公司資訊", "list": ["運營公司", "使用條款", "特別指定商業交易法", "關於個人資訊處理", "徵才訊息", "我們的展望"] },
        ]
    },

}