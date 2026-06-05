// Config & State
let appState = {
  mode: 'work', // 'work' or 'home'
  homeDirection: 'up', // 'up' (Wangsimni) or 'down' (Incheon/Gosaek)
  dataMode: 'api', // Default to API mode since user provided a key
  apiKey: '6a4f486753776974383553436e566c',
  expressOnly: false, // Line 9 Express filter
  timers: {},
  simulatedArrivals: {
    work: [],
    homeUp: [],
    homeDown: []
  }
};

// Timetables cache (Official Weekday Schedules)
const timetables = {
  work: [
  {
    "id": "work_1",
    "time": "05:40",
    "rawMinutes": 340,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_2",
    "time": "05:52",
    "rawMinutes": 352,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_3",
    "time": "05:57",
    "rawMinutes": 357,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_4",
    "time": "06:06",
    "rawMinutes": 366,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_5",
    "time": "06:11",
    "rawMinutes": 371,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_6",
    "time": "06:19",
    "rawMinutes": 379,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_7",
    "time": "06:23",
    "rawMinutes": 383,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_8",
    "time": "06:30",
    "rawMinutes": 390,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_9",
    "time": "06:34",
    "rawMinutes": 394,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_10",
    "time": "06:40",
    "rawMinutes": 400,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_11",
    "time": "06:45",
    "rawMinutes": 405,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_12",
    "time": "06:52",
    "rawMinutes": 412,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_13",
    "time": "06:57",
    "rawMinutes": 417,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_14",
    "time": "07:04",
    "rawMinutes": 424,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_15",
    "time": "07:09",
    "rawMinutes": 429,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_16",
    "time": "07:16",
    "rawMinutes": 436,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_17",
    "time": "07:21",
    "rawMinutes": 441,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_18",
    "time": "07:26",
    "rawMinutes": 446,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_19",
    "time": "07:30",
    "rawMinutes": 450,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_20",
    "time": "07:34",
    "rawMinutes": 454,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_21",
    "time": "07:38",
    "rawMinutes": 458,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_22",
    "time": "07:42",
    "rawMinutes": 462,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_23",
    "time": "07:46",
    "rawMinutes": 466,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_24",
    "time": "07:48",
    "rawMinutes": 468,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_25",
    "time": "07:52",
    "rawMinutes": 472,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_26",
    "time": "07:55",
    "rawMinutes": 475,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_27",
    "time": "07:58",
    "rawMinutes": 478,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_28",
    "time": "08:01",
    "rawMinutes": 481,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_29",
    "time": "08:04",
    "rawMinutes": 484,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_30",
    "time": "08:07",
    "rawMinutes": 487,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_31",
    "time": "08:11",
    "rawMinutes": 491,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_32",
    "time": "08:14",
    "rawMinutes": 494,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_33",
    "time": "08:17",
    "rawMinutes": 497,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_34",
    "time": "08:20",
    "rawMinutes": 500,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_35",
    "time": "08:23",
    "rawMinutes": 503,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_36",
    "time": "08:26",
    "rawMinutes": 506,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_37",
    "time": "08:30",
    "rawMinutes": 510,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_38",
    "time": "08:33",
    "rawMinutes": 513,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_39",
    "time": "08:36",
    "rawMinutes": 516,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_40",
    "time": "08:39",
    "rawMinutes": 519,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_41",
    "time": "08:42",
    "rawMinutes": 522,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_42",
    "time": "08:45",
    "rawMinutes": 525,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_43",
    "time": "08:49",
    "rawMinutes": 529,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_44",
    "time": "08:52",
    "rawMinutes": 532,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_45",
    "time": "08:55",
    "rawMinutes": 535,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_46",
    "time": "08:58",
    "rawMinutes": 538,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_47",
    "time": "09:01",
    "rawMinutes": 541,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_48",
    "time": "09:04",
    "rawMinutes": 544,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_49",
    "time": "09:08",
    "rawMinutes": 548,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_50",
    "time": "09:11",
    "rawMinutes": 551,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_51",
    "time": "09:14",
    "rawMinutes": 554,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_52",
    "time": "09:17",
    "rawMinutes": 557,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_53",
    "time": "09:20",
    "rawMinutes": 560,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_54",
    "time": "09:23",
    "rawMinutes": 563,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_55",
    "time": "09:27",
    "rawMinutes": 567,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_56",
    "time": "09:30",
    "rawMinutes": 570,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_57",
    "time": "09:33",
    "rawMinutes": 573,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_58",
    "time": "09:37",
    "rawMinutes": 577,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_59",
    "time": "09:43",
    "rawMinutes": 583,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_60",
    "time": "09:45",
    "rawMinutes": 585,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_61",
    "time": "09:52",
    "rawMinutes": 592,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_62",
    "time": "09:56",
    "rawMinutes": 596,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_63",
    "time": "10:03",
    "rawMinutes": 603,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_64",
    "time": "10:07",
    "rawMinutes": 607,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_65",
    "time": "10:14",
    "rawMinutes": 614,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_66",
    "time": "10:18",
    "rawMinutes": 618,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_67",
    "time": "10:25",
    "rawMinutes": 625,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_68",
    "time": "10:29",
    "rawMinutes": 629,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_69",
    "time": "10:36",
    "rawMinutes": 636,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_70",
    "time": "10:40",
    "rawMinutes": 640,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_71",
    "time": "10:47",
    "rawMinutes": 647,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_72",
    "time": "10:51",
    "rawMinutes": 651,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_73",
    "time": "10:58",
    "rawMinutes": 658,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_74",
    "time": "11:02",
    "rawMinutes": 662,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_75",
    "time": "11:09",
    "rawMinutes": 669,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_76",
    "time": "11:13",
    "rawMinutes": 673,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_77",
    "time": "11:20",
    "rawMinutes": 680,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_78",
    "time": "11:24",
    "rawMinutes": 684,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_79",
    "time": "11:31",
    "rawMinutes": 691,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_80",
    "time": "11:36",
    "rawMinutes": 696,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_81",
    "time": "11:43",
    "rawMinutes": 703,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_82",
    "time": "11:48",
    "rawMinutes": 708,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_83",
    "time": "11:55",
    "rawMinutes": 715,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_84",
    "time": "11:59",
    "rawMinutes": 719,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_85",
    "time": "12:06",
    "rawMinutes": 726,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_86",
    "time": "12:10",
    "rawMinutes": 730,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_87",
    "time": "12:17",
    "rawMinutes": 737,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_88",
    "time": "12:21",
    "rawMinutes": 741,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_89",
    "time": "12:28",
    "rawMinutes": 748,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_90",
    "time": "12:32",
    "rawMinutes": 752,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_91",
    "time": "12:39",
    "rawMinutes": 759,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_92",
    "time": "12:43",
    "rawMinutes": 763,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_93",
    "time": "12:50",
    "rawMinutes": 770,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_94",
    "time": "12:54",
    "rawMinutes": 774,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_95",
    "time": "13:01",
    "rawMinutes": 781,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_96",
    "time": "13:05",
    "rawMinutes": 785,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_97",
    "time": "13:12",
    "rawMinutes": 792,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_98",
    "time": "13:16",
    "rawMinutes": 796,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_99",
    "time": "13:23",
    "rawMinutes": 803,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_100",
    "time": "13:27",
    "rawMinutes": 807,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_101",
    "time": "13:34",
    "rawMinutes": 814,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_102",
    "time": "13:38",
    "rawMinutes": 818,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_103",
    "time": "13:45",
    "rawMinutes": 825,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_104",
    "time": "13:49",
    "rawMinutes": 829,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_105",
    "time": "13:56",
    "rawMinutes": 836,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_106",
    "time": "14:00",
    "rawMinutes": 840,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_107",
    "time": "14:07",
    "rawMinutes": 847,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_108",
    "time": "14:12",
    "rawMinutes": 852,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_109",
    "time": "14:19",
    "rawMinutes": 859,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_110",
    "time": "14:24",
    "rawMinutes": 864,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_111",
    "time": "14:31",
    "rawMinutes": 871,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_112",
    "time": "14:35",
    "rawMinutes": 875,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_113",
    "time": "14:42",
    "rawMinutes": 882,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_114",
    "time": "14:46",
    "rawMinutes": 886,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_115",
    "time": "14:53",
    "rawMinutes": 893,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_116",
    "time": "14:57",
    "rawMinutes": 897,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_117",
    "time": "15:04",
    "rawMinutes": 904,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_118",
    "time": "15:08",
    "rawMinutes": 908,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_119",
    "time": "15:15",
    "rawMinutes": 915,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_120",
    "time": "15:19",
    "rawMinutes": 919,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_121",
    "time": "15:26",
    "rawMinutes": 926,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_122",
    "time": "15:30",
    "rawMinutes": 930,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_123",
    "time": "15:37",
    "rawMinutes": 937,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_124",
    "time": "15:41",
    "rawMinutes": 941,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_125",
    "time": "15:48",
    "rawMinutes": 948,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_126",
    "time": "15:52",
    "rawMinutes": 952,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_127",
    "time": "15:59",
    "rawMinutes": 959,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_128",
    "time": "16:03",
    "rawMinutes": 963,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_129",
    "time": "16:10",
    "rawMinutes": 970,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_130",
    "time": "16:14",
    "rawMinutes": 974,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_131",
    "time": "16:21",
    "rawMinutes": 981,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_132",
    "time": "16:25",
    "rawMinutes": 985,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_133",
    "time": "16:32",
    "rawMinutes": 992,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_134",
    "time": "16:36",
    "rawMinutes": 996,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_135",
    "time": "16:43",
    "rawMinutes": 1003,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_136",
    "time": "16:48",
    "rawMinutes": 1008,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_137",
    "time": "16:52",
    "rawMinutes": 1012,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_138",
    "time": "16:55",
    "rawMinutes": 1015,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_139",
    "time": "17:00",
    "rawMinutes": 1020,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_140",
    "time": "17:07",
    "rawMinutes": 1027,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_141",
    "time": "17:11",
    "rawMinutes": 1031,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_142",
    "time": "17:18",
    "rawMinutes": 1038,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_143",
    "time": "17:21",
    "rawMinutes": 1041,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_144",
    "time": "17:25",
    "rawMinutes": 1045,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_145",
    "time": "17:29",
    "rawMinutes": 1049,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_146",
    "time": "17:33",
    "rawMinutes": 1053,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_147",
    "time": "17:38",
    "rawMinutes": 1058,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_148",
    "time": "17:42",
    "rawMinutes": 1062,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_149",
    "time": "17:45",
    "rawMinutes": 1065,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_150",
    "time": "17:49",
    "rawMinutes": 1069,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_151",
    "time": "17:52",
    "rawMinutes": 1072,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_152",
    "time": "17:56",
    "rawMinutes": 1076,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_153",
    "time": "17:59",
    "rawMinutes": 1079,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_154",
    "time": "18:02",
    "rawMinutes": 1082,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_155",
    "time": "18:06",
    "rawMinutes": 1086,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_156",
    "time": "18:09",
    "rawMinutes": 1089,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_157",
    "time": "18:13",
    "rawMinutes": 1093,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_158",
    "time": "18:16",
    "rawMinutes": 1096,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_159",
    "time": "18:19",
    "rawMinutes": 1099,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_160",
    "time": "18:23",
    "rawMinutes": 1103,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_161",
    "time": "18:26",
    "rawMinutes": 1106,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_162",
    "time": "18:30",
    "rawMinutes": 1110,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_163",
    "time": "18:33",
    "rawMinutes": 1113,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_164",
    "time": "18:37",
    "rawMinutes": 1117,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_165",
    "time": "18:40",
    "rawMinutes": 1120,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_166",
    "time": "18:43",
    "rawMinutes": 1123,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_167",
    "time": "18:47",
    "rawMinutes": 1127,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_168",
    "time": "18:50",
    "rawMinutes": 1130,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_169",
    "time": "18:54",
    "rawMinutes": 1134,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_170",
    "time": "18:57",
    "rawMinutes": 1137,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_171",
    "time": "19:00",
    "rawMinutes": 1140,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_172",
    "time": "19:04",
    "rawMinutes": 1144,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_173",
    "time": "19:07",
    "rawMinutes": 1147,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_174",
    "time": "19:11",
    "rawMinutes": 1151,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_175",
    "time": "19:14",
    "rawMinutes": 1154,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_176",
    "time": "19:18",
    "rawMinutes": 1158,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_177",
    "time": "19:21",
    "rawMinutes": 1161,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_178",
    "time": "19:24",
    "rawMinutes": 1164,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_179",
    "time": "19:28",
    "rawMinutes": 1168,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_180",
    "time": "19:31",
    "rawMinutes": 1171,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_181",
    "time": "19:35",
    "rawMinutes": 1175,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_182",
    "time": "19:38",
    "rawMinutes": 1178,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_183",
    "time": "19:41",
    "rawMinutes": 1181,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_184",
    "time": "19:45",
    "rawMinutes": 1185,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_185",
    "time": "19:48",
    "rawMinutes": 1188,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_186",
    "time": "19:52",
    "rawMinutes": 1192,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_187",
    "time": "19:55",
    "rawMinutes": 1195,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_188",
    "time": "19:59",
    "rawMinutes": 1199,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_189",
    "time": "20:03",
    "rawMinutes": 1203,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_190",
    "time": "20:06",
    "rawMinutes": 1206,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_191",
    "time": "20:11",
    "rawMinutes": 1211,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_192",
    "time": "20:15",
    "rawMinutes": 1215,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_193",
    "time": "20:20",
    "rawMinutes": 1220,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_194",
    "time": "20:24",
    "rawMinutes": 1224,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_195",
    "time": "20:29",
    "rawMinutes": 1229,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_196",
    "time": "20:33",
    "rawMinutes": 1233,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_197",
    "time": "20:40",
    "rawMinutes": 1240,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_198",
    "time": "20:42",
    "rawMinutes": 1242,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_199",
    "time": "20:48",
    "rawMinutes": 1248,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_200",
    "time": "20:52",
    "rawMinutes": 1252,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_201",
    "time": "20:59",
    "rawMinutes": 1259,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_202",
    "time": "21:03",
    "rawMinutes": 1263,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_203",
    "time": "21:10",
    "rawMinutes": 1270,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_204",
    "time": "21:14",
    "rawMinutes": 1274,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_205",
    "time": "21:21",
    "rawMinutes": 1281,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_206",
    "time": "21:25",
    "rawMinutes": 1285,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_207",
    "time": "21:32",
    "rawMinutes": 1292,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_208",
    "time": "21:36",
    "rawMinutes": 1296,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_209",
    "time": "21:43",
    "rawMinutes": 1303,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_210",
    "time": "21:47",
    "rawMinutes": 1307,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_211",
    "time": "21:54",
    "rawMinutes": 1314,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_212",
    "time": "21:58",
    "rawMinutes": 1318,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_213",
    "time": "22:05",
    "rawMinutes": 1325,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_214",
    "time": "22:09",
    "rawMinutes": 1329,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_215",
    "time": "22:16",
    "rawMinutes": 1336,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_216",
    "time": "22:20",
    "rawMinutes": 1340,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_217",
    "time": "22:27",
    "rawMinutes": 1347,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_218",
    "time": "22:31",
    "rawMinutes": 1351,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_219",
    "time": "22:38",
    "rawMinutes": 1358,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_220",
    "time": "22:42",
    "rawMinutes": 1362,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_221",
    "time": "22:49",
    "rawMinutes": 1369,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_222",
    "time": "22:53",
    "rawMinutes": 1373,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_223",
    "time": "23:00",
    "rawMinutes": 1380,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_224",
    "time": "23:04",
    "rawMinutes": 1384,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_225",
    "time": "23:11",
    "rawMinutes": 1391,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_226",
    "time": "23:15",
    "rawMinutes": 1395,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_227",
    "time": "23:22",
    "rawMinutes": 1402,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_228",
    "time": "23:26",
    "rawMinutes": 1406,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_229",
    "time": "23:33",
    "rawMinutes": 1413,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_230",
    "time": "23:37",
    "rawMinutes": 1417,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_231",
    "time": "23:44",
    "rawMinutes": 1424,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_232",
    "time": "23:48",
    "rawMinutes": 1428,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_233",
    "time": "23:55",
    "rawMinutes": 1435,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_234",
    "time": "23:59",
    "rawMinutes": 1439,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_235",
    "time": "24:06",
    "rawMinutes": 1446,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_236",
    "time": "24:10",
    "rawMinutes": 1450,
    "type": "급행",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_237",
    "time": "24:17",
    "rawMinutes": 1457,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_238",
    "time": "24:26",
    "rawMinutes": 1466,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_239",
    "time": "24:33",
    "rawMinutes": 1473,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_240",
    "time": "24:45",
    "rawMinutes": 1485,
    "type": "일반",
    "dest": "중앙보훈병원"
  },
  {
    "id": "work_241",
    "time": "24:57",
    "rawMinutes": 1497,
    "type": "일반",
    "dest": "삼전"
  }
],
  homeUp: [
  {
    "time": "05:20",
    "rawMinutes": 320,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_1"
  },
  {
    "time": "05:31",
    "rawMinutes": 331,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_2"
  },
  {
    "time": "05:45",
    "rawMinutes": 345,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_3"
  },
  {
    "time": "05:52",
    "rawMinutes": 352,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_4"
  },
  {
    "time": "05:58",
    "rawMinutes": 358,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_5"
  },
  {
    "time": "06:07",
    "rawMinutes": 367,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_6"
  },
  {
    "time": "06:15",
    "rawMinutes": 375,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_7"
  },
  {
    "time": "06:23",
    "rawMinutes": 383,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_8"
  },
  {
    "time": "06:29",
    "rawMinutes": 389,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_9"
  },
  {
    "time": "06:35",
    "rawMinutes": 395,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_10"
  },
  {
    "time": "06:42",
    "rawMinutes": 402,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_11"
  },
  {
    "time": "06:48",
    "rawMinutes": 408,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_12"
  },
  {
    "time": "06:53",
    "rawMinutes": 413,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_13"
  },
  {
    "time": "06:57",
    "rawMinutes": 417,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_14"
  },
  {
    "time": "07:01",
    "rawMinutes": 421,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_15"
  },
  {
    "time": "07:05",
    "rawMinutes": 425,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_16"
  },
  {
    "time": "07:08",
    "rawMinutes": 428,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_17"
  },
  {
    "time": "07:14",
    "rawMinutes": 434,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_18"
  },
  {
    "time": "07:20",
    "rawMinutes": 440,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_19"
  },
  {
    "time": "07:25",
    "rawMinutes": 445,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_20"
  },
  {
    "time": "07:31",
    "rawMinutes": 451,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_21"
  },
  {
    "time": "07:35",
    "rawMinutes": 455,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_22"
  },
  {
    "time": "07:39",
    "rawMinutes": 459,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_23"
  },
  {
    "time": "07:42",
    "rawMinutes": 462,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_24"
  },
  {
    "time": "07:46",
    "rawMinutes": 466,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_25"
  },
  {
    "time": "07:50",
    "rawMinutes": 470,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_26"
  },
  {
    "time": "07:53",
    "rawMinutes": 473,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_27"
  },
  {
    "time": "07:56",
    "rawMinutes": 476,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_28"
  },
  {
    "time": "08:01",
    "rawMinutes": 481,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_29"
  },
  {
    "time": "08:05",
    "rawMinutes": 485,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_30"
  },
  {
    "time": "08:08",
    "rawMinutes": 488,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_31"
  },
  {
    "time": "08:11",
    "rawMinutes": 491,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_32"
  },
  {
    "time": "08:17",
    "rawMinutes": 497,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_33"
  },
  {
    "time": "08:22",
    "rawMinutes": 502,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_34"
  },
  {
    "time": "08:27",
    "rawMinutes": 507,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_35"
  },
  {
    "time": "08:34",
    "rawMinutes": 514,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_36"
  },
  {
    "time": "08:38",
    "rawMinutes": 518,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_37"
  },
  {
    "time": "08:42",
    "rawMinutes": 522,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_38"
  },
  {
    "time": "08:47",
    "rawMinutes": 527,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_39"
  },
  {
    "time": "08:52",
    "rawMinutes": 532,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_40"
  },
  {
    "time": "08:57",
    "rawMinutes": 537,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_41"
  },
  {
    "time": "09:04",
    "rawMinutes": 544,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_42"
  },
  {
    "time": "09:09",
    "rawMinutes": 549,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_43"
  },
  {
    "time": "09:16",
    "rawMinutes": 556,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_44"
  },
  {
    "time": "09:22",
    "rawMinutes": 562,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_45"
  },
  {
    "time": "09:29",
    "rawMinutes": 569,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_46"
  },
  {
    "time": "09:37",
    "rawMinutes": 577,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_47"
  },
  {
    "time": "09:48",
    "rawMinutes": 588,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_48"
  },
  {
    "time": "09:55",
    "rawMinutes": 595,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_49"
  },
  {
    "time": "10:03",
    "rawMinutes": 603,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_50"
  },
  {
    "time": "10:11",
    "rawMinutes": 611,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_51"
  },
  {
    "time": "10:19",
    "rawMinutes": 619,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_52"
  },
  {
    "time": "10:23",
    "rawMinutes": 623,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_53"
  },
  {
    "time": "10:31",
    "rawMinutes": 631,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_54"
  },
  {
    "time": "10:37",
    "rawMinutes": 637,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_55"
  },
  {
    "time": "10:47",
    "rawMinutes": 647,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_56"
  },
  {
    "time": "10:53",
    "rawMinutes": 653,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_57"
  },
  {
    "time": "11:01",
    "rawMinutes": 661,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_58"
  },
  {
    "time": "11:09",
    "rawMinutes": 669,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_59"
  },
  {
    "time": "11:25",
    "rawMinutes": 685,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_60"
  },
  {
    "time": "11:31",
    "rawMinutes": 691,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_61"
  },
  {
    "time": "11:37",
    "rawMinutes": 697,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_62"
  },
  {
    "time": "11:43",
    "rawMinutes": 703,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_63"
  },
  {
    "time": "11:53",
    "rawMinutes": 713,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_64"
  },
  {
    "time": "12:02",
    "rawMinutes": 722,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_65"
  },
  {
    "time": "12:09",
    "rawMinutes": 729,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_66"
  },
  {
    "time": "12:16",
    "rawMinutes": 736,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_67"
  },
  {
    "time": "12:22",
    "rawMinutes": 742,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_68"
  },
  {
    "time": "12:28",
    "rawMinutes": 748,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_69"
  },
  {
    "time": "12:37",
    "rawMinutes": 757,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_70"
  },
  {
    "time": "12:46",
    "rawMinutes": 766,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_71"
  },
  {
    "time": "12:53",
    "rawMinutes": 773,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_72"
  },
  {
    "time": "13:00",
    "rawMinutes": 780,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_73"
  },
  {
    "time": "13:08",
    "rawMinutes": 788,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_74"
  },
  {
    "time": "13:14",
    "rawMinutes": 794,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_75"
  },
  {
    "time": "13:25",
    "rawMinutes": 805,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_76"
  },
  {
    "time": "13:34",
    "rawMinutes": 814,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_77"
  },
  {
    "time": "13:40",
    "rawMinutes": 820,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_78"
  },
  {
    "time": "13:46",
    "rawMinutes": 826,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_79"
  },
  {
    "time": "13:53",
    "rawMinutes": 833,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_80"
  },
  {
    "time": "13:59",
    "rawMinutes": 839,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_81"
  },
  {
    "time": "14:08",
    "rawMinutes": 848,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_82"
  },
  {
    "time": "14:17",
    "rawMinutes": 857,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_83"
  },
  {
    "time": "14:25",
    "rawMinutes": 865,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_84"
  },
  {
    "time": "14:30",
    "rawMinutes": 870,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_85"
  },
  {
    "time": "14:37",
    "rawMinutes": 877,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_86"
  },
  {
    "time": "14:43",
    "rawMinutes": 883,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_87"
  },
  {
    "time": "14:52",
    "rawMinutes": 892,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_88"
  },
  {
    "time": "14:59",
    "rawMinutes": 899,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_89"
  },
  {
    "time": "15:06",
    "rawMinutes": 906,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_90"
  },
  {
    "time": "15:11",
    "rawMinutes": 911,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_91"
  },
  {
    "time": "15:21",
    "rawMinutes": 921,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_92"
  },
  {
    "time": "15:28",
    "rawMinutes": 928,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_93"
  },
  {
    "time": "15:38",
    "rawMinutes": 938,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_94"
  },
  {
    "time": "15:47",
    "rawMinutes": 947,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_95"
  },
  {
    "time": "15:54",
    "rawMinutes": 954,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_96"
  },
  {
    "time": "16:01",
    "rawMinutes": 961,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_97"
  },
  {
    "time": "16:08",
    "rawMinutes": 968,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_98"
  },
  {
    "time": "16:18",
    "rawMinutes": 978,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_99"
  },
  {
    "time": "16:23",
    "rawMinutes": 983,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_100"
  },
  {
    "time": "16:33",
    "rawMinutes": 993,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_101"
  },
  {
    "time": "16:37",
    "rawMinutes": 997,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_102"
  },
  {
    "time": "16:42",
    "rawMinutes": 1002,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_103"
  },
  {
    "time": "16:46",
    "rawMinutes": 1006,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_104"
  },
  {
    "time": "16:52",
    "rawMinutes": 1012,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_105"
  },
  {
    "time": "16:57",
    "rawMinutes": 1017,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_106"
  },
  {
    "time": "17:03",
    "rawMinutes": 1023,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_107"
  },
  {
    "time": "17:08",
    "rawMinutes": 1028,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_108"
  },
  {
    "time": "17:15",
    "rawMinutes": 1035,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_109"
  },
  {
    "time": "17:19",
    "rawMinutes": 1039,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_110"
  },
  {
    "time": "17:25",
    "rawMinutes": 1045,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_111"
  },
  {
    "time": "17:30",
    "rawMinutes": 1050,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_112"
  },
  {
    "time": "17:37",
    "rawMinutes": 1057,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_113"
  },
  {
    "time": "17:42",
    "rawMinutes": 1062,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_114"
  },
  {
    "time": "17:46",
    "rawMinutes": 1066,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_115"
  },
  {
    "time": "17:51",
    "rawMinutes": 1071,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_116"
  },
  {
    "time": "17:55",
    "rawMinutes": 1075,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_117"
  },
  {
    "time": "18:00",
    "rawMinutes": 1080,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_118"
  },
  {
    "time": "18:05",
    "rawMinutes": 1085,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_119"
  },
  {
    "time": "18:08",
    "rawMinutes": 1088,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_120"
  },
  {
    "time": "18:11",
    "rawMinutes": 1091,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_121"
  },
  {
    "time": "18:14",
    "rawMinutes": 1094,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_122"
  },
  {
    "time": "18:20",
    "rawMinutes": 1100,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_123"
  },
  {
    "time": "18:25",
    "rawMinutes": 1105,
    "type": "일반",
    "dest": "청량리",
    "id": "home_up_124"
  },
  {
    "time": "18:30",
    "rawMinutes": 1110,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_125"
  },
  {
    "time": "18:36",
    "rawMinutes": 1116,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_126"
  },
  {
    "time": "18:40",
    "rawMinutes": 1120,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_127"
  },
  {
    "time": "18:44",
    "rawMinutes": 1124,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_128"
  },
  {
    "time": "18:53",
    "rawMinutes": 1133,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_129"
  },
  {
    "time": "18:56",
    "rawMinutes": 1136,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_130"
  },
  {
    "time": "19:02",
    "rawMinutes": 1142,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_131"
  },
  {
    "time": "19:07",
    "rawMinutes": 1147,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_132"
  },
  {
    "time": "19:14",
    "rawMinutes": 1154,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_133"
  },
  {
    "time": "19:20",
    "rawMinutes": 1160,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_134"
  },
  {
    "time": "19:23",
    "rawMinutes": 1163,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_135"
  },
  {
    "time": "19:27",
    "rawMinutes": 1167,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_136"
  },
  {
    "time": "19:34",
    "rawMinutes": 1174,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_137"
  },
  {
    "time": "19:37",
    "rawMinutes": 1177,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_138"
  },
  {
    "time": "19:42",
    "rawMinutes": 1182,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_139"
  },
  {
    "time": "19:48",
    "rawMinutes": 1188,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_140"
  },
  {
    "time": "19:54",
    "rawMinutes": 1194,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_141"
  },
  {
    "time": "20:02",
    "rawMinutes": 1202,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_142"
  },
  {
    "time": "20:08",
    "rawMinutes": 1208,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_143"
  },
  {
    "time": "20:15",
    "rawMinutes": 1215,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_144"
  },
  {
    "time": "20:21",
    "rawMinutes": 1221,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_145"
  },
  {
    "time": "20:26",
    "rawMinutes": 1226,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_146"
  },
  {
    "time": "20:33",
    "rawMinutes": 1233,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_147"
  },
  {
    "time": "20:41",
    "rawMinutes": 1241,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_148"
  },
  {
    "time": "20:50",
    "rawMinutes": 1250,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_149"
  },
  {
    "time": "20:54",
    "rawMinutes": 1254,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_150"
  },
  {
    "time": "21:00",
    "rawMinutes": 1260,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_151"
  },
  {
    "time": "21:05",
    "rawMinutes": 1265,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_152"
  },
  {
    "time": "21:16",
    "rawMinutes": 1276,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_153"
  },
  {
    "time": "21:23",
    "rawMinutes": 1283,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_154"
  },
  {
    "time": "21:33",
    "rawMinutes": 1293,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_155"
  },
  {
    "time": "21:38",
    "rawMinutes": 1298,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_156"
  },
  {
    "time": "21:44",
    "rawMinutes": 1304,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_157"
  },
  {
    "time": "21:53",
    "rawMinutes": 1313,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_158"
  },
  {
    "time": "22:05",
    "rawMinutes": 1325,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_159"
  },
  {
    "time": "22:17",
    "rawMinutes": 1337,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_160"
  },
  {
    "time": "22:31",
    "rawMinutes": 1351,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_161"
  },
  {
    "time": "22:39",
    "rawMinutes": 1359,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_162"
  },
  {
    "time": "22:51",
    "rawMinutes": 1371,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_163"
  },
  {
    "time": "23:01",
    "rawMinutes": 1381,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_164"
  },
  {
    "time": "23:14",
    "rawMinutes": 1394,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_165"
  },
  {
    "time": "23:35",
    "rawMinutes": 1415,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_166"
  },
  {
    "time": "23:47",
    "rawMinutes": 1427,
    "type": "일반",
    "dest": "왕십리",
    "id": "home_up_167"
  }
],
  homeDown: [
  {
    "time": "05:48",
    "rawMinutes": 348,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_1"
  },
  {
    "time": "06:04",
    "rawMinutes": 364,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_2"
  },
  {
    "time": "06:15",
    "rawMinutes": 375,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_3"
  },
  {
    "time": "06:29",
    "rawMinutes": 389,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_4"
  },
  {
    "time": "06:39",
    "rawMinutes": 399,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_5"
  },
  {
    "time": "07:03",
    "rawMinutes": 423,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_6"
  },
  {
    "time": "07:12",
    "rawMinutes": 432,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_7"
  },
  {
    "time": "07:19",
    "rawMinutes": 439,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_8"
  },
  {
    "time": "07:25",
    "rawMinutes": 445,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_9"
  },
  {
    "time": "07:34",
    "rawMinutes": 454,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_10"
  },
  {
    "time": "07:42",
    "rawMinutes": 462,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_11"
  },
  {
    "time": "07:49",
    "rawMinutes": 469,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_12"
  },
  {
    "time": "07:56",
    "rawMinutes": 476,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_13"
  },
  {
    "time": "08:04",
    "rawMinutes": 484,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_14"
  },
  {
    "time": "08:11",
    "rawMinutes": 491,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_15"
  },
  {
    "time": "08:16",
    "rawMinutes": 496,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_16"
  },
  {
    "time": "08:21",
    "rawMinutes": 501,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_17"
  },
  {
    "time": "08:30",
    "rawMinutes": 510,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_18"
  },
  {
    "time": "08:34",
    "rawMinutes": 514,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_19"
  },
  {
    "time": "08:38",
    "rawMinutes": 518,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_20"
  },
  {
    "time": "08:41",
    "rawMinutes": 521,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_21"
  },
  {
    "time": "08:45",
    "rawMinutes": 525,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_22"
  },
  {
    "time": "08:49",
    "rawMinutes": 529,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_23"
  },
  {
    "time": "08:53",
    "rawMinutes": 533,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_24"
  },
  {
    "time": "08:57",
    "rawMinutes": 537,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_25"
  },
  {
    "time": "09:01",
    "rawMinutes": 541,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_26"
  },
  {
    "time": "09:05",
    "rawMinutes": 545,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_27"
  },
  {
    "time": "09:09",
    "rawMinutes": 549,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_28"
  },
  {
    "time": "09:12",
    "rawMinutes": 552,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_29"
  },
  {
    "time": "09:16",
    "rawMinutes": 556,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_30"
  },
  {
    "time": "09:19",
    "rawMinutes": 559,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_31"
  },
  {
    "time": "09:23",
    "rawMinutes": 563,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_32"
  },
  {
    "time": "09:27",
    "rawMinutes": 567,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_33"
  },
  {
    "time": "09:31",
    "rawMinutes": 571,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_34"
  },
  {
    "time": "09:35",
    "rawMinutes": 575,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_35"
  },
  {
    "time": "09:40",
    "rawMinutes": 580,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_36"
  },
  {
    "time": "09:46",
    "rawMinutes": 586,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_37"
  },
  {
    "time": "09:52",
    "rawMinutes": 592,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_38"
  },
  {
    "time": "09:58",
    "rawMinutes": 598,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_39"
  },
  {
    "time": "10:03",
    "rawMinutes": 603,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_40"
  },
  {
    "time": "10:09",
    "rawMinutes": 609,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_41"
  },
  {
    "time": "10:16",
    "rawMinutes": 616,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_42"
  },
  {
    "time": "10:21",
    "rawMinutes": 621,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_43"
  },
  {
    "time": "10:28",
    "rawMinutes": 628,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_44"
  },
  {
    "time": "10:35",
    "rawMinutes": 635,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_45"
  },
  {
    "time": "10:43",
    "rawMinutes": 643,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_46"
  },
  {
    "time": "10:49",
    "rawMinutes": 649,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_47"
  },
  {
    "time": "10:55",
    "rawMinutes": 655,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_48"
  },
  {
    "time": "11:05",
    "rawMinutes": 665,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_49"
  },
  {
    "time": "11:14",
    "rawMinutes": 674,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_50"
  },
  {
    "time": "11:21",
    "rawMinutes": 681,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_51"
  },
  {
    "time": "11:27",
    "rawMinutes": 687,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_52"
  },
  {
    "time": "11:35",
    "rawMinutes": 695,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_53"
  },
  {
    "time": "11:43",
    "rawMinutes": 703,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_54"
  },
  {
    "time": "11:50",
    "rawMinutes": 710,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_55"
  },
  {
    "time": "11:58",
    "rawMinutes": 718,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_56"
  },
  {
    "time": "12:04",
    "rawMinutes": 724,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_57"
  },
  {
    "time": "12:10",
    "rawMinutes": 730,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_58"
  },
  {
    "time": "12:19",
    "rawMinutes": 739,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_59"
  },
  {
    "time": "12:28",
    "rawMinutes": 748,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_60"
  },
  {
    "time": "12:34",
    "rawMinutes": 754,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_61"
  },
  {
    "time": "12:39",
    "rawMinutes": 759,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_62"
  },
  {
    "time": "12:49",
    "rawMinutes": 769,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_63"
  },
  {
    "time": "12:59",
    "rawMinutes": 779,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_64"
  },
  {
    "time": "13:05",
    "rawMinutes": 785,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_65"
  },
  {
    "time": "13:12",
    "rawMinutes": 792,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_66"
  },
  {
    "time": "13:18",
    "rawMinutes": 798,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_67"
  },
  {
    "time": "13:23",
    "rawMinutes": 803,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_68"
  },
  {
    "time": "13:33",
    "rawMinutes": 813,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_69"
  },
  {
    "time": "13:41",
    "rawMinutes": 821,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_70"
  },
  {
    "time": "13:52",
    "rawMinutes": 832,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_71"
  },
  {
    "time": "14:01",
    "rawMinutes": 841,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_72"
  },
  {
    "time": "14:09",
    "rawMinutes": 849,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_73"
  },
  {
    "time": "14:18",
    "rawMinutes": 858,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_74"
  },
  {
    "time": "14:23",
    "rawMinutes": 863,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_75"
  },
  {
    "time": "14:29",
    "rawMinutes": 869,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_76"
  },
  {
    "time": "14:35",
    "rawMinutes": 875,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_77"
  },
  {
    "time": "14:42",
    "rawMinutes": 882,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_78"
  },
  {
    "time": "14:48",
    "rawMinutes": 888,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_79"
  },
  {
    "time": "14:54",
    "rawMinutes": 894,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_80"
  },
  {
    "time": "15:03",
    "rawMinutes": 903,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_81"
  },
  {
    "time": "15:13",
    "rawMinutes": 913,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_82"
  },
  {
    "time": "15:20",
    "rawMinutes": 920,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_83"
  },
  {
    "time": "15:27",
    "rawMinutes": 927,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_84"
  },
  {
    "time": "15:33",
    "rawMinutes": 933,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_85"
  },
  {
    "time": "15:39",
    "rawMinutes": 939,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_86"
  },
  {
    "time": "15:47",
    "rawMinutes": 947,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_87"
  },
  {
    "time": "15:56",
    "rawMinutes": 956,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_88"
  },
  {
    "time": "16:05",
    "rawMinutes": 965,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_89"
  },
  {
    "time": "16:13",
    "rawMinutes": 973,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_90"
  },
  {
    "time": "16:22",
    "rawMinutes": 982,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_91"
  },
  {
    "time": "16:32",
    "rawMinutes": 992,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_92"
  },
  {
    "time": "16:38",
    "rawMinutes": 998,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_93"
  },
  {
    "time": "16:43",
    "rawMinutes": 1003,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_94"
  },
  {
    "time": "16:50",
    "rawMinutes": 1010,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_95"
  },
  {
    "time": "16:57",
    "rawMinutes": 1017,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_96"
  },
  {
    "time": "17:05",
    "rawMinutes": 1025,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_97"
  },
  {
    "time": "17:13",
    "rawMinutes": 1033,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_98"
  },
  {
    "time": "17:20",
    "rawMinutes": 1040,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_99"
  },
  {
    "time": "17:28",
    "rawMinutes": 1048,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_100"
  },
  {
    "time": "17:37",
    "rawMinutes": 1057,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_101"
  },
  {
    "time": "17:42",
    "rawMinutes": 1062,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_102"
  },
  {
    "time": "17:50",
    "rawMinutes": 1070,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_103"
  },
  {
    "time": "17:56",
    "rawMinutes": 1076,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_104"
  },
  {
    "time": "18:00",
    "rawMinutes": 1080,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_105"
  },
  {
    "time": "18:05",
    "rawMinutes": 1085,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_106"
  },
  {
    "time": "18:09",
    "rawMinutes": 1089,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_107"
  },
  {
    "time": "18:14",
    "rawMinutes": 1094,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_108"
  },
  {
    "time": "18:19",
    "rawMinutes": 1099,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_109"
  },
  {
    "time": "18:23",
    "rawMinutes": 1103,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_110"
  },
  {
    "time": "18:30",
    "rawMinutes": 1110,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_111"
  },
  {
    "time": "18:34",
    "rawMinutes": 1114,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_112"
  },
  {
    "time": "18:41",
    "rawMinutes": 1121,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_113"
  },
  {
    "time": "18:48",
    "rawMinutes": 1128,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_114"
  },
  {
    "time": "18:53",
    "rawMinutes": 1133,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_115"
  },
  {
    "time": "18:56",
    "rawMinutes": 1136,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_116"
  },
  {
    "time": "19:00",
    "rawMinutes": 1140,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_117"
  },
  {
    "time": "19:04",
    "rawMinutes": 1144,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_118"
  },
  {
    "time": "19:09",
    "rawMinutes": 1149,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_119"
  },
  {
    "time": "19:14",
    "rawMinutes": 1154,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_120"
  },
  {
    "time": "19:18",
    "rawMinutes": 1158,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_121"
  },
  {
    "time": "19:23",
    "rawMinutes": 1163,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_122"
  },
  {
    "time": "19:30",
    "rawMinutes": 1170,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_123"
  },
  {
    "time": "19:34",
    "rawMinutes": 1174,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_124"
  },
  {
    "time": "19:39",
    "rawMinutes": 1179,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_125"
  },
  {
    "time": "19:44",
    "rawMinutes": 1184,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_126"
  },
  {
    "time": "19:49",
    "rawMinutes": 1189,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_127"
  },
  {
    "time": "19:54",
    "rawMinutes": 1194,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_128"
  },
  {
    "time": "19:58",
    "rawMinutes": 1198,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_129"
  },
  {
    "time": "20:02",
    "rawMinutes": 1202,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_130"
  },
  {
    "time": "20:09",
    "rawMinutes": 1209,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_131"
  },
  {
    "time": "20:16",
    "rawMinutes": 1216,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_132"
  },
  {
    "time": "20:20",
    "rawMinutes": 1220,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_133"
  },
  {
    "time": "20:25",
    "rawMinutes": 1225,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_134"
  },
  {
    "time": "20:30",
    "rawMinutes": 1230,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_135"
  },
  {
    "time": "20:35",
    "rawMinutes": 1235,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_136"
  },
  {
    "time": "20:40",
    "rawMinutes": 1240,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_137"
  },
  {
    "time": "20:45",
    "rawMinutes": 1245,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_138"
  },
  {
    "time": "20:50",
    "rawMinutes": 1250,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_139"
  },
  {
    "time": "20:55",
    "rawMinutes": 1255,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_140"
  },
  {
    "time": "20:59",
    "rawMinutes": 1259,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_141"
  },
  {
    "time": "21:03",
    "rawMinutes": 1263,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_142"
  },
  {
    "time": "21:10",
    "rawMinutes": 1270,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_143"
  },
  {
    "time": "21:16",
    "rawMinutes": 1276,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_144"
  },
  {
    "time": "21:22",
    "rawMinutes": 1282,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_145"
  },
  {
    "time": "21:28",
    "rawMinutes": 1288,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_146"
  },
  {
    "time": "21:34",
    "rawMinutes": 1294,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_147"
  },
  {
    "time": "21:40",
    "rawMinutes": 1300,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_148"
  },
  {
    "time": "21:45",
    "rawMinutes": 1305,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_149"
  },
  {
    "time": "21:51",
    "rawMinutes": 1311,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_150"
  },
  {
    "time": "21:59",
    "rawMinutes": 1319,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_151"
  },
  {
    "time": "22:08",
    "rawMinutes": 1328,
    "type": "일반",
    "dest": "인천",
    "id": "home_down_152"
  },
  {
    "time": "22:17",
    "rawMinutes": 1337,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_153"
  },
  {
    "time": "22:26",
    "rawMinutes": 1346,
    "type": "일반",
    "dest": "오이도",
    "id": "home_down_154"
  },
  {
    "time": "22:32",
    "rawMinutes": 1352,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_155"
  },
  {
    "time": "22:38",
    "rawMinutes": 1358,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_156"
  },
  {
    "time": "22:46",
    "rawMinutes": 1366,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_157"
  },
  {
    "time": "22:52",
    "rawMinutes": 1372,
    "type": "일반",
    "dest": "오이도",
    "id": "home_down_158"
  },
  {
    "time": "23:00",
    "rawMinutes": 1380,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_159"
  },
  {
    "time": "23:09",
    "rawMinutes": 1389,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_160"
  },
  {
    "time": "23:18",
    "rawMinutes": 1398,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_161"
  },
  {
    "time": "23:26",
    "rawMinutes": 1406,
    "type": "일반",
    "dest": "고색",
    "id": "home_down_162"
  },
  {
    "time": "23:38",
    "rawMinutes": 1418,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_163"
  },
  {
    "time": "23:49",
    "rawMinutes": 1429,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_164"
  },
  {
    "time": "23:59",
    "rawMinutes": 1439,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_165"
  },
  {
    "time": "00:10",
    "rawMinutes": 10,
    "type": "일반",
    "dest": "죽전",
    "id": "home_down_166"
  }
]
};

