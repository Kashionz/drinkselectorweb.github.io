import React, { useState, useEffect } from 'react';

const shops = [
    "舞讚紅茶冰 龜山中興店",
    "玉津咖啡 桃園龜山店",
    "得正 OOLONG TEA PROJECT 桃園中興計劃",
    "Who's Tea 鬍子茶 龜山店",
    "清心福全 龜山中興店",
    "日出客棧茶飲 小農鮮奶 龜山中和南店",
    "吳家紅茶冰 桃園桃鶯店",
    "大苑子 龜山中興店",
    "紅茶媽媽 桃園龜山店",
    "老賴茶棧 桃園桃鶯店",
    "鶴茶樓 鶴頂紅茶商店 桃鶯店",
    "得正 OOLONG TEA PROJECT 桃鶯計劃",
    "珍煮丹 桃園桃鶯店",
    "橘子工坊龜山店",
    "武林茶 桃園八德店",
    "御私藏鮮奶茶專賣店 桃園民生店",
    "玉津咖啡 桃園站前店",
    "龜記茗品 龜山中興店",
    "哈茶區",
    "好了啦紅茶冰 龜山自強店",
    "魚池新語 桃市中山東店",
    "拾汣茶屋 龜山萬壽店",
    "玉津咖啡 桃鶯鳳鳴店",
    "烏弄 八德桃鶯店",
    "果採試嚐",
    "白巷子 桃市春日店",
    "拾汣茶屋 桃園民族店",
    "ㄚ寶Lemon 桃園大同店",
    "玉津咖啡 桃園寶山店",
    "新井茶鶯歌店",
    "春陽茶事 桃園桃鶯店",
    "TEA TOP第一味 桃園復興店",
    "林三茶研所 桃鶯店",
    "無飲 桃園店",
    "拾汣茶屋 大湳店",
    "龍角 Dragon Horn 桃園桃鶯店",
    "花路手作飲 桃園中山店",
    "功夫茶KUNGFUTEA 桃園中正店",
    "甘萃鮮飲茶 中山店",
    "軍茶 桃園永安店",
    "山焙 成功民生店",
    "巴司克 桃園民權店",
    "Sulina奶茶 貓爪牛奶凍",
    "黛黛茶 DailyDae 桃園八德店",
    "厚味茶理 介壽店",
    "麻古茶坊MACU TEA 桃園桃鶯店",
    "無飲 八德和平店",
    "甘蔗の媽媽 桃園站前店",
    "半糖少冰 南平店",
    "玉津咖啡 八德店",
    "Chatime 八德廣福店",
    "萬波 桃園中正店",
    "貓頭鷹茶森林 桃園中正店",
    "思茶 桃園中正店",
    "春和茶水攤 桃園壽昌店",
    "得正 OOLONG TEA PROJECT 桃園中正計劃",
    "七盞茶 桃園大興店",
    "CoCo都可 鳳鳴",
    "禮想紅茶烏龍專販所 桃園中正所",
    "玉津咖啡 藝文店",
    "蕎淶清飲Chillax Drink",
    "利客坊奶蓋專門店 桃園廣豐店",
    "一勺咖啡 桃園陽明館",
    "Tree double 双樹茶飲",
    "玉津咖啡 桃園泰昌店",
    "50嵐 桃園桃鶯店",
    "COMEBUY 桃園桃鶯",
    "小金旺茶坊 桃園中正店",
    "先喝道 藝文店",
    "茶湯會 桃園中正店",
    "仙草哥七十六號",
    "FEISIANG啡饗 市府店",
    "上宇林 八德介壽店",
    "滿上仙草茶飲專賣店 桃園大有店",
    "林三茶研所 桃園南平店",
    "林記古意奶茶 八德店",
    "GOTCHA 鮮饗茶 桃園八德店",
    "COMEBUY 桃園延平",
    "厚味茶理-桃鶯店",
    "茶水棧",
    "上宇林 八德桃鶯店",
    "可不可熟成紅茶 八德桃鶯店",
    "鮮茶道 桃園大同店",
    "一沐日 八德介壽店",
    "雞蛋糕 X 紅茶冰",
    "小金旺茶坊 武陵高中店",
    "先喝道 鶯歌建國店",
    "Tea's 原味 龜山中興店",
    "金茶伍 桃園中正門市",
    "小綠洲咖啡 Tiny Greeny Cafe",
    "溙港茶飲",
    "五桐號WooTEA 鶯歌建國店",
    "查理國王飲品專賣 廣福店",
    "春水堂 桃園藝文店",
    "晨間廚房 桃園山鶯店",
    "COMEBUY 桃園迴龍店",
    "清原芋圓 桃園南平店",
    "YOGU 私廚飲品 優格飲",
    "Jazz Tea 就是茶",
    "Louisa 路易莎 桃鶯店",
    "查德 果茶 特調",
    "多那之咖啡Donutes桃園復興店",
    "熊好運咖啡 GULAK COFFEE",
    "cama café 桃園聖保祿店",
    "85度C 桃園北興店",
    "Zan coffee 越南咖啡｜麵包",
    "麗太咖啡 Mrs Li Cafe",
    "老窩咖啡 中山東店",
    "阿婆咖啡-三民店",
    "貳拾穗咖啡 桃園店",
    "KOMEDA'S COFFEE 客美多咖啡 桃園藝文店",
    "程美咖啡",
    "92度半咖啡 桃園慈文店",
    "好芋造Good Omens",
    "紅菓咖啡 桃園經國店",
    "迷客夏 Milksha 桃園桃鶯店",
    "茶聚 桃園中華店",
    "鮮茶道 桃園春日一店",
    "合順青草茶",
    "菓點子 春日店",
    "鮮茶道 桃園陽明公園店",
    "TINA麵包咖啡 桃園店",
    "鼎淳手作茶飲",
    "念念泡沫紅茶店 桃園寶山店",
    "一手私藏世界紅茶 桃園南平店",
    "紅茶帝國 桃園春日店"
];

