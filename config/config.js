var config = {
	address: "localhost", 
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	useHttps: false, 		 
	httpsPrivateKey: "", 	
	httpsCertificate: "", 	

	language: "ko",
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
modules: [
    {
      module: "alert",
    },

   {
      module: "updatenotification",  //업데이트 알림 모듈
      position: "top_bar" // 모듈 위치 (변경 가능합니다)
    },

    {
      module: "clock",  // 시계 모듈
      position: "top_right", // 위치
      config: {
        dateFormat: "LL dddd",
      }
    },
/*
{
  module: 'MMM-TelegramBot',
  position: "top_right",
  config: {
    telegramAPIKey : '',
    allowedUser : '', 
    adminChatId : ,
    useWelcomeMessage: true,
  }
},

{
	module: "MMM-RandomYouTubePlayer", 
	position: "top_center",	     
	config: {
	    autoplay: false,
	    playlistId: "",     
            height: 200,
            width: 280,
	    
	    }
	},
*/

// 휴대전화 알림
{
		module: 'MMM-PushBulletNotifications',
		header: '알림',
		position: 'top_right',		
		config: {
			accessToken: "", // api
			endToEndPassword: null,
			numberOfNotifications: 5,  // 알림 수
			filterTargetDeviceName: "Magic Mirror",  
			showPushesSentToAllDevices: true, // showNotificationsSentToAllDevices
			onlyAllowCommandsFromSourceDevices: [],
			fetchLimitPushBullet: 50, // 푸시 수를 제한
			showPushes: true,
			showPushesOnLoad: true,    // showNotificationsOnLoad
			showDismissedPushes: true,  // history
			showMirroredNotifications: true,  // 장치에서 미러링된 알림
			onlyShowLastNotificationFromApplication: false, // 마지막으로받은 알림만 표시
			showIndividualNotifications: true, // 모든 알림 표시
			showSMS: true,
			showMessage: true,
			showIcons: true,
			showDateTime: true,
			localesDateTime: 'ko-KR',
			playSoundOnNotificationReceived: true,
			soundFile: 'modules/MMM-PushBulletNotifications/sounds/new-message.mp3',			
			maxMsgCharacters: 50, // 본문에서 표시 할 최대 문자 수
			maxHeaderCharacters: 32,  // 알림 헤더에서 표시 할 최대 문자 수
			showModuleIfNoNotifications: true, 
			noNotificationsMessage: "No new notifications",
			debugMode: false,
		}
	},

	{
            module: 'MMM-GoogleMapsTraffic',
            position: 'top_center',
            config: {
                key: '', // google map api
		lang: "ko",
                lat: 37.575444,
                lng: 126.865257,
                height: '300px',
                width: '300px',
		zoom: 14,
		mapTypeId: 'roadmap', // roadmap, satellite, hybrid, terrain
                styledMapType: 'standard', // standard , dark, night, black
                disableDefaultUI: true,
		updateInterval: 900000, // 15분
                backgroundColor: 'hsla(0, 0%, 0%, 0)', // 투명 or 기본값('rgba(0, 0, 0, 0)')
                markers: [
                    {
                        lat: 37.575444,
                        lng: 126.865257,
                        fillColor: '#9966ff'
                    },
                ],
            },
        },

// 지하철 및 버스도착정보 알림
{  
  module: 'MMM-MyCommute',
 position: 'bottom_right',
  config: {
    apiKey: '', // google map api
    lang: "ko",
    startTime: '00:00',
    endTime: '23:59',
    // hideDays: [0,6], // 유효한 숫자는 0-6, 0 = 일요일, 6 = 토요일
    showSummary: true, // 경로에 대한 간략한 요약 표시 여부
    showUpdated: true, // 마지막 업데이트가 완료된시기 표시
    travelTimeFormat: "h[h] m[m]",
    nextTransitVehicleDepartureFormat: "[next at] h:mm a", // 도착 시간 형식
    showArrivalTime: true,
    pollFrequency: 10 * 60 * 1000, // 600000ms(10 분)마다 트래픽 업데이트
    destinations: [
      {
	origin: '경기 고양시 일산서구 경의로 672',
        destination: '경기 안양시 만안구 만안로 20',
        label: '일산역 → 명학역',
        mode: 'transit', // driving, walking, bicycling, transit
	transitMode: "subway",  // "transitMode" : "bus|subway|tram
        showNextVehicleDeparture: 'true', // 출발 시간
        color: '#25B1F5'
      },
      {
	origin: '경기 고양시 일산서구 주엽동 166',
        destination: '경기 안양시 동안구 동안로 130',
        label: '집 → 범계역(bus)',
        mode: 'transit', // driving, walking, bicycling, transit
	transitMode: "bus",  // "transitMode" : "bus|subway|tram
        showNextVehicleDeparture: 'true', // 다음 출발 시간
        color: '#FFFF00'
      }
    ]
  }
}, 

{
      module: "compliments",  // 문구 표시 모듈
      position: "lower_third",  // 모듈 위치 (변경 가능합니다) 아래의 문구들 중 아무 때나, 아침, 오후, 저녁을 제외하고는 제가 생각나는 대로 추가해봤습니다. 자유롭게 수정하셔도 됩니다. - 윤솔
      config: {
        compliments: {
          anytime: [ //아무 때나
            "오늘 하루도 고생하세요!"   // 큰 따옴표(" ")안에 문장 변환 가능
          ],
          morning: [ //아침
            "오전입니다!"  // 끝에 , 찍고 줄 바꿔서 새로운 문장 추가가능!!
          ],
          afternoon: [ //오후
            "오후입니다!"
          ],
          evening: [ //저녁
            "밤입니다!"
          ],
          day_sunny: [//맑은 낮
            "맑은 낮이에요!"
          ],
          day_cloudy: [//흐린 낮
            "흐린 낮이에요!"
          ],
          cloudy: [//흐림
            "흐린 날이에요!"
          ],
          cloudy_windy: [//흐리고 바람
            "바람이 불고 흐린 날이에요!"
          ],
          showers: [//소나기
            "소나기가 내려요!"
          ],
          rain: [//비
            "비가 와요! 우산 챙기세요!"
          ],
          thunderstorm: [//천둥번개
            "번개가 쳐요! 우산 챙기세요!"
          ],
          snow: [//눈
            "눈이 와요! 우산 챙기세요!"
          ],
          fog: [//안개
            "안개가 자욱해요!"
          ],
          night_clear: [//맑은 밤
            "오늘 밤은 하늘이 맑아요!"
          ],
          night_cloudy: [//흐린 밤
            "오늘 밤은 별이 안보여요!"
          ],
          night_rain: [//비오는 밤
            "창문 닫고 자야해요!"
          ],
          night_thunderstorm: [//천둥번개 밤
            "오늘 밤은 천둥, 번개가 쳐요!"
          ],
          night_snow: [//눈오는 밤
            "밤새 눈이 내려요!"
          ],
        }
      }
    },

{
      module: "currentweather", // 날씨 
      header: "​​☆현재 기상정보☆",
      position: "top_left", // 모듈 위치 
      config: {
        location: "Seoul, KR", 
        locationID: "1835848",
        appid: "" // API
      }
    },
    {
      module: "weatherforecast", // 날씨예보
      header: "​​☆기상 예보☆",
      position: "top_left", // 모듈 위치 
      config: {
        location: "Seoul, KR", 
        locationID: "1835848",
        appid: "" // API
      }
    },
{
    	module: 'MMM-AirQuality',
	header: "​☆​오늘의 미세먼지 정보​☆", 
    	position: 'top_left',
	updateInterval: 30, 
    	config: {
        location: 'goyang',
        lang: "kr"
    		}
	},
{
      module: "calendar", // 달력 및 일정 모듈
      header: "​☆일정 및 공휴일​☆",  // calendar 이름
      position: "top_left", // Calendar 모듈 위치 
      config: {
        urgency: 21,
        fetchInterval: 3600000,
        calendars: [
	{
	  url: '',       // 비공개 ical 주소 입력
          symbol: '★My 달력★',
          },
 	 {
          url: 'https://calendar.google.com/calendar/ical/ko.south_korea%23holiday%40group.v.calendar.google.com/public/basic.ics',
          symbol: '대한민국 공휴일',
        }, 
	]
      }
    },
{
	module: "newsfeed",
	position: "bottom_bar",
	config: {
	feeds: [
		{
		title: "SBS ​정치 NewS",
                  url: "https://news.sbs.co.kr/news/SectionRssFeed.do?sectionId=01&plink=RSSREADER",
                },
		{
		title: "SBS ​경제 NewS",
                  url: "https://news.sbs.co.kr/news/SectionRssFeed.do?sectionId=02&plink=RSSREADER",
                },
		{
		title: "SBS ​사회 NewS",
                  url: "https://news.sbs.co.kr/news/SectionRssFeed.do?sectionId=03&plink=RSSREADER",
                },
		{
		title: "SBS ​생활/문화 NewS",
                  url: "https://news.sbs.co.kr/news/SectionRssFeed.do?sectionId=07&plink=RSSREADER",
                }		
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
{
	module: "newsfeed",
	position: "bottom_bar",
	config: {
	feeds: [
                {
                  title: "KBS 전체 NewS",
                  url: "https://world.kbs.co.kr/rss/rss_news.htm?lang=k"
                }
					
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	

		{
		module: "MMM-YouTube",
		position: "top_center"
		},

		{
		module: 'MMM-Screencast',
		position: 'top_center', // This position is for a hidden <div /> and not the screencast window
		config: {
			position: 'top_center',
			height: 250,
			width: 300,
			castName: 'os.hostname',
			port: 8569,
			}
        	},


/*
{
		  module: "MMM-GoogleAssistant",
		  position: "fullscreen_above",
		  config: {	
			assistantConfig: {
			  lang: "ko-KR",
			  latitude: 37.675316,
			  longitude: 126.771417,
			  credentialPath: "credentials.json",
      			  tokenPath: "token.json",
			  //deviceModelId: "",
			  //deviceInstanceId: "",
			},
			micConfig: { 
		 	 recoder : "arecord",  
			  device  : "plughw:1",
			},
			recipes: [ 
					//"with-MMM-Youtube.js",
					"Reboot-Restart-Shutdown.js",
				],
			 snowboy: {
			  audioGain: 2.0,
			  Frontend: false,
			  Model: "snowboy",
			  Sensitivity: 0.5,
			},
		  }
		},
*/

{
	module: "MMM-AssistantMk2",
	position: "top_left",
	config: {
		ui: "Fullscreen",	// "Fullscreen", "Classic", "Classic2" and "Simple".
		assistantConfig: {
			latitude: 37.675316,
			longitude: 126.771417,
			deviceModelId: "assistant-b6cdf-assistant-birica",
			deviceInstanceId: "Mirror_001",
			credentialPath: "credentials.json",
     			tokenPath: "token.json",
				},
   				responseConfig: {
      				useHTML5: true,
      				useScreenOutput: true,
      				useAudioOutput: true,
     	 			useChime: true,
     	 			timer: 5000,
     	 			myMagicWord: false,
      				delay: 0.5,
     	 			playProgram: "mpg321",
      				chime: {
        			beep: "beep.mp3",
        			error: "error.mp3",
        			continue: "continue.mp3",
        			open: "Google_beep_open.mp3",
        			close: "Google_beep_close.mp3",
     		 			},
     	 			useStaticIcons: true,
    				},
				micConfig: {
					recoder : "arecord",  
					device  : "plughw:1",
				},
				recipes: [ 
					"with-MMM-Hotword.js",
					"with-MMM-Youtube.js",
					"with-MMM-TelegramBot.js",
					"Reboot-Restart-Shutdown.js"
				],
				useWelcomeMessage: "brief today",

				profiles: {
					"default": {
						profileFile: "default.json",
						lang: "ko-KR"
					}
				},
				addons: false,
			}
		},


{
			module: "MMM-Hotword",
			position: "top_center",
			config: {
				useDisplay: true, 
				chimeOnFinish: null,
				recipes: [  "with-AMk2v3_smart-mirror.js",
					    //"with-AMk2v3_Jarvis.js",		
					  ],
				mic: {
					recordProgram: "arecord",
					device: "plughw:1"
				}
			}
		},


{
  module: "MMM-Snowboy",
  config: {
    Frontend: false,
    Model: "smart_mirror"
  }
},

*/




	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
