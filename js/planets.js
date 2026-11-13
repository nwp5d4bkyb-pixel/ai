// 행성 정보 (NASA 자료 기준, 위성 수는 새로 발견되며 바뀔 수 있음)
const PLANETS = [
  {
    id: "mercury", name: "수성", en: "Mercury", type: "rocky", typeName: "암석형 행성",
    img: "images/mercury.jpg", color: "#b5a89a",
    desc: "태양에 가장 가까운 가장 작은 행성입니다. 공기가 거의 없어 낮에는 430℃까지 뜨겁고 밤에는 -180℃까지 내려갑니다.",
    diameter: 4879, distance: 57.9, day: "약 59일", year: "88일", yearDays: 88, moons: 0,
  },
  {
    id: "venus", name: "금성", en: "Venus", type: "rocky", typeName: "암석형 행성",
    img: "images/venus.jpg", color: "#e6c27a",
    desc: "두꺼운 이산화탄소 구름이 열을 가둬 표면이 약 465℃로 태양계에서 가장 뜨겁습니다. 다른 행성과 반대 방향으로 자전합니다.",
    diameter: 12104, distance: 108.2, day: "약 243일", year: "225일", yearDays: 225, moons: 0,
  },
  {
    id: "earth", name: "지구", en: "Earth", type: "rocky", typeName: "암석형 행성",
    img: "images/earth.jpg", color: "#5b9bff",
    desc: "표면에 액체 상태의 물이 있고 생명체가 사는 것으로 알려진 유일한 행성입니다. 표면의 약 71%가 바다입니다.",
    diameter: 12756, distance: 149.6, day: "24시간", year: "365일", yearDays: 365, moons: 1,
  },
  {
    id: "mars", name: "화성", en: "Mars", type: "rocky", typeName: "암석형 행성",
    img: "images/mars.jpg", color: "#e0703f",
    desc: "흙 속 산화철 때문에 붉게 보입니다. 태양계에서 가장 높은 화산인 올림푸스 산과 거대한 협곡 마리너 계곡이 있습니다.",
    diameter: 6792, distance: 227.9, day: "약 24.6시간", year: "687일", yearDays: 687, moons: 2,
  },
  {
    id: "jupiter", name: "목성", en: "Jupiter", type: "gas", typeName: "가스형 행성",
    img: "images/jupiter.jpg", color: "#d9a878",
    desc: "태양계에서 가장 큰 행성으로, 지구가 1,300개 넘게 들어갈 수 있습니다. 붉은 점(대적점)은 지구보다 큰 거대한 폭풍입니다.",
    diameter: 142984, distance: 778.5, day: "약 10시간", year: "약 12년", yearDays: 4333, moons: "95개 이상",
  },
  {
    id: "saturn", name: "토성", en: "Saturn", type: "gas", typeName: "가스형 행성",
    img: "images/saturn.jpg", color: "#e8d08f", wide: true,
    desc: "얼음과 바위 조각으로 된 아름다운 고리로 유명합니다. 밀도가 물보다 낮아, 아주 큰 욕조가 있다면 물에 뜰 수 있습니다.",
    diameter: 120536, distance: 1432, day: "약 10.7시간", year: "약 29년", yearDays: 10759, moons: "270개 이상",
  },
  {
    id: "uranus", name: "천왕성", en: "Uranus", type: "ice", typeName: "얼음형 행성",
    img: "images/uranus.jpg", color: "#8fe0e6",
    desc: "자전축이 약 98° 기울어져 옆으로 누운 채 태양을 돕니다. 대기의 메탄 때문에 청록색으로 보입니다.",
    diameter: 51118, distance: 2867, day: "약 17시간", year: "약 84년", yearDays: 30687, moons: "28개 이상",
  },
  {
    id: "neptune", name: "해왕성", en: "Neptune", type: "ice", typeName: "얼음형 행성",
    img: "images/neptune.jpg", color: "#4f7cff",
    desc: "태양에서 가장 먼 행성입니다. 태양계에서 가장 강한 바람이 불며, 속도가 시속 2,000km를 넘기도 합니다.",
    diameter: 49528, distance: 4515, day: "약 16시간", year: "약 165년", yearDays: 60190, moons: 16,
  },
];