const ShopSelector = () => {
    const [currentShop, setCurrentShop] = useState('');
    const [isSelecting, setIsSelecting] = useState(false);
    const [finalShop, setFinalShop] = useState('');
    const [speed, setSpeed] = useState(50);

    useEffect(() => {
        let interval;
        if (isSelecting) {
            interval = setInterval(() => {
                const randomShop = shops[Math.floor(Math.random() * shops.length)];
                setCurrentShop(randomShop);
                setSpeed(prev => Math.min(prev * 1.05, 300)); // 逐漸減慢速度
            }, speed);
        }
        return () => clearInterval(interval);
    }, [isSelecting, speed]);

    const startSelection = () => {
        setIsSelecting(true);
        setFinalShop('');
        setSpeed(50);
        
        // 3秒後停止選擇
        setTimeout(() => {
            setIsSelecting(false);
            const selected = shops[Math.floor(Math.random() * shops.length)];
            setFinalShop(selected);
            setCurrentShop(selected);
        }, 3000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
                <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
                    飲料店隨機選擇器
                </h1>
                
                <div className="min-h-32 flex items-center justify-center mb-8">
                    <div className={`text-2xl font-semibold text-center ${
                        isSelecting 
                            ? 'text-blue-500 animate-pulse' 
                            : finalShop 
                                ? 'text-green-600' 
                                : 'text-gray-400'
                    }`}>
                        {currentShop || '請點擊開始選擇'}
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <button
                        onClick={startSelection}
                        disabled={isSelecting}
                        className={`
                            px-6 py-3 rounded-lg text-white font-semibold
                            ${isSelecting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition'}
                        `}
                    >
                        {isSelecting ? '選擇中...' : '開始選擇'}
                    </button>
                </div>
                
                {finalShop && !isSelecting && (
                    <div className="mt-8 text-center">
                        <div className="text-lg text-gray-600">🎉 選擇結果 🎉</div>
                        <div className="text-2xl font-bold text-indigo-600 mt-2">
                            {finalShop}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopSelector;