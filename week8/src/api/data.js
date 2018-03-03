
/*
action = {
	0: 'check-in',
	1: 'notificaion', 
}

*/
export default function getSpotData() {
	let mapleStoryData = [
		{
			position: {lat: 20.22, lng: 135.234},
			action: 0,
			time: 0.5,
			imageUrl: 'https://i.ytimg.com/vi/F6LIFBVhObQ/maxresdefault.jpg',
			name: '維多利亞港',
			level: 1,
			tasks: [
				{
					action: 1,
					npc: '狩獵綠水靈',
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
					]
				},
				{
					npc: '為瑪亞的沙拉',
					action: 1,
					npcName: '卡蜜拉',
					npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
					description: '卡蜜拉好像有什麼是要委託我。',
					experience: 150,
					time: 3,
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
					]
				},
				{
					action: 0,
					name: '維多利亞港海景',
					imageUrl: 'https://orig00.deviantart.net/db46/f/2012/327/e/c/lith_harbour_sea_view_by_kpopermaper-d5lw3w0.png',	
					description: '打卡',
					time: 0,
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
					experience: 0,
					money: -100,
					reputation: 0,
					hp: 200,
					detail: [
						{
							type: 0,
							text: '休息不是為了走更長遠的路，只是懶得走路。'
						}
					]
				},
				{
					npc: '維多利亞港郊外',
					action: 1,
					npcImg: 'http://s6.heyxus.com/maple/custom/monster/tiny/TN_mo002001.gif',
					description: '打藍寶練功',
					time: 1,
					experience: 220,
					money: 150,
					reputation: 0,
					hp: -50,
					detail: [
						{
							type: 0,
							text: '藍寶好廢。'
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
							imageUrl: 'http://gametsg.techbang.com/maplestory/index.php?view=item&item=9458385#detail',
							possibility: 1,
							money: 200,
							type: 0
						}
					]
				},
				{
					npc: '維多利亞港郊外',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/monster/tiny/TN_mo006001.gif',
					description: '打綠水靈練功',
					time: 1,
					experience: 230,
					money: 120,
					reputation: 0,
					hp: -60,
					detail: [
						{
							type: 0,
							text: '綠水靈好可愛。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/0213ee967001c3848565dece3d5197d6.png',
							possibility: 1,
							money: 200,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/4f0bd048aa16654c506cb6e1497fd5ec.png',
							possibility: 1,
							money: 150,
							type: 0
						}
					]
				},
				{
					npc: '維多利亞港郊外',
					action: 1,
					npcImg: 'http://s7.heyxus.com/maple/custom/monster/tiny/TN_mo004001.gif',
					description: '打紅寶練功',
					time: 1,
					experience: 200,
					money: 140,
					reputation: 0,
					hp: -45,
					detail: [
						{
							type: 0,
							text: '紅寶超廢。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/37b9ced05144f65a965c120823536d29.png',
							possibility: 1,
							money: 220,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/446d48f4055b092c1d2087f13c4e44ec.png',
							possibility: 1,
							money: 200,
							type: 0
						}
					]
				},
				{
					npc: '海岸草叢',
					action: 1,
					npcImg: 'http://s6.heyxus.com/maple/custom/monster/tiny/TN_mo001001.gif',
					description: '打嫩寶練功',
					time: 0.4,
					experience: 50,
					money: 30,
					reputation: 4,
					hp: -20,
					detail: [
						{
							type: 0,
							text: '不要笑，我脫光都可以打贏你。'
						}
					],
					items: []
				},
				{
					npc: '肥肥海岸',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/monster/tiny/TN_mo010001.gif',
					description: '緞帶肥肥好多，經驗值爽賺~',
					time: 1,
					experience: 350,
					money: 500,
					reputation: 0,
					hp: -250,
					detail: [
						{
							type: 0,
							text: '經驗值爽爽賺，要多少有多少。 血要扣多少有多少。'
						}
					],
					items: [
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/f9492a585b4107f86c47f3792e4c72a3.png',
							possibility: 0.9,
							money: 250,
							type: 0
						},
						{
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/e5df3bcbed38fd7c4e7b5e1ceb26049b.png',
							possibility: 1,
							money: 270,
							type: 0
						}
					]
				},
				{
					npc: '肥肥海岸',
					action: 1,
					npcImg: 'http://s7.heyxus.com/maple/custom/monster/tiny/TN_mo004001.gif',
					description: '來這裡打紅寶',
					time: 1,
					experience: 200,
					money: 500,
					reputation: 0,
					hp: -50,
					detail: [
						{
							type: 0,
							text: '原來這邊也有紅寶。'
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
						}
					]
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			action: 0,
			time: 0.5,
			imageUrl: 'https://i.ytimg.com/vi/mRzaE2MiiYc/maxresdefault.jpg',
			name: '弓箭手村',
			level: 1,
			tasks: [
				{
					action: 1,
					npc: '長老斯坦發怒的原因',
					npcName: '長老斯坦',
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v025.gif',	
					description: '人都這麼老了還愛生氣',
					experience: 50,
					time: 0.5,
					money: 1000,
					reputation: 0,
					hp: 0,
					detail: [
						{
							type: 0, //0: 旁白 1: 對話,
							text: '有人說 弓箭手村 的 長老斯坦 非常喜歡彈吉他。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '這這這…這是我的吉他！你在哪裡找到的？我知道你是勇士之村的人，但你看起來沒那麼討厭。這把吉他意義非凡，我不知道你從哪裡得知我的喜好，但我知道你是個機靈的人！' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '哈哈！'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '你有興趣聽聽我的故事嗎？'
						},
						{
							type: 2,
							text: '沒有'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '.............'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '痾....好喔。 那跟你說我為什麼生氣。'
						},
						{
							type: 2,
							text: '= ='
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '之前我去勇士之村旅行時，收到一尊象徵友誼的勇士雕像當作紀念品。由於我們兩座城鎮當時關係相當良好，所以還蠻正常的。但之後就發生問題了。'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '在回弓箭手村的路上，我遭到勇士之村的劍士襲擊，他們搶走了我的雕像！這是什麼邏輯？難道是他們的習俗嗎？送了禮物後，又把它搶回來？實在是太沒有禮貌了！雖然我沒有受什麼傷，但我對勇士之村從此留下不好的印象。'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '這就是我的故事。我有其他的忙想請你幫，準備好後再跟我說話。'
						}
					]
				},
				{
					action: 1,
					npc: '長老斯坦喜歡什麼東西？',
					npcName: '明明夫人',
					npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/bbf0097b322d70160ff1fc1da6e9b085.png',	
					description: '明明夫人好像有事情要說',
					experience: 50,
					time: 0.5,
					money: 1000,
					reputation: 0,
					hp: 0,
					detail: [
						{
							type: 0, //0: 旁白 1: 對話,
							text: '弓箭手村的明明夫人說她知道長老斯坦喜歡什麼。' 
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
							text: '人在生氣的時候，可以做些他喜歡的事情來取悅他。長老斯坦 正在生氣，對不對？我知道他喜歡什麼。想不想知道呀？'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/bbf0097b322d70160ff1fc1da6e9b085.png',
							text: '長老斯坦 非常喜歡音樂。尤其是搖滾樂！'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/bbf0097b322d70160ff1fc1da6e9b085.png',
							text: '如果你可以幫我找到下列物品，我就幫你製作一樣他超愛的東西。\n5條肥肥血管\n2片深色木板\n與一副太陽眼鏡'
						},
						{
							type: 2,
							text: '好的'
						},
						{
							type: 0,
							text: '有人說 弓箭手村 的 長老斯坦 非常喜歡彈吉他。'
						},
						{
							type: 1, //0: 旁白 1: npc對話, 2: 自己
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/bbf0097b322d70160ff1fc1da6e9b085.png',
							text: '哇，你還真的把我要的東西帶回來了。沒想到那麼快!好，我就做個信守承諾的人，幫你製作好東西。\n哈哈！這把吉他很棒吧？把這把吉他拿給 長老斯坦 。他一定會很開心！'
						},
						{
							type: 2,
							text: '好 那遇到他再說'
						}
					]
				},
				{
					npc: '離家出走的阿勒斯',
					action: 1,
					npcImg: 'http://s2.heyxus.com/maple/custom/npc/np_v025.gif',
					description: '和墮落城市的阿勒斯對話後到弓箭手村找長老坦斯。長老斯坦會說沒時間跟你說話，請幫他蒐集材料，才有時間聽你說。將材料給長老斯坦後,把舊金錶拿給阿勒斯即可',
					experience: 400,
					time: 2.5,
					money: 1000,
					reputation: 1,
					hp: 0
				},
				{
					npc: '泰實夫的秘密之書',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v088.gif',
					description: '支付楓幣999元才可以進入高級桑那室見到泰實夫。',
					experience: 200,
					money: -999,
					time: 1.5,
					reputation: 0,
					hp: 0
				},
				{
					npc: '找回紅色披風',
					action: 1,
					npcName: '皮亞',
					npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/9040fb307a6cebe49d93729bd1efca1f.png',
					description: '去找弓箭手村的皮亞。',
					time: 1,
					experience: 300,
					money: 0,
					reputation: 0,
					hp: 0,
					detail: [
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9040fb307a6cebe49d93729bd1efca1f.png',
							text: '你看起來好強？你應該可以做到…如何？並不是很困難的事願意幫我嗎？'
						},
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9040fb307a6cebe49d93729bd1efca1f.png',
							text: '其實是我魔法森林的一個朋友，也像你一樣打算做個盜賊。幾天後就要出發去探險了，所以想送給那朋友一個特殊的禮物！於是找到 墮落城市 的 後街吉姆 ，託他幫我做個不錯的護腕，結果這些亂七八糟的材料到底是什麼啊！我連看都沒看過！'
						},
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9040fb307a6cebe49d93729bd1efca1f.png',
							text: '怎麼樣？你能幫我找來 後街吉姆 需要的材料嗎？我雖然想去尋找，可是因為這衣服在這裏不能動彈啊！當然不是要你白做了，辦成了我會好好酬謝你的怎麼樣？不忙的話可以試一下嗎？？'
						},
						{
							type: 2,
							text: '勉強接受'
						},
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9040fb307a6cebe49d93729bd1efca1f.png',
							text: '謝謝你！需要的材料是 龍皮 5個， 螺絲釘 10個呀。還需要…送給朋友的披風！幾天前借給 弓箭手村 的 麗娜 的 紅色披風 希望也能找回來。因為朋友一定需要它。那就拜託你了！如果幫我收集這些就可以製作朋友旅行需要的物品了！'
						},
						{
							type: 0,
							text: '皮亞的朋友打算去冒險，想幫朋友準備禮物！為了製作禮物拳套需要龍皮5個、螺絲10個…然後要求找來弓箭手村的麗娜借走的紅色披風。等收集好了，應該能獲得不錯的東西吧？'
						},
						{
							type: 0,
							text: '為了找回皮亞借給麗娜的披風，決定去見麗娜。'
						}
					]
				},
				{
					npc: '皮亞借走的東西',
					action: 1,
					npcName: '麗娜',
					npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/96b80b05232b3171292d03cc8087f178.png',
					description: '哎呀！你不是上次代替 皮亞 ，把他借走的物品還給我的勇士嗎？如何？ 皮亞 過得還好嗎？如果有空前往弓箭手村 ，記得幫我問候皮亞 。',
					time: 1,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0,
					detail: [
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/96b80b05232b3171292d03cc8087f178.png',
							text: '你有什麼事嗎？什麼？你要拿被 皮亞 借去的 紅色披風 嗎？嗯…這不太方便…老實說並不是借的。因為 皮亞 先把我珍藏的物品借走後並沒有還我所以我向他拿了這披風。所以我絕對不會交出這披風～！'
						},
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/96b80b05232b3171292d03cc8087f178.png',
							text: ''
						},
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/96b80b05232b3171292d03cc8087f178.png',
							text: '真的那麼需要的話，也不是沒有辦法。你若能替我把 皮亞 從我這裡借走不還我的東西拿給我的話，我就把這 紅色披風 送給你。怎麼樣啊？想交換嗎？當然， 皮亞 借走的東西都是非常貴重的東西哦。'
						},
						{
							type: 2,
							text: '那我試看看'
						},
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/96b80b05232b3171292d03cc8087f178.png',
							text: '呼呼…真的嗎？你好像跟 皮亞 挺親啊？也是…我只是把東西要回來。借走的東西是 古代卷軸 1個、 月牙牛魔王的角 15個。'
						},
						{
							type: 1,
							imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/96b80b05232b3171292d03cc8087f178.png',
							text: '這是我多麼努力而收集的耶，竟然給我賴帳！總之若能收集那些的話，我也就給你 紅色披風 吧。對了！古代的卷軸應該是月牙牛魔王拿走了吧。'
						},
						{
							type: 0,
							text: '找到弓箭手村的麗娜，她說那件披風是因為皮亞借了自己的東西，但沒有還所以拿走的。她說只要我替皮亞把借走的東西還給她，就肯還披風…古代卷軸1個、月牙牛魔王的角15個，這些就是皮亞借走的物品…'
						},
						{
							type: 0,
							text: '替皮亞向麗娜要回披風，麗娜卻說因為皮亞沒有把從她這裡借走的東西還給她，所以她也一直沒有將披風還給皮亞。不過她說只要能將皮亞借走的東西拿來，就會將披風還給他。'
						}
					]
				},
				{
					npc: '為瑪亞的收集',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v022.gif',
					description: '收集瑪亞要的物品即可',
					time: 1,
					experience: 210,
					money: 0,
					reputation: 5,
					hp: 0
				},
				{
					npc: '三情法師',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v118.gif',
					description: '色即是空，空即是色。 收你一點錢，幫你開導一番。',
					time: 1,
					experience: 0,
					money: -500,
					reputation: 0,
					hp: 0
				},
				{
					npc: '通勤',
					action: 1,
					npcImg: 'http://s5.heyxus.com/maple/custom/npc/np_v106.gif',
					description: '搭計程車亂晃',
					time: 1,
					experience: 0,
					money: -300,
					reputation: 0,
					hp: 0
				},
				{
					npc: '蓓蒂的化學研究2',
					action: 1,
					npcImg: 'http://s4.heyxus.com/maple/custom/npc/np_v043.gif',
					description: '到弓箭手村東部找小安對話，依序回答問題後，取得白色頭骨和化石報告書。',
					time: 0.5,
					experience: 100,
					money: 100,
					reputation: 1,
					hp: 0
				},
				{
					npc: '弓箭手村東部小山',
					action: 1,
					npcImg: 'http://s7.heyxus.com/maple/custom/monster/tiny/TN_mo004001.gif',
					description: '打菇菇寶貝練等',
					time: 1,
					experience: 200,
					money: 500,
					reputation: 0,
					hp: -50
				},
				{
					npc: '弓箭手村東部森林',
					action: 1,
					npcImg: 'http://s5.heyxus.com/maple/custom/monster/tiny/TN_mo020002.gif',
					description: '打藍菇菇練等',
					time: 1,
					experience: 230,
					money: 600,
					reputation: 0,
					hp: -90
				},
				{
					npc: '迷宮通道',
					action: 1,
					npcImg: 'http://s3.heyxus.com/maple/custom/monster/tiny/TN_mo015002.gif',
					description: '打綠菇菇練等',
					time: 1,
					experience: 250,
					money: 700,
					reputation: 0,
					hp: -140
				},
				{
					npc: '鋼之肥肥公園',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/monster/tiny/TN_mo042002.gif',
					description: '來找鋼鐵肥肥',
					time: 1.5,
					experience: 600,
					money: 1000,
					reputation: 0,
					hp: -500
				},
				{
					name: '弓箭手村邊境',
					action: 0,
					imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/817810260397064301/4EC480E6E25BE88609CDC04BA60FF1BBE0887CF6/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637%3A358&composite-to=*,*%7C637%3A358&background-color=black',
					description: '打卡',
					time: 0.5,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					name: '弓箭手森林',
					action: 0,
					imageUrl: 'http://i38.tinypic.com/23u7ew5.jpg',
					description: '打卡',
					time: 0.5,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://master.usfine.biz/upload/userfiles/images/25e30bf8e8652c0ac11886b0be274e2b.jpg',
			name: '魔法森林',
			action: 0,
			time: 0.5,
			level: 5,
			tasks: [
				{
					action: 1,
					npc: '幫忙寫作業',
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v051.gif',	
					description: '將蒐集好的材料給妖精維英，即可完成任務。',
					time: 1.5,
					experience: 250,
					money: 150,
					reputation: 0,
					hp: 0
				},
				{
					action: 0,
					name: '樹洞',
					imageUrl: 'http://78.media.tumblr.com/1cf704dd3c413cf4de08fd1d56cceb0c/tumblr_o37h97IKVE1qgvvtno1_1280.png',	
					description: '打卡',
					time: 0,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					npc: '智慧之森',
					action: 1,
					npcImg: 'http://s7.heyxus.com/maple/custom/monster/tiny/TN_mo006001.gif',
					description: '打綠水靈練等',
					time: 1,
					experience: 200,
					money: 700,
					reputation: 0,
					hp: -80
				},
				{
					npc: '南部森林訓練場',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/monster/tiny/TN_mo022001.gif',
					description: '打刺菇菇練等',
					time: 1.5,
					experience: 320,
					money: 800,
					reputation: 0,
					hp: -190
				},
				{
					npc: '猴子森林',
					action: 1,
					npcImg: 'http://s6.heyxus.com/maple/custom/monster/tiny/TN_mo037001.gif',
					description: '打猴子練等',
					time: 1.5,
					experience: 450,
					money: 1000,
					reputation: 0,
					hp: -350
				},
				{
					npc: '大木林',
					action: 1,
					npcImg: 'http://s7.heyxus.com/maple/custom/monster/tiny/TN_mo004002.gif',
					description: '打木妖練等',
					time: 1.5,
					experience: 180,
					money: 300,
					reputation: 0,
					hp: -70
				},
				{
					action: 0,
					name: '魔法森林一隅',
					imageUrl: 'http://i.imgur.com/3O2sk.png',	
					description: '打卡',
					time: 0,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					npc: '妖精羅雯和詛咒的娃娃',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v050.gif',
					description: '與羅雯對話後，將羅雯需要的任務道具拿給他，即完成任務。',
					time: 3,
					experience: 700,
					money: 1000,
					reputation: 2,
					hp: -300
				},
				{
					npc: '妖精森林的使命',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v052.gif',
					description: '接受漢斯轉交物品給神木村村長塔塔曼的請託。',
					time: 2,
					experience: 300,
					money: 100,
					reputation: 5,
					hp: 0
				},
				{
					npc: '搭五星級計程車',
					action: 1,
					npcImg: 'http://s4.heyxus.com/maple/custom/npc/np_v105.gif',
					description: '搭乘計程車亂跑花費3000元',
					time: 0.2,
					experience: 0,
					money: -3000,
					reputation: 0,
					hp: 0
				},
				{
					npc: '雜貨店老闆',
					action: 1,
					npcImg: 'http://s3.heyxus.com/maple/custom/npc/np_v104.gif',
					description: '經過雜貨店補給',
					time: 0.5,
					experience: 0,
					money: -500,
					reputation: 0,
					hp: 700
				},
				{
					npc: '艾溫的玻璃鞋',
					action: 1,
					npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v048.gif',
					description: '艾溫的玻璃鞋被火肥肥咬走了,結果花了2小時都沒找到。',
					time: 2,
					experience: 0,
					money: 0,
					reputation: 2,
					hp: 0
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://orig00.deviantart.net/e11f/f/2016/108/c/2/_maplestory_background__da_hood_by_bboki-d9zfvvv.png',
			name: '墮落城市',
			action: 0,
			time: 2,
			level: 0.5,
			tasks: [
				{
					action: 1,
					npc: '醫院的神秘少女',
					npcImg: 'http://s8.heyxus.com/maple/custom/npc/np_v071.gif',	
					description: '神秘少女復活，請你幫忙收集100個道符。',
					time: 1.5,
					experience: 1500,
					money: 1500,
					reputation: 10,
					hp: -1200
				},
				{
					action: 0,
					name: '墮落城市最高處',
					imageUrl: 'https://i.ytimg.com/vi/uv8QObpL2EY/maxresdefault.jpg',	
					description: '打卡',
					time: 0,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					action: 0,
					name: '墮落城市醫院',
					imageUrl: 'https://vignette.wikia.nocookie.net/maplestory/images/6/64/Map_Naora_Hospital.png/revision/latest?cb=20100228062305',	
					description: '打卡',
					time: 0,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					action: 0,
					name: '隱武者道館',
					imageUrl: 'http://forsakenguild.ucoz.com/_fr/8/4863522.jpg',	
					description: '打卡',
					time: 0,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				},
				{
					npc: '伊卡路斯的滑翔翼',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/npc/<np_v073 class="g"></np_v073>if',
					description: '回答伊卡路斯：「人可能飛向天空嗎？」，交給他要的東西之後即完成任務',
					time: 1.5,
					experience: 1500,
					money: 1500,
					reputation: 10,
					hp: -1200
				},
				{
					npc: '離家出走的阿勒斯',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/npc/np_v075.gif',
					description: '和墮落城市的阿勒斯對話後到弓箭手村找長老坦斯。長老斯坦會說沒時間跟你說話，請幫他蒐集材料，才有時間聽你說。',
					time: 1.5,
					experience: 1500,
					money: 1500,
					reputation: 10,
					hp: -1200
				},
				{
					npc: '搭計程車',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/npc/np_v106.gif',
					description: '搭乘計程車花費1000元',
					time: 1.5,
					experience: 1500,
					money: 1500,
					reputation: 10,
					hp: -1200
				},
				{
					npc: '雜貨店老闆',
					action: 1,
					npcImg: 'http://s2.heyxus.com/maple/custom/npc/np_v109.gif',
					description: '經過雜貨店補給',
					time: 1.5,
					experience: 1500,
					money: 1500,
					reputation: 10,
					hp: -1200
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			action: 0,
			time: 10,
			imageUrl: 'https://i.ytimg.com/vi/9lwOsX763N0/maxresdefault.jpg',
			name: '勇士之村',
			level: 8,
			tasks: [
				{
					action: 1,
					npc: '木妖好可怕',
					npcImg: 'http://s8.heyxus.com/maple/custom/npc/np_v060.gif',	
					description: '為勇士之村的義安打倒木妖 50 隻。',
					experience: 200,
					time: 0.5,
					money: 50,
					reputation: 1,
					hp: -30
				},
				{
					npc: '修理酋長的家',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/npc/np_v059.gif',
					description: '幫酋長蒐集樹枝30個、木柴50個。',
					experience: 300,
					time: 1.5,
					money: 200,
					reputation: 2,
					hp: -70
				},
				{
					npc: '麥吉和秘密組織',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/npc/np_v062.gif',
					description: '與勇村的麥吉對話後，說要測試玩家的實力。需打倒黑斧木妖15隻之後，回去找他',
					experience: 1400,
					money: 700,
					time: 2,
					reputation: 1,
					hp: -800
				},
				{
					npc: '雜貨店老闆',
					action: 1,
					npcImg: 'http://s6.heyxus.com/maple/custom/npc/np_v067.gif',
					description: '休息補水',
					time: 1,
					experience: 300,
					money: -500,
					reputation: 0,
					hp: 700
				},
				{
					npc: '找回武術教練的力量',
					action: 1,
					npcImg: 'http://s3.heyxus.com/maple/custom/npc/np_v064.gif',
					description: '幫忙找回力量的泉源，並收集紅水晶2個。',
					time: 3,
					experience: 1800,
					money: 0,
					reputation: 5,
					hp: 0
				},
				{
					npc: '轉蛋機',
					action: 1,
					npcImg: 'http://s2.heyxus.com/maple/custom/npc/np_a008.gif',
					description: '來試試手氣',
					time: 1,
					experience: 210,
					money: -250 + Math.floor((Math.random()>=5?1:-1)*Math.random()*1000),
					reputation: 0,
					hp: 0
				},
				{
					npc: '通勤',
					action: 1,
					npcImg: 'http://s5.heyxus.com/maple/custom/npc/np_v106.gif',
					description: '搭計程車亂晃',
					time: 1,
					experience: 0,
					money: -350,
					reputation: 0,
					hp: 0
				},
				{
					npc: '火焰之地',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/monster/large/mo032002.gif',
					description: '打火肥肥練等',
					time: 1,
					experience: 500,
					money: 700,
					reputation: 0,
					hp: -500
				},
				{
					npc: '勇士之村西入口',
					action: 1,
					npcImg: 'http://s2.heyxus.com/maple/custom/monster/tiny/TN_mo017001.gif',
					description: '打斧木妖練等',
					time: 1,
					experience: 200,
					money: 600,
					reputation: 0,
					hp: -95
				},
				{
					npc: '危險的峽谷',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/monster/tiny/TN_mo060002.gif',
					description: '乾 遇到赤龍死了~',
					time: 0.5,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: -1599
				},
				{
					npc: '鋼之黑肥肥之地',
					action: 1,
					npcImg: 'http://s8.heyxus.com/maple/custom/monster/tiny/TN_mo042002.gif',
					description: '練等',
					time: 1.5,
					experience: 800,
					money: 1400,
					reputation: 0,
					hp: -600
				},
				{
					name: '勇士之村某個地方',
					action: 0,
					imageUrl: 'https://pre00.deviantart.net/edc7/th/pre/f/2014/167/1/d/maplestory_background___perion_by_thehardworkingaj-d7mmsxi.png',
					description: '打卡',
					time: 0.5,
					experience: 0,
					money: 0,
					reputation: 0,
					hp: 0
				}
			]
		}
	]
	let data = mapleStoryData
	//let index = Math.floor(Math.random()*data.length)
	let index = 0
	//let taskIndex = Math.floor(Math.random()*data[index].tasks.length)
	let taskIndex = 0
	let returnData = {
		position: data[index].position,
		name: data[index].name,
		imageUrl: data[index].imageUrl,
		level: data[index].level,
		time: data[index].time,
		action: 0,
		tasks: data[index].tasks
	}
	return returnData
}


let globalWorld = [
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'http://6.blog.xuite.net/6/d/2/c/237151235/blog_3204695/txt/72684064/0.jpg',
			name: '台北101',
			tasks: [
				{
					task: '逛街',
					cost: 2000,
					hapiness: 5
				},
				{
					task: '夾娃娃機',
					cost: 300,
					hapiness: 3
				},
				{
					task: '買CD',
					cost: 100,
					hapiness: 1
				},
				{
					task: '被貓王襲擊',
					cost: -50,
					hapiness: -5
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpi3cI_Rt_QwhbUyRxXbNAeUrrszoXsOgTj14SJ57ZAS4jflx',
			name: '富士山',
			tasks: [
				{
					task: '吃飯',
					cost: 150,
					hapiness: 3
				},
				{
					task: '夾娃娃機',
					cost: 200,
					hapiness: 3
				},
				{
					task: '買愛心筆',
					cost: 100,
					hapiness: -1
				},
				{
					task: '找王建民簽名',
					cost: 0,
					hapiness: 5
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://picdn.gomaji.com/uploads/stores/687/120687/191322/nature-of-tokyo-skytree-2496153_1280.jpg?1515754346',
			name: '東京晴空塔',
			tasks: [
				{
					task: '吃拉麵',
					cost: 300,
					hapiness: 4
				},
				{
					task: '上去晴空塔',
					cost: 2000,
					hapiness: 3
				},
				{
					task: '去居酒屋',
					cost: 500,
					hapiness: 3
				},
				{
					task: '借廁所',
					cost: 0,
					hapiness: -1
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'data:image/jpeg;base64,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',
			name: '埃及',
			tasks: []
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'http://album.udn.com/community/img/PSN_PHOTO/grace127/f_5492324_1.JPG',
			name: '澳洲大堡礁'
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://i.ytimg.com/vi/W95BlJGXUOc/maxresdefault.jpg',
			name: '羅馬競技場',
			tasks: [
				{
					task: '成功捕獲風獨眼獸',
					cost: 300,
					hapiness: 2
				},
				{
					task: '被火毒眼獸襲擊',
					cost: -100,
					hapiness: -1
				},
				{
					task: '巧遇其他冒險家',
					cost: 0,
					hapiness: 3
				},
				{
					task: '拿到裝備',
					cost: 0,
					hapiness: 2
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'http://italiano.adeleliu.com/FOTO/pasquale_BLOG/pasquale_10CITTA/wallpaper-1826990.jpeg',
			name: '威尼斯',
			tasks: [
				{
					task: '花錢訓練',
					cost: 300,
					hapiness: 1
				},
				{
					task: '借廁所',
					cost: 0,
					hapiness: 0
				},
				{
					task: '遇到正妹教練',
					cost: 0,
					hapiness: 5
				},
				{
					task: '獲得姑姑寶貝掉落物',
					cost: 0,
					hapiness: 2
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'http://img1.voc.com.cn/UpLoadFile/2014/06/19/201406191008275843.jpg',
			name: '自由女神',
			tasks: [
				{
					task: '得到流感進醫院',
					cost: 300,
					hapiness: -2
				},
				{
					task: '發生車禍住院觀察',
					cost: 3000,
					hapiness: -5
				},
				{
					task: '被醫院的人傳染sd',
					cost: 0,
					hapiness: -2
				},
				{
					task: '遇到正妹護士',
					cost: 0,
					hapiness: 4
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'http://cn.toursforfun.com/images/image/20170607/20170607154300_41385.jpg',
			name: '金門大橋',
			tasks: [
				{
					task: '什麼事都沒發生',
					cost: 0,
					hapiness: 0
				},
				{
					task: '借宿一宿',
					cost: 0,
					hapiness: 3
				},
				{
					task: '獲得麗娜招待的晚餐',
					cost: 0,
					hapiness: 2
				},
				{
					task: '打聽到消息',
					cost: 0,
					hapiness: 1
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://www.statravel.co.uk/travel-blog/wp-content/uploads/2012/04/highfive_greek_santorini_620.jpg',
			name: '希臘',
			tasks: [
				{
					task: '鯨魚號撞到冰山',
					cost: -1000,
					hapiness: -3
				},
				{
					task: '認識船長',
					cost: 0,
					hapiness: 1
				},
				{
					task: '被抓去打掃',
					cost: 0,
					hapiness: -1
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'http://b4-q.mafengwo.net/s7/M00/12/B7/wKgB6lTUZcGAIwcTAARjxA7Bm4407.jpeg?imageMogr2%2Fthumbnail%2F%211020x540r%2Fgravity%2FCenter%2Fcrop%2F%211020x540%2Fquality%2F100',
			name: '馬丘比丘',
			tasks: [
				{
					task: '巧遇大法師-漢斯',
					cost: 0,
					hapiness: 2
				},
				{
					task: '幫助精靈找高跟鞋',
					cost: 200,
					hapiness: 3
				},
				{
					task: '被風獨眼獸咬',
					cost: 0,
					hapiness: -3
				},
				{
					task: '從精靈身上獲得船票',
					cost: 0,
					hapiness: 2
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://a.bbkz.net/forum/gallery/images/67564/large/1_%E5%90%B3%E5%93%A5%E7%AA%9F%E7%A5%9E%E6%AE%BF-01.JPG',
			name: '吳哥窟',
			tasks: [
				{
					task: '沒有船票無法搭乘',
					cost: 0,
					hapiness: -1
				},
				{
					task: '遇到巴洛谷',
					cost: 500,
					hapiness: -3
				},
				{
					task: '在空中拍照打卡',
					cost: 0,
					hapiness: 2
				},
				{
					task: '在船艙裡上大號',
					cost: 0,
					hapiness: 2
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://i.ytimg.com/vi/pegTWP43Qr8/maxresdefault.jpg',
			name: '阿姆斯特丹',
			tasks: [
				{
					task: '拍照打卡',
					cost: 0,
					hapiness: 1
				},
				{
					task: '遇到妖狐',
					cost: -100,
					hapiness: -1
				},
				{
					task: '遇到老虎',
					cost: -100,
					hapiness: -2
				},
				{
					task: '遇到鬼怪',
					cost: -150,
					hapiness: -3
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://www.funtime.com.tw/blog/wp-content/uploads/2016/08/26.jpg',
			name: '倫敦眼',
			tasks: [
				{
					task: '幫忙打掃神社',
					cost: 300,
					hapiness: 1
				},
				{
					task: '花錢參拜',
					cost: -100,
					hapiness: 1
				},
				{
					task: '獲得日本武器',
					cost: 0,
					hapiness: 3
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://cdn2.ettoday.net/images/344/d344034.jpg',
			name: '帛琉',
			tasks: [
				{
					task: '幫忙打掃神社',
					cost: 300,
					hapiness: 1
				},
				{
					task: '花錢參拜',
					cost: -100,
					hapiness: 1
				},
				{
					task: '獲得日本武器',
					cost: 0,
					hapiness: 3
				}
			]
		},
		{
			position: {lat: 20.22, lng: 135.234},
			imageUrl: 'https://fthmb.tqn.com/2DcUV705pcLieR29MyrUuMsM1Vs=/2000x1333/filters:no_upscale():fill(transparent,1)/GettyImages-455242307-57a2938a5f9b589aa95ebd8f.jpg',
			name: '首爾',
			tasks: [
				{
					task: '幫忙打掃神社',
					cost: 300,
					hapiness: 1
				},
				{
					task: '花錢參拜',
					cost: -100,
					hapiness: 1
				},
				{
					task: '獲得日本武器',
					cost: 0,
					hapiness: 3
				}
			]
		}
	]

function abc() {
	return 
}