
export default function getLithHarbor() {
	return data
}

let data = [
				{
					action: 1,
					npc: '狩獵綠水靈',
					level: 2,
					npcName: '特奧',
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v002.gif',	
					description: '幫特奧忙打倒100隻綠水靈。',
					experience: 100,
					time: 0.5,
					money: 100,
					reputation: 0,
					hp: 0,
					detail: [
						{
							type: 0, //0: 旁白 1: 對話,
							text: '請到維多利亞港尋找特奧，目前他正為了培訓冒險勇者在尋找人才。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://s1.heyxus.com/maple/custom/npc/np_v002.gif',
							text: '冒險勇者我已經在這裡等你很久了，來到維多利亞島將會有更艱難的冒險等著你，在這之前我和幾位這島上的長老們己安排給各位勇者許多的狩獵任務來訓練你的成長，怎樣？要不要接受狩獵訓練？' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://s1.heyxus.com/maple/custom/npc/np_v002.gif',
							text: '聰明的勇者勇於接受訓練，我將指導你在成長的過程中順利無礙，綠水靈原本是魔法森林賽恩在進行魔法實驗時發明的，調皮搗蛋的綠水靈在某天晚上集體出走，請到魔法森林的南方森林訓練場Ｉ附近狩獵100隻綠水靈，並把結果告知魔法森林的賽恩，他將會給你下一步指示。' 
						},
						{
							type: 0, //0: 旁白 1: 對話,
							text: '幾位這島上的長老們安排許多的狩獵任務來訓練我的成長，聰明的冒險者勇於接受訓練，我在成長的過程中將受到指導而順利無礙，綠水靈原本是魔法森林賽恩在進行魔法實驗時發明的，調皮搗蛋的綠水靈在某天晚上集體出走，我要到魔法森林的南方森林訓練場Ｉ附近狩獵100隻綠水靈，並把結果告知魔法森林的賽恩，他將會告訴我下一步指示。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/b72ad910f618a6bb5471fdf853af34cb.png',
							text: '我家的綠水靈實在有夠調皮搗蛋，全都給我跑去魔法森林的南方森林訓練場Ｉ了啦！' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/b72ad910f618a6bb5471fdf853af34cb.png',
							text: '你是接受維多利亞港的特奧指示幫我狩獵100隻綠水靈的勇者吧，看來你已經通過此階段的訓練，給你一些獎勵讓你在成長的過程中更順利，記得以後有需要時要再回來找我。' 
						},
						{
							type: 0, //0: 旁白 1: 對話,
							text: '己經照維多利亞港特奧的指示去狩獵綠水靈，並且也把消息告訴魔法森林的賽恩，賽恩對我的表現很滿意給了我獎勵，看來我還要多加努力好好成長囉！' 
						}
					],
					items: []
				},
				{
					npc: '為瑪亞的沙拉',
					action: 1,
					npcName: '卡蜜拉',
					npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
					description: '卡蜜拉好像有什麼是要委託我。',
					experience: 150,
					time: 3,
					level: 2,
					money: 500,
					reputation: 2,
					hp: 0,
					detail: [
						{
							type: 0, //0: 旁白 1: 對話,
							text: '卡蜜拉為了瑪亞沙拉好像快要完成了。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
							text: '綠色菇菇沙拉完成了，想讓瑪亞吃對身體好的沙拉.並順便打招呼,可以請你親自送過去嗎?'
						},
						{
							type: 2, //0: 旁白 1: 對話,
							text: '不自己送過去嗎?' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
							text: '啊…要我親自交給他我製作的東西這多難為情啊。也可能不合瑪亞的口味?雖然我是很用心製作但是人的口味都是不同的嘛?不是嗎。請你幫我轉交給她吧。'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
							text: '瑪亞就住在旁邊黃色屋簷的家中.麻煩您了~'
						},
						{
							type: 0, //0: 旁白 1: 對話,
							text: '卡蜜拉說這是為了瑪亞所完成的沙拉,要我代替他交給瑪亞.向住在黃色屋簷的瑪亞傳遞卡蜜拉的沙拉。' 
						},
						{
							type: 0, //0: 旁白 1: 對話,
							text: '向住在黃色屋簷的瑪亞把卡蜜拉的沙拉交出。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/ac40537f3a51fcb97d733ea0becdbc6f.png',
							text: '你是誰呢?' 
						},
						{
							type: 2, //0: 旁白 1: 對話,
							text: '我是工具人。卡蜜拉拜托來的。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/ac40537f3a51fcb97d733ea0becdbc6f.png',
							text: '工具人?卡蜜拉嗎?...嗑嗑'
						},
						{
							type: 2, //0: 旁白 1: 對話,
							text: '不久前,新來到這地方.卡蜜拉叫我把這沙拉交給你。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/ac40537f3a51fcb97d733ea0becdbc6f.png',
							text: '哇！看起來是個美味的沙拉.謝謝.卡蜜拉果然是個好朋友.請跟他說聲謝謝。'
						}
					],
					items: []
				},
				{
					action: 0,
					name: '維多利亞港海景',
					imageUrl: 'https://orig00.deviantart.net/db46/f/2012/327/e/c/lith_harbour_sea_view_by_kpopermaper-d5lw3w0.png',	
					description: '打卡',
					time: 0,
					level: 3,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					npc: '雜貨商人',
					action: 1,
					npcName: '雜貨商人',
					npcImg: 'http://s4.heyxus.com/maple/custom/npc/np_v013.gif',
					description: '吃個飯',
					time: 1,
					level: 3,
					experience: 0,
					money: -100,
					reputation: 0,
					hp: 400,
					detail: [
						{
							type: 0,
							text: '休息不是為了走更長遠的路，只是懶得走路。'
						}
					],
					items: []
				},
				{
					npc: '維多利亞港郊外',
					action: 1,
					npcImg: 'http://s6.heyxus.com/maple/custom/monster/tiny/TN_mo002001.gif',
					description: '打藍寶練功',
					time: 1,
					level: 2,
					experience: 160,
					money: 150,
					reputation: 0,
					hp: -50,
					detail: [
						{
							type: 0,
							text: '在楓之島以及維多利亞全境都可以見到的藍寶。身為嫩寶的成長型，體形大一些，攻擊力也高一些，但是依然是新手主要的狩獵怪物。不知道為什麼在成長的過程中，外殼會變成藍色。\嫩寶丟擲術技能練到2級的冒險家可以把藍寶的外殼當做武器來使用。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/7adf7295ca5fed53930f410031cf1596.png',
							possibility: 1,
							money: 200,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/4ea789977c0b5dc113e2adbe47597655.png',
							possibility: 0.2,
							money: 200,
							type: 1
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/b0d3d8080d51ee49350d976005d263f1.png',
							possibility: 1,
							name: '紅色藥水',
							money: 200,
							type: 4, //4 for supplement items
							hp: 100
						}
					]
				},
				{
					npc: '維多利亞港郊外',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/monster/tiny/TN_mo006001.gif',
					description: '打綠水靈練功',
					time: 1,
					level: 4,
					experience: 230,
					money: 120,
					reputation: 0,
					hp: -100,
					detail: [
						{
							type: 0,
							text: '由黏稠的液體形成，利用身體的彈力來跳躍的怪物。在維多利亞全境都可以發現。一跳一跳的樣子很可愛，在冒險家中有很高的人氣，所以到處都在賣製作成綠水靈樣子的帽子及耳環等飾品。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/0213ee967001c3848565dece3d5197d6.png',
							possibility: 1,
							money: 200,
							type: 0,
							name: '運動衫'
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/4f0bd048aa16654c506cb6e1497fd5ec.png',
							possibility: 1,
							money: 150,
							type: 0,
							name: '普通的鞋子'
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/b0d3d8080d51ee49350d976005d263f1.png',
							possibility: 1,
							name: '紅色藥水',
							money: 200,
							type: 4, //3 for supplement items
							hp: 100
						}
					]
				},
				{
					npc: '維多利亞港郊外',
					action: 1,
					npcImg: 'http://s7.heyxus.com/maple/custom/monster/tiny/TN_mo004001.gif',
					description: '打紅寶練功',
					time: 1,
					level: 3,
					experience: 200,
					money: 140,
					reputation: 0,
					hp: -45,
					detail: [
						{
							type: 0,
							text: '聽說一部分藍寶經由與冒險家的戰鬥，因此等級提升進化成紅寶，但是傳聞並沒有被證實真相至今不明。\在楓之島以及維多利亞全境都可以看得到。紅寶擁有驚人的攻擊力，對新手來說有些棘手。嫩寶丟擲術技能修練到3級的冒險家可以把紅寶的外殼當做武器來使用。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/37b9ced05144f65a965c120823536d29.png',
							possibility: 1,
							money: 220,
							type: 0,
							name: '藍色頭巾'
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/446d48f4055b092c1d2087f13c4e44ec.png',
							possibility: 1,
							money: 200,
							type: 0,
							name: '女性上衣'
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/b0d3d8080d51ee49350d976005d263f1.png',
							possibility: 1,
							name: '紅色藥水',
							money: 200,
							type: 4, //3 for supplement items
							hp: 100
						}
					]
				},
				{
					npc: '海岸草叢',
					action: 1,
					npcImg: 'http://s6.heyxus.com/maple/custom/monster/tiny/TN_mo001001.gif',
					description: '打嫩寶練功',
					time: 0.4,
					level: 2,
					experience: 100,
					money: 30,
					reputation: 4,
					hp: -20,
					detail: [
						{
							type: 0,
							text: '\在楓之島和維多利亞隨處可見的弱小怪物。其數量很多，有這樣一句話「走一步就可以見到一個嫩寶」。\即使是新手也可以輕易殺死嫩寶。至今還沒有見過敗給嫩寶的冒險家，嫩寶對於喜歡挑戰的冒險家來說毫無意思\嫩寶丟擲術技能練習到1級的冒險家可以把嫩寶的外殼當作武器來使用。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/b0d3d8080d51ee49350d976005d263f1.png',
							possibility: 1,
							name: '紅色藥水',
							money: 200,
							type: 4, //3 for supplement items
							hp: 100
						}
					]
				},
				{
					action: 0,
					name: '維多利亞港',
					imageUrl: 'https://i.ytimg.com/vi/F6LIFBVhObQ/maxresdefault.jpg',	
					description: '打卡',
					time: 0,
					level: 3,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					npc: '肥肥海岸',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/monster/tiny/TN_mo010001.gif',
					description: '緞帶肥肥好多，經驗值爽賺~',
					time: 1,
					level: 5,
					experience: 350,
					money: 500,
					reputation: 0,
					hp: -250,
					detail: [
						{
							type: 0,
							text: '在肥肥的世界中也分尊卑。擁有強大力量的肥肥帶著象徵強大的緞帶，在肥肥的世界中享受崇高的待遇。不相信嗎？去消滅一隻試試。與肥肥相比，緞帶肥肥更加強大。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/f9492a585b4107f86c47f3792e4c72a3.png',
							possibility: 0.9,
							money: 250,
							type: 0,
							name: '夾拖'
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/e5df3bcbed38fd7c4e7b5e1ceb26049b.png',
							possibility: 1,
							money: 270,
							type: 0,
							name: '男生短褲'
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/661cf30a69bf86a7cf5f656fb53ca0f7.png',
							possibility: 1,
							name: '橘色藥水',
							money: 200,
							type: 4, //3 for supplement items
							hp: 180
						}
					]
				},
				{
					npc: '肥肥海岸',
					action: 1,
					npcImg: 'http://s7.heyxus.com/maple/custom/monster/tiny/TN_mo004001.gif',
					description: '來這裡打紅寶',
					time: 1,
					level: 5,
					experience: 200,
					money: 500,
					reputation: 0,
					hp: -50,
					detail: [
						{
							type: 0,
							text: '聽說一部分藍寶經由與冒險家的戰鬥，因此等級提升進化成紅寶，但是傳聞並沒有被證實真相至今不明。\在楓之島以及維多利亞全境都可以看得到。紅寶擁有驚人的攻擊力，對新手來說有些棘手。嫩寶丟擲術技能修練到3級的冒險家可以把紅寶的外殼當做武器來使用。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/37b9ced05144f65a965c120823536d29.png',
							possibility: 1,
							money: 100,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/446d48f4055b092c1d2087f13c4e44ec.png',
							possibility: 1,
							money: 150,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/b0d3d8080d51ee49350d976005d263f1.png',
							possibility: 1,
							name: '紅色藥水',
							money: 200,
							type: 4, //3 for supplement items
							hp: 100
						}
					]
				},
				{
					npc: '瑪諾領域',
					action: 2,
					npcImg: 'http://gametsg.techbang.com/maplestory/icon_small_npc/7363e3ae596cecf19d16b41b3bc9a317.png',
					description: '遇見紅寶王',
					time: 1,
					level: 7,
					experience: 1200,
					maxExperience: 1500,
					blood: 1500,
					currentBlood: 1500,
					money: 1000,
					reputation: 5,
					hp: -200,
					detail: [
						{
							type: 0,
							text: '楓之島世界最長壽的嫩寶。在世上活了很久，以自己巨大的體形為傲。臉上留著發白的鬍子。喜歡早晨的露水，每個早晨都要去品嘗葉子上的露水。有時會從紅寶王那裡得到彩虹色的嫩寶外殼，據說那會讓你願望成真，但似乎並不可信。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/37b9ced05144f65a965c120823536d29.png',
							possibility: 1,
							money: 100,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/446d48f4055b092c1d2087f13c4e44ec.png',
							possibility: 1,
							money: 150,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/661cf30a69bf86a7cf5f656fb53ca0f7.png',
							possibility: 1,
							name: '橘色藥水',
							money: 200,
							type: 4, //3 for supplement items
							hp: 180
						}
					]
				}
			]