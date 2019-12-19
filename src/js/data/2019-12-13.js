dataSetVersion = "2019-12-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Factions",
    key: "faction",
    tooltip: "Check this to restrict to certain factions.",
    checked: false,
    sub: [
      { name: "Eagle Union", key: "eagle" },
      { name: "Royal Navy", key: "royal" },
      { name: "Sakura Empire", key: "sakura" },
      { name: "Ironblood", tooltip: "Iron Blood", key: "iron" },/*
      { name: "North Union", key: "russia" },*/
      { name: "Eastern Radiance", tooltip: "Dragon Empery", key: "dragon" },
      { name: "Sardegna Empire", key: "sardegna" },
      { name: "Iris Libre", key: "iris" },
      { name: "Vichya Dominion", key: "vichya" },
      { name: "Others", tooltip: "Includes Bulins, Collab characters, Sirens and other lesser represented factions", key: "universal" }
    ]
  },/*
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },*/
  {
    name: "Remove Sirens",
    key: "siren",
    tooltip: "Check this to remove Sirens and characters related to Sirens."
  },
  {
    name: "Remove Collab Characters",
    key: "collab",
    tooltip: "Check this to remove Collaboration characters."
  },
  {
    name: "Remove Retrofit Versions",
    key: "retro",
    tooltip: "Check this to remove the Retrofit versions of ships.",
    checked: false
  },
  {
    name: "Remove non-Global server ships",
    key: "notglobal",
    tooltip: "Check this to remove all characters that are not in the Global version of the server."
  },
  {
    name: "Remove unreleased ships",
    key: "unreleased",
    tooltip: "Check this to remove all unreleased characters."
  }
];