// --- SIMULATED REALTIME ENGINE ---
// Simulates trains dynamically based on current system time
function updateSimulationData() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentSeconds = now.getSeconds();
  
  // Helper to build 3 simulated trains ahead of current time
  function buildSimulatedTrains(timetableList, currentMins, currentSecs, key) {
    // Find next upcoming trains in timetable
    const upcoming = timetableList.filter(t => t.rawMinutes >= currentMins);
    
    // If we've run out of trains for the day, loop back or return empty
    if (upcoming.length === 0) return [];
    
    const results = [];
    
    // Simulate top 3 trains
    for (let i = 0; i < Math.min(upcoming.length, 3); i++) {
      const train = upcoming[i];
      // Calculate real-time countdown. 
      // The scheduled departure is train.rawMinutes.
      // Total seconds from now until scheduled departure:
      let secondsDiff = (train.rawMinutes - currentMins) * 60 - currentSecs;
      
      if (secondsDiff < 0) secondsDiff = 0; // Train has theoretically departed
      
      // Determine simulated train status/position based on countdown
      let statusText = '';
      if (secondsDiff < 30) {
        statusText = '곧 도착 / 승차 중';
      } else if (secondsDiff < 90) {
        statusText = '진입 중';
      } else if (secondsDiff < 180) {
        statusText = '전역 출발';
      } else {
        const stationsAway = Math.floor(secondsDiff / 150) + 1;
        statusText = `${stationsAway}역 전`;
      }
      
      results.push({
        id: train.id,
        scheduledTime: train.time,
        type: train.type,
        dest: train.dest,
        secondsLeft: secondsDiff,
        status: statusText
      });
    }
    
    return results;
  }
  
  appState.simulatedArrivals.work = buildSimulatedTrains(timetables.work, currentMinutes, currentSeconds, 'work');
  appState.simulatedArrivals.homeUp = buildSimulatedTrains(timetables.homeUp, currentMinutes, currentSeconds, 'homeUp');
  appState.simulatedArrivals.homeDown = buildSimulatedTrains(timetables.homeDown, currentMinutes, currentSeconds, 'homeDown');
}

