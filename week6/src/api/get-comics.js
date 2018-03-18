//import request from 'request'
//import cheerio from 'cheerio'
//const request = require('request')
//const cheerio = require('cheerio')
/*
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://8comic.se/13834/");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("mode", "no-cros");
xhr.setRequestHeader("postman-token", "3cd5b427-9659-17f6-0872-9a37a370ae42");

xhr.send(data);
*/

/*
export default function getIndex(url) {
	request('http://8comic.se/13834/', (err, res, body) => {
		let $ = cheerio.load(body)
		let info = $('#details td[width="20%"] > font').map( (index, obj) => {
			let episode = index + 1
			let pages = $(obj).text()
			return {
				episode: episode,
				pages: pages
			}
		})
	})
}
*/

export default function comicsData () {
		return {
				'1152': {
					name: '海賊王',
					imageUrl: 'images/one-piece.jpg',
					icon: 'images/one-piece-icon.jpg',
					episodes: {
							'890': {
								pages: 16
							},
							'889': {
								pages: 16
							},
							'888': {
								pages: 15
							},
							'887': {
								pages: 15
							},
							'886': {
								pages: 19
							},
							'885': {
								pages: 15
							},
							'884': {
								pages: 16
							},
							'883': {
								pages: 16
							},
							'882': {
								pages: 15
							},
							'881': {
								pages: 16
							},
							'880': {
								pages: 16
							},
							'879': {
								pages: 16
							},
							'878': {
								pages: 18
							},
							'877': {
								pages: 15
							},
							'876': {
								pages: 16
							},
							'875': {
								pages: 16
							},
							'874': {
								pages: 21
							},
							'873': {
								pages: 15
							},
							'872': {
								pages: 18
							},
							'871': {
								pages: 17
							}
						}
					},
				'1221': {
					name: '進擊的巨人',
					imageUrl: 'images/attack-on-titan.jpg',
					icon: 'images/attack-on-titan-icon.jpg',
					episodes: {
							'101': {
								pages: 40
							},
							'100': {
								pages: 41
							},
							'99': {
								pages: 45
							},
							'98': {
								pages: 46
							},
							'97': {
								pages: 45
							},
							'96': {
								pages: 41
							},
							'95': {
								pages: 44
							},
							'94': {
								pages: 45
							},
							'93': {
								pages: 45
							},
							'92': {
								pages: 45
							}
						}
					},
				'4085': {
					name: '我的英雄學院',
					imageUrl: 'images/my-hero-academia.jpg',
					icon: 'images/my-hero-academia-icon.jpg',
					episodes: {
							'165': {
								pages: 17
							},
							'164': {
								pages: 17
							},
							'163': {
								pages: 17
							},
							'162': {
								pages: 14
							},
							'161': {
								pages: 17
							},
							'160': {
								pages: 17
							},
							'159': {
								pages: 16
							},
							'158': {
								pages: 15
							},
							'157': {
								pages: 15
							},
							'156': {
								pages: 17
							}
						}
					},
				'10575': {
					name: '來自深淵',
					imageUrl: 'images/made-in-abyss.jpg',
					icon: 'images/made-in-abyss-icon.png',
					episodes: {
							'43': {
								pages: 27
							},
							'42': {
								pages: 29
							},
							'41': {
								pages: 28
							},
							'40': {
								pages: 27
							},
							'39': {
								pages: 41
							},
							'38': {
								pages: 17
							},
							'37': {
								pages: 36
							},
							'36': {
								pages: 24
							},
							'35': {
								pages: 20
							},
							'34': {
								pages: 28
							},
							'33': {
								pages: 28
							},
							'32': {
								pages: 31
							},
							'31': {
								pages: 18
							},
							'30': {
								pages: 24
							},
							'29': {
								pages: 16
							},
							'28': {
								pages: 15
							},
							'27': {
								pages: 18
							},
							'26': {
								pages: 17
							},
							'25': {
								pages: 20
							},
							'24': {
								pages: 16
							},
							'23': {
								pages: 20
							},
							'22': {
								pages: 21
							},
							'21': {
								pages: 18
							},
							'20': {
								pages: 18
							},
							'19': {
								pages: 22
							},
							'18': {
								pages: 20
							},
							'17': {
								pages: 24
							},
							'16': {
								pages: 16
							},
							'15': {
								pages: 25
							},
							'14': {
								pages: 18
							},
							'13': {
								pages: 18
							},
							'12': {
								pages: 18
							},
							'11': {
								pages: 16
							},
							'10': {
								pages: 22
							},
							'9': {
								pages: 25
							},
							'8': {
								pages: 23
							},
							'7': {
								pages: 20
							},
							'6': {
								pages: 10
							},
							'5': {
								pages: 22
							},
							'4': {
								pages: 22
							},
							'3': {
								pages: 14
							},
							'2': {
								pages: 20
							},
							'1': {
								pages: 35
							}
						}
					},
				'1155': {
					name: '獵人',
					imageUrl: 'https://orig00.deviantart.net/0c80/f/2014/189/6/e/zodiacos___hunter_x_hunter_by_alluca-d7ps3lx.png',
					icon: 'images/hunter-hunter-icon.png',
					episodes: {
							'370': {
								pages: 18
							},
							'369': {
								pages: 18
							},
							'368': {
								pages: 19
							},
							'367': {
								pages: 19
							},
							'366': {
								pages: 19
							},
							'365': {
								pages: 19
							},
							'364': {
								pages: 19
							},
							'363': {
								pages: 18
							},
							'362': {
								pages: 19
							},
							'361': {
								pages: 20
							},
							'360': {
								pages: 18
							},
							'359': {
								pages: 18
							},
							'358': {
								pages: 17
							},
							'357': {
								pages: 19
							},
							'356': {
								pages: 19
							},
							'355': {
								pages: 17
							},
							'354': {
								pages: 19
							},
							'353': {
								pages: 19
							},
							'352': {
								pages: 19
							},
							'351': {
								pages: 19
							}
						}
					},
					'4174': {
					name: '寶石之國',
					imageUrl: 'images/land-of-the-lustrous.jpg',
					icon: 'images/land-of-the-lustrous.jpg',
					episodes: {
							'63': {
								pages: 22
							},
							'62': {
								pages: 21
							},
							'61': {
								pages: 9
							},
							'60': {
								pages: 18
							},
							'59': {
								pages: 20
							},
							'58': {
								pages: 21
							},
							'57': {
								pages: 22
							},
							'56': {
								pages: 22
							},
							'55': {
								pages: 20
							},
							'54': {
								pages: 24
							},
							'53': {
								pages: 20
							},
							'52': {
								pages: 27
							},
							'51': {
								pages: 24
							},
							'50': {
								pages: 24
							},
							'49': {
								pages: 24
							},
							'48': {
								pages: 19
							},
							'47': {
								pages: 20
							},
							'46': {
								pages: 26
							},
							'45': {
								pages: 26
							},
							'44': {
								pages: 26
							},
							'43': {
								pages: 26
							},
							'42': {
								pages: 27
							},
							'41': {
								pages: 24
							},
							'40': {
								pages: 21
							},
							'39': {
								pages: 20
							},
							'38': {
								pages: 24
							},
							'37': {
								pages: 22
							},
							'36': {
								pages: 26
							},
							'35': {
								pages: 24
							},
							'34': {
								pages: 24
							},
							'33': {
								pages: 24
							},
							'32': {
								pages: 23
							},
							'31': {
								pages: 20
							},
							'30': {
								pages: 25
							},
							'29': {
								pages: 26
							},
							'28': {
								pages: 24
							},
							'27': {
								pages: 24
							},
							'26': {
								pages: 24
							},
							'25': {
								pages: 24
							},
							'24': {
								pages: 22
							},
							'23': {
								pages: 22
							},
							'22': {
								pages: 23
							},
							'21': {
								pages: 24
							},
							'20': {
								pages: 32
							},
							'19': {
								pages: 30
							},
							'18': {
								pages: 26
							},
							'17': {
								pages: 24
							},
							'16': {
								pages: 26
							},
							'15': {
								pages: 24
							},
							'14': {
								pages: 28
							},
							'13': {
								pages: 28
							},
							'12': {
								pages: 28
							},
							'11': {
								pages: 30
							},
							'10': {
								pages: 28
							},
							'9': {
								pages: 24
							},
							'8': {
								pages: 26
							},
							'7': {
								pages: 30
							},
							'6': {
								pages: 29
							},
							'5': {
								pages: 24
							},
							'4': {
								pages: 24
							},
							'3': {
								pages: 38
							},
							'2': {
								pages: 38
							},
							'1': {
								pages: 37
							}
						}
					}
				}
	}