dataSet[dataSetVersion].characterData = [
 {
   name: "Universal Bullin",
   img: "Universal Bullin.png",
   opts: {
      faction: "universal"
   }
 },
 {
   name: "Trial Bullin MKII",
   img: "Trial Bullin MKII.png",
   opts: {
      faction: "universal"
   }
 },
 {
   name: "Dewey",
   img: "Dewey.png",
   opts: {
      faction: "eagle",
   notglobal: true
   }
 },
 {
   name: "Cassin",
   img: "Cassin.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Downes",
   img: "Downes.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Gridley",
   img: "Gridley.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Craven",
   img: "Craven.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "McCall",
   img: "McCall.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Maury",
   img: "Maury.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Fletcher",
   img: "Fletcher.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Charles Ausburne",
   img: "Charles Ausburne.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Thatcher",
   img: "Thatcher.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Aulick",
   img: "Aulick.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Foote",
   img: "Foote.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Spence",
   img: "Spence.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Benson",
   img: "Benson.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Laffey",
   img: "Laffey.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Sims",
   img: "Sims.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Hammann",
   img: "Hammann.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Eldridge",
   img: "Eldridge.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Omaha",
   img: "Omaha.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Raleigh",
   img: "Raleigh.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Brooklyn",
   img: "Brooklyn.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Phoenix",
   img: "Phoenix.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Helena",
   img: "Helena.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Atlanta",
   img: "Atlanta.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Juneau",
   img: "Juneau.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "San Diego",
   img: "San Diego.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Cleveland",
   img: "Cleveland.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Columbia",
   img: "Columbia.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Pensacola",
   img: "Pensacola.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Salt Lake City",
   img: "Salt Lake City.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Northampton",
   img: "Northampton.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Chicago",
   img: "Chicago.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Houston",
   img: "Houston.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Portland",
   img: "Portland.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Indianapolis",
   img: "Indianapolis.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Astoria",
   img: "Astoria.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Quincy",
   img: "Quincy.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Vincennes",
   img: "Vincennes.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Wichita",
   img: "Wichita.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Baltimore",
   img: "Baltimore.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Nevada",
   img: "Nevada.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Oklahoma",
   img: "Oklahoma.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Pennsylvania",
   img: "Pennsylvania.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Arizona",
   img: "Arizona.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Tennessee",
   img: "Tennessee.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "California",
   img: "California.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Colorado",
   img: "Colorado.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Maryland",
   img: "Maryland.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "West Virginia",
   img: "West Virginia.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "North Carolina",
   img: "North Carolina.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Washington",
   img: "Washington.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "South Dakota",
   img: "South Dakota.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Long Island",
   img: "Long Island.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Bogue",
   img: "Bogue.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Langley",
   img: "Langley.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Lexington",
   img: "Lexington.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Saratoga",
   img: "Saratoga.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Ranger",
   img: "Ranger.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Yorktown",
   img: "Yorktown.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Enterprise",
   img: "Enterprise.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Hornet",
   img: "Hornet.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Wasp",
   img: "Wasp.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Vestal",
   img: "Vestal.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Amazon",
   img: "Amazon.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Acasta",
   img: "Acasta.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Ardent",
   img: "Ardent.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Beagle",
   img: "Beagle.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Bulldog",
   img: "Bulldog.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Comet",
   img: "Comet.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Crescent",
   img: "Crescent.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Cygnet",
   img: "Cygnet.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Foxhound",
   img: "Foxhound.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Fortune",
   img: "Fortune.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Grenville",
   img: "Grenville.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Glowworm",
   img: "Glowworm.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Hardy",
   img: "Hardy.png",
   opts: {
      faction: "royal",
   notglobal: true
   }
 },
 {
   name: "Hunter",
   img: "Hunter.png",
   opts: {
      faction: "royal",
   notglobal: true
   }
 },
 {
   name: "Javelin",
   img: "Javelin.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Juno",
   img: "Juno.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Vampire",
   img: "Vampire.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Leander",
   img: "Leander.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Achilles",
   img: "Achilles.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Ajax",
   img: "Ajax.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Southampton",
   img: "Southampton.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Sheffield",
   img: "Sheffield.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Edinburgh",
   img: "Edinburgh.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Belfast",
   img: "Belfast.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Arethusa",
   img: "Arethusa.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Galatea",
   img: "Galatea.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Aurora",
   img: "Aurora.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "London",
   img: "London.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Shropshire",
   img: "Shropshire.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Kent",
   img: "Kent.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Suffolk",
   img: "Suffolk.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Norfolk",
   img: "Norfolk.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Dorsetshire",
   img: "Dorsetshire.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "York",
   img: "York.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Exeter",
   img: "Exeter.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Renown",
   img: "Renown.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Repulse",
   img: "Repulse.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Hood",
   img: "Hood.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Queen Elizabeth",
   img: "Queen Elizabeth.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Warspite",
   img: "Warspite.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Nelson",
   img: "Nelson.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Rodney",
   img: "Rodney.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "King George V",
   img: "King George V.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Prince of Wales",
   img: "Prince of Wales.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Duke of York",
   img: "Duke of York.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Hermes",
   img: "Hermes.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Unicorn",
   img: "Unicorn.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Ark Royal",
   img: "Ark Royal.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Illustrious",
   img: "Illustrious.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Victorious",
   img: "Victorious.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Formidable",
   img: "Formidable.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Glorious",
   img: "Glorious.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Erebus",
   img: "Erebus.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Terror",
   img: "Terror.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Fubuki",
   img: "Fubuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Ayanami",
   img: "Ayanami.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Akatsuki",
   img: "Akatsuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Ikazuchi",
   img: "Ikazuchi.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Inazuma",
   img: "Inazuma.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Shiratsuyu",
   img: "Shiratsuyu.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Yuudachi",
   img: "Yuudachi.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Shigure",
   img: "Shigure.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Yukikaze",
   img: "Yukikaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kagerou",
   img: "Kagerou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Shiranui",
   img: "Shiranui.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Nowaki",
   img: "Nowaki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hatsuharu",
   img: "Hatsuharu.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Wakaba",
   img: "Wakaba.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hatsushimo",
   img: "Hatsushimo.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Ariake",
   img: "Ariake.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Yuugure",
   img: "Yuugure.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kuroshio",
   img: "Kuroshio.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Oyashio",
   img: "Oyashio.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Yuubari",
   img: "Yuubari.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Nagara",
   img: "Nagara.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Isuzu",
   img: "Isuzu.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Abukuma",
   img: "Abukuma.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Mogami",
   img: "Mogami.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Mikuma",
   img: "Mikuma.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Furutaka",
   img: "Furutaka.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kako",
   img: "Kako.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Aoba",
   img: "Aoba.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kinugasa",
   img: "Kinugasa.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Myoukou",
   img: "Myoukou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Nachi",
   img: "Nachi.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Ashigara",
   img: "Ashigara.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Takao",
   img: "Takao.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Atago",
   img: "Atago.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Maya",
   img: "Maya.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Choukai",
   img: "Choukai.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kongou",
   img: "Kongou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hiei",
   img: "Hiei.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Haruna",
   img: "Haruna.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kirishima",
   img: "Kirishima.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Fusou",
   img: "Fusou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Yamashiro",
   img: "Yamashiro.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Ise",
   img: "Ise.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hyuuga",
   img: "Hyuuga.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Nagato",
   img: "Nagato.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Mutsu",
   img: "Mutsu.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hiyou",
   img: "Hiyou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Junyou",
   img: "Junyou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Houshou",
   img: "Houshou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Shouhou",
   img: "Shouhou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Ryuujou",
   img: "Ryuujou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Akagi",
   img: "Akagi.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kaga",
   img: "Kaga.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Souryuu",
   img: "Souryuu.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hiryuu",
   img: "Hiryuu.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Shoukaku",
   img: "Shoukaku.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Zuikaku",
   img: "Zuikaku.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Taihou",
   img: "Taihou.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Akashi",
   img: "Akashi.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Z1",
   img: "Z1.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z23",
   img: "Z23.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z25",
   img: "Z25.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Königsberg",
   img: "Konigsberg.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Karlsruhe",
   img: "Karlsruhe.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Köln",
   img: "Koln.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Leipzig",
   img: "Leipzig.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Admiral Hipper",
   img: "Admiral Hipper.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Prinz Eugen",
   img: "Prinz Eugen.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Deutschland",
   img: "Deutschland.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Admiral Graf Spee",
   img: "Admiral Graf Spee.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Scharnhorst",
   img: "Scharnhorst.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Gneisenau",
   img: "Gneisenau.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Bismarck",
   img: "Bismarck.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Tirpitz",
   img: "Tirpitz.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Graf Zeppelin",
   img: "Graf Zeppelin.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "An Shan",
   img: "An Shan.png",
   opts: {
      faction: "dragon"
   }
 },
 {
   name: "Fu Shun",
   img: "Fu Shun.png",
   opts: {
      faction: "dragon"
   }
 },
 {
   name: "Chang Chun",
   img: "Chang Chun.png",
   opts: {
      faction: "dragon"
   }
 },
 {
   name: "Tai Yuan",
   img: "Tai Yuan.png",
   opts: {
      faction: "dragon"
   }
 },
 {
   name: "Yat Sen",
   img: "Yat Sen.png",
   opts: {
      faction: "dragon"
   }
 },
 {
   name: "Ning Hai",
   img: "Ning Hai.png",
   opts: {
      faction: "dragon"
   }
 },
 {
   name: "Ping Hai",
   img: "Ping Hai.png",
   opts: {
      faction: "dragon"
   }
 },
 {
   name: "Avrora",
   img: "Avrora.png",
   opts: {
      faction: "universal"
   }
 },
 {
   name: "Bailey",
   img: "Bailey.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Z19",
   img: "Z19.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z20",
   img: "Z20.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z21",
   img: "Z21.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z46",
   img: "Z46.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Kamikaze",
   img: "Kamikaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Matsukaze",
   img: "Matsukaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Mutsuki",
   img: "Mutsuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kisaragi",
   img: "Kisaragi.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Uzuki",
   img: "Uzuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Minazuki",
   img: "Minazuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Fumizuki",
   img: "Fumizuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Nagatsuki",
   img: "Nagatsuki.png",
   opts: {
      faction: "sakura",
   notglobal: true
   }
 },
 {
   name: "Mikazuki",
   img: "Mikazuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kawakaze",
   img: "Kawakaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kiyonami",
   img: "Kiyonami.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Niizuki",
   img: "Niizuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Harutsuki",
   img: "Harutsuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Yoizuki",
   img: "Yoizuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Radford",
   img: "Radford.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Jenkins",
   img: "Jenkins.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Nicholas",
   img: "Nicholas.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Richmond",
   img: "Richmond.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Honolulu",
   img: "Honolulu.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "St Louis",
   img: "St. Louis.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Jupiter",
   img: "Jupiter.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Jersey",
   img: "Jersey.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Sendai",
   img: "Sendai.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Jintsuu",
   img: "Jintsuu.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Naka",
   img: "Naka.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Urakaze",
   img: "Urakaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Isokaze",
   img: "Isokaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hamakaze",
   img: "Hamakaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Tanikaze",
   img: "Tanikaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Mikasa",
   img: "Mikasa.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Agano",
   img: "Agano.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Matchless",
   img: "Matchless.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Musketeer",
   img: "Musketeer.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Fiji",
   img: "Fiji.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Jamaica",
   img: "Jamaica.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Montpelier",
   img: "Montpelier.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Denver",
   img: "Denver.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Asashio",
   img: "Asashio.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Ooshio",
   img: "Ooshio.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Michishio",
   img: "Michishio.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Arashio",
   img: "Arashio.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Little Bel",
   img: "Little Bel.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Abercrombie",
   img: "Abercrombie.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Sussex",
   img: "Sussex.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "I-19",
   img: "I-19.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "I-26",
   img: "I-26.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "I-58",
   img: "I-58.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "U-81",
   img: "U-81.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Dace",
   img: "Dace.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "U-47",
   img: "U-47.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "U-557",
   img: "U-557.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z35",
   img: "Z35.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z18",
   img: "Z18.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Le Triomphant",
   img: "Le Triomphant.png",
   opts: {
      faction: "iris"
   }
 },
 {
   name: "Forbin",
   img: "Forbin.png",
   opts: {
      faction: "iris"
   }
 },
 {
   name: "Emile Bertin",
   img: "Emile Bertin.png",
   opts: {
      faction: "iris"
   }
 },
 {
   name: "Surcouf",
   img: "Surcouf.png",
   opts: {
      faction: "iris"
   }
 },
 {
   name: "Le Mars",
   img: "Le Mars.png",
   opts: {
      faction: "vichya"
   }
 },
 {
   name: "Dunkerque",
   img: "Dunkerque.png",
   opts: {
      faction: "vichya"
   }
 },
 {
   name: "Jean Bart",
   img: "Jean Bart.png",
   opts: {
      faction: "vichya"
   }
 },
 {
   name: "Massachusetts",
   img: "Massachusetts.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Bush",
   img: "Bush.png",
   opts: {
      faction: "eagle",
   notglobal: true
   }
 },
 {
   name: "Centaur",
   img: "Centaur.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Essex",
   img: "Essex.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Albacore",
   img: "Albacore.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Le Temeraire",
   img: "Le Temeraire.png",
   opts: {
      faction: "iris"
   }
 },
 {
   name: "Memphis",
   img: "Memphis.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Newcastle",
   img: "Newcastle.png",
   opts: {
      faction: "royal",
   notglobal: true
   }
 },
 {
   name: "Hobby",
   img: "Hobby.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Kalk",
   img: "Kalk.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Minneapolis",
   img: "Minneapolis.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Hazelwood",
   img: "Hazelwood.png",
   opts: {
      faction: "eagle",
   notglobal: true
   }
 },
 {
   name: "Concord",
   img: "Concord.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Amagi",
   img: "Amagi.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Kaga (Battleship)",
   img: "Kaga Battleship.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Hatakaze",
   img: "Hatakaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Makinami",
   img: "Makinami.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Sirius",
   img: "Sirius.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Curacoa",
   img: "Curacoa.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Curlew",
   img: "Curlew.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Kimberly",
   img: "Kimberly.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Mullany",
   img: "Mullany.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Chaser",
   img: "Chaser.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Independence",
   img: "Independence.png",
   opts: {
      faction: "eagle",
   notglobal: true
   }
 },
 {
   name: "Shangri-La",
   img: "Shangri-La.png",
   opts: {
      faction: "eagle",
   notglobal: true
   }
 },
 {
   name: "Z2",
   img: "Z2.png",
   opts: {
      faction: "iron",
   notglobal: true
   }
 },
 {
   name: "Bunker Hill",
   img: "Bunker Hill.png",
   opts: {
      faction: "eagle",
   notglobal: true
   }
 },
 {
   name: "I-13",
   img: "I-13.png",
   opts: {
      faction: "sakura",
   notglobal: true
   }
 },
 {
   name: "Suzuya",
   img: "Suzuya.png",
   opts: {
      faction: "sakura",
   notglobal: true
   }
 },
 {
   name: "Hiei-chan",
   img: "Hiei-chan.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Akagi-chan",
   img: "Akagi-chan.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Zeppy",
   img: "Zeppy.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "U-556",
   img: "U-556.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "U-73",
   img: "U-73.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Z36",
   img: "Z36.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Echo",
   img: "Echo.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Lena",
   img: "Lena.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Clevelad",
   img: "Clevelad.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Li'l Sandy",
   img: "Lil Sandy.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Swiftsure",
   img: "Swiftsure.png",
   opts: {
      faction: "royal",
   notglobal: true
   }
 },
 {
   name: "Le Malin",
   img: "Le Malin.png",
   opts: {
      faction: "vichya",
   notglobal: true
   }
 },
 {
   name: "L'Opiniâtre",
   img: "LOpiniatre.png",
   opts: {
      faction: "iris",
   notglobal: true
   }
 },
 {
   name: "I-25",
   img: "I-25.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "I-56",
   img: "I-56.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "I-168",
   img: "I-168.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "U-101",
   img: "U-101.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "U-522",
   img: "U-522.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Alabama",
   img: "Alabama.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Cavalla",
   img: "Cavalla.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Bataan",
   img: "Bataan.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "San Juan",
   img: "San Juan.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Birmingham",
   img: "Birmingham.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Aylwin",
   img: "Aylwin.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Bache",
   img: "Bache.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Black Prince",
   img: "Black Prince.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Stanly",
   img: "Stanly.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Littorio",
   img: "Littorio.png",
   opts: {
      faction: "sardegna"
   }
 },
 {
   name: "Conte di Cavour",
   img: "Conte di Cavour.png",
   opts: {
      faction: "sardegna"
   }
 },
 {
   name: "Giulio Cesare",
   img: "Giulio Cesare.png",
   opts: {
      faction: "sardegna"
   }
 },
 {
   name: "Zara",
   img: "Zara.png",
   opts: {
      faction: "sardegna"
   }
 },
 {
   name: "Trento",
   img: "Trento.png",
   opts: {
      faction: "sardegna"
   }
 },
 {
   name: "Carabiniere",
   img: "Carabiniere.png",
   opts: {
      faction: "sardegna"
   }
 },
 {
   name: "U-110",
   img: "U-110.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Smalley",
   img: "Smalley.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Gascogne (Muse)",
   img: "Gascogne Muse.png",
   opts: {
      faction: "vichya",
   notglobal: true,
   collab: true
   }
 },
 {
   name: "Akagi (Muse)",
   img: "Akagi Muse.png",
   opts: {
      faction: "sakura",
   notglobal: true,
   collab: true
   }
 },
 {
   name: "Cleveland (Muse)",
   img: "Cleveland Muse.png",
   opts: {
      faction: "eagle",
   notglobal: true,
   collab: true
   }
 },
 {
   name: "Sheffield (Muse)",
   img: "Sheffield Muse.png",
   opts: {
      faction: "royal",
   notglobal: true,
   collab: true
   }
 },
 {
   name: "Admiral Hipper (Muse)",
   img: "Admiral Hipper Muse.png",
   opts: {
      faction: "iron",
   notglobal: true,
   collab: true
   }
 },
 {
   name: "Glasgow",
   img: "Glasgow.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Tone",
   img: "Tone.png",
   opts: {
      faction: "sakura",
   unreleased: true
   }
 },
 {
   name: "Chikuma",
   img: "Chikuma.png",
   opts: {
      faction: "sakura",
   unreleased: true
   }
 },
 {
   name: "Jeanne d'Arc",
   img: "Jeanne dArc.png",
   opts: {
      faction: "iris",
   unreleased: true
   }
 },
 {
   name: "Richelieu",
   img: "Richelieu.png",
   opts: {
      faction: "iris",
   unreleased: true
   }
 },
 {
   name: "Pola",
   img: "Pola.png",
   opts: {
      faction: "sardegna",
   unreleased: true
   }
 },
 {
   name: "Vittorio Veneto",
   img: "Vittorio Veneto.png",
   opts: {
      faction: "sardegna",
   unreleased: true
   }
 },
 {
   name: "HMS Neptune",
   img: "HMS Neptune.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Monarch",
   img: "Monarch.png",
   opts: {
      faction: "royal"
   }
 },
 {
   name: "Ibuki",
   img: "Ibuki.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Izumo",
   img: "Izumo.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Roon",
   img: "Roon.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Saint Louis",
   img: "Saint Louis.png",
   opts: {
      faction: "iris"
   }
 },
 {
   name: "Seattle",
   img: "Seattle.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Georgia",
   img: "Georgia.png",
   opts: {
      faction: "eagle"
   }
 },
 {
   name: "Kitakaze",
   img: "Kitakaze.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Azuma",
   img: "Azuma.png",
   opts: {
      faction: "sakura"
   }
 },
 {
   name: "Friedrich der Grosse",
   img: "Friedrich der Grosse.png",
   opts: {
      faction: "iron"
   }
 },
 {
   name: "Gascogne",
   img: "Gascogne.png",
   opts: {
      faction: "vichya"
   }
 },
 {
   name: "HDN Neptune",
   img: "HDN Neptune.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Noire",
   img: "Noire.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Blanc",
   img: "Blanc.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Vert",
   img: "Vert.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Purple Heart",
   img: "Purple Heart.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Black Heart",
   img: "Black Heart.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "White Heart",
   img: "White Heart.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Green Heart",
   img: "Green Heart.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "22",
   img: "22.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "33",
   img: "33.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Kuon",
   img: "Kuon.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Nekone",
   img: "Nekone.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Rurutie",
   img: "Rurutie.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Uruuru",
   img: "Uruuru.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Saraana",
   img: "Saraana.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Fumiruiru",
   img: "Fumiruiru.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Kizuna AI",
   img: "Kizuna AI.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Elegant Kizuna AI",
   img: "Elegant Kizuna AI.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Anniversary Kizuna AI",
   img: "Anniversary Kizuna AI.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Super Gamer Kizuna AI",
   img: "Super Gamer Kizuna AI.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Shirakami Fubuki",
   img: "Shirakami Fubuki.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Tokino Sora",
   img: "Tokino Sora.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Minato Aqua",
   img: "Minato Aqua.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Natsuiro Matsuri",
   img: "Natsuiro Matsuri.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Nakiri Ayame",
   img: "Nakiri Ayame.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Murasaki Shion",
   img: "Murasaki Shion.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Ookami Mio",
   img: "Ookami Mio.png",
   opts: {
      faction: "universal",
   collab: true
   }
 },
 {
   name: "Cassin (Retrofit)",
   img: "Cassin Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Downes (Retrofit)",
   img: "Downes Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Laffey (Retrofit)",
   img: "Laffey Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Sims (Retrofit)",
   img: "Sims Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Hammann (Retrofit)",
   img: "Hammann Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "San Diego (Retrofit)",
   img: "San Diego Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Portland (Retrofit)",
   img: "Portland Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Nevada (Retrofit)",
   img: "Nevada Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Oklahoma (Retrofit)",
   img: "Oklahoma Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Long Island (Retrofit)",
   img: "Long Island Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Bogue (Retrofit)",
   img: "Bogue Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Langley (Retrofit)",
   img: "Langley Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Saratoga (Retrofit)",
   img: "Saratoga Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Ranger (Retrofit)",
   img: "Ranger Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Acasta (Retrofit)",
   img: "Acasta Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Ardent (Retrofit)",
   img: "Ardent Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Comet (Retrofit)",
   img: "Comet Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Crescent (Retrofit)",
   img: "Crescent Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Cygnet (Retrofit)",
   img: "Cygnet Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Foxhound (Retrofit)",
   img: "Foxhound Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Fortune (Retrofit)",
   img: "Fortune Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Javelin (Retrofit)",
   img: "Javelin Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Leander (Retrofit)",
   img: "Leander Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Achilles (Retrofit)",
   img: "Achilles Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Ajax (Retrofit)",
   img: "Ajax Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "London (Retrofit)",
   img: "London Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Suffolk (Retrofit)",
   img: "Suffolk Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "York (Retrofit)",
   img: "York Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Exeter (Retrofit)",
   img: "Exeter Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Warspite (Retrofit)",
   img: "Warspite Kai.png",
   opts: {
      faction: "royal",
   retro: true
   }
 },
 {
   name: "Hermes (Retrofit)",
   img: "Hermes Kai.png",
   opts: {
      faction: "royal",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Ayanami (Retrofit)",
   img: "Ayanami Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Shigure (Retrofit)",
   img: "Shigure Kai.png",
   opts: {
      faction: "sakura",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Kagerou (Retrofit)",
   img: "Kagerou Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Shiranui (Retrofit)",
   img: "Shiranui Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Yuugure (Retrofit)",
   img: "Yuugure Kai.png",
   opts: {
      faction: "sakura",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Yuubari (Retrofit)",
   img: "Yuubari Kai.png",
   opts: {
      faction: "sakura",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Abukuma (Retrofit)",
   img: "Abukuma Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Mogami (Retrofit)",
   img: "Mogami Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Furutaka (Retrofit)",
   img: "Furutaka Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Kako (Retrofit)",
   img: "Kako Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Fusou (Retrofit)",
   img: "Fusou Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Yamashiro (Retrofit)",
   img: "Yamashiro Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Ise (Retrofit)",
   img: "Ise Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Hyuuga (Retrofit)",
   img: "Hyuuga Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Shouhou (Retrofit)",
   img: "Shouhou Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Souryuu (Retrofit)",
   img: "Souryuu Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Hiryuu (Retrofit)",
   img: "Hiryuu Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Z1 (Retrofit)",
   img: "Z1 Kai.png",
   opts: {
      faction: "iron",
   retro: true
   }
 },
 {
   name: "Z23 (Retrofit)",
   img: "Z23 Kai.png",
   opts: {
      faction: "iron",
   retro: true
   }
 },
 {
   name: "Karlsruhe (Retrofit)",
   img: "Karlsruhe Kai.png",
   opts: {
      faction: "iron",
   retro: true
   }
 },
 {
   name: "Köln (Retrofit)",
   img: "Koln Kai.png",
   opts: {
      faction: "iron",
   retro: true
   }
 },
 {
   name: "Leipzig (Retrofit)",
   img: "Leipzig Kai.png",
   opts: {
      faction: "iron",
   retro: true
   }
 },
 {
   name: "Ning Hai (Retrofit)",
   img: "Ning Hai Kai.png",
   opts: {
      faction: "dragon",
   retro: true
   }
 },
 {
   name: "Ping Hai (Retrofit)",
   img: "Ping Hai Kai.png",
   opts: {
      faction: "dragon",
   retro: true
   }
 },
 {
   name: "Bailey (Retrofit)",
   img: "Bailey Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Kamikaze (Retrofit)",
   img: "Kamikaze Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Matsukaze (Retrofit)",
   img: "Matsukaze Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Mutsuki (Retrofit)",
   img: "Mutsuki Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Kisaragi (Retrofit)",
   img: "Kisaragi Kai.png",
   opts: {
      faction: "sakura",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Nicholas (Retrofit)",
   img: "Nicholas Kai.png",
   opts: {
      faction: "eagle",
   retro: true
   }
 },
 {
   name: "Sendai (Retrofit)",
   img: "Sendai Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Jintsuu (Retrofit)",
   img: "Jintsuu Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Hamakaze (Retrofit)",
   img: "Hamakaze Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Tanikaze (Retrofit)",
   img: "Tanikaze Kai.png",
   opts: {
      faction: "sakura",
   retro: true
   }
 },
 {
   name: "Forbin (Retrofit)",
   img: "Forbin Kai.png",
   opts: {
      faction: "iris",
   retro: true
   }
 },
 {
   name: "Emile Bertin (Retrofit)",
   img: "Emile Bertin Kai.png",
   opts: {
      faction: "iris",
   retro: true
   }
 },
 {
   name: "Le Mars (Retrofit)",
   img: "Le Mars Kai.png",
   opts: {
      faction: "vichya",
   retro: true
   }
 },
 {
   name: "Newcastle (Retrofit)",
   img: "Newcastle Kai.png",
   opts: {
      faction: "royal",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Curacoa (Retrofit)",
   img: "Curacoa Kai.png",
   opts: {
      faction: "royal",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Curlew (Retrofit)",
   img: "Curlew Kai.png",
   opts: {
      faction: "royal",
   retro: true,
   notglobal: true
   }
 },
 {
   name: "Purifier",
   img: "Purifier.png",
   opts: {
      faction: "universal",
   siren: true
   }
 },
 {
   name: "Tester",
   img: "Tester.png",
   opts: {
      faction: "universal",
   siren: true
   }
 },
 {
   name: "Observer",
   img: "Observer.png",
   opts: {
      faction: "universal",
   siren: true
   }
 },
 {
   name: "Dearmweaver",
   img: "Dearmweaver.png",
   opts: {
      faction: "universal",
   siren: true
   }
 },
 {
   name: "Arbiter: The Empress III",
   img: "Arbiter The Empress III.png",
   opts: {
      faction: "universal",
   siren: true
   }
 },
 {
   name: "Ash",
   img: "Ash.png",
   opts: {
      faction: "universal",
   siren: true
   }
 },
 {
   name: "Ember",
   img: "Ember.png",
   opts: {
      faction: "universal",
   siren: true
   }
 },
];