// --- PUBLIC API CONNECTIVITY MODULE ---
// Fetch real-time arrivals from Seoul Subway API
async function fetchSubwayRealtimeData(stationName) {
  if (!appState.apiKey) {
    throw new Error('API Key is missing');
  }
  
  // Seoul Open Data Portal real-time arrival URL (JSON)
  // Endpoints: http://swopenAPI.seoul.go.kr/api/subway/(key)/json/realtimeStationArrival/0/10/(Station)
  const url = `http://swopenapi.seoul.go.kr/api/subway/${appState.apiKey}/json/realtimeStationArrival/0/10/${encodeURIComponent(stationName)}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.errorMessage && data.errorMessage.code !== 'INFO-000') {
      throw new Error(data.errorMessage.message || 'API Error');
    }
    return data.realtimeArrivalList || [];
  } catch (error) {
    console.error('Subway API Error:', error);
    throw error;
  }
}

// Convert real-time API response to unified UI model
function mapApiDataToUi(apiList, mode, direction = 'up') {
  const results = [];
  
  if (mode === 'work') {
    // 9호선 종합운동장역 (subwayId: 1009, 중앙보훈병원행은 상행 - updnLine: '상행' or '0')
    const filtered = apiList.filter(item => {
      const isLine9 = item.subwayId === '1009' || item.subwayName === '9호선';
      const isUp = item.updnLine === '상행' || item.updnLine === '0' || item.trainLineNm.includes('중앙보훈병원');
      return isLine9 && isUp;
    });
    
    filtered.forEach((item, index) => {
      // Parse arrival seconds/time
      const secondsLeft = parseInt(item.barvlDt, 10) || 0;
      const type = item.btrainNo && item.btrainNm === '급행' ? '급행' : '일반';
      
      // Try to calculate departure time from scheduled
      // For API data, if barvlDt is 0, we can use the current time + arrival seconds
      const now = new Date();
      const arrivalTime = new Date(now.getTime() + secondsLeft * 1000);
      const timeStr = `${String(arrivalTime.getHours()).padStart(2, '0')}:${String(arrivalTime.getMinutes()).padStart(2, '0')}`;
      
      results.push({
        id: `api_work_${index}`,
        scheduledTime: timeStr,
        type: type,
        dest: '중앙보훈병원',
        secondsLeft: secondsLeft,
        status: item.arvlMsg2 || `${Math.ceil(secondsLeft / 60)}분 전`
      });
    });
  } else {
    // 수인분당선 모란역 (subwayId: 1075, 왕십리는 상행 - updnLine: '상행' or '0', 인천/고색은 하행 - updnLine: '하행' or '1')
    const targetUpdn = direction === 'up' ? ['상행', '0'] : ['하행', '1'];
    const filtered = apiList.filter(item => {
      const isBundang = item.subwayId === '1075' || item.subwayName === '수인분당선';
      const isDirMatch = targetUpdn.includes(item.updnLine) || 
                         (direction === 'up' && item.trainLineNm.includes('왕십리')) ||
                         (direction === 'down' && (item.trainLineNm.includes('인천') || item.trainLineNm.includes('고색') || item.trainLineNm.includes('수원')));
      return isBundang && isDirMatch;
    });
    
    filtered.forEach((item, index) => {
      const secondsLeft = parseInt(item.barvlDt, 10) || 0;
      const now = new Date();
      const arrivalTime = new Date(now.getTime() + secondsLeft * 1000);
      const timeStr = `${String(arrivalTime.getHours()).padStart(2, '0')}:${String(arrivalTime.getMinutes()).padStart(2, '0')}`;
      
      results.push({
        id: `api_home_${direction}_${index}`,
        scheduledTime: timeStr,
        type: '일반',
        dest: item.bstatnNm || (direction === 'up' ? '왕십리' : '고색'),
        secondsLeft: secondsLeft,
        status: item.arvlMsg2 || `${Math.ceil(secondsLeft / 60)}분 전`
      });
    });
  }
  
  return results.slice(0, 3); // Return next 3 trains maximum
}

// --- RENDERING MODULE ---
// Render real-time cards and full timetables
function renderApp(realtimeData = null) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  // Decide which data source to use
  let workArrivals = [];
  let homeArrivals = [];
  
  if (appState.dataMode === 'api' && realtimeData) {
    if (appState.mode === 'work') {
      workArrivals = realtimeData.work || [];
    } else {
      homeArrivals = realtimeData.home || [];
    }
  } else {
    // Simulator Mode
    workArrivals = appState.simulatedArrivals.work;
    homeArrivals = appState.homeDirection === 'up' 
      ? appState.simulatedArrivals.homeUp 
      : appState.simulatedArrivals.homeDown;
  }
  
  // Set badge label
  const workBadge = document.getElementById('work-api-badge');
  const homeBadge = document.getElementById('home-api-badge');
  const badgeLabel = appState.dataMode === 'api' ? 'Live API' : 'Simulator';
  const badgeClass = appState.dataMode === 'api' ? 'api-badge live' : 'api-badge';
  
  if (workBadge) {
    workBadge.textContent = badgeLabel;
    workBadge.className = badgeClass;
  }
  if (homeBadge) {
    homeBadge.textContent = badgeLabel;
    homeBadge.className = badgeClass;
  }

  // --- RENDER WORK VIEW ---
  if (appState.mode === 'work') {
    const liveContainer = document.getElementById('work-live-arrivals');
    const listContainer = document.getElementById('work-timetable-list');
    const countSpan = document.getElementById('work-timetable-count');
    
    // 1. Live cards
    if (workArrivals.length === 0) {
      liveContainer.innerHTML = '<div class="info-box">현재 운행 중인 실시간 열차 정보가 없습니다.</div>';
    } else {
      liveContainer.innerHTML = workArrivals.map((train, index) => {
        const timeDisplay = train.secondsLeft <= 0 
          ? '도착함' 
          : `${Math.floor(train.secondsLeft / 60)}분 ${train.secondsLeft % 60}초`;
        
        // Dynamic progress & stations
        let progress = 10;
        if (train.secondsLeft <= 0) progress = 100;
        else if (train.secondsLeft < 30) progress = 95;
        else if (train.secondsLeft < 90) progress = 80;
        else if (train.secondsLeft < 180) progress = 50;
        else if (train.secondsLeft < 300) progress = 25;
        
        let prevStation = '봉은사';
        if (train.status.includes('2역 전')) prevStation = '삼성중앙';
        if (train.status.includes('3역 전')) prevStation = '선정릉';
        if (train.status.includes('4역 전')) prevStation = '언주';
        
        const currStation = '종합운동장';
        
        // Show visual track ONLY for the first train (index 0)
        const trackHtml = index === 0 ? `
            <!-- Visual Track Map -->
            <div class="visual-track">
              <div class="track-line-wrapper">
                <div class="track-rail"></div>
                <div class="track-rail-highlight" style="width: ${progress}%; --station-color: var(--line-9-color);"></div>
                
                <div class="track-station-node start active" style="--station-color: var(--line-9-color);"></div>
                <div class="track-station-label start">${prevStation}</div>
                
                <div class="track-station-node end target"></div>
                <div class="track-station-label end">${currStation}</div>
                
                <div class="track-train-icon" style="left: ${progress}%;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--success-color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="3" width="16" height="14" rx="2" fill="#0b0f19"></rect>
                    <path d="M4 11h16"></path>
                    <path d="M12 3v8"></path>
                    <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
                    <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
                  </svg>
                </div>
              </div>
            </div>
        ` : '';
        
        return `
          <div class="live-card" style="flex-direction: column; align-items: stretch; gap: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="live-info-left">
                <div class="train-tag">
                  <span class="badge-train-type ${train.type === '급행' ? 'express' : 'local'}">${train.type}</span>
                  <span class="train-dest">${train.dest}행</span>
                </div>
                <span class="train-status">${train.status}</span>
              </div>
              <div class="live-info-right">
                <span class="time-countdown" data-secs="${train.secondsLeft}">${timeDisplay}</span>
              </div>
            </div>
            ${trackHtml}
          </div>
        `;
      }).join('');
    }
    
    // 2. Timetable List with mapping
    let timetable = timetables.work;
    if (appState.expressOnly) {
      timetable = timetable.filter(row => row.type === '급행');
    }
    countSpan.textContent = `${timetable.length}개 열차`;
    
    let html = '';
    let autoScrollTargetId = null;
    
    timetable.forEach(row => {
      const isPast = row.rawMinutes < currentMinutes;
      
      // Match with real-time arrivals (if scheduled departure time matches)
      const isLive = workArrivals.some(arr => arr.scheduledTime === row.time && arr.type === row.type);
      
      let rowClass = 'timetable-row';
      if (isPast) rowClass += ' past-train';
      if (isLive) rowClass += ' active-live';
      
      // Mark first upcoming train for scrolling
      if (!isPast && !autoScrollTargetId) {
        autoScrollTargetId = `row-${row.id}`;
      }
      
      html += `
        <div class="${rowClass}" id="row-${row.id}">
          <div class="timetable-train-info">
            <span class="badge-train-type ${row.type === '급행' ? 'express' : 'local'}">${row.type}</span>
            <span class="timetable-time">${row.time}</span>
          </div>
          <div class="timetable-train-right">
            ${isLive ? '<span class="timetable-live-badge">실시간</span>' : ''}
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${row.dest}행</span>
          </div>
        </div>
      `;
    });
    
    listContainer.innerHTML = html;
    
    // Scroll to first upcoming train
    if (autoScrollTargetId) {
      setTimeout(() => {
        const el = document.getElementById(autoScrollTargetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  } 
  
  // --- RENDER HOME VIEW ---
  else {
    const liveContainer = document.getElementById('home-live-arrivals');
    const listContainer = document.getElementById('home-timetable-list');
    const countSpan = document.getElementById('home-timetable-count');
    const titleHeader = document.getElementById('home-timetable-title');
    
    const isUp = appState.homeDirection === 'up';
    titleHeader.textContent = isUp ? '왕십리 방면 시간표' : '인천·고색 방면 시간표';
    
    // 1. Live cards
    if (homeArrivals.length === 0) {
      liveContainer.innerHTML = '<div class="info-box">현재 운행 중인 실시간 열차 정보가 없습니다.</div>';
    } else {
      liveContainer.innerHTML = homeArrivals.map((train, index) => {
        const timeDisplay = train.secondsLeft <= 0 
          ? '도착함' 
          : `${Math.floor(train.secondsLeft / 60)}분 ${train.secondsLeft % 60}초`;
        
        // Dynamic progress & stations
        let progress = 10;
        if (train.secondsLeft <= 0) progress = 100;
        else if (train.secondsLeft < 30) progress = 95;
        else if (train.secondsLeft < 90) progress = 80;
        else if (train.secondsLeft < 180) progress = 50;
        else if (train.secondsLeft < 300) progress = 25;
        
        let prevStation = isUp ? '야탑' : '태평';
        if (isUp) {
          if (train.status.includes('2역 전')) prevStation = '이매';
          if (train.status.includes('3역 전')) prevStation = '서현';
          if (train.status.includes('4역 전')) prevStation = '수내';
        } else {
          if (train.status.includes('2역 전')) prevStation = '복정';
          if (train.status.includes('3역 전')) prevStation = '수서';
          if (train.status.includes('4역 전')) prevStation = '대모산입구';
        }
        
        const currStation = '모란';
        
        // Show visual track ONLY for the first train (index 0)
        const trackHtml = index === 0 ? `
            <!-- Visual Track Map -->
            <div class="visual-track">
              <div class="track-line-wrapper">
                <div class="track-rail"></div>
                <div class="track-rail-highlight" style="width: ${progress}%; --station-color: var(--line-bundang-color);"></div>
                
                <div class="track-station-node start active" style="--station-color: var(--line-bundang-color);"></div>
                <div class="track-station-label start">${prevStation}</div>
                
                <div class="track-station-node end target"></div>
                <div class="track-station-label end">${currStation}</div>
                
                <div class="track-train-icon" style="left: ${progress}%;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--success-color)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="3" width="16" height="14" rx="2" fill="#120c17"></rect>
                    <path d="M4 11h16"></path>
                    <path d="M12 3v8"></path>
                    <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
                    <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
                  </svg>
                </div>
              </div>
            </div>
        ` : '';
        
        return `
          <div class="live-card" style="flex-direction: column; align-items: stretch; gap: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="live-info-left">
                <div class="train-tag">
                  <span class="badge-train-type local">일반</span>
                  <span class="train-dest">${train.dest}행</span>
                </div>
                <span class="train-status">${train.status}</span>
              </div>
              <div class="live-info-right">
                <span class="time-countdown" data-secs="${train.secondsLeft}">${timeDisplay}</span>
              </div>
            </div>
            ${trackHtml}
          </div>
        `;
      }).join('');
    }
    
    // 2. Timetable List
    const timetable = isUp ? timetables.homeUp : timetables.homeDown;
    countSpan.textContent = `${timetable.length}개 열차`;
    
    let html = '';
    let autoScrollTargetId = null;
    
    timetable.forEach(row => {
      const isPast = row.rawMinutes < currentMinutes;
      const isLive = homeArrivals.some(arr => arr.scheduledTime === row.time && arr.dest === row.dest);
      
      let rowClass = 'timetable-row';
      if (isPast) rowClass += ' past-train';
      if (isLive) rowClass += ' active-live';
      
      if (!isPast && !autoScrollTargetId) {
        autoScrollTargetId = `row-${row.id}`;
      }
      
      html += `
        <div class="${rowClass}" id="row-${row.id}">
          <div class="timetable-train-info">
            <span class="timetable-time">${row.time}</span>
          </div>
          <div class="timetable-train-right">
            ${isLive ? '<span class="timetable-live-badge">실시간</span>' : ''}
            <span style="font-size: 0.85rem; color: var(--text-secondary);">${row.dest}행</span>
          </div>
        </div>
      `;
    });
    
    listContainer.innerHTML = html;
    
    if (autoScrollTargetId) {
      setTimeout(() => {
        const el = document.getElementById(autoScrollTargetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }
}

// --- API DATA REFRESH MODULE ---
let lastFetchData = null;

async function refreshRealtimeApiData() {
  if (appState.dataMode === 'sim') {
    updateSimulationData();
    renderApp();
    return;
  }
  
  // If API Mode
  try {
    let workData = [];
    let homeData = [];
    
    if (appState.mode === 'work') {
      const raw = await fetchSubwayRealtimeData('종합운동장');
      workData = mapApiDataToUi(raw, 'work');
    } else {
      const raw = await fetchSubwayRealtimeData('모란');
      homeData = mapApiDataToUi(raw, 'home', appState.homeDirection);
    }
    
    lastFetchData = {
      work: workData,
      home: homeData
    };
    
    renderApp(lastFetchData);
  } catch (err) {
    console.warn('Fallback to Simulation due to API error:', err);
    
    // Temporary fallback notification (silent console warning, alert only if user interacts)
    updateSimulationData();
    renderApp();
    
    // Draw visual feedback in console
    const activeBadge = document.getElementById(appState.mode === 'work' ? 'work-api-badge' : 'home-api-badge');
    if (activeBadge) {
      activeBadge.textContent = 'API Error (Sim)';
      activeBadge.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
      activeBadge.style.color = '#EF4444';
    }
  }
}

// --- TICKERS / INTERVALS ---
// Start 1-second countdown ticker for UI responsiveness
function startTickers() {
  // Clear any existing timer
  if (appState.timers.countdown) clearInterval(appState.timers.countdown);
  
  appState.timers.countdown = setInterval(() => {
    // If in simulation mode, update seconds remaining
    if (appState.dataMode === 'sim') {
      let changed = false;
      const arrivals = appState.mode === 'work' 
        ? appState.simulatedArrivals.work 
        : (appState.homeDirection === 'up' ? appState.simulatedArrivals.homeUp : appState.simulatedArrivals.homeDown);
        
      arrivals.forEach(train => {
        if (train.secondsLeft > 0) {
          train.secondsLeft--;
          // Recalculate status based on new timer value
          if (train.secondsLeft < 30) {
            train.status = '곧 도착 / 승차 중';
          } else if (train.secondsLeft < 90) {
            train.status = '진입 중';
          } else if (train.secondsLeft < 180) {
            train.status = '전역 출발';
          } else {
            const stationsAway = Math.floor(train.secondsLeft / 150) + 1;
            train.status = `${stationsAway}역 전`;
          }
          changed = true;
        }
      });
      
      if (changed) {
        // Redraw counters efficiently
        document.querySelectorAll('.time-countdown').forEach(el => {
          let secs = parseInt(el.getAttribute('data-secs'), 10);
          if (isNaN(secs)) return;
          if (secs > 0) {
            secs--;
            el.setAttribute('data-secs', secs);
            el.textContent = `${Math.floor(secs / 60)}분 ${secs % 60}초`;
            
            // Recalculate and update visual track elements in real-time
            let progress = 10;
            if (secs <= 0) progress = 100;
            else if (secs < 30) progress = 95;
            else if (secs < 90) progress = 80;
            else if (secs < 180) progress = 50;
            else if (secs < 300) progress = 25;
            
            const liveCard = el.closest('.live-card');
            if (liveCard) {
              const highlight = liveCard.querySelector('.track-rail-highlight');
              const icon = liveCard.querySelector('.track-train-icon');
              if (highlight) highlight.style.width = `${progress}%`;
              if (icon) icon.style.left = `${progress}%`;
            }
          } else {
            el.textContent = '도착함';
            const liveCard = el.closest('.live-card');
            if (liveCard) {
              const highlight = liveCard.querySelector('.track-rail-highlight');
              const icon = liveCard.querySelector('.track-train-icon');
              if (highlight) highlight.style.width = '100%';
              if (icon) icon.style.left = '100%';
            }
          }
        });
      } else {
        // If countdowns hit zero, refresh simulated data
        updateSimulationData();
        renderApp();
      }
    } else {
      // In API Mode, update local timer countdowns as well
      document.querySelectorAll('.time-countdown').forEach(el => {
        let secs = parseInt(el.getAttribute('data-secs'), 10);
        if (isNaN(secs)) return;
        if (secs > 0) {
          secs--;
          el.setAttribute('data-secs', secs);
          el.textContent = `${Math.floor(secs / 60)}분 ${secs % 60}초`;
          
          let progress = 10;
          if (secs <= 0) progress = 100;
          else if (secs < 30) progress = 95;
          else if (secs < 90) progress = 80;
          else if (secs < 180) progress = 50;
          else if (secs < 300) progress = 25;
          
          const liveCard = el.closest('.live-card');
          if (liveCard) {
            const highlight = liveCard.querySelector('.track-rail-highlight');
            const icon = liveCard.querySelector('.track-train-icon');
            if (highlight) highlight.style.width = `${progress}%`;
            if (icon) icon.style.left = `${progress}%`;
          }
        } else {
          el.textContent = '도착함';
          const liveCard = el.closest('.live-card');
          if (liveCard) {
            const highlight = liveCard.querySelector('.track-rail-highlight');
            const icon = liveCard.querySelector('.track-train-icon');
            if (highlight) highlight.style.width = '100%';
            if (icon) icon.style.left = '100%';
          }
        }
      });
    }
  }, 1000);

  // API or Simulation refresh ticker (every 15 seconds)
  if (appState.timers.refresh) clearInterval(appState.timers.refresh);
  appState.timers.refresh = setInterval(() => {
    refreshRealtimeApiData();
  }, 15000);
}

// --- STATE PERSISTENCE & SETTINGS ---
function loadSettings() {
  const savedMode = localStorage.getItem('subway_commute_mode');
  const savedHomeDir = localStorage.getItem('subway_commute_home_dir');
  const savedDataMode = localStorage.getItem('subway_commute_data_mode');
  const savedApiKey = localStorage.getItem('subway_commute_api_key');
  const savedExpressOnly = localStorage.getItem('subway_commute_express_only') === 'true';
  
  if (savedMode) appState.mode = savedMode;
  if (savedHomeDir) appState.homeDirection = savedHomeDir;
  if (savedDataMode) appState.dataMode = savedDataMode;
  if (savedApiKey) appState.apiKey = savedApiKey;
  appState.expressOnly = savedExpressOnly;
  
  const expressCheckbox = document.getElementById('filter-express-only');
  if (expressCheckbox) expressCheckbox.checked = savedExpressOnly;
  
  // Sync to form controls
  document.getElementById('settings-data-mode').value = appState.dataMode;
  document.getElementById('settings-api-key').value = appState.apiKey;
  
  // Toggle apikey input visibility
  const apikeyGroup = document.getElementById('apikey-group');
  if (apikeyGroup) {
    apikeyGroup.style.display = appState.dataMode === 'api' ? 'flex' : 'none';
  }
  
  // Set UI visual state
  toggleViewElements();
}

function saveSettings() {
  const dataMode = document.getElementById('settings-data-mode').value;
  const apiKey = document.getElementById('settings-api-key').value.trim();
  
  appState.dataMode = dataMode;
  appState.apiKey = apiKey;
  
  localStorage.setItem('subway_commute_data_mode', dataMode);
  localStorage.setItem('subway_commute_api_key', apiKey);
  
  // Update view and trigger reload
  const apikeyGroup = document.getElementById('apikey-group');
  if (apikeyGroup) {
    apikeyGroup.style.display = dataMode === 'api' ? 'flex' : 'none';
  }
  
  refreshRealtimeApiData();
}

function toggleViewElements() {
  // Mode selection styling
  const workBtn = document.getElementById('mode-work');
  const homeBtn = document.getElementById('mode-home');
  const workView = document.getElementById('view-work');
  const homeView = document.getElementById('view-home');
  
  if (appState.mode === 'work') {
    document.body.className = 'theme-commute-work';
    workBtn.classList.add('active');
    homeBtn.classList.remove('active');
    workView.style.display = 'block';
    homeView.style.display = 'none';
  } else {
    document.body.className = 'theme-commute-home';
    workBtn.classList.remove('active');
    homeBtn.classList.add('active');
    workView.style.display = 'none';
    homeView.style.display = 'block';
    
    // Toggle sub-tabs for Home Mode (Moran Station)
    const tabUp = document.getElementById('tab-dir-up');
    const tabDown = document.getElementById('tab-dir-down');
    
    if (appState.homeDirection === 'up') {
      tabUp.classList.add('active');
      tabDown.classList.remove('active');
    } else {
      tabUp.classList.remove('active');
      tabDown.classList.add('active');
    }
  }
}

// --- EVENT HANDLERS & INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  // Load local settings
  loadSettings();
  
  // Initial calculation
  updateSimulationData();
  refreshRealtimeApiData();
  startTickers();
  
  // Mode click listeners
  document.getElementById('mode-work').addEventListener('click', () => {
    appState.mode = 'work';
    localStorage.setItem('subway_commute_mode', 'work');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  document.getElementById('mode-home').addEventListener('click', () => {
    appState.mode = 'home';
    localStorage.setItem('subway_commute_mode', 'home');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  // Home directions sub-tab click listeners
  document.getElementById('tab-dir-up').addEventListener('click', () => {
    appState.homeDirection = 'up';
    localStorage.setItem('subway_commute_home_dir', 'up');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  document.getElementById('tab-dir-down').addEventListener('click', () => {
    appState.homeDirection = 'down';
    localStorage.setItem('subway_commute_home_dir', 'down');
    toggleViewElements();
    refreshRealtimeApiData();
  });
  
  // Settings modal controls
  const settingsModal = document.getElementById('settings-modal');
  document.getElementById('open-settings').addEventListener('click', () => {
    settingsModal.classList.add('active');
  });
  
  document.getElementById('close-settings').addEventListener('click', () => {
    settingsModal.classList.remove('active');
  });
  
  document.getElementById('save-settings').addEventListener('click', () => {
    saveSettings();
    settingsModal.classList.remove('active');
  });
  
  // Dropdown dependency on settings
  document.getElementById('settings-data-mode').addEventListener('change', (e) => {
    const apikeyGroup = document.getElementById('apikey-group');
    apikeyGroup.style.display = e.target.value === 'api' ? 'flex' : 'none';
  });

  // Express only filter listener
  const expressCheckbox = document.getElementById('filter-express-only');
  if (expressCheckbox) {
    expressCheckbox.addEventListener('change', (e) => {
      appState.expressOnly = e.target.checked;
      localStorage.setItem('subway_commute_express_only', e.target.checked);
      renderApp();
    });
  }
});
