var Game = Game || {};
Game.lang = (function () {

    var instance = {
        current: 'en',
        data: {}
    };

    // ================================
    // Translation dictionary
    // Format: key = English text, value = { en: "...", zh: "..." }
    // When Chinese is selected, Game.lang.get(text) returns the zh value
    // ================================

    var dict = {

        // ----- Tab Names -----
        "Resources": { en: "Resources", zh: "资源" },
        "Research": { en: "Research", zh: "研究" },
        "Solar System": { en: "Solar System", zh: "太阳系" },
        "Wonders": { en: "Wonders", zh: "奇观" },
        "Sol Center": { en: "Sol Center", zh: "太阳中心" },
        "Machines": { en: "Machines", zh: "机器" },
        "Interstellar": { en: "Interstellar", zh: "星际" },
        "Stargaze": { en: "Stargaze", zh: "星凝视界" },
        "Help / FAQ": { en: "Help / FAQ", zh: "帮助 / 常见问题" },
        "More...": { en: "More...", zh: "更多..." },

        // ----- Resource Categories -----
        "Earth Resources": { en: "Earth Resources", zh: "地球资源" },
        "Inner Planetary Resources": { en: "Inner Planetary Resources", zh: "内行星资源" },
        "Outer Planetary Resources": { en: "Outer Planetary Resources", zh: "外行星资源" },

        // ----- Resource Names -----
        "Energy": { en: "Energy", zh: "能量" },
        "Plasma": { en: "Plasma", zh: "等离子体" },
        "Uranium": { en: "Uranium", zh: "铀" },
        "Lava": { en: "Lava", zh: "岩浆" },
        "Oil": { en: "Oil", zh: "石油" },
        "Metal": { en: "Metal", zh: "金属" },
        "Gems": { en: "Gems", zh: "宝石" },
        "Gem": { en: "Gem", zh: "宝石" },
        "Charcoal": { en: "Charcoal", zh: "木炭" },
        "Wood": { en: "Wood", zh: "木材" },
        "Silicon": { en: "Silicon", zh: "硅" },
        "Lunarite": { en: "Lunarite", zh: "月岩" },
        "Methane": { en: "Methane", zh: "甲烷" },
        "Titanium": { en: "Titanium", zh: "钛" },
        "Gold": { en: "Gold", zh: "金" },
        "Silver": { en: "Silver", zh: "银" },
        "Hydrogen": { en: "Hydrogen", zh: "氢" },
        "Helium": { en: "Helium", zh: "氦" },
        "Ice": { en: "Ice", zh: "冰" },
        "Meteorite": { en: "Meteorite", zh: "陨石" },
        "Science Production": { en: "Science Production", zh: "科技生产" },
        "Rocket Fuel": { en: "Rocket Fuel", zh: "火箭燃料" },
        "Antimatter": { en: "Antimatter", zh: "反物质" },

        // ----- Resource Descriptions (short) -----
        "Energy is created by power sources such as steam engines, solar power and advances even to fusion power and nuclear energy. The maximum you can hold to start with is 100,000 Energy, but batteries are unlockable which can increase this.":
            { en: "Energy is created by power sources such as steam engines, solar power and advances even to fusion power and nuclear energy. The maximum you can hold to start with is 100,000 Energy, but batteries are unlockable which can increase this.", zh: "能量由蒸汽机、太阳能甚至聚变和核能等能源产生。初始最大可储存100,000能量，但可以解锁电池来增加上限。" },

        "Plasma is the 4th state of matter and is used by Tier 4 machines and large space structures as an extreme power source for your company. At first you can hold 100,000 plasma at once, but you can unlock and purchase Plasma Storage Units to increase this number.":
            { en: "Plasma is the 4th state of matter and is used by Tier 4 machines and large space structures as an extreme power source for your company. At first you can hold 100,000 plasma at once, but you can unlock and purchase Plasma Storage Units to increase this number.", zh: "等离子体是物质的第四态，被T4级机器和大型太空结构用作公司的极端能源。初始可储存100,000等离子体，但可以解锁并购买等离子体存储单元来增加上限。" },

        "Uranium is used for nuclear power generation because when it is split, it releases huge amounts of Energy. For this reason, it is prominent in many advanced machines and for propulsion technology as it is useful for inter-star-system travel. Unfortunately, it is hard to get and it requires a lot of resources to radiation-proof equipment.":
            { en: "Uranium is used for nuclear power generation because when it is split, it releases huge amounts of Energy. For this reason, it is prominent in many advanced machines and for propulsion technology as it is useful for inter-star-system travel. Unfortunately, it is hard to get and it requires a lot of resources to radiation-proof equipment.", zh: "铀用于核能发电，因为它在分裂时会释放大量能量。因此，在许多先进机器和推进技术中都很重要，对于星际旅行非常有用。不幸的是，它很难获得，并且需要大量资源来为设备做防辐射处理。" },

        "Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.":
            { en: "Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.", zh: "难以处理且仅能在火山中找到，岩浆是最难获取的资源之一。" },

        "Oil is pumped up from the ground and is used to build Tier 2 resource gatherers.":
            { en: "Oil is pumped up from the ground and is used to build Tier 2 resource gatherers.", zh: "石油从地下抽取，用于建造T2级资源采集器。" },

        "Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.":
            { en: "Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.", zh: "金属是主要资源之一。它用于许多方面，包括存储升级、机械和太空中的大部分东西。" },

        "Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.":
            { en: "Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.", zh: "宝石是主要资源之一。用于高级机器、强力工具和组件，在游戏后期更有用。" },

        "Charcoal is a secondary tier resource and is used by Engines to produce power for your company. 1 Charcoal is created by burning wood":
            { en: "Charcoal is a secondary tier resource and is used by Engines to produce power for your company. 1 Charcoal is created by burning wood", zh: "木炭是二级资源，用于引擎为你的公司生产能量。1个木炭通过燃烧木材产生。" },

        "Wood is one of the primary resources. It is used more often in early game for tools and buildings.":
            { en: "Wood is one of the primary resources. It is used more often in early game for tools and buildings.", zh: "木材是主要资源之一，在游戏早期更常用于工具和建筑。" },

        "Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.":
            { en: "Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.", zh: "硅对于第三级自动采矿系统很有用，对建造你的第一个奇观非常有帮助。尽管是高级资源，但主要在地球上通过加热沙子获得。" },

        "Lunarite is found on the Moon and is a rare type of resource not found on Earth. It is much stronger than regular metal but is a lot harder to get.":
            { en: "Lunarite is found on the Moon and is a rare type of resource not found on Earth. It is much stronger than regular metal but is a lot harder to get.", zh: "月岩在月球上发现，是一种地球上没有的稀有资源。它比普通金属强得多，但也更难获取。" },

        "Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.":
            { en: "Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.", zh: "甲烷是在金星上大量存在的气体。它可以比固体燃料更有效地为你的公司提供动力。" },

        "Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants":
            { en: "Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants", zh: "钛主要是在火星上发现的金属，用于建造坚固的机器和甲烷发电厂。" },

        "Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.":
            { en: "Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.", zh: "金是在小行星内部发现的金属，用于建造某些奇观和复杂机械。" },

        "Silver is another metal most commonly found in the asteroid belt.":
            { en: "Silver is another metal most commonly found in the asteroid belt.", zh: "银是另一种最常见于小行星带的金属。" },

        "Hydrogen is extremely common on gas giants such as Jupiter and Saturn.":
            { en: "Hydrogen is extremely common on gas giants such as Jupiter and Saturn.", zh: "氢在木星和土星等气态巨行星上极为常见。" },

        "Helium is the second most common element on gas giants such as Jupiter and Saturn.":
            { en: "Helium is the second most common element on gas giants such as Jupiter and Saturn.", zh: "氦是木星和土星等气态巨行星上第二常见的元素。" },

        "Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.":
            { en: "Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.", zh: "冰虽然在地球上也能收集，但远不如飞到冥王星装满飞船带回来划算。它主要用于T4机器所需的超级冷却技术。" },

        "Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.":
            { en: "Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.", zh: "只有用比地球技术更纯净的能量形式才能创造陨石。因此，需要等离子体来制造这种强力资源。" },

        "Science is used for researching new technologies to further your progress in the game.":
            { en: "Science is used for researching new technologies to further your progress in the game.", zh: "科技用于研究新技术，以推动你在游戏中的进展。" },

        // ----- UI Common Labels -----
        "/Sec": { en: "/Sec", zh: "/秒" },
        "Gain": { en: "Gain", zh: "获取" },
        "Convert": { en: "Convert", zh: "转换" },
        "Storage Upgrade": { en: "Storage Upgrade", zh: "存储升级" },
        "Upgrade Storage": { en: "Upgrade Storage", zh: "升级存储" },
        "Upgrade your": { en: "Upgrade your", zh: "升级你的" },
        "storage size to": { en: "storage size to", zh: "存储容量至" },
        "Time remaining until": { en: "Time remaining until", zh: "距离存储" },
        "Time remaining until full storage:": { en: "Time remaining until full storage:", zh: "距离存满还有：" },
        "full": { en: "full", zh: "满" },
        "empty": { en: "empty", zh: "空" },
        "Costs": { en: "Costs", zh: "消耗" },
        "Cost": { en: "Cost", zh: "消耗" },
        "Produces": { en: "Produces", zh: "生产" },
        "Uses": { en: "Uses", zh: "使用" },
        "per second.": { en: "per second.", zh: "每秒。" },
        "per second": { en: "per second", zh: "每秒" },
        "Not Built": { en: "Not Built", zh: "未建造" },
        "Built": { en: "Built", zh: "已建造" },
        "Protected": { en: "Protected", zh: "受保护" },
        "Conquered": { en: "Conquered", zh: "已征服" },

        // ----- Buttons -----
        "Get": { en: "Get", zh: "获取" },
        "Destroy": { en: "Destroy", zh: "销毁" },
        "Turn Off": { en: "Turn Off", zh: "关闭" },
        "Turn On": { en: "Turn On", zh: "开启" },
        "Off": { en: "Off", zh: "关" },
        "On": { en: "On", zh: "开" },
        "Toggle All Energy Production + Consumption": { en: "Toggle All Energy Production + Consumption", zh: "切换所有能量生产/消耗" },
        "Turn Charcoal Production": { en: "Turn Charcoal Production", zh: "切换木炭生产" },
        "Toggle Antimatter": { en: "Toggle Antimatter", zh: "切换反物质" },

        // ----- Batteries / Storage -----
        "Batteries:": { en: "Batteries:", zh: "电池：" },
        "T2 Batteries:": { en: "T2 Batteries:", zh: "T2电池：" },
        "T3 Batteries:": { en: "T3 Batteries:", zh: "T3电池：" },
        "T4 Batteries:": { en: "T4 Batteries:", zh: "T4电池：" },
        "T5 Batteries:": { en: "T5 Batteries:", zh: "T5电池：" },
        "Get Battery": { en: "Get Battery", zh: "获取电池" },
        "Get Battery T2": { en: "Get Battery T2", zh: "获取T2电池" },
        "Get Battery T3": { en: "Get Battery T3", zh: "获取T3电池" },
        "Get Battery T4": { en: "Get Battery T4", zh: "获取T4电池" },
        "Get Battery T5": { en: "Get Battery T5", zh: "获取T5电池" },
        "Batteries increase your energy storage by 50,000 per battery built.":
            { en: "Batteries increase your energy storage by 50,000 per battery built.", zh: "每建造一个电池增加50,000能量存储上限。" },
        "Tier 2 Batteries increase your energy storage by 500,000 per battery built.":
            { en: "Tier 2 Batteries increase your energy storage by 500,000 per battery built.", zh: "每建造一个T2电池增加500,000能量存储上限。" },
        "Tier 3 Batteries increase your energy storage by 5,000,000 per battery built.":
            { en: "Tier 3 Batteries increase your energy storage by 5,000,000 per battery built.", zh: "每建造一个T3电池增加5,000,000能量存储上限。" },
        "Tier 4 Batteries increase your energy storage by 50,000,000 per battery built.":
            { en: "Tier 4 Batteries increase your energy storage by 50,000,000 per battery built.", zh: "每建造一个T4电池增加50,000,000能量存储上限。" },
        "Tier 5 Batteries increase your energy storage by 500,000,000 per battery built.":
            { en: "Tier 5 Batteries increase your energy storage by 500,000,000 per battery built.", zh: "每建造一个T5电池增加500,000,000能量存储上限。" },

        // ----- PSU -----
        "PSUs:": { en: "PSUs:", zh: "等离子体存储单元：" },
        "T2 PSUs:": { en: "T2 PSUs:", zh: "T2等离子体存储单元：" },
        "Get PSU": { en: "Get PSU", zh: "获取等离子体存储单元" },
        "Get PSU T2": { en: "Get PSU T2", zh: "获取T2等离子体存储单元" },
        "PSUs increase your plasma storage by 50,000 per PSU built.":
            { en: "PSUs increase your plasma storage by 50,000 per PSU built.", zh: "每建造一个等离子体存储单元增加50,000等离子体存储上限。" },
        "Tier 2 PSUs increase your plasma storage by 500,000 per PSU built.":
            { en: "Tier 2 PSUs increase your plasma storage by 500,000 per PSU built.", zh: "每建造一个T2等离子体存储单元增加500,000等离子体存储上限。" },

        // ----- Energy Deficit -----
        "Energy Deficit!": { en: "Energy Deficit!", zh: "能量不足！" },
        "Join our Discord!": { en: "Join our Discord!", zh: "加入我们的Discord！" },

        // ----- Research Tab -----
        "Technologies": { en: "Technologies", zh: "科技" },
        "Science": { en: "Science", zh: "科技" },
        "Purchase to unlock something.": { en: "Purchase to unlock something.", zh: "购买以解锁某些内容。" },
        "Unlock": { en: "Unlock", zh: "解锁" },
        "Research": { en: "Research", zh: "研究" },
        "Costs ": { en: "Costs ", zh: "消耗 " },

        // ----- Building Names -----
        "Charcoal Engine": { en: "Charcoal Engine", zh: "木炭引擎" },
        "Solar Panel": { en: "Solar Panel", zh: "太阳能板" },
        "Methane Power Station": { en: "Methane Power Station", zh: "甲烷发电站" },
        "Nuclear Power Station": { en: "Nuclear Power Station", zh: "核电站" },
        "Magmatic Dynamo": { en: "Magmatic Dynamo", zh: "岩浆发电机" },
        "Fusion Reactor": { en: "Fusion Reactor", zh: "聚变反应堆" },
        "Super-Heater": { en: "Super-Heater", zh: "超级加热器" },
        "Plasmatic Pit": { en: "Plasmatic Pit", zh: "等离子坑" },
        "Electron Bath": { en: "Electron Bath", zh: "电子浴" },
        "Grinder": { en: "Grinder", zh: "研磨机" },
        "Cubic Teleposer": { en: "Cubic Teleposer", zh: "方块遥传器" },
        "Uranium Enricher": { en: "Uranium Enricher", zh: "铀浓缩器" },
        "Yellowcake Recycler": { en: "Yellowcake Recycler", zh: "黄饼回收器" },
        "Planetary Nuclear Plant": { en: "Planetary Nuclear Plant", zh: "行星核工厂" },
        "Heat Resistant Crucible": { en: "Heat Resistant Crucible", zh: "耐热坩埚" },
        "Lava Extractor": { en: "Lava Extractor", zh: "岩浆提取器" },
        "Igneous Extruder": { en: "Igneous Extruder", zh: "火成岩挤压机" },
        "Volcanic Veluptuator": { en: "Volcanic Veluptuator", zh: "火山愉悦器" },
        "Jupitonian Condensator": { en: "Jupitonian Condensator", zh: "木星冷凝器" },
        "Small Pump": { en: "Small Pump", zh: "小型水泵" },
        "Pumpjack": { en: "Pumpjack", zh: "抽油机" },
        "Oil Field": { en: "Oil Field", zh: "油田" },
        "Offshore Rig": { en: "Offshore Rig", zh: "海上钻井平台" },
        "Fossilator 9000": { en: "Fossilator 9000", zh: "化石转化器9000" },
        "Miner": { en: "Miner", zh: "矿工" },
        "Heavy Drill": { en: "Heavy Drill", zh: "重型钻机" },
        "Giga Drill": { en: "Giga Drill", zh: "千兆钻机" },
        "Quantum Drill": { en: "Quantum Drill", zh: "量子钻机" },
        "Multiverse Drill": { en: "Multiverse Drill", zh: "多元宇宙钻机" },
        "Gem Miner": { en: "Gem Miner", zh: "宝石矿工" },
        "Advanced Drill": { en: "Advanced Drill", zh: "高级钻机" },
        "Diamond Encrusted Drill": { en: "Diamond Encrusted Drill", zh: "镶钻钻机" },
        "Carbyne Drill": { en: "Carbyne Drill", zh: "卡宾钻机" },
        "Diamond Accretion Chamber": { en: "Diamond Accretion Chamber", zh: "钻石增生室" },
        "Woodburner": { en: "Woodburner", zh: "烧木炉" },
        "Furnace": { en: "Furnace", zh: "熔炉" },
        "Industrial Kiln": { en: "Industrial Kiln", zh: "工业窑炉" },
        "Forest Fryer": { en: "Forest Fryer", zh: "森林油炸机" },
        "Microverse Pollutor": { en: "Microverse Pollutor", zh: "微宇宙污染器" },
        "Woodcutter": { en: "Woodcutter", zh: "伐木工" },
        "Laser Cutter": { en: "Laser Cutter", zh: "激光切割机" },
        "Mass Deforester": { en: "Mass Deforester", zh: "大规模砍伐机" },
        "Biomass Infuser": { en: "Biomass Infuser", zh: "生物质灌输器" },
        "Russian Forest": { en: "Russian Forest", zh: "俄罗斯森林" },
        "Empowered Blowtorch": { en: "Empowered Blowtorch", zh: "强化喷灯" },
        "Seaside Scorcher": { en: "Seaside Scorcher", zh: "海滨灼烧器" },
        "Beach Annihilator": { en: "Beach Annihilator", zh: "海滩歼灭者" },
        "Desert Destroyer": { en: "Desert Destroyer", zh: "沙漠毁灭者" },
        "Time And Relative Dimensions In Sand": { en: "Time And Relative Dimensions In Sand", zh: "沙中时间和相对维度" },
        "T.A.R.D.I.S.": { en: "T.A.R.D.I.S.", zh: "塔迪斯" },
        "Native Moon Worker": { en: "Native Moon Worker", zh: "本地月球工人" },
        "Low-Gravity Drill": { en: "Low-Gravity Drill", zh: "低重力钻机" },
        "Moon Quarry": { en: "Moon Quarry", zh: "月球采石场" },
        "Planetary Excavator": { en: "Planetary Excavator", zh: "行星挖掘机" },
        "Moon Cloner": { en: "Moon Cloner", zh: "月球克隆机" },
        "Vacuum Cleaner": { en: "Vacuum Cleaner", zh: "真空吸尘器" },
        "Suction Excavator": { en: "Suction Excavator", zh: "吸力挖掘机" },
        "Space Cow Plantation": { en: "Space Cow Plantation", zh: "太空奶牛牧场" },
        "Hydrothermal Vent": { en: "Hydrothermal Vent", zh: "热液喷口" },
        "Interstellar Cow": { en: "Interstellar Cow", zh: "星际奶牛" },
        "Explorer": { en: "Explorer", zh: "探索者" },
        "Lunarite Drill": { en: "Lunarite Drill", zh: "月岩钻机" },
        "Penta-Drill": { en: "Penta-Drill", zh: "五头钻机" },
        "Drill of Titans": { en: "Drill of Titans", zh: "泰坦钻机" },
        "David Guetta's Club": { en: "David Guetta's Club", zh: "大卫·盖塔俱乐部" },
        "Rocket Droid": { en: "Rocket Droid", zh: "火箭机器人" },
        "Asteroid Destroyer": { en: "Asteroid Destroyer", zh: "小行星毁灭者" },
        "Death Star Jr": { en: "Death Star Jr", zh: "死星Jr" },
        "Chronal Actuator": { en: "Chronal Actuator", zh: "时间致动器" },
        "Philosopher's Stone": { en: "Philosopher's Stone", zh: "贤者之石" },
        "Scout Ship": { en: "Scout Ship", zh: "侦察船" },
        "Interplanetary Laser": { en: "Interplanetary Laser", zh: "行星际激光" },
        "Big Bertha": { en: "Big Bertha", zh: "大贝尔塔" },
        "Atomic Cannon": { en: "Atomic Cannon", zh: "原子加农炮" },
        "Dead Werewolf Finder": { en: "Dead Werewolf Finder", zh: "死狼人探测器" },
        "Hydrogen Collector": { en: "Hydrogen Collector", zh: "氢收集器" },
        "Gaseous Magnet": { en: "Gaseous Magnet", zh: "气体磁铁" },
        "Electrolytic Cell": { en: "Electrolytic Cell", zh: "电解池" },
        "Hindenburg Excavation": { en: "Hindenburg Excavation", zh: "兴登堡挖掘" },
        "Star Harvester": { en: "Star Harvester", zh: "恒星收割机" },
        "Helium Drone": { en: "Helium Drone", zh: "氦无人机" },
        "Helium Tanker": { en: "Helium Tanker", zh: "氦运输船" },
        "Morphic Compressor": { en: "Morphic Compressor", zh: "形态压缩机" },
        "Gas Giant Skimmer": { en: "Gas Giant Skimmer", zh: "气态巨行星撇渣器" },
        "Caged Star": { en: "Caged Star", zh: "笼中恒星" },
        "Ice Pickaxe": { en: "Ice Pickaxe", zh: "冰镐" },
        "Ice Drill": { en: "Ice Drill", zh: "冰钻" },
        "Ocean Freezer": { en: "Ocean Freezer", zh: "海洋冷冻机" },
        "Mr Freeze": { en: "Mr Freeze", zh: "冰冻先生" },
        "Overexchange Condenser": { en: "Overexchange Condenser", zh: "过度交换冷凝器" },
        "Meteorite Printer": { en: "Meteorite Printer", zh: "陨石打印机" },
        "Meteorite Web": { en: "Meteorite Web", zh: "陨石网" },
        "Planet Smasher": { en: "Planet Smasher", zh: "行星粉碎者" },
        "Nebulous Synthesizer": { en: "Nebulous Synthesizer", zh: "星云合成器" },
        "Home Science Kit": { en: "Home Science Kit", zh: "家庭科学套件" },
        "High School Science": { en: "High School Science", zh: "高中科学" },
        "University Laboratory": { en: "University Laboratory", zh: "大学实验室" },
        "Scientific Observatory": { en: "Scientific Observatory", zh: "科学观测站" },
        "Space Scientific Satellite Station": { en: "Space Scientific Satellite Station", zh: "太空科学卫星站" },
        "Chemical Plant": { en: "Chemical Plant", zh: "化工厂" },
        "Oxidisation Chamber": { en: "Oxidisation Chamber", zh: "氧化室" },
        "Hydrazine Catalyst": { en: "Hydrazine Catalyst", zh: "肼催化剂" },

        // ----- Building Descriptions -----
        "Burns Charcoal to produce a steady source of Energy.": { en: "Burns Charcoal to produce a steady source of Energy.", zh: "燃烧木炭以产生稳定的能量源。" },
        "Gains Energy slowly from the sun without using any resources.": { en: "Gains Energy slowly from the sun without using any resources.", zh: "从太阳缓慢获取能量，不消耗任何资源。" },
        "Burn powerful methane from Venus to satisfy all your power needs.": { en: "Burn powerful methane from Venus to satisfy all your power needs.", zh: "燃烧来自金星的高能甲烷以满足你的所有能量需求。" },
        "Uses fission to create large amounts of power.": { en: "Uses fission to create large amounts of power.", zh: "利用核裂变产生大量能量。" },
        "The Magmatic Dynamo is a method of producing power by using lava as a fuel. Because of the extreme temperature of lava, a lot of Energy can be produced at once.": { en: "The Magmatic Dynamo is a method of producing power by using lava as a fuel. Because of the extreme temperature of lava, a lot of Energy can be produced at once.", zh: "岩浆发电机是一种使用岩浆作为燃料发电的方法。由于岩浆的极高温度，可以一次性产生大量能量。" },
        "In a fusion reaction, Energy is released when two light atomic nuclei are fused together to form one heavier atom. This is the same reaction that occurs in stars and produces a lot of power.": { en: "In a fusion reaction, Energy is released when two light atomic nuclei are fused together to form one heavier atom. This is the same reaction that occurs in stars and produces a lot of power.", zh: "在聚变反应中，两个轻原子核融合成一个更重的原子时释放能量。这与恒星中发生的反应相同，能产生大量能量。" },
        "The Super-Heater throws electricity at Hydrogen to turn it into a plasmatic substance.": { en: "The Super-Heater throws electricity at Hydrogen to turn it into a plasmatic substance.", zh: "超级加热器向氢气放电，将其转化为等离子态物质。" },
        "This contraption converts Helium into Plasma through firing intensive energy bolts at the gas cloud.": { en: "This contraption converts Helium into Plasma through firing intensive energy bolts at the gas cloud.", zh: "这个装置通过向气体云发射高能电束将氦转化为等离子体。" },
        "Bathing in Electrons. What could go wrong?": { en: "Bathing in Electrons. What could go wrong?", zh: "电子浴。能出什么差错呢？" },
        "Pulverizes Uranium for easy transportation out of deep mineshafts.": { en: "Pulverizes Uranium for easy transportation out of deep mineshafts.", zh: "将铀粉碎以便从深矿井中运输出来。" },
        "This teleposes blocks of rock from far underground to the surface so that Uranium can be mined more easily.": { en: "This teleposes blocks of rock from far underground to the surface so that Uranium can be mined more easily.", zh: "将深层地下的岩石块遥传至地表，以便更容易地开采铀。" },
        "The Enricher increases the quality of uranium mined and thus allows more of the uranium in rocks to be used in your company.": { en: "The Enricher increases the quality of uranium mined and thus allows more of the uranium in rocks to be used in your company.", zh: "浓缩器提高了开采铀的质量，从而使岩石中更多的铀可用于你的公司。" },
        "Recycles used-up Uranium to provide the resources with a second use. This greatly increases the amount of Uranium you can use per second.": { en: "Recycles used-up Uranium to provide the resources with a second use. This greatly increases the amount of Uranium you can use per second.", zh: "回收用过的铀以提供二次利用，大大增加每秒可用的铀量。" },
        "This huge factory is as large as a planet, fusing together Uranium from common elements.": { en: "This huge factory is as large as a planet, fusing together Uranium from common elements.", zh: "这座巨大工厂有行星那么大，从常见元素中聚变出铀。" },
        "You can use a modified crucible to pick up lava and to store it for later use.": { en: "You can use a modified crucible to pick up lava and to store it for later use.", zh: "你可以使用改良的坩埚来拾取岩浆并储存以备后用。" },
        "This extracts lava from volcanoes automatically and quickly.": { en: "This extracts lava from volcanoes automatically and quickly.", zh: "自动快速从火山中提取岩浆。" },
        "Instead of going out and finding lava, it can be more convenient to make it yourself with heat and pressure.": { en: "Instead of going out and finding lava, it can be more convenient to make it yourself with heat and pressure.", zh: "与其出去寻找岩浆，不如用热和压力自己制造更便捷。" },
        "A melting pot of misery, pouring lava out from mined rock.": { en: "A melting pot of misery, pouring lava out from mined rock.", zh: "一个 misery 的大熔炉，从开采的岩石中倾泻岩浆。" },
        "Condense gases from the heart of Jupiter into liquid magma.": { en: "Condense gases from the heart of Jupiter into liquid magma.", zh: "将木星核心的气体冷凝成液态岩浆。" },
        "Build a small pump to extract Oil from the ground.": { en: "Build a small pump to extract Oil from the ground.", zh: "建造一个小型水泵从地下抽取石油。" },
        "Pumpjacks are much bigger than small pumps and produce Oil on an industrial scale but they require a lot of Energy.": { en: "Pumpjacks are much bigger than small pumps and produce Oil on an industrial scale but they require a lot of Energy.", zh: "抽油机比小型水泵大得多，可以工业规模生产石油，但需要大量能量。" },
        "Oil Fields are large open spaces, usually found in deserts where vast oil wells can be found under the ground.": { en: "Oil Fields are large open spaces, usually found in deserts where vast oil wells can be found under the ground.", zh: "油田是大型开阔区域，通常位于沙漠地带，地下蕴藏着巨大的油井。" },
        "Offshore Rigs are megastructures floating in the oceans, extracting Oil from under the sea-beds.": { en: "Offshore Rigs are megastructures floating in the oceans, extracting Oil from under the sea-beds.", zh: "海上钻井平台是漂浮在海洋中的巨型结构，从海底提取石油。" },
        "Much better than the 8000 version, this fossilator reverses the fossil fuel cycle. Instead of burning, it creates them from carbon in the air.": { en: "Much better than the 8000 version, this fossilator reverses the fossil fuel cycle. Instead of burning, it creates them from carbon in the air.", zh: "比8000版本好得多，这个化石转化器逆转了化石燃料循环。它不是燃烧，而是从空气中的碳创造燃料。" },
        "Build a pickaxe for your miner.": { en: "Build a pickaxe for your miner.", zh: "为你的矿工造一把镐。" },
        "Heavy Drills mine Metal at mass.": { en: "Heavy Drills mine Metal at mass.", zh: "重型钻机批量开采金属。" },
        "Giga Drills extract Metal at colossal speeds.": { en: "Giga Drills extract Metal at colossal speeds.", zh: "千兆钻机以极快速度提取金属。" },
        "Quantum Drills bend the space-time continuum to get metal faster than physically possible.": { en: "Quantum Drills bend the space-time continuum to get metal faster than physically possible.", zh: "量子钻机弯曲时空连续体，以超越物理极限的速度获取金属。" },
        "Drills metal from alternate realities where metal is plentiful .": { en: "Drills metal from alternate realities where metal is plentiful .", zh: "从金属丰富的平行现实钻取金属。" },
        "Build an improved pickaxe to mine Gems.": { en: "Build an improved pickaxe to mine Gems.", zh: "建造一把改进的镐来开采宝石。" },
        "Advanced Drills mine gem at mass. Because of the toughness of the drill needed it is slower than the heavy drill.": { en: "Advanced Drills mine gem at mass. Because of the toughness of the drill needed it is slower than the heavy drill.", zh: "高级钻机批量开采宝石。由于钻头硬度要求，它比重型钻机慢。" },
        "The Diamond Encrusted Drill is one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.": { en: "The Diamond Encrusted Drill is one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.", zh: "镶钻钻机是太阳系中最强的钻机之一，因此采集宝石的速度比以往任何设备都快。" },
        "Carbyne Drills one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.": { en: "Carbyne Drills one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.", zh: "卡宾钻机是太阳系中最强的钻机之一，采集宝石速度无与伦比。" },
        "This special container condenses carbon dioxide gas into diamonds, creating gems at a faster rate than any drill.": { en: "This special container condenses carbon dioxide gas into diamonds, creating gems at a faster rate than any drill.", zh: "这个特殊容器将二氧化碳气体凝结成钻石，以比任何钻机更快的速度制造宝石。" },
        "Build a shovel for your woodburner.": { en: "Build a shovel for your woodburner.", zh: "为你的烧木炉造一把铲子。" },
        "Furnaces use electric heaters to produce heat to turn Wood into Charcoal. Because of the increased heat, the process is more efficient.": { en: "Furnaces use electric heaters to produce heat to turn Wood into Charcoal. Because of the increased heat, the process is more efficient.", zh: "熔炉使用电加热器产生热量将木材转化为木炭。由于温度更高，过程更高效。" },
        "These large kilns are much for effective than previous methods of creating charcoal and use less wood to make the same amount as a furnace.": { en: "These large kilns are much for effective than previous methods of creating charcoal and use less wood to make the same amount as a furnace.", zh: "这些大型窑炉比以前的方法更有效，使用更少的木材就能产生与熔炉相同的木炭量。" },
        "Forests? What forests?": { en: "Forests? What forests?", zh: "森林？什么森林？" },
        "Using Nano-technology, tiny universes can be created, filled with toxic gases from charcoal production and simply deleted. Cross-dimensional pollution at a completely new level!": { en: "Using Nano-technology, tiny universes can be created, filled with toxic gases from charcoal production and simply deleted. Cross-dimensional pollution at a completely new level!", zh: "利用纳米技术创造微型宇宙，充满木炭生产产生的有毒气体然后直接删除。跨维度污染的全新高度！" },
        "Build an axe for your woodcutter.": { en: "Build an axe for your woodcutter.", zh: "为你的伐木工造一把斧头。" },
        "Laser Cutters slice trees (and fingers) quicker than axes and produce a lot more wood.": { en: "Laser Cutters slice trees (and fingers) quicker than axes and produce a lot more wood.", zh: "激光切割机切割树木（和手指）比斧头更快，生产更多木材。" },
        "This machine is the reason we're losing our rainforests. At least we get lots of wood!": { en: "This machine is the reason we're losing our rainforests. At least we get lots of wood!", zh: "这台机器就是我们失去雨林的原因。至少我们得到了大量木材！" },
        "Creates Wood using old, useless materials found everywhere on Earth by crushing them and packing what remains as densely as possible until it can be used as Wood again.": { en: "Creates Wood using old, useless materials found everywhere on Earth by crushing them and packing what remains as densely as possible until it can be used as Wood again.", zh: "利用地球上随处可见的废旧无用材料，将其粉碎并尽可能密集地压缩，直到可以再次用作木材。" },
        "The great Russian forests span thousands of miles. More than enough for at least your lifetime. Let the younger generation deal with running out.": { en: "The great Russian forests span thousands of miles. More than enough for at least your lifetime. Let the younger generation deal with running out.", zh: "广阔的俄罗斯森林绵延数千英里。至少够你一生使用。让下一代去担心耗竭的问题吧。" },
        "This type of blowtorch instantly turns sand into Silicon, but only on a small scale. To make it, extraterrestrial resources are required.": { en: "This type of blowtorch instantly turns sand into Silicon, but only on a small scale. To make it, extraterrestrial resources are required.", zh: "这种喷灯可以立即将沙子转化为硅，但只能小规模进行。需要地外资源才能制造。" },
        "This tool almost melts parts of beaches to get silicon at a larger scale.": { en: "This tool almost melts parts of beaches to get silicon at a larger scale.", zh: "这个工具几乎融化了海滩的部分区域，以更大规模获取硅。" },
        "This weapon of mass destruction has been re-labelled and now hovers above coast-lines, or what is now left of them.": { en: "This weapon of mass destruction has been re-labelled and now hovers above coast-lines, or what is now left of them.", zh: "这种大规模杀伤性武器已被重新标记，现在盘旋在海岸线上方——或者说海岸线残存的部分上方。" },
        "This large ship orbits around the planet, focused in the Sahara Desert, tearing up sand from Earth and turning it into Silicon under intense heat.": { en: "This large ship orbits around the planet, focused in the Sahara Desert, tearing up sand from Earth and turning it into Silicon under intense heat.", zh: "这艘大船绕地球轨道运行，聚焦撒哈拉沙漠，将地球的沙子撕碎并在高温下转化为硅。" },
        "The TARDIS, for short, harnesses the power of stars from far away in space-time to heat sand into Silicon at record speeds.": { en: "The TARDIS, for short, harnesses the power of stars from far away in space-time to heat sand into Silicon at record speeds.", zh: "简称为TARDIS，利用遥远时空中的恒星能量，以创纪录的速度将沙子加热成硅。" },
        "Bribe local workers to mine your Lunarite.": { en: "Bribe local workers to mine your Lunarite.", zh: "贿赂当地工人为你开采月岩。" },
        "These drills practically float!": { en: "These drills practically float!", zh: "这些钻机几乎是在漂浮！" },
        "This quarry tears up the surface of the moon so much that it can be seen from Earth.": { en: "This quarry tears up the surface of the moon so much that it can be seen from Earth.", zh: "这个采石场把月球表面破坏得从地球上都能看到。" },
        "This large machine dives deep into the Earth to find large pools of Lunarite found near the core. This is originally where the metal on the Moon comes from.": { en: "This large machine dives deep into the Earth to find large pools of Lunarite found near the core. This is originally where the metal on the Moon comes from.", zh: "这台巨大的机器深入地球内部，寻找地核附近的大型月岩矿池。月球上的金属最初就来自于此。" },
        "And you wondered why we have a hundred moons in the sky?": { en: "And you wondered why we have a hundred moons in the sky?", zh: "你还纳闷天上怎么有一百个月亮？" },
        "Sucks in methane and cleans the planet at the same time!": { en: "Sucks in methane and cleans the planet at the same time!", zh: "吸入甲烷的同时清洁星球！" },
        "Sucks more than anything!": { en: "Sucks more than anything!", zh: "吸力比什么都强！" },
        "These hold cows genetically moodified to produce methane constantly": { en: "These hold cows genetically moodified to produce methane constantly", zh: "这些牧场里养着基因改造的奶牛，不断产生甲烷" },
        "Collect gas from deep sea vents on the ocean floor of Titan.": { en: "Collect gas from deep sea vents on the ocean floor of Titan.", zh: "收集土卫六海底深层热液喷口的气体。" },
        "An interdimoonsional bovine.": { en: "An interdimoonsional bovine.", zh: "一头跨维度的牛。" },
        "Hire explorers to search for Titanium on the surface, uncovered by winds on Mars.": { en: "Hire explorers to search for Titanium on the surface, uncovered by winds on Mars.", zh: "雇佣探索者在火星表面寻找被风吹出的钛。" },
        "These Lunarite Drills are extremely powerful, needed to mine out Titanium from inside Mars' crust.": { en: "These Lunarite Drills are extremely powerful, needed to mine out Titanium from inside Mars' crust.", zh: "这些月岩钻机极其强大，用于从火星地壳内部开采钛。" },
        "This is a mining machine modified to have 5 drills on its face. This allows for a massive increase in resources gained per second.": { en: "This is a mining machine modified to have 5 drills on its face. This allows for a massive increase in resources gained per second.", zh: "这是一台改良采矿机，正面装有5个钻头，大幅提升每秒资源获取量。" },
        "This mighty drill is said to have been wielded by Titans themselves, many milennia ago.": { en: "This mighty drill is said to have been wielded by Titans themselves, many milennia ago.", zh: "据说这把强大的钻机在数千年前曾被泰坦亲自使用过。" },
        "You shoot me down, but I won't fall. I am Titanium.": { en: "You shoot me down, but I won't fall. I am Titanium.", zh: "你击倒我，但我不会倒下。我是钛。" },
        "Powered by Methane, this droid scouts the asteroids for gold deposits.": { en: "Powered by Methane, this droid scouts the asteroids for gold deposits.", zh: "由甲烷驱动的机器人，在小行星中搜寻金矿。" },
        "Mines through asteroids to find Gold. It is much more effective than the simple droid.": { en: "Mines through asteroids to find Gold. It is much more effective than the simple droid.", zh: "钻穿小行星寻找金矿，比简单的机器人高效得多。" },
        "That's no moon! That's a Space Station! This cuts through asteroids to expose all of the Gold in the centers.": { en: "That's no moon! That's a Space Station! This cuts through asteroids to expose all of the Gold in the centers.", zh: "那不是月亮！那是空间站！它切开小行星，露出中心的全部金矿。" },
        "Speeds up time through quantum physics in order to produce even more Gold.": { en: "Speeds up time through quantum physics in order to produce even more Gold.", zh: "通过量子物理加速时间，以产生更多的金。" },
        "Transmuation has progressed to being able to turn thin air into gold!": { en: "Transmuation has progressed to being able to turn thin air into gold!", zh: "嬗变技术已经进步到能将稀薄空气变成黄金！" },
        "The Scout Ship searches through the asteroid field for pieces of silver embedded in asteroids.": { en: "The Scout Ship searches through the asteroid field for pieces of silver embedded in asteroids.", zh: "侦察船在小行星带中搜寻嵌入小行星的银块。" },
        "Cuts through asteroids to find silver deposits in their cores.": { en: "Cuts through asteroids to find silver deposits in their cores.", zh: "切开小行星寻找其核心的银矿。" },
        "This large, space drill, named after the World War One Howitzer built almost a milienia ago, is a silver seeking machine specially designed for mining asteroids.": { en: "This large, space drill, named after the World War One Howitzer built almost a milienia ago, is a silver seeking machine specially designed for mining asteroids.", zh: "这台大型太空钻机以近千年前一战时的榴弹炮命名，是专门为开采小行星设计的银矿搜寻机。" },
        "This powerful cannon orbits Neptune and can atomise the surface of asteroids, revealing the silver within.": { en: "This powerful cannon orbits Neptune and can atomise the surface of asteroids, revealing the silver within.", zh: "这门强大的加农炮绕海王星轨道运行，可以将小行星表面原子化，露出其中的银。" },
        "The Silver bullets used to kill werewolfs are made from silver that has been compressed well over 1000 times. Extracting them will prove beneficial for your production.": { en: "The Silver bullets used to kill werewolfs are made from silver that has been compressed well over 1000 times. Extracting them will prove beneficial for your production.", zh: "用于杀死狼人的银子弹是由压缩超过1000倍的银制成的。提取它们对你的生产有益。" },
        "This collector travels around Jupiter seeking Hydrogen to store to bring back to Earth.": { en: "This collector travels around Jupiter seeking Hydrogen to store to bring back to Earth.", zh: "这个收集器绕木星运行，寻找氢气储存并带回地球。" },
        "The magnet attracts the Hydrogen to it to increase the amount collected per second.": { en: "The magnet attracts the Hydrogen to it to increase the amount collected per second.", zh: "磁铁将氢气吸引过来，增加每秒收集量。" },
        "These are made here on Earth and can turn water into hydrogen with a constant supply of Energy.": { en: "These are made here on Earth and can turn water into hydrogen with a constant supply of Energy.", zh: "这些在地球上制造，可以在持续供能的情况下将水转化为氢气。" },
        "Somehow, it works.": { en: "Somehow, it works.", zh: "不知何故，它居然能用。" },
        "'Stealing' is such a strong word. I prefer 'borrowing without return'.": { en: "'Stealing' is such a strong word. I prefer 'borrowing without return'.", zh: "'偷'这个词太重了。我更喜欢'不归还的借用'。" },
        "The Helium Drone scouts out the area on Saturn and picks out spots high in Helium which are then mined slowly by it.": { en: "The Helium Drone scouts out the area on Saturn and picks out spots high in Helium which are then mined slowly by it.", zh: "氦无人机在土星上侦察并挑选出氦含量高的区域，然后慢慢开采。" },
        "This huge tanker holds large amounts of Helium and transports it from Saturn to Earth through the vacuum of space.": { en: "This huge tanker holds large amounts of Helium and transports it from Saturn to Earth through the vacuum of space.", zh: "这艘巨大的运输船装载大量氦，穿越太空真空从土星运往地球。" },
        "The Compressor packs helium densely into a small space so that it can be easily transported back to Earth.": { en: "The Compressor packs helium densely into a small space so that it can be easily transported back to Earth.", zh: "压缩机将氦密集地压缩到小空间中，便于运回地球。" },
        "Flying into Gas Giants' atmospheres with a big bucket is the best plan we've had yet!": { en: "Flying into Gas Giants' atmospheres with a big bucket is the best plan we've had yet!", zh: "带着大桶飞进气态巨行星的大气层是我们最好的方案！" },
        "A contained miniature version of the sun uses nuclear fusion to create massive amounts of helium.": { en: "A contained miniature version of the sun uses nuclear fusion to create massive amounts of helium.", zh: "一个封闭的微型太阳利用核聚变产生大量氦。" },
        "The Ice Pickaxe is the simplest way of mining frozen water, and although it is the cheapest, it is the slowest.": { en: "The Ice Pickaxe is the simplest way of mining frozen water, and although it is the cheapest, it is the slowest.", zh: "冰镐是开采冰冻水最简单的方法，虽然最便宜，但也最慢。" },
        "The Ice Drill is more effective than the Pickaxe and gains much more Ice every second. However, it does use electricity.": { en: "The Ice Drill is more effective than the Pickaxe and gains much more Ice every second. However, it does use electricity.", zh: "冰钻比冰镐更有效，每秒获得更多冰。不过它确实需要用电。" },
        "With advanced technology, you are now able to turn Earth's water into high-quality Ice, previously only found on Pluto.": { en: "With advanced technology, you are now able to turn Earth's water into high-quality Ice, previously only found on Pluto.", zh: "有了先进技术，你现在可以将地球的水转化为以前只在冥王星上才有的高质量冰。" },
        "This robot is the coolest guy in the solar system.": { en: "This robot is the coolest guy in the solar system.", zh: "这个机器人是太阳系最酷的家伙。" },
        "Drain heat out of the ingredients so fast that you're not sure how to process it safely.": { en: "Drain heat out of the ingredients so fast that you're not sure how to process it safely.", zh: "从原料中抽取热量的速度之快，让你不知道如何安全处理。" },
        "Contruct an automated way of producing meteorite without you having to do anything.": { en: "Contruct an automated way of producing meteorite without you having to do anything.", zh: "建造一种自动化生产陨石的方式，无需你做任何事。" },
        "The Meteorite Web uses nano-fibres made while submerged in highly radioactive liquids to become strong enough to physically catch meteors from the Asteroid Belt. Plasma is required to refine the asteroids into Meteorite Ore, which can be usable.": { en: "The Meteorite Web uses nano-fibres made while submerged in highly radioactive liquids to become strong enough to physically catch meteors from the Asteroid Belt. Plasma is required to refine the asteroids into Meteorite Ore, which can be usable.", zh: "陨石网使用在强放射性液体中制造的纳米纤维，变得足够坚固以物理捕获小行星带的流星。需要等离子体将小行星精炼成可用的陨石矿石。" },
        "Get meteorites the old-fashioned way: demolishing uninhabited exoplanets.": { en: "Get meteorites the old-fashioned way: demolishing uninhabited exoplanets.", zh: "用老式方法获取陨石：摧毁无人居住的系外行星。" },
        "Bypass the need for demolishing planets entirely by building your own nebula.": { en: "Bypass the need for demolishing planets entirely by building your own nebula.", zh: "通过建造自己的星云，完全绕过摧毁行星的需要。" },
        "Build a small laboratory of your very own to start producing science. Each one produces 0.1 science per second.": { en: "Build a small laboratory of your very own to start producing science. Each one produces 0.1 science per second.", zh: "建造一个属于你自己的小型实验室，开始生产科技。每个实验室每秒生产0.1科技。" },
        "Build a more effective laboratory to continue your quest into the realm of science at a significantly faster speed. Each one produces 1 science per second.": { en: "Build a more effective laboratory to continue your quest into the realm of science at a significantly faster speed. Each one produces 1 science per second.", zh: "建造一个更高效的实验室，以更快的速度继续你的科学探索。每个实验室每秒生产1科技。" },
        "Build an even better version of the old laboratory to further your exploration of the realm of science. Each one produces 10 science per second.": { en: "Build an even better version of the old laboratory to further your exploration of the realm of science. Each one produces 10 science per second.", zh: "建造比旧实验室更好的版本，进一步探索科学领域。每个实验室每秒生产10科技。" },
        "Chemical plants are used to make rocket fuel automatically.": { en: "Chemical plants are used to make rocket fuel automatically.", zh: "化工厂用于自动化生产火箭燃料。" },
        "Oxidisation Chambers make rocket fuel faster and more efficiently than chemical plants.": { en: "Oxidisation Chambers make rocket fuel faster and more efficiently than chemical plants.", zh: "氧化室比化工厂更快更高效地生产火箭燃料。" },
        "These speed up the chemical reactions needed to make rocket fuel by using greenhouse gases such as methane.": { en: "These speed up the chemical reactions needed to make rocket fuel by using greenhouse gases such as methane.", zh: "这些设备利用甲烷等温室气体加速制造火箭燃料所需的化学反应。" },

        // ----- Tech Names -----
        "Storage Upgrades": { en: "Storage Upgrades", zh: "存储升级" },
        "Basic Energy Production": { en: "Basic Energy Production", zh: "基础能量生产" },
        "Oil Processing": { en: "Oil Processing", zh: "石油加工" },
        "Solar Panels": { en: "Solar Panels", zh: "太阳能板" },
        "Resource Machines": { en: "Resource Machines", zh: "资源机器" },
        "Destruction of Machines": { en: "Destruction of Machines", zh: "机器销毁" },
        "Space": { en: "Space", zh: "太空" },
        "Oxidisation": { en: "Oxidisation", zh: "氧化" },
        "Hydrazine": { en: "Hydrazine", zh: "肼" },
        "Tier 2 Science": { en: "Tier 2 Science", zh: "二级科技" },
        "Tier 3 Science": { en: "Tier 3 Science", zh: "三级科技" },
        "Tier 4 Science": { en: "Tier 4 Science", zh: "四级科技" },
        "Tier 1 Batteries": { en: "Tier 1 Batteries", zh: "一级电池" },
        "Tier 2 Batteries": { en: "Tier 2 Batteries", zh: "二级电池" },
        "Tier 3 Batteries": { en: "Tier 3 Batteries", zh: "三级电池" },
        "Tier 4 Batteries": { en: "Tier 4 Batteries", zh: "四级电池" },
        "Plasma Tier 1 Technology": { en: "Plasma Tier 1 Technology", zh: "等离子体一级技术" },
        "Plasma Tier 2 Technology": { en: "Plasma Tier 2 Technology", zh: "等离子体二级技术" },
        "Plasma Storage Units": { en: "Plasma Storage Units", zh: "等离子体存储单元" },
        "Tier 2 Plasma Storage Units": { en: "Tier 2 Plasma Storage Units", zh: "二级等离子体存储单元" },
        "Energy-Mass Conversion": { en: "Energy-Mass Conversion", zh: "质能转换" },
        "Meteorite": { en: "Meteorite", zh: "陨石" },
        "Meteorite Tier 1": { en: "Meteorite Tier 1", zh: "一级陨石" },
        "Meteorite Tier 2": { en: "Meteorite Tier 2", zh: "二级陨石" },
        "Dyson Ring": { en: "Dyson Ring", zh: "戴森环" },
        "Dyson Swarms and Spheres": { en: "Dyson Swarms and Spheres", zh: "戴森群和戴森球" },
        "Upgrade Resource Technology": { en: "Upgrade Resource Technology", zh: "升级资源技术" },
        "Upgrade Engine Technology": { en: "Upgrade Engine Technology", zh: "升级引擎技术" },
        "Upgrade Solar Technology": { en: "Upgrade Solar Technology", zh: "升级太阳能技术" },
        "Resource Efficiency": { en: "Resource Efficiency", zh: "资源效率" },
        "Science Efficiency": { en: "Science Efficiency", zh: "科技效率" },
        "Energy Efficiency": { en: "Energy Efficiency", zh: "能量效率" },
        "Battery Efficiency": { en: "Battery Efficiency", zh: "电池效率" },

        // ----- Tech Descriptions -----
        "This will allow you to build storage upgrades to increase the maximum on the amount of resource you can have at once.": { en: "This will allow you to build storage upgrades to increase the maximum on the amount of resource you can have at once.", zh: "这将允许你建造存储升级，增加一次性可持有的资源上限。" },
        "You will be able to produce power from steam engines using Charcoal made from wood in a furnace.": { en: "You will be able to produce power from steam engines using Charcoal made from wood in a furnace.", zh: "你将能够使用熔炉中木材制成的木炭，通过蒸汽机产生能量。" },
        "Oil used to fuel more advanced machines that gather resources and also to produce more power than basic means. Unlocking Oil Processing allows you to extract it from the ground.": { en: "Oil used to fuel more advanced machines that gather resources and also to produce more power than basic means. Unlocking Oil Processing allows you to extract it from the ground.", zh: "石油用于为更高级的资源采集机器提供燃料，并能比基础方法产生更多能量。解锁石油加工后你可以从地下提取石油。" },
        "Solar Panels produce Energy without the need for fuel, but they do it slower than other forms of Energy production.": { en: "Solar Panels produce Energy without the need for fuel, but they do it slower than other forms of Energy production.", zh: "太阳能板无需燃料即可产生能量，但速度比其他能量生产方式慢。" },
        "Resource Machines produce more resources than simple methods but require a constant supply of power to work.": { en: "Resource Machines produce more resources than simple methods but require a constant supply of power to work.", zh: "资源机器比简单方法生产更多资源，但需要持续供能才能工作。" },
        "This allows you to destroy machines you have already created. It can be useful when there are more efficient methods of gaining resources, or if you don't have enough energy to support your machines.": { en: "This allows you to destroy machines you have already created. It can be useful when there are more efficient methods of gaining resources, or if you don't have enough energy to support your machines.", zh: "允许你销毁已创建的机器。当有更高效的资源获取方法或能量不足以支持机器时会有用。" },
        "Unlocking space-travel allows for launching of rockets and opens a whole new field of research.": { en: "Unlocking space-travel allows for launching of rockets and opens a whole new field of research.", zh: "解锁太空旅行可以发射火箭，并开启一个全新的研究领域。" },
        "Oxidisation is a more efficient process of creating Rocket Fuel.": { en: "Oxidisation is a more efficient process of creating Rocket Fuel.", zh: "氧化是制造火箭燃料的更高效过程。" },
        "Hydrazine is a compound created by Methane that increases the speed at which rocket fuel can be produced in a Hydrazine Catalyst Machine.": { en: "Hydrazine is a compound created by Methane that increases the speed at which rocket fuel can be produced in a Hydrazine Catalyst Machine.", zh: "肼是由甲烷制造的化合物，能提高肼催化剂机器中火箭燃料的生产速度。" },
        "Researching this will allow you to increase your science production drastically.": { en: "Researching this will allow you to increase your science production drastically.", zh: "研究此项将大幅提升你的科技产量。" },
        "Researching this will allow you to access the third tier of science production, creating much more science than the previous tiers.": { en: "Researching this will allow you to access the third tier of science production, creating much more science than the previous tiers.", zh: "研究此项将解锁第三级科技生产，比前几级创造更多科技。" },
        "Researching this will allow you to access the fourth tier of science production, creating 10 times as much science as the previous tier.": { en: "Researching this will allow you to access the fourth tier of science production, creating 10 times as much science as the previous tier.", zh: "研究此项将解锁第四级科技生产，创造比前一级多10倍的科技。" },
        "Tier 1 Batteries improve the amount of energy you can store at once.": { en: "Tier 1 Batteries improve the amount of energy you can store at once.", zh: "一级电池提高你一次性可存储的能量上限。" },
        "Tier 2 Batteries improve the amount of energy you can store at once": { en: "Tier 2 Batteries improve the amount of energy you can store at once", zh: "二级电池提高你一次性可存储的能量上限" },
        "Tier 3 Batteries improve the amount of energy you can store at once": { en: "Tier 3 Batteries improve the amount of energy you can store at once", zh: "三级电池提高你一次性可存储的能量上限" },
        "Tier 4 Batteries improve the amount of energy you can store at once": { en: "Tier 4 Batteries improve the amount of energy you can store at once", zh: "四级电池提高你一次性可存储的能量上限" },
        "This allows you to turn your energy and hydrogen into Plasma": { en: "This allows you to turn your energy and hydrogen into Plasma", zh: "允许你将能量和氢转化为等离子体" },
        "This research unlocks the second tier of Plasma production, the Plasmatic Pit": { en: "This research unlocks the second tier of Plasma production, the Plasmatic Pit", zh: "此项研究解锁第二级等离子体生产：等离子坑" },
        "PSUs increase the limit on plasma you can store at once.": { en: "PSUs increase the limit on plasma you can store at once.", zh: "等离子体存储单元提高你一次性可存储的等离子体上限。" },
        "Tier 2 PSUs are more efficient at storing plasma but they are significantly larger and require more resources to make.": { en: "Tier 2 PSUs are more efficient at storing plasma but they are significantly larger and require more resources to make.", zh: "二级等离子体存储单元存储效率更高，但体积更大，需要更多资源来制造。" },
        "This power technology not only lets you create existing resources, but allows you to make new, and only creatable elements, such as meteorite.": { en: "This power technology not only lets you create existing resources, but allows you to make new, and only creatable elements, such as meteorite.", zh: "这项能源技术不仅让你创造现有资源，还能制造新的、只能被创造的元素，比如陨石。" },
        "Meteorite is one of the rare resources in the Galaxy as it is an artificial one. All of the pre-existing Meteorite that once was in the Kuiper Belt, and similar asteroid fields in other solar systems, has all been mined away. Now, the only way to get is to make it in machines from energy.": { en: "Meteorite is one of the rare resources in the Galaxy as it is an artificial one. All of the pre-existing Meteorite that once was in the Kuiper Belt, and similar asteroid fields in other solar systems, has all been mined away. Now, the only way to get is to make it in machines from energy.", zh: "陨石是银河系中的稀有资源之一，因为它是一种人造资源。曾经存在于柯伊伯带和其他太阳系类似小行星带的所有陨石都已被开采殆尽。现在，唯一的方式是通过机器用能量制造。" },
        "Research an automated way to gather Meteorite so that you don't have to worry about losing out when you're not around.": { en: "Research an automated way to gather Meteorite so that you don't have to worry about losing out when you're not around.", zh: "研究自动收集陨石的方法，这样你就不必担心不在时错过收益。" },
        "Research a more efficient method of getting meteorite than creating it artificially.": { en: "Research a more efficient method of getting meteorite than creating it artificially.", zh: "研究比人工制造更高效的获取陨石的方法。" },
        "Dyson Rings produce huge amounts of energy by surrounding the sun in solar stations.": { en: "Dyson Rings produce huge amounts of energy by surrounding the sun in solar stations.", zh: "戴森环通过环绕太阳的太阳能站产生大量能量。" },
        "The Dyson Swarms encapsulate the sun in rings of solar stations, whereas Spheres completely encompasses it to allows you to harness enough energy to go interstellar.": { en: "The Dyson Swarms encapsulate the sun in rings of solar stations, whereas Spheres completely encompasses it to allows you to harness enough energy to go interstellar.", zh: "戴森群用太阳能站环围绕太阳，而戴森球则完全包裹太阳，让你能获取足够的能量进行星际旅行。" },
        "Make your resource machines produce even more resources than before. This upgrade doubles the amount they produce for each unit of Energy.": { en: "Make your resource machines produce even more resources than before. This upgrade doubles the amount they produce for each unit of Energy.", zh: "让你的资源机器比以前产生更多资源。此升级使每单位能量的产出翻倍。" },
        "Upgrading Engine Technology will make Charcoal engines produce 4 Energy per second instead of 2.": { en: "Upgrading Engine Technology will make Charcoal engines produce 4 Energy per second instead of 2.", zh: "升级引擎技术将使木炭引擎每秒产生4能量而不是2。" },
        "Upgrading Solar Technology will make solar panels produce 3 Energy per second instead of 1.5.": { en: "Upgrading Solar Technology will make solar panels produce 3 Energy per second instead of 1.5.", zh: "升级太阳能技术将使太阳能板每秒产生3能量而不是1.5。" },
        "Resource Efficiency increases the income of resources by 1%/s per purchase.": { en: "Resource Efficiency increases the income of resources by 1%/s per purchase.", zh: "资源效率每次购买使资源收入增加1%/秒。" },
        "Science Efficiency increases the science production by 2% per purchase.": { en: "Science Efficiency increases the science production by 2% per purchase.", zh: "科技效率每次购买使科技产量增加2%。" },
        "Energy Efficiency decreases the energy consumption of all machines by 1%/s per purchase.": { en: "Energy Efficiency decreases the energy consumption of all machines by 1%/s per purchase.", zh: "能量效率每次购买使所有机器的能量消耗降低1%/秒。" },
        "Battery Efficiency improves the storage capabilities of your batteries by 1% per upgrade.": { en: "Battery Efficiency improves the storage capabilities of your batteries by 1% per upgrade.", zh: "电池效率每次升级使电池的存储能力提高1%。" },

        // ----- Tech Button Texts -----
        "Unlock Storage": { en: "Unlock Storage", zh: "解锁存储" },
        "Unlock Basic Energy Production": { en: "Unlock Basic Energy Production", zh: "解锁基础能量生产" },
        "Unlock Oil": { en: "Unlock Oil", zh: "解锁石油" },
        "Unlock Solar Panels": { en: "Unlock Solar Panels", zh: "解锁太阳能板" },
        "Unlock Resource Machines": { en: "Unlock Resource Machines", zh: "解锁资源机器" },
        "Unlock Destruction": { en: "Unlock Destruction", zh: "解锁销毁" },
        "Unlock Space Travel": { en: "Unlock Space Travel", zh: "解锁太空旅行" },
        "Unlock Oxidisation": { en: "Unlock Oxidisation", zh: "解锁氧化" },
        "Unlock Hydrazine": { en: "Unlock Hydrazine", zh: "解锁肼" },
        "Unlock Tier 2 Science": { en: "Unlock Tier 2 Science", zh: "解锁二级科技" },
        "Unlock Tier 3 Science": { en: "Unlock Tier 3 Science", zh: "解锁三级科技" },
        "Unlock Tier 4 Science": { en: "Unlock Tier 4 Science", zh: "解锁四级科技" },
        "Unlock Batteries": { en: "Unlock Batteries", zh: "解锁电池" },
        "Unlock T2 Batteries": { en: "Unlock T2 Batteries", zh: "解锁T2电池" },
        "Unlock T3 Batteries": { en: "Unlock T3 Batteries", zh: "解锁T3电池" },
        "Unlock T4 Batteries": { en: "Unlock T4 Batteries", zh: "解锁T4电池" },
        "Unlock Plasma": { en: "Unlock Plasma", zh: "解锁等离子体" },
        "Unlock Plasma Tier 2": { en: "Unlock Plasma Tier 2", zh: "解锁二级等离子体" },
        "Unlock PSUs": { en: "Unlock PSUs", zh: "解锁等离子体存储单元" },
        "Unlock T2 PSUs": { en: "Unlock T2 PSUs", zh: "解锁T2等离子体存储单元" },
        "Unlock EMC": { en: "Unlock EMC", zh: "解锁质能转换" },
        "Unlock Meteorite": { en: "Unlock Meteorite", zh: "解锁陨石" },
        "Unlock Meteorite Tier 1": { en: "Unlock Meteorite Tier 1", zh: "解锁一级陨石" },
        "Unlock Meteorite Tier 2": { en: "Unlock Meteorite Tier 2", zh: "解锁二级陨石" },
        "Unlock Dyson Rings": { en: "Unlock Dyson Rings", zh: "解锁戴森环" },
        "Unlock Dyson Swarms/Spheres": { en: "Unlock Dyson Swarms/Spheres", zh: "解锁戴森群/戴森球" },
        "Upgrade Resource Tech": { en: "Upgrade Resource Tech", zh: "升级资源技术" },
        "Upgrade Charcoal Engines": { en: "Upgrade Charcoal Engines", zh: "升级木炭引擎" },
        "Upgrade Solar Panels": { en: "Upgrade Solar Panels", zh: "升级太阳能板" },
        "Purchase to unlock something.": { en: "Purchase to unlock something.", zh: "购买以解锁某些内容。" },

        // ----- Notifications -----
        "Game Saved": { en: "Game Saved", zh: "游戏已保存" },
        "Your save data has been stored in localStorage on your computer": { en: "Your save data has been stored in localStorage on your computer", zh: "你的存档数据已存储在电脑的localStorage中" },
        "Storage Full!": { en: "Storage Full!", zh: "存储已满！" },
        "You will no longer collect resources when they are full.": { en: "You will no longer collect resources when they are full.", zh: "资源存满后将不再继续收集。" },
        "Offline Gains": { en: "Offline Gains", zh: "离线收益" },
        "You've been offline for ": { en: "You've been offline for ", zh: "你已离线 " },
        "new Tab!": { en: "new Tab!", zh: "新标签页！" },
        "You've unlocked the Solar System Tab!": { en: "You've unlocked the Solar System Tab!", zh: "你已解锁太阳系标签页！" },

        // ----- Interstellar -----
        "Communications": { en: "Communications", zh: "通讯" },
        "Rockets": { en: "Rockets", zh: "火箭" },
        "Travel": { en: "Travel", zh: "旅行" },
        "Military": { en: "Military", zh: "军事" },
        "Carnelian Resistance": { en: "Carnelian Resistance", zh: "红玉髓抵抗军" },
        "Prasnian Empire": { en: "Prasnian Empire", zh: "普拉斯尼亚帝国" },
        "Hyacinite Congregation": { en: "Hyacinite Congregation", zh: "风信子教会" },
        "Kitrinos Corporation": { en: "Kitrinos Corporation", zh: "基特里诺斯集团" },
        "Moviton Syndicate": { en: "Moviton Syndicate", zh: "莫维顿辛迪加" },
        "Overlord Cult": { en: "Overlord Cult", zh: "主宰教派" },
        "Astronomical Breakthrough": { en: "Astronomical Breakthrough", zh: "天文学突破" },
        "Interstellar Radar Scanner": { en: "Interstellar Radar Scanner", zh: "星际雷达扫描仪" },
        "Rocket Ship": { en: "Rocket Ship", zh: "火箭飞船" },
        "Shield Plating": { en: "Shield Plating", zh: "护甲板" },
        "Engine Unit": { en: "Engine Unit", zh: "引擎单元" },
        "Aerodynamic Sections": { en: "Aerodynamic Sections", zh: "空气动力学组件" },
        "Alcubierre Drive": { en: "Alcubierre Drive", zh: "阿库别瑞引擎" },
        "Scout": { en: "Scout", zh: "侦察舰" },
        "Frigate": { en: "Frigate", zh: "护卫舰" },
        "Corvette": { en: "Corvette", zh: "轻巡洋舰" },
        "Battle Cruiser": { en: "Battle Cruiser", zh: "战斗巡洋舰" },
        "Capital Ship": { en: "Capital Ship", zh: "主力舰" },

        "This is where you learn about other systems to travel to.": { en: "This is where you learn about other systems to travel to.", zh: "在这里了解其他可旅行的星系。" },
        "This is where you can construct your transport to the stars.": { en: "This is where you can construct your transport to the stars.", zh: "在这里建造你前往星辰的交通工具。" },
        "Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.": { en: "Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.", zh: "你的星际旅行燃料在此生产。不幸的是，每个星系只能处理10万反物质，因为它极其不稳定。" },
        "Here, you can travel across the cosmos to your heart's desire. When you explore a star system, it will appear in the respective faction tab, where you can gain control of it for boosts in the resources present.": { en: "Here, you can travel across the cosmos to your heart's desire. When you explore a star system, it will appear in the respective faction tab, where you can gain control of it for boosts in the resources present.", zh: "在这里，你可以随心所欲地穿越宇宙。当你探索一个星系时，它会出现在相应的派系标签页中，你可以在那里控制它以获得资源加成。" },
        "This is where you can build up your fleet of ships to invade other systems. Your total fleet's attributes are based on which ships you own.": { en: "This is where you can build up your fleet of ships to invade other systems. Your total fleet's attributes are based on which ships you own.", zh: "在这里建设你的舰队以入侵其他星系。你的总舰队属性基于你所拥有的舰船。" },
        "A ruthless faction with a fierce anger towards the ones in power, most notable, the Prasnian Empire. They are incessant in their opposition and focus their whole force towards attacking their enemies. Because of this, what they offer comprises mostly of upgrades tending towards a more active gameplay.": { en: "A ruthless faction with a fierce anger towards the ones in power, most notable, the Prasnian Empire. They are incessant in their opposition and focus their whole force towards attacking their enemies. Because of this, what they offer comprises mostly of upgrades tending towards a more active gameplay.", zh: "一个无情的派系，对当权者（尤其是普拉斯尼亚帝国）怀有强烈愤怒。他们坚持不懈地进行抵抗，将全部力量集中于攻击敌人。因此，他们提供的升级主要倾向于更积极的游戏玩法。" },
        "The current leader in the galaxy and the faction most focused on keeping things as they are. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders": { en: "The current leader in the galaxy and the faction most focused on keeping things as they are. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders", zh: "银河系的现任领袖，最专注于维持现状的派系。反对变革，实行威权统治，主要提供关于戴森球或奇观等建筑的升级。" },
        "The Hyacinite Congregationg is a science loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.": { en: "The Hyacinite Congregationg is a science loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.", zh: "风信子教团是一个热爱科学的社会，以所有技术进步为荣，始终展望未来。他们为真理而战，欢迎任何与他们有共同信仰的人。" },
        "This private company has grown powerful over the galaxy and is inspired by profits, with allies to those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.": { en: "This private company has grown powerful over the galaxy and is inspired by profits, with allies to those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.", zh: "这家私人公司在银河系中势力强大，以利润为驱动，与能支持其目标的人结盟。提供的升级侧重于被动收益和大量自动化。" },
        "The Moviton Syndicate is an expansionist centred faction, with a goal of conquest over the galaxy. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rocket building and interstellar travel.": { en: "The Moviton Syndicate is an expansionist centred faction, with a goal of conquest over the galaxy. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rocket building and interstellar travel.", zh: "莫维顿辛迪加是一个以扩张为中心的派系，目标是征服银河系。他们经常在冲突中两头下注，希望从混乱中获利。他们提供旅行方面的改进，包括火箭建造和星际旅行。" },
        "This faction is shrowded in mystery. While not much is known, a great sense of power overlooks the whole galaxy, seemingly above the other 5 factions and their 'petty' squables. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.": { en: "This faction is shrowded in mystery. While not much is known, a great sense of power overlooks the whole galaxy, seemingly above the other 5 factions and their 'petty' squables. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.", zh: "这个派系笼罩在神秘之中。虽然所知不多，但一股强大的力量俯瞰整个银河系，似乎凌驾于其他5个派系及其'琐碎'的争吵之上。对主宰的忠诚所提供的升级不受类型限制，种类繁多。" },

        "A huge problem with the theory of interstellar space travel is on the verge of being broken. Make it happen with this upgrade. This is a one time upgrade, increasing your exploration range by 5 Light Years.": { en: "A huge problem with the theory of interstellar space travel is on the verge of being broken. Make it happen with this upgrade. This is a one time upgrade, increasing your exploration range by 5 Light Years.", zh: "星际太空旅行理论中的一个巨大问题即将被突破。使用此升级实现它。这是一次性升级，增加5光年探索范围。" },
        "The Overlord gifts you with the technology to discover stars in outer space by using the IRS. Each one increases the exploration range by 1 Light Year.": { en: "The Overlord gifts you with the technology to discover stars in outer space by using the IRS. Each one increases the exploration range by 1 Light Year.", zh: "主宰赐予你利用星际雷达扫描仪发现外太空恒星的技术。每个扫描仪增加1光年探索范围。" },
        "The Rocket Ship can travel to Stars in the Milky Way, but cannot land on objects within the systems.": { en: "The Rocket Ship can travel to Stars in the Milky Way, but cannot land on objects within the systems.", zh: "火箭飞船可以前往银河系中的恒星，但不能降落在星系内的天体上。" },
        "This plating combats the Sun's radiation, and can protect anyone inside from the frigid cold of space.": { en: "This plating combats the Sun's radiation, and can protect anyone inside from the frigid cold of space.", zh: "这种护甲板抵御太阳辐射，保护内部人员免受太空严寒。" },
        "These combine antimatter with matter in a controlled reaction to create propulsion that will carry you to the stars.": { en: "These combine antimatter with matter in a controlled reaction to create propulsion that will carry you to the stars.", zh: "这些引擎在可控反应中将反物质与物质结合，产生推进力带你前往星辰。" },
        "These allow for easy takeoffs and landings out of atmospheres so that you don't have to worry about air resistance.": { en: "These allow for easy takeoffs and landings out of atmospheres so that you don't have to worry about air resistance.", zh: "这些组件便于在大气层外起降，无需担心空气阻力。" },
        "This powerful reactor can turn high-energy plasma into the most efficient fuel we can imagine.": { en: "This powerful reactor can turn high-energy plasma into the most efficient fuel we can imagine.", zh: "这个强大的反应堆可以将高能等离子体转化为我们能想象到的最有效的燃料。" },
        "Scout ships are the smallest and fastest ships and cost the least of all. Despite their seemingly little worth, they are important in battle and in numbers, can be deadly.": { en: "Scout ships are the smallest and fastest ships and cost the least of all. Despite their seemingly little worth, they are important in battle and in numbers, can be deadly.", zh: "侦察舰是最小最快的舰船，成本最低。尽管看似价值不高，但它们在战斗中很重要，数量庞大时可以致命。" },
        "Larger than scouts, Frigates are among the smaller side of ship warefare. They have more power than scouts, but are significantly slower.": { en: "Larger than scouts, Frigates are among the smaller side of ship warefare. They have more power than scouts, but are significantly slower.", zh: "护卫舰比侦察舰大，属于舰船中较小的类型。它们比侦察舰更有威力，但速度慢得多。" },
        "The Corvette is a mid-sized ship with decent speed, given its other attributes. What it lacks in defense, it makes up for in power and speed and is a good ship to populate your fleets with.": { en: "The Corvette is a mid-sized ship with decent speed, given its other attributes. What it lacks in defense, it makes up for in power and speed and is a good ship to populate your fleets with.", zh: "轻巡洋舰是中型舰船，考虑到其他属性，速度不错。它缺乏防御，但用威力和速度来弥补，是填充舰队的好选择。" },
        "The Battle Cruiser is a costly investment, but pays off with a balanced mix of power, defense and speed. It is a high-end ship, both in terms of attributes and cost.": { en: "The Battle Cruiser is a costly investment, but pays off with a balanced mix of power, defense and speed. It is a high-end ship, both in terms of attributes and cost.", zh: "战斗巡洋舰是昂贵的投资，但回报均衡的威力、防御和速度。无论属性还是成本，它都是高端舰船。" },
        "The Capital Ship is a Defense-heavy ship, but can still pack a punch with it's large attack force. The main downside is the slow speed, dragging the fleet's manouverability down.": { en: "The Capital Ship is a Defense-heavy ship, but can still pack a punch with it's large attack force. The main downside is the slow speed, dragging the fleet's manouverability down.", zh: "主力舰是重防御舰船，但仍能以其庞大的攻击力打出重击。主要缺点是速度慢，拖累舰队的机动性。" },

        // ----- Stargaze -----
        "Introduction": { en: "Introduction", zh: "引言" },
        "Dark Matter": { en: "Dark Matter", zh: "暗物质" },
        "Rebirth": { en: "Rebirth", zh: "重生" },
        "Respec": { en: "Respec", zh: "重置" },
        "Dark Matter Boost": { en: "Dark Matter Boost", zh: "暗物质加成" },
        "Empower Manual Gains": { en: "Empower Manual Gains", zh: "强化手动获取" },
        "Starting Storage": { en: "Starting Storage", zh: "初始存储" },
        "Storage Discount": { en: "Storage Discount", zh: "存储折扣" },
        "Tier 3 Plasma": { en: "Tier 3 Plasma", zh: "三级等离子体" },
        "Floor 1 Discount": { en: "Floor 1 Discount", zh: "一楼折扣" },
        "Floor 2 & 3 Discount": { en: "Floor 2 & 3 Discount", zh: "二楼和三楼折扣" },
        "Automated EMC": { en: "Automated EMC", zh: "自动质能转换" },
        "Starting Labs": { en: "Starting Labs", zh: "初始实验室" },
        "Lab Discount": { en: "Lab Discount", zh: "实验室折扣" },
        "Tier 5 Laboratories": { en: "Tier 5 Laboratories", zh: "五级实验室" },
        "Energy Efficiency Cap": { en: "Energy Efficiency Cap", zh: "能量效率上限" },
        "Tier 1 Machine Discount": { en: "Tier 1 Machine Discount", zh: "一级机器折扣" },
        "Tier 5 Batteries": { en: "Tier 5 Batteries", zh: "五级电池" },
        "Tier 5 Machines": { en: "Tier 5 Machines", zh: "五级机器" },
        "Chemical Plant Boost": { en: "Chemical Plant Boost", zh: "化工厂加成" },
        "Rocket Discount": { en: "Rocket Discount", zh: "火箭折扣" },
        "Meteorite Tier 3": { en: "Meteorite Tier 3", zh: "三级陨石" },
        "Meteorite Tier 4": { en: "Meteorite Tier 4", zh: "四级陨石" },
        "General": { en: "General", zh: "通用" },
        "Factions": { en: "Factions", zh: "派系" },

        // ----- Stargaze Descriptions -----
        "Here, you can see how much Dark Matter you have acquired and the earnings you will recieve upon reset (in brackets). You can find out how DM is gained and can spend it on Dark-Matter-specific upgrades.": { en: "Here, you can see how much Dark Matter you have acquired and the earnings you will recieve upon reset (in brackets). You can find out how DM is gained and can spend it on Dark-Matter-specific upgrades.", zh: "在这里，你可以查看已获得的暗物质数量以及重置时将获得的收益（括号内）。你可以了解暗物质的获取方式，并将其用于暗物质专属升级。" },
        "You get Dark Matter for the floors of the Wonder Station that you complete. It is likely you will have achieved all of these in your first run before resetting. You get 4 Dark Matter for every floor completed, but 2 for the last floor (only one wonder).": { en: "You get Dark Matter for the floors of the Wonder Station that you complete. It is likely you will have achieved all of these in your first run before resetting. You get 4 Dark Matter for every floor completed, but 2 for the last floor (only one wonder).", zh: "你完成奇观站的每一层都会获得暗物质。你可能在第一次游戏重置前就已完成所有这些。每完成一层获得4暗物质，但最后一层（只有一个奇观）获得2暗物质。" },
        "For building a sphere in your home system and thus completing it, you get 15 dark matter. For every sphere built in another system, you gain 5 dark matter.": { en: "For building a sphere in your home system and thus completing it, you get 15 dark matter. For every sphere built in another system, you gain 5 dark matter.", zh: "在主星系建造一个戴森球并完成它，获得15暗物质。在另一个星系每建造一个戴森球，获得5暗物质。" },
        "For every 25 Research Efficiencies in any of the repurchaseable researches, you will get 2 Dark Matter.": { en: "For every 25 Research Efficiencies in any of the repurchaseable researches, you will get 2 Dark Matter.", zh: "在任何可重复购买的研究中每拥有25个研究效率，获得2暗物质。" },
        "For every achievement rank attained, you will get 2 dark matter. Due to the easy difficulty in the first few achievement ranks, this will be your primary source of dark matter early in a run.": { en: "For every achievement rank attained, you will get 2 dark matter. Due to the easy difficulty in the first few achievement ranks, this will be your primary source of dark matter early in a run.", zh: "每达成一个成就等级获得2暗物质。由于前几个成就等级难度较低，这将是游戏早期暗物质的主要来源。" },
        "One of the more complex systems, your Dark Matter gained from swarms is judged on an old mathematical sequence: Pascal's Triangle. You will get 1 dark matter for passing each triangular number of swarms necessary.": { en: "One of the more complex systems, your Dark Matter gained from swarms is judged on an old mathematical sequence: Pascal's Triangle. You will get 1 dark matter for passing each triangular number of swarms necessary.", zh: "这是更复杂的系统之一，你从戴森群获得的暗物质基于一个古老的数学序列：杨辉三角。每达到一个三角形数量的戴森群，获得1暗物质。" },

        // ----- Stargaze Intro Paragraphs -----
        '"So here we are, at what seems like the end of your journey, but what you don\'t realise... is that this is just the beginning. Gazing up at the stars, you wonder what you could do with all of your newfound wealth and your empire in the solar system.': { en: '"So here we are, at what seems like the end of your journey, but what you don\'t realise... is that this is just the beginning. Gazing up at the stars, you wonder what you could do with all of your newfound wealth and your empire in the solar system.', zh: '"所以，我们来到了这里，看似旅程的终点，但你不知道的是……这仅仅是开始。仰望星空，你思索着用你在太阳系中新获得的财富和帝国能做些什么。' },
        'Suddenly, the Overlord reaches out to you and says: "You have come far in your time, and I feel that your life is slowing to an end after a long life of empire building. However, you have not met the expectations I thought you would."': { en: 'Suddenly, the Overlord reaches out to you and says: "You have come far in your time, and I feel that your life is slowing to an end after a long life of empire building. However, you have not met the expectations I thought you would."', zh: '突然，主宰向你伸出援手说："你走了很长的路，我感到在漫长的帝国建设之后，你的生命正走向终结。然而，你并没有达到我所期望的高度。"' },
        '"Despite disapointing me and not achieving as much greatness as I would have liked, because of your loyalty and your dedication to me, I am prepared to give you another chance at Rebirth."': { en: '"Despite disapointing me and not achieving as much greatness as I would have liked, because of your loyalty and your dedication to me, I am prepared to give you another chance at Rebirth."', zh: '"尽管你让我失望，没有达到我所期望的伟大成就，但鉴于你的忠诚和对我的奉献，我准备给你一个重生的机会。"' },
        '"You will have many chances to impress me, as I will give you the ability of redemption when you feel the time has come and sacrifice is necessary. Your empire will grow even greater than before every time you rebirth, and as long as your alliegence lies with me, I will show you the way to galactic domination."': { en: '"You will have many chances to impress me, as I will give you the ability of redemption when you feel the time has come and sacrifice is necessary. Your empire will grow even greater than before every time you rebirth, and as long as your alliegence lies with me, I will show you the way to galactic domination."', zh: '"你会有很多机会给我留下深刻印象，我会在你觉得时机已到、必须做出牺牲时赐予你救赎之力。每次重生你的帝国都会比以前更加强大，只要你的忠诚与我同在，我会指引你走向银河统治之路。"' },
        '"You will start over, a new life, but in exchange for your soul, I will reward your next self with the knowledge you have gained during your time in this universe and some of the most valuble material in this side of the multiverse: Dark Matter."': { en: '"You will start over, a new life, but in exchange for your soul, I will reward your next self with the knowledge you have gained during your time in this universe and some of the most valuble material in this side of the multiverse: Dark Matter."', zh: '"你将重新开始，获得新生，但作为交换，我将用你在宇宙中获得的学识和多元宇宙这边最有价值的材料——暗物质——来奖励你的下一个自我。"' },

        // ----- Stargaze Prestige -----
        "Stepping forth into a new life is a great undertaking and not something to be done on a whim. Once certain, you may start afresh, maintaining the knowledge and experience you gave gained from your previous life and renew yourself, achieving greater and faster than before. You will keep any unspent dark matter, as well as your upgrades. <br><b>NB: You cannot rebirth without a sphere, even on second runs.<br> NB: You will keep all upgrades purchased in your previous life  </b>": { en: "Stepping forth into a new life is a great undertaking and not something to be done on a whim. Once certain, you may start afresh, maintaining the knowledge and experience you gave gained from your previous life and renew yourself, achieving greater and faster than before. You will keep any unspent dark matter, as well as your upgrades. <br><b>NB: You cannot rebirth without a sphere, even on second runs.<br> NB: You will keep all upgrades purchased in your previous life  </b>", zh: "迈向新生命是一项伟大的事业，不能一时冲动。一旦确定，你可以重新开始，保留前世的学识和经验，超越以往。你将保留所有未使用的暗物质以及升级。<br><b>注意：没有戴森球不能重生，即使是第二轮游戏也是如此。<br>注意：你将保留前世购买的所有升级</b>" },
        "When you have made a mistake or want to change your upgrades, you can respec and refund every upgrade for dark matter. Unfortunately, this huge amount of power can only be unleashed a finite number of times. The Overlord graciously gives you 3 free chances at redemption, but the rest will have to be earned through rebirth (1 extra every 3 times). <br><b>NB: You will lose machines gained with these ugprades, including all T5 machines. You will also divide your storage by 128 if you have the starting storage. (6400/50 = 128).</b>": { en: "When you have made a mistake or want to change your upgrades, you can respec and refund every upgrade for dark matter. Unfortunately, this huge amount of power can only be unleashed a finite number of times. The Overlord graciously gives you 3 free chances at redemption, but the rest will have to be earned through rebirth (1 extra every 3 times). <br><b>NB: You will lose machines gained with these ugprades, including all T5 machines. You will also divide your storage by 128 if you have the starting storage. (6400/50 = 128).</b>", zh: "当你犯了错误或想更改升级时，你可以重置并将所有升级退换为暗物质。不幸的是，这种强大的力量只能释放有限次数。主宰慷慨地给你3次免费重置机会，但更多机会需要通过重生获得（每3次多1次）。<br><b>注意：你将失去这些升级获得的机器，包括所有T5机器。如果你有初始存储，你的存储将除以128。（6400/50 = 128）</b>" },
        "This adds a 1% boost to all resources (including science) for each Dark Matter you have not spent.": { en: "This adds a 1% boost to all resources (including science) for each Dark Matter you have not spent.", zh: "每未花费的暗物质为所有资源（包括科技）增加1%的加成。" },
        "Increase all gain buttons to 20 per click instead of 1.": { en: "Increase all gain buttons to 20 per click instead of 1.", zh: "将所有获取按钮增加到每次点击20而不是1。" },
        "Start with 6,400 max-storage on everything on rebirth. (Does not affect if over 6,400)": { en: "Start with 6,400 max-storage on everything on rebirth. (Does not affect if over 6,400)", zh: "重生时所有资源初始最大存储为6,400。（如果已超过6,400则不受影响）" },
        "All Storages no longer cost 100% of the main resource, but instead, 75%.": { en: "All Storages no longer cost 100% of the main resource, but instead, 75%.", zh: "所有存储不再消耗100%的主要资源，而是75%。" },
        "Unlock the Electron Bath": { en: "Unlock the Electron Bath", zh: "解锁电子浴" },
        "All Wonders on the First Floor recieve a 15% price reduction.": { en: "All Wonders on the First Floor recieve a 15% price reduction.", zh: "一楼所有奇观获得15%价格减免。" },
        "All Wonders on the Second and Third Floor recieve a 20% price reduction.": { en: "All Wonders on the Second and Third Floor recieve a 20% price reduction.", zh: "二楼和三楼所有奇观获得20%价格减免。" },
        "Check a box on an EMC resource and have that resource be 'EMCed' to the max every second.": { en: "Check a box on an EMC resource and have that resource be 'EMCed' to the max every second.", zh: "在EMC资源上勾选一个框，该资源将每秒自动最大转换。" },
        "Start with 20 T1 Labs on rebirth.": { en: "Start with 20 T1 Labs on rebirth.", zh: "重生时初始拥有20个一级实验室。" },
        "T2+ Labs are 20% cheaper with this upgrade.": { en: "T2+ Labs are 20% cheaper with this upgrade.", zh: "此升级使二级及以上实验室便宜20%。" },
        "Unlock the Space Scientific Satellite Station": { en: "Unlock the Space Scientific Satellite Station", zh: "解锁太空科学卫星站" },
        "Increase Energy Efficiency research cap to 50% instead of 25%.": { en: "Increase Energy Efficiency research cap to 50% instead of 25%.", zh: "将能量效率研究上限提高到50%而非25%。" },
        "All Tier 1 machines on every resource (in resources tab) are 10% cheaper.": { en: "All Tier 1 machines on every resource (in resources tab) are 10% cheaper.", zh: "所有资源（在资源标签页中）的一级机器便宜10%。" },
        "Unlock the fifth tier of batteries for all your energy storage needs.": { en: "Unlock the fifth tier of batteries for all your energy storage needs.", zh: "解锁第五级电池以满足你的所有能量存储需求。" },
        "Gain access to a fifth tier of machines to produce resources.": { en: "Gain access to a fifth tier of machines to produce resources.", zh: "获得第五级资源生产机器的访问权限。" },
        "Produce 100% more rocket fuel per chemical plant.": { en: "Produce 100% more rocket fuel per chemical plant.", zh: "每座化工厂多生产100%的火箭燃料。" },
        "Rocket Parts Cost 35% less.": { en: "Rocket Parts Cost 35% less.", zh: "火箭部件成本降低35%。" },
        "Unlock the Planet Smasher building.": { en: "Unlock the Planet Smasher building.", zh: "解锁行星粉碎者建筑。" },
        "Unlock the Nebulous Synthesizer building.": { en: "Unlock the Nebulous Synthesizer building.", zh: "解锁星云合成器建筑。" },

        // ----- Sol Center / EMC -----
        "Energy-Mass Conversion": { en: "Energy-Mass Conversion", zh: "质能转换" },
        "Dyson Segments": { en: "Dyson Segments", zh: "戴森段" },
        "Dyson Sphere": { en: "Dyson Sphere", zh: "戴森球" },
        "Ring": { en: "Ring", zh: "环" },
        "Swarm": { en: "Swarm", zh: "群" },
        "Sphere": { en: "Sphere", zh: "球" },
        "Sections": { en: "Sections", zh: "段数" },

        // ----- Achievements -----
        "Resources": { en: "Resources", zh: "资源" },
        "Producers": { en: "Producers", zh: "生产者" },
        "Achievement Rank": { en: "Achievement Rank", zh: "成就等级" },
        "Collect %s Plasma": { en: "Collect %s Plasma", zh: "收集 %s 等离子体" },
        "Collect %s Uranium": { en: "Collect %s Uranium", zh: "收集 %s 铀" },
        "Collect %s Lava": { en: "Collect %s Lava", zh: "收集 %s 岩浆" },
        "Collect %s Oil": { en: "Collect %s Oil", zh: "收集 %s 石油" },
        "Collect %s Metal": { en: "Collect %s Metal", zh: "收集 %s 金属" },
        "Collect %s Gems": { en: "Collect %s Gems", zh: "收集 %s 宝石" },
        "Collect %s Charcoal": { en: "Collect %s Charcoal", zh: "收集 %s 木炭" },
        "Collect %s Wood": { en: "Collect %s Wood", zh: "收集 %s 木材" },
        "Collect %s Silicon": { en: "Collect %s Silicon", zh: "收集 %s 硅" },
        "Collect %s Lunarite": { en: "Collect %s Lunarite", zh: "收集 %s 月岩" },
        "Collect %s Methane": { en: "Collect %s Methane", zh: "收集 %s 甲烷" },
        "Collect %s Titanium": { en: "Collect %s Titanium", zh: "收集 %s 钛" },
        "Collect %s Gold": { en: "Collect %s Gold", zh: "收集 %s 金" },
        "Collect %s Silver": { en: "Collect %s Silver", zh: "收集 %s 银" },
        "Collect %s Hydrogen": { en: "Collect %s Hydrogen", zh: "收集 %s 氢" },
        "Collect %s Helium": { en: "Collect %s Helium", zh: "收集 %s 氦" },
        "Collect %s Ice": { en: "Collect %s Ice", zh: "收集 %s 冰" },
        "Collect %s Meteorite": { en: "Collect %s Meteorite", zh: "收集 %s 陨石" },
        "Collect %s Science": { en: "Collect %s Science", zh: "收集 %s 科技" },
        "Collect %s Rocket Fuel": { en: "Collect %s Rocket Fuel", zh: "收集 %s 火箭燃料" },

        // ----- Achievements (Producer) template -----
        "Build %s": { en: "Build %s", zh: "建造 %s" },

        // ----- Wonder Names -----
        "Precious Wonder": { en: "Precious Wonder", zh: "珍贵奇观" },
        "Energetic Wonder": { en: "Energetic Wonder", zh: "能量奇观" },
        "Tech Wonder": { en: "Tech Wonder", zh: "科技奇观" },
        "Meteorite Wonder": { en: "Meteorite Wonder", zh: "陨石奇观" },
        "Comms Wonder": { en: "Comms Wonder", zh: "通讯奇观" },
        "Rocket Wonder": { en: "Rocket Wonder", zh: "火箭奇观" },
        "Antimatter Wonder": { en: "Antimatter Wonder", zh: "反物质奇观" },
        "Portal Room": { en: "Portal Room", zh: "传送门房间" },
        "Stargate": { en: "Stargate", zh: "星门" },

        // ----- Solar System -----
        "Launch Rocket": { en: "Launch Rocket", zh: "发射火箭" },
        "Travel to": { en: "Travel to", zh: "前往" },
        "Explore": { en: "Explore", zh: "探索" },

        // ----- Setting labels -----
        "Settings": { en: "Settings", zh: "设置" },
        "Language": { en: "Language", zh: "语言" },
        "English": { en: "English", zh: "English" },
        "Chinese": { en: "Chinese", zh: "中文" },
        "Number Format": { en: "Number Format", zh: "数字格式" },
        "Bold Text on Red Costs": { en: "Bold Text on Red Costs", zh: "红色消耗加粗" },
        "Compressed Sidebar": { en: "Compressed Sidebar", zh: "压缩侧边栏" },
        "Notifications": { en: "Notifications", zh: "通知" },
        "Save Notifications": { en: "Save Notifications", zh: "保存通知" },
        "Gain Buttons": { en: "Gain Buttons", zh: "获取按钮" },
        "Red Destroy Buttons": { en: "Red Destroy Buttons", zh: "红色销毁按钮" },
        "Hide Completed": { en: "Hide Completed", zh: "隐藏已完成" },
        "Theme": { en: "Theme", zh: "主题" },
        "Auto-Save Interval": { en: "Auto-Save Interval", zh: "自动保存间隔" },
        "30 seconds": { en: "30 seconds", zh: "30秒" },
        "2 minutes": { en: "2 minutes", zh: "2分钟" },
        "10 minutes": { en: "10 minutes", zh: "10分钟" },
        "Off": { en: "Off", zh: "关闭" },
        "Enabled": { en: "Enabled", zh: "启用" },
        "Disabled": { en: "Disabled", zh: "禁用" },
        "Hidden": { en: "Hidden", zh: "隐藏" },
        "Visible": { en: "Visible", zh: "可见" },

        // ----- More tab -----
        "Save": { en: "Save", zh: "存档" },
        "Load": { en: "Load", zh: "读档" },
        "Export": { en: "Export", zh: "导出" },
        "Import": { en: "Import", zh: "导入" },
        "Delete Save": { en: "Delete Save", zh: "删除存档" },
        "Company Name": { en: "Company Name", zh: "公司名称" },
        "Change": { en: "Change", zh: "变更" },
        "Info": { en: "Info", zh: "信息" },
        "Changelog": { en: "Changelog", zh: "更新日志" },
        "Discord": { en: "Discord", zh: "Discord" },
        "Credits": { en: "Credits", zh: "致谢" },

        // ----- Misc UI -----
        "Total Fleet Attributes:": { en: "Total Fleet Attributes:", zh: "总舰队属性：" },
        "Power": { en: "Power", zh: "威力" },
        "Defense": { en: "Defense", zh: "防御" },
        "Speed": { en: "Speed", zh: "速度" },
        "Relationship:": { en: "Relationship:", zh: "关系：" },
        "Your Invasion Fleet:": { en: "Your Invasion Fleet:", zh: "你的入侵舰队：" },
        "Distance:": { en: "Distance:", zh: "距离：" },
        "Planets:": { en: "Planets:", zh: "行星数：" },
        "Faction:": { en: "Faction:", zh: "派系：" },
        "Resources Present:": { en: "Resources Present:", zh: "资源：" },
        "Espionage": { en: "Espionage", zh: "间谍" },
        "Invade": { en: "Invade", zh: "入侵" },
        "Absorb": { en: "Absorb", zh: "吸收" },
        "Success Chance:": { en: "Success Chance:", zh: "成功几率：" },
        "Chance of Victory:": { en: "Chance of Victory:", zh: "胜利几率：" },
        "Threat Level:": { en: "Threat Level:", zh: "威胁等级：" },
        "Close": { en: "Close", zh: "关闭" },
        "Send Scouts": { en: "Send Scouts", zh: "派出侦察舰" },
        "Attack!": { en: "Attack!", zh: "攻击！" },
        "Active Ships:": { en: "Active Ships:", zh: "活跃舰船：" },
        "Your Active Fleet Statistics:": { en: "Your Active Fleet Statistics:", zh: "你的活跃舰队数据：" },
        "System Fleet Statistics:": { en: "System Fleet Statistics:", zh: "星系舰队数据：" },
        "System Fleet Power/Defense Multiplier (Reputation)": { en: "System Fleet Power/Defense Multiplier (Reputation)", zh: "星系舰队威力/防御倍率（声誉）" },
        "Espionage": { en: "Espionage", zh: "间谍活动" },
        "Absorption": { en: "Absorption", zh: "吸收" },
        "Invasion": { en: "Invasion", zh: "入侵" },

        // ----- Help/FAQ -----
        "Help / FAQ": { en: "Help / FAQ", zh: "帮助 / 常见问题" },
        "Beginner's Guide": { en: "Beginner's Guide", zh: "新手指南" },
        "About": { en: "About", zh: "关于" },

        // ----- Splash / Loading -----
        "Reticulating Splines...": { en: "Reticulating Splines...", zh: "计算样条曲线..." },
        "Space Company": { en: "Space Company", zh: "太空公司" },

        // ----- Toggle -----
        "Turn Super-Heater": { en: "Turn Super-Heater", zh: "切换超级加热器" },
        "Turn Plasmatic Pit": { en: "Turn Plasmatic Pit", zh: "切换等离子坑" },
        "Turn Electron Bath": { en: "Turn Electron Bath", zh: "切换电子浴" },

        // ----- Storage full time -----
        "Time remaining until full storage:": { en: "Time remaining until full storage:", zh: "距离存满还有：" },
        "Time remaining until empty storage:": { en: "Time remaining until empty storage:", zh: "距离存空还有：" },
        "N/A": { en: "N/A", zh: "无" },

        // ----- Planet Names (star system) -----
        "Mercury": { en: "Mercury", zh: "水星" },
        "Venus": { en: "Venus", zh: "金星" },
        "Mars": { en: "Mars", zh: "火星" },
        "Jupiter": { en: "Jupiter", zh: "木星" },
        "Saturn": { en: "Saturn", zh: "土星" },
        "Uranus": { en: "Uranus", zh: "天王星" },
        "Neptune": { en: "Neptune", zh: "海王星" },
        "Pluto": { en: "Pluto", zh: "冥王星" },
        "Moon": { en: "Moon", zh: "月球" },
        "Sun": { en: "Sun", zh: "太阳" },
        "Earth": { en: "Earth", zh: "地球" },
        "Asteroid Belt": { en: "Asteroid Belt", zh: "小行星带" },

        // ----- Machine Tab Names -----
        "Machine Overview": { en: "Machine Overview", zh: "机器概览" },

        // ----- Misc resource page -----
        "1 Plasma is created by infusing": { en: "1 Plasma is created by infusing", zh: "1个等离子体由" },
        "Time remaining until": { en: "Time remaining until", zh: "距离存储" },
        "Empty": { en: "Empty", zh: "空" },
        "Full": { en: "Full", zh: "满" },

        // ----- Exploration interstellar -----
        "Exploring": { en: "Exploring", zh: "探索中" },
        "Exploration successful!": { en: "Exploration successful!", zh: "探索成功！" },
        "You have explored": { en: "You have explored", zh: "你已探索了" },

        // ----- Tech UI -----
        "Costs ": { en: "Costs ", zh: "消耗 " },
        "Costs:": { en: "Costs:", zh: "消耗：" },
        "Activate": { en: "Activate", zh: "激活" },
        "Dormant": { en: "Dormant", zh: "未激活" },
        "Activated": { en: "Activated", zh: "已激活" },
        "Improves relationship by": { en: "Improves relationship by", zh: "提升关系值" },
        "Dark Matter": { en: "Dark Matter", zh: "暗物质" },
        "Rebirth": { en: "Rebirth", zh: "重生" },
        "Respec": { en: "Respec", zh: "重置" },
        "Achievement Reached": { en: "Achievement Reached", zh: "达成成就" },
        "Successful Espionage!": { en: "Successful Espionage!", zh: "间谍成功！" },
        "You have found out more about the star system!": { en: "You have found out more about the star system!", zh: "你发现了更多关于这个星系的信息！" },
        "Espionage Failed!": { en: "Espionage Failed!", zh: "间谍失败！" },
        "You lost all of your active scouts.": { en: "You lost all of your active scouts.", zh: "你失去了所有活跃的侦察舰。" },
        "Successful Invasion!": { en: "Successful Invasion!", zh: "入侵成功！" },
        "Failed Invasion!": { en: "Failed Invasion!", zh: "入侵失败！" },
        "Successful Absorbtion!": { en: "Successful Absorbtion!", zh: "吸收成功！" },
        "New Tab!": { en: "New Tab!", zh: "新标签页！" },
        "Dark Matter!": { en: "Dark Matter!", zh: "暗物质！" },
        "Energy Conversion": { en: "Energy Conversion", zh: "能量转换" },
        "Plasma Conversion": { en: "Plasma Conversion", zh: "等离子体转换" },
        "You've unlocked the Research Tab!": { en: "You've unlocked the Research Tab!", zh: "你解锁了研究标签页！" },
        "You've unlocked the Wonders Tab!": { en: "You've unlocked the Wonders Tab!", zh: "你解锁了奇观标签页！" },
        "You've unlocked the Sol Center Tab!": { en: "You've unlocked the Sol Center Tab!", zh: "你解锁了太阳中心标签页！" },
        "You've unlocked the Interstellar Tab!": { en: "You've unlocked the Interstellar Tab!", zh: "你解锁了星际标签页！" },
        "You've unlocked the Solar System Tab!": { en: "You've unlocked the Solar System Tab!", zh: "你解锁了太阳系标签页！" },
        "new Tab!": { en: "new Tab!", zh: "新标签页！" },

        // ----- Misc -----
        "You have been away for ": { en: "You have been away for ", zh: "你已离开" },
        "Autosaving in ": { en: "Autosaving in ", zh: "自动保存倒计时 " },
        " seconds": { en: " seconds", zh: " 秒" },
        "Are you sure you want to delete this save? It is irreversible! If so, type 'DELETE' into the box.": { en: "Are you sure you want to delete this save? It is irreversible! If so, type 'DELETE' into the box.", zh: "你确定要删除此存档吗？此操作不可逆！如果是，请在框中输入'DELETE'。" },
        "Deleted Save": { en: "Deleted Save", zh: "已删除存档" },
        "Deletion Cancelled": { en: "Deletion Cancelled", zh: "已取消删除" },
        "Import Game": { en: "Import Game", zh: "导入游戏" },
        "Export Game": { en: "Export Game", zh: "导出游戏" },

        // ----- Company name -----
        "Change Company Name": { en: "Change Company Name", zh: "更改公司名称" },
        "What would you like to name your Space Company?": { en: "What would you like to name your Space Company?", zh: "你想给你的太空公司起什么名字？" },
    };

    // Copy dict into instance.data
    for (var key in dict) {
        instance.data[key] = dict[key];
    }

    // ================================
    // Methods
    // ================================

    instance.get = function (text) {
        if (this.current === 'en') return text;
        var entry = this.data[text];
        if (entry && entry.zh) return entry.zh;
        return text;
    };

    instance.setLanguage = function (lang) {
        if (lang !== 'en' && lang !== 'zh') return;
        this.current = lang;
        this.refresh();
    };

    instance.refresh = function () {
        var lang = this.current;

        // Update all data-i18n elements (marked explicitly in templates/HTML)
        var elements = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute('data-i18n');
            if (key) {
                if (lang === 'zh') {
                    var translation = this.get(key);
                    if (translation && translation !== key) {
                        el.textContent = translation;
                    }
                } else {
                    el.textContent = key;
                }
            }
        }

        // Scan text nodes in the document body
        // For each text node whose trimmed content matches a dictionary key,
        // replace the matched portion with the translation.
        var walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function (node) {
                    if (node.parentNode && ['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION'].indexOf(node.parentNode.nodeName) !== -1) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (node.parentNode && node.parentNode.getAttribute && node.parentNode.getAttribute('data-i18n')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    var text = node.textContent.trim();
                    if (!text || text.length < 2) return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
            },
            false
        );

        var node;
        while (node = walker.nextNode()) {
            var text = node.textContent;
            var trimmed = text.trim();
            var entry = this.data[trimmed];
            if (entry) {
                if (lang === 'zh' && entry.zh) {
                    node.textContent = text.replace(trimmed, entry.zh);
                } else {
                    node.textContent = text.replace(trimmed, entry.en || trimmed);
                }
            }
        }

        // Update known element IDs for resource sidebar names, etc.
        this._updateKnownElements();
    };

    instance._updateKnownElements = function () {
        // Resource sidebar names
        var resourceIds = {
            'plasmaNav': 'Plasma', 'energyNav': 'Energy', 'uraniumNav': 'Uranium',
            'lavaNav': 'Lava', 'oilNav': 'Oil', 'metalNav': 'Metal',
            'gemNav': 'Gem', 'charcoalNav': 'Charcoal', 'woodNav': 'Wood',
            'siliconNav': 'Silicon', 'lunariteNav': 'Lunarite', 'methaneNav': 'Methane',
            'titaniumNav': 'Titanium', 'goldNav': 'Gold', 'silverNav': 'Silver',
            'hydrogenNav': 'Hydrogen', 'heliumNav': 'Helium', 'iceNav': 'Ice',
            'meteoriteNav': 'Meteorite'
        };
        for (var id in resourceIds) {
            var row = document.getElementById(id);
            if (row) {
                var nameCell = row.cells ? row.cells[1] : null;
                if (nameCell) {
                    var span = nameCell.querySelector('span');
                    if (span) span.textContent = this.get(resourceIds[id]);
                }
            }
        }

        // Update sidebar collapse headers
        var collapseHeaders = {
            'collapseEarth': 'Earth Resources',
            'collapseInnerPlanet': 'Inner Planetary Resources',
            'collapseOuterPlanet': 'Outer Planetary Resources'
        };
        for (var id in collapseHeaders) {
            var el = document.getElementById(id);
            if (el) {
                var span = el.querySelector('span');
                if (span) span.textContent = this.get(collapseHeaders[id]);
            }
        }

        // Update resource tab <h2> elements
        var tabH2Ids = [
            'energy', 'plasma', 'uranium', 'lava', 'oil', 'metal', 'gem',
            'charcoal', 'wood', 'silicon', 'lunarite', 'methane', 'titanium',
            'gold', 'silver', 'hydrogen', 'helium', 'ice', 'meteorite'
        ];
        for (var i = 0; i < tabH2Ids.length; i++) {
            var id = tabH2Ids[i];
            var tab = document.getElementById(id + 'Tab');
            if (tab) {
                // Capitalize first letter for the key
                var key = id.charAt(0).toUpperCase() + id.slice(1);
                if (key === 'Gem') key = 'Gems';
                if (key === 'Uranium' || key === 'Helium') { /* keep as is */ }
                var h2 = tab.querySelector('h2');
                if (h2) h2.textContent = this.get(key);
            }
        }
    };

    instance.updateElementText = function (elementId, fallbackKey) {
        var el = document.getElementById(elementId);
        if (!el) return;
        var key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = this.get(key);
        } else if (fallbackKey) {
            el.textContent = this.get(fallbackKey);
        }
    };

    instance._origTexts = new Map();

    instance.autoTag = function () {
        this._ready = true;
    };

    instance.init = function () {
        this.autoTag();
        var savedLang = 'en';
        if (Game.settings && Game.settings.entries && Game.settings.entries.language) {
            savedLang = Game.settings.entries.language;
        }
        this.current = savedLang;
        this.setupLanguageSelector();
        this.refresh();
    };

    instance.setupLanguageSelector = function () {
        var selector = document.getElementById('langSelector');
        if (!selector) return;
        // Set initial value (the change event is handled by settings.js)
        selector.value = this.current;
    };

    return instance;

}());
