
export default function getHenesys() {
	return data
}


let data = [
			{
				action: 1,
				npc: '長老斯坦發怒的原因',
				npcName: '長老斯坦',
				npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v025.gif',	
				description: '人都這麼老了還愛生氣',
				level: 4,
				experience: 250,
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
				],
				items: []
			},
			{
				action: 1,
				npc: '長老斯坦喜歡什麼東西？',
				npcName: '明明夫人',
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/bbf0097b322d70160ff1fc1da6e9b085.png',	
				description: '明明夫人好像有事情要說',
				experience: 180,
				level: 3,
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
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/bbf0097b322d70160ff1fc1da6e9b085.png',
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
				],
				items: []
			},
			{
				action: 1,
				npc: '離家出走的弟弟',
				npcName: '傑伊',
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/4257ce2bb97395f7d881f349621c2eea.png',	
				description: '傑伊今天也因為擔心弟弟而憂鬱。去找一下傑伊。',
				experience: 250,
				level: 5,
				time: 0.5,
				money: 100,
				reputation: 0,
				hp: 0,
				detail: [
					{
						type: 0, //0: 旁白 1: 對話,
						text: '傑伊今天也因為擔心弟弟而憂鬱。去找一下傑伊。' 
					},
					{
						type: 1, //0: 旁白 1: npc對話, 2: 自己
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/4257ce2bb97395f7d881f349621c2eea.png',
						text: '可以聽聽我的話嗎?其實我有一個弟弟.不是親弟弟…父母親再婚了.我是跟著母親過來,弟弟是跟著父親過來.但是弟弟因為變不同的家裡環境適應很辛苦結果離家出走了.不久前從墮落城市收到住得很好的聯絡,所以有些擔心.'
					},
					{
						type: 1, //0: 旁白 1: npc對話, 2: 自己
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/4257ce2bb97395f7d881f349621c2eea.png',
						text: '雖然了解想念過世的親生母親,不過我也很想念阿勒斯.希望弟弟可以知道我們的心情早些回來.'
					},
					{
						type: 0, //0: 旁白 1: 對話,
						text: '傑伊有個叫阿勒斯的弟弟,雖然不是親弟弟,是父母再婚後會有弟弟而非常高興.但是還小的弟弟因為適應家裡的環境有些辛苦結果離家出走了.所有家人都等待他回家.' 
					},
					{
						type: 0, //0: 旁白 1: 對話,
						text: '傑伊有個叫阿勒斯的弟弟,雖然不是親弟弟,是父母再婚後會有弟弟而非常高興.但是還小的弟弟因為適應家裡的環境有些辛苦結果離家出走了.所有家人都等待他回家.' 
					},
					{
						type: 1, //0: 旁白 1: npc對話, 2: 自己
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/4257ce2bb97395f7d881f349621c2eea.png',
						text: '如果你遇到他時可以將這封信交給他,希望弟弟看到這個就馬上回來。'
					},
				],
				items: []
			},
			{
				npc: '寺廟的巨人們',
				action: 1,
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
				description: '二個情報收集活動.跟 弓箭手村 的 長老斯坦 詢問 石巨人 的綁架事件。',
				experience: 1000,
				time: 2.5,
				level: 15,
				money: 1000,
				reputation: 1,
				hp: 0,
				detail: [
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '前幾天很兇暴的 石巨人 綁架村莊人們的事情發生.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '可聽說,這附近的怪物有奇怪的症狀不是一兩天的事.還聽說這跟娃娃有關.......一個小小的娃娃讓怪物變兇暴,真得很難相信不是嗎?'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '你是為了調查這件事所來的那太好了.真得跟傳言一樣 石巨人 變的原因跟娃娃有關的話..消滅 石巨人 25隻後尋找是否有 石巨人 的娃娃吧?'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '不知真的像傳言一樣 綠菇菇 變為凶暴的原因是娃娃…打倒 挫折的綠菇菇 25隻找 挫折的綠菇菇 的娃娃吧。'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '石巨人 是到 石巨人寺院入口 的話可看到的.消滅 石巨人 25隻後再尋找是否有 石巨人 的娃娃.'
					},
					{
						type: 0,
						text: '長老斯坦 是常聽到變兇暴的怪物的傳言,也聽說這跟娃娃有關的消息.這一次也有可能有關連,消滅 石巨人 後發現 石巨人 娃娃的話他叫我拿給他...'
					},
					{
						type: 0,
						text: '從 長老斯坦 拿給 石巨人娃娃 了. 長老斯坦 是之前 石巨人 在行動時有發現娃娃,所以我說去確認誰把娃娃放在 石巨人 上.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '恩?已消滅 石巨人 的嗎?發現 石巨人 的娃娃嗎?'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '其實之前在 石巨人 發現到.....這一次也是娃娃是原因嗎?到底誰把這娃娃放在 石巨人 ?要抓到兇手才可.'
					}
				],
				items: []
			},
			{
				npc: '卡蜜拉得證言',
				action: 1,
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
				description: '弓箭手村 附近的怪物上放娃娃的人是誰呢?到在 弓箭手村 裡 長老斯坦 多查一下吧.',
				experience: 1100,
				time: 2.5,
				level: 16,
				money: 1000,
				reputation: 1,
				hp: 0,
				detail: [
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '這樣看被巨人綁架的是我們村莊的 卡蜜拉 .他的話會知道甚麼的.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '跟 卡蜜拉 詢問,是否知道在巨人上放下娃娃的兇手.他是很乖的小孩所以你遵守禮節的話他會很有誠意的對待你的.'
					},
					{
						type: 0,
						text: '長老斯坦 是在 弓箭手村 裡的 卡蜜拉 的話可能會有人看到在 石巨人 放娃娃的人,所以叫我跟他詢問兇手.'
					},
					{
						type: 0,
						text: '卡蜜拉 是幾天前,說拿娃娃的小孩來到弓箭手村,那之後出現奇怪的怪物.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
						text: '對我有甚麼事嗎?'
					},
					{
						type: 2,
						text: '想跟妳詢問有關石巨人變奇怪的事件'
					},
					{
						type: 2,
						text: '不知道妳有沒有注意到可疑的人'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
						text: '奇怪的人?恩,不知道耶......其實 石巨人寺院入口 附近每次都很多人,所以很難記住小小的事情.'
					},
					{
						type: 2,
						text: '我在找在附近的怪物上放下娃娃的人.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
						text: '娃娃...阿,這樣看最近有一個奇怪的小孩來到這,他好像拿著娃娃呢.好像那天開始出現 弓箭手村 上的奇怪怪物...'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/9fdf4f2c6e8fdacaa4acbb3fbc2c7b12.png',
						text: '最近常看到的奇怪的菇菇也是......到底在哪把怪物變這樣的呢?'
					}
				],
				items: []
			},
			{
				npc: '長老斯坦的拜託1',
				action: 1,
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
				description: '奇怪得怪物變很多 弓箭手村 .......還是有點擔心.往 弓箭手村 去見 長老斯坦 吧.',
				experience: 1000,
				time: 2.5,
				level: 20,
				money: 1000,
				reputation: 1,
				hp: 0,
				detail: [
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '石巨人寺院入口 上有出現拿那個娃娃的小孩. 卡蜜拉 所講的內容沒錯.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '雖然不知他為甚麼出現在這,可我擔心這樣下去巨人是否又開始攻擊村莊人們.你可幫忙嗎?'
					},
					{
						type: 2,
						text: '好 可以'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '謝謝你！請幫我在 石巨人的寺院1 ,4分別處理 黑曜石巨人 與 混種石巨人 各30隻。'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '石巨人 是到 石巨人寺院入口 的話可看到的.消滅 石巨人 25隻後再尋找是否有 石巨人 的娃娃.'
					},
					{
						type: 0,
						text: '在 石巨人寺院入口 又出現拿娃娃的小孩.請消滅 黑曜石巨人 和 混種石巨人 各30隻.'
					},	
					{
						type: 0,
						text: '按照 長老斯坦 得拜託消滅巨人了.雖然沒發現娃娃,還無法安心.'
					},	
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '消滅巨人後回來拉.沒有奇怪的娃娃嗎?'
					},
					{
						type: 2,
						text: '恩 但並沒有發現奇怪的東西'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '恩,真得很幸運.都是託你的福.請你收下我的感謝心吧.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '這一次沒有發生甚麼事可不知甚麼時候那個小來又把娃娃放完再離開...假如又看到他的話需要要求幫忙才可.'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/c242e1c5948fc2d189f54b366385b521.png',
						text: '這一次沒有發生甚麼事可不知甚麼時候那個小來又把娃娃放完再離開...假如又看到他的話需要要求幫忙才可.'
					},
				],
				items: [
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/c0dc09bcb2ea1fd3aa86d125b16bbf8a.png',
						possibility: 1,
						name: '加大的白色藥水',
						money: 200,
						type: 4, //3 for supplement items
						hp: 500
					}
				]
			},
			{
				npc: '傀儡的邀請',
				action: 1,
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/9b685c10c185b208832853106ff1db44.png',
				description: '不明來歷的人與我對話…',
				experience: 1300,
				money: -999,
				level: 22,
				time: 1.5,
				reputation: 0,
				hp: 0,
				detail: [
					{
						type: 0,
						text: '接受不明來歷的人的邀請，突然來到了奇怪的洞穴！洞穴裡是拿著玩偶的小孩…？這個小孩就是讓 弓箭手村 和 魔法森林 的怪物變得兇暴的元兇？與小孩對話。'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/d571dc21059b3b18663ef00f70d20348.png',
						text: '嗯？還沒找到適當的收集情報的事情…或許不需要其他的嗎？有沒有有趣的情報？'
					},
					{
						type: 2,
						text: '我見到了玩偶普蘭西斯'
					},
					{
						type: 1,
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_npc/d571dc21059b3b18663ef00f70d20348.png',
						text: '黑色翅膀的人偶師 普蘭西斯 ...很明顯的！在 弓箭手村 發生的 菇菇寶貝 異常現象， 石巨人 會變得更加殘暴一定都是因為他'
					},
					{
						type: 2,
						text: '但是…那傢伙甚至還提到黑暗魔法師!？'
					}
				],
				items: [
				]
			},
			{
				npc: '泰實夫的秘密之書',
				action: 1,
				npcImg: 'http://s1.heyxus.com/maple/custom/npc/np_v088.gif',
				description: '支付楓幣999元才可以進入高級桑那室見到泰實夫。',
				experience: 200,
				money: -999,
				level: 25,
				time: 1.5,
				reputation: 0,
				hp: 0,
				detail: [],
				items: [
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/7a75d4a1652a8c2611c6c60b5a547668.png',
						possibility: 1,
						money: 800,
						type: 1,
						name: '藍色桑那服'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/96b49207847df5020243caa0b9b6f710.png',
						possibility: 1,
						money: 800,
						type: 1,
						name: '紅色桑那服 '
					},
				]
			},
			{
				npc: '找回紅色披風',
				action: 1,
				npcName: '皮亞',
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/9040fb307a6cebe49d93729bd1efca1f.png',
				description: '去找弓箭手村的皮亞。',
				time: 1,
				level: 6,
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
						text: '其實是我魔法森林的一個朋友，也像你一樣打算做個冒險家。幾天後就要出發去探險了，所以想送給那朋友一個特殊的禮物！於是找到 墮落城市 的 後街吉姆 ，託他幫我做個不錯的護腕，結果這些亂七八糟的材料到底是什麼啊！我連看都沒看過！'
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
				],
				items: []
			},
			{
				npc: '皮亞借走的東西',
				action: 1,
				npcName: '麗娜',
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_npc/96b80b05232b3171292d03cc8087f178.png',
				description: '哎呀！你不是上次代替 皮亞 ，把他借走的物品還給我的勇士嗎？如何？ 皮亞 過得還好嗎？如果有空前往弓箭手村 ，記得幫我問候皮亞 。',
				time: 1,
				level: 4,
				experience: 300,
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
				],
				items: []
			},
			{
				npc: '轉蛋機',
				action: 1, //3 for playing
				npcImg: 'http://s7.heyxus.com/maple/custom/npc/np_a008.gif',
				description: '來試試手氣',
				time: 1,
				level: 6,
				experience: 0,
				money: -1000,
				reputation: 0,
				hp: 0,
				detail: [{
					type: 0,
					text: '一票在手，希望無窮'
				}],
				items: [
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/872e804ac928af6ee4fbedb69cb3f1a2.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '黃色工作手套'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/36704f9d21a89261e05b58a7ab1dcafd.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '黃色工作手套'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/27da7691164328a7fbe1e8325bc95687.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '紅色工作手套'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/27da7691164328a7fbe1e8325bc95687.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '紅色工作手套'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/8e3c946753dc7bef7e6d4c6e5c5030a0.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '藍色工作手套'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/8e3c946753dc7bef7e6d4c6e5c5030a0.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '藍色工作手套'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/6541fbcf233cfeb55f6c0aa6f8b8898b.png',
						possibility: 1,
						money: 50000,
						type: 1,
						name: '褐色工作手套'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/7dbed1c2a4babd30a7dbfced4d81bb73.png',
						possibility: 1,
						money: 55000,
						type: 2,
						name: '石巨人經驗值座椅'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/9fbd49d189621a402e3d7fc533779a86.png',
						possibility: 1,
						money: 55000,
						type: 2,
						name: '緞帶肥肥經驗值椅'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_item/9cff188946247bf527450b89735d8e00.png',
						possibility: 1,
						money: 3000,
						type: 1,
						name: '黑水晶'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/c0dc09bcb2ea1fd3aa86d125b16bbf8a.png',
						possibility: 1,
						name: '白色藥水',
						money: 200,
						type: 4, //3 for supplement items
						hp: 350
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/c0dc09bcb2ea1fd3aa86d125b16bbf8a.png',
						possibility: 1,
						name: '白色藥水',
						money: 200,
						type: 4, //3 for supplement items
						hp: 350
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/c0dc09bcb2ea1fd3aa86d125b16bbf8a.png',
						possibility: 1,
						name: '白色藥水',
						money: 200,
						type: 4, //3 for supplement items
						hp: 350
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/ce7c50d84af464431bcfbbdae1774de9.png',
						possibility: 1,
						money: 210,
						type: 0,
						name: '褐硬皮鞋'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/ce7c50d84af464431bcfbbdae1774de9.png',
						possibility: 1,
						money: 210,
						type: 0,
						name: '褐硬皮鞋'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/969138ee77be5c4e5e4940a49a713dce.png',
						possibility: 1,
						money: 200,
						type: 0,
						name: '紅色髮帶'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/969138ee77be5c4e5e4940a49a713dce.png',
						possibility: 1,
						money: 200,
						type: 0,
						name: '紅色髮帶'
					},
				]
			},
			{
				npc: '通勤',
				action: 1,
				npcImg: 'http://s5.heyxus.com/maple/custom/npc/np_v106.gif',
				description: '搭計程車亂晃',
				level: 3,
				time: 1,
				experience: 0,
				money: -300,
				reputation: 0,
				hp: 0,
				detail: [],
				items: []
			},
			{
				npc: '蓓蒂的化學研究2',
				action: 1,
				npcImg: 'http://s4.heyxus.com/maple/custom/npc/np_v043.gif',
				description: '到弓箭手村東部找小安對話，依序回答問題後，取得白色頭骨和化石報告書。',
				time: 0.5,
				level: 15,
				experience: 700,
				money: 100,
				reputation: 1,
				hp: 0,
				detail: [],
				items: []
			},
			{
				npc: '弓箭手村東部小山',
				action: 1,
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_small_npc/8d62c1da2de5dc5a67e1fbdb01318823.png',
				description: '打菇菇寶貝練等',
				level: 10,
				time: 1,
				experience: 650,
				money: 500,
				reputation: 0,
				hp: -450,
				detail: [
					{
						type: 0,
						text: '在楓之島以及維多利亞全境都可以看到的蘑菇怪物。偶爾會偷偷潛入他人家中，偷吃食物變成非常強大的蘑菇王。'
					}
				],
				items: [
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/36704f9d21a89261e05b58a7ab1dcafd.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '紅游泳帽'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/728b31685a334a14bb11fd68f355ea73.png',
						possibility: 1,
						money: 230,
						type: 0,
						name: '菇菇寶貝傘'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/ce7c50d84af464431bcfbbdae1774de9.png',
						possibility: 1,
						money: 210,
						type: 0,
						name: '褐硬皮鞋'
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
				npc: '弓箭手村東部森林',
				action: 1,
				npcImg: 'http://s5.heyxus.com/maple/custom/monster/tiny/TN_mo020002.gif',
				description: '打藍菇菇練等',
				level: 14,
				time: 1,
				experience: 1100,
				money: 600,
				reputation: 0,
				hp: -720,
				detail: [
					{
						type: 0,
						text: '泛著藍色光芒的蘑菇怪物。在蘑菇怪物中，有著肥胖的外形，是屬於很罕見的蘑菇怪物。但是在弓箭手村週邊仔細尋找的話，就會發現長滿了藍菇菇的樹林。偶爾會掉落出金錢，會讓冒險家變得更富裕。'
					}
				],
				items: [
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/119df947d340a8d1bef62c24baf37678.png',
						possibility: 0.4,
						money: 500,
						type: 1,
						name: '楓之谷特製便當'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/4f20d72ee216ec37dbf086e6aa407469.png',
						possibility: 1,
						money: 50,
						type: 0,
						name: '藍菇菇傘'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/969138ee77be5c4e5e4940a49a713dce.png',
						possibility: 1,
						money: 200,
						type: 0,
						name: '紅色髮帶'
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
				npc: '迷宮通道',
				action: 1,
				npcImg: 'http://s3.heyxus.com/maple/custom/monster/tiny/TN_mo015002.gif',
				description: '打綠菇菇練等',
				time: 1,
				level: 15,
				experience: 1200,
				money: 700,
				reputation: 0,
				hp: -750,
				detail: [
					{
						type: 0,
						text: '擁有綠傘的蘑菇怪物。由小型毒蘑菇變化而來，對毒擁有免疫力。在工地或迷宮入口附近很容易發現。中毒的可能性很高，所以無論肚子有多餓也不要吃。'
					}
				],
				items: [
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/014579c7cf4e246e513cf7cccf350314.png',
						possibility: 1,
						money: 210,
						type: 0,
						name: '紫錦絲緊身裙'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/14b2a40898b14e547c0da67916e99d75.png',
						possibility: 1,
						money: 30,
						type: 0,
						name: '綠菇菇傘'
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
				name: '弓箭手村邊境',
				action: 0,
				imageUrl: 'https://steamuserimages-a.akamaihd.net/ugc/817810260397064301/4EC480E6E25BE88609CDC04BA60FF1BBE0887CF6/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637%3A358&composite-to=*,*%7C637%3A358&background-color=black',
				description: '打卡',
				time: 0.5,
				level: 6,
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
				level: 7,
				time: 0.5,
				experience: 0,
				money: 0,
				reputation: 0,
				hp: 0
			},
			{
				npc: '石巨人寺院',
				action: 1,
				npcImg: 'http://gametsg.techbang.com/maplestory/icon_small_npc/2ff8258cad06003795854ec8edcee13f.png',
				description: '打石巨人練等',
				time: 1,
				level: 16,
				experience: 1200,
				money: 700,
				reputation: 0,
				hp: -640,
				detail: [
					{
						type: 0,
						text: '樹林中的岩石經過很長的時間後竟變成了一個生命體。它決不會先攻擊保護它出生地森林的人。但如果有冒險家隨意的闖進森林，那它就會讓你嘗到石巨人的厲害。'
					}
				],
				items: [
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/014579c7cf4e246e513cf7cccf350314.png',
						possibility: 1,
						money: 210,
						type: 0,
						name: '紫錦絲緊身裙'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/347ae527b11d1aa0c20362ccb87e0a1d.png',
						possibility: 0.8,
						money: 500,
						type: 0,
						name: '黃色棒球帽'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/1c62f17b9e7d9bbd627d74388e9ab064.png',
						possibility: 0.5,
						money: 5000,
						type: 1,
						name: '黑色魔法披風'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/14b2a40898b14e547c0da67916e99d75.png',
						possibility: 1,
						money: 30,
						type: 0,
						name: '綠菇菇傘'
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/661cf30a69bf86a7cf5f656fb53ca0f7.png',
						possibility: 1,
						name: '橘色藥水',
						money: 200,
						type: 4, //3 for supplement items
						hp: 180
					},
					{
						imageUrl: 'http://gametsg.techbang.com/maplestory/icon_small_item/c0dc09bcb2ea1fd3aa86d125b16bbf8a.png',
						possibility: 1,
						name: '白色藥水',
						money: 200,
						type: 4, //3 for supplement items
						hp: 350
					}
				]
			},
		]