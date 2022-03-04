dataSetVersion = "2022-03-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Schools",
    key: "school",
    tooltip: "Check this to only sort through certain schools.",
    checked: false,
    sub: [
      { name: "Abydos", tooltip: "Abydos High School", key: "aby" },
      { name: "Gehenna", tooltip: "Gehenna Academy", key: "geh" },
      { name: "Hyakkiyako", tooltip: "Hyakkiyako Academy", key: "hya" },
      { name: "Millennium", tooltip: "Millenium Science School", key: "mil" },
      { name: "Red Winter", tooltip: "Red Winter Federal Academy", key: "red" },
      { name: "Shanhaijing", tooltip: "Shanhaijing Senior Secondary School", key: "sha" },
      { name: "Trinity", tooltip: "Trinity General School", key: "tri" },
      { name: "Valkyrie", tooltip: "Valkyrie Police Academy", key: "val" },
      { name: "Arius", tooltip: "Arius Branch School", key: "ari", checked: false }
      ]
  },
  {
    name: "Remove non-Global characters",
    key: "jp",
    tooltip: "Check this to remove characters not yet released in the Global version."
  },
  {
    name: "Remove Costumes",
    key: "dupe",
    tooltip: "Check this to remove costumes (Swimsuit, Casual, Kid, etc.)."
  },
  {
    name: "Remove NPCs",
    key: "npc",
    tooltip: "Check this to remove NPCs and enemies."
  },
  {
    name: "Remove Collab Characters",
    key: "collab",
    tooltip: "Check this to remove Collaboration characters (Hatsune Miku).",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {       
    name: "Airi",
    img: "Airi.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Akane",
    img: "Akane.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Akari",
    img: "Akari.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Ako",
    img: "Ako.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "アリス",
    img: "Arisu.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Aru",
    img: "Aru.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Aru (New Year)",
    img: "Aru (New Year).png",
    opts: {     
      jp: true,  
      dupe: true,  
      school: "geh",
    }
},        
  {       
    name: "Asuna",
    img: "Asuna.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Asuna (Bunny Girl)",
    img: "Asuna (New Year).png",
    opts: {     
      jp: true,  
      dupe: true,  
      school: "geh",
    }
},        
  {       
    name: "Ayane",
    img: "Ayane.png",
    opts: {     
      school: "aby",
    }
},        
  {       
    name: "Azusa",
    img: "Azusa.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Azusa (Swimsuit)",
    img: "Azusa (Swimsuit).png",
    opts: {     
      dupe: true,
      school: "tri",
    }
},        
  {       
    name: "Cherino",
    img: "Cherino.png",
    opts: {     
      school: "red",
    }
},        
  {       
    name: "Cherino (Hot Spring)",
    img: "Cherino (Hot Spring).png",
    opts: {     
      jp: true,
      dupe: true,
      school: "red",
    }
},        
  {       
    name: "Chihiro",
    img: "Chihiro.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Chinatsu",
    img: "Chinatsu.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Chinatsu (Hot Spring)",
    img: "Chinatsu (Hot Spring).png",
    opts: {     
      jp: true,
      dupe: true,
      school: "geh",
    }
},        
  {       
    name: "Chise",
    img: "Chise.png",
    opts: {     
      school: "hya",
    }
},        
  {       
    name: "Eimi",
    img: "Eimi.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Fubuki",
    img: "Fubuki.png",
    opts: {     
      jp: true,
      school: "val",
    }
},        
  {       
    name: "Fuuka",
    img: "Fuuka.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Hanae",
    img: "Hanae.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Hanako",
    img: "Hanako.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Hare",
    img: "Hare.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Haruka",
    img: "Haruka.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Haruna",
    img: "Haruna.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Hasumi",
    img: "Hasumi.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Hatsune Miku",
    img: "Hatsune Miku.png",
    opts: {     
      jp: true,
      collab: true
    }
},        
  {       
    name: "Hibiki",
    img: "Hibiki.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Hifumi",
    img: "Hifumi.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Hifumi (Swimsuit)",
    img: "Hifumi (Swimsuit).png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Hina",
    img: "Hina.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Hina (Swimsuit)",
    img: "Hina (Swimsuit).png",
    opts: {     
      dupe: true,
      school: "geh",
    }
},        
  {       
    name: "Hinata",
    img: "Hinata.png",
    opts: {     
      jp: true,
      school: "tri",
    }
},        
  {       
    name: "Hoshino",
    img: "Hoshino.png",
    opts: {     
      school: "aby",
    }
},        
  {       
    name: "Iori",
    img: "Iori.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Iori (Swimsuit)",
    img: "Iori (Swimsuit).png",
    opts: {     
      dupe: true,
      school: "geh",
    }
},        
  {       
    name: "Izumi",
    img: "Izumi.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Izumi (Swimsuit)",
    img: "Izumi (Swimsuit).png",
    opts: {     
      dupe: true,
      school: "geh",
    }
},        
  {       
    name: "Izuna",
    img: "Izuna.png",
    opts: {     
      school: "hya",
    }
},        
  {       
    name: "Junko",
    img: "Junko.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Juri",
    img: "Juri.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Karin",
    img: "Karin.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Karin (Bunny Girl)",
    img: "Karin (Bunny Girl).png",
    opts: {     
      jp: true,
      dupe: true,
      school: "mil",
    }
},        
  {       
    name: "Kayoko",
    img: "Kayoko.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Kirino",
    img: "Kirino.png",
    opts: {     
      jp: true,
      school: "val",
    }
},        
  {       
    name: "Koharu",
    img: "Koharu.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Kotama",
    img: "Kotama.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Kotori",
    img: "Kotori.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Maki",
    img: "Maki.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Mari",
    img: "Mari.png",
    opts: {     
      jp: true,  
      school: "tri",
    }
},        
  {       
    name: "Mashiro",
    img: "Mashiro.png",
    opts: {     
      school: "tri",
    }
},        
  {       
    name: "Mashiro (Swimsuit)",
    img: "Mashiro (Swimsuit).png",
    opts: {     
      dupe: true,  
      school: "tri",
    }
},        
  {       
    name: "Midori",
    img: "Midori.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Mimori",
    img: "Mimori.png",
    opts: {     
      jp: true,
      school: "hya",
    }
},        
  {       
    name: "Momoi",
    img: "Momoi.png",
    opts: {     
      school: "mil",
    }
},        
  {       
    name: "Mutsuki",
    img: "Mutsuki.png",
    opts: {     
      school: "geh",
    }
},        
  {       
    name: "Mutsuki (New Year)",
    img: "Mutsuki (New Year).png",
    opts: {     
      jp: true,
      dupe: true,
      school: "geh",
    }
},        
  {       
    name: "Natsu",
    img: "Natsu.png",
    opts: {     
      jp: true,
      school: "tri",
    }
},        
  {       
    name: "Neru",
    img: "Neru.png",
    opts: {     
      school: "mil",
    }
  },        
  {       
    name: "Neru (Bunny Girl)",
    img: "Neru (Bunny Girl).png",
    opts: {     
      school: "mil",
    }
  },        
  {       
    name: "Nodoka",
    img: "Nodoka.png",
    opts: {     
      school: "red",
    }
  },        
  {       
    name: "Nodoka (Hot Spring)",
    img: "Nodoka (Hot Spring).png",
    opts: {     
      jp: true,
      school: "red",
    }
  },        
  {       
    name: "Nonomi",
    img: "Nonomi.png",
    opts: {     
      school: "aby",
    }
  },        
  {       
    name: "Pina",
    img: "Pina.png",
    opts: {     
      school: "hya",
    }
  },        
  {       
    name: "Saya",
    img: "Saya.png",
    opts: {     
      school: "sha",
    }
  },        
  {       
    name: "Saya (Casual)",
    img: "Saya (Casual).png",
    opts: {     
      jp: true,
      school: "sha",
    }
  },        
  {       
    name: "Sena",
    img: "Sena.png",
    opts: {     
      jp: true,
      school: "geh",
    }
  },        
  {       
    name: "Serika",
    img: "Serika.png",
    opts: {     
      school: "aby",
    }
  },        
  {       
    name: "Serika (New Year)",
    img: "Serika (New Year).png",
    opts: {     
      school: "aby",
    }
  },        
  {       
    name: "Serina",
    img: "Serina.png",
    opts: {     
      school: "tri",
    }
  },        
  {       
    name: "Shimiko",
    img: "Shimiko.png",
    opts: {     
      school: "tri",
    }
  },        
  {       
    name: "Shiroko",
    img: "Shiroko.png",
    opts: {     
      school: "aby",
    }
  },        
  {       
    name: "Shiroko (Riding)",
    img: "Shiroko (Riding).png",
    opts: {     
      school: "aby",
    }
  },        
  {       
    name: "Shizuko",
    img: "Shizuko.png",
    opts: {     
      school: "hya",
    }
  },        
  {       
    name: "Shun",
    img: "Shun.png",
    opts: {     
      school: "sha",
    }
  },        
  {       
    name: "Shun (Kid)",
    img: "Shun (Kid).png",
    opts: {     
      dupe: true,
      jp: true,
      school: "sha",
    }
  },        
  {       
    name: "Sumire",
    img: "Sumire.png",
    opts: {     
      school: "mil",
    }
  },        
  {       
    name: "Suzumi",
    img: "Suzumi.png",
    opts: {     
      school: "tri",
    }
  },        
  {       
    name: "Tomoe",
    img: "Tomoe.png",
    opts: {     
      jp: true,
      school: "red",
    }
  },        
  {       
    name: "Tsubaki",
    img: "Tsubaki.png",
    opts: {     
      school: "hya",
    }
  },        
  {       
    name: "Tsurugi",
    img: "Tsurugi.png",
    opts: {     
      school: "tri",
    }
  },        
  {       
    name: "Tsurugi (Swimsuit)",
    img: "Tsurugi (Swimsuit).png",
    opts: {     
      dupe: true,
      school: "tri",
    }
  },        
  {       
    name: "Ui",
    img: "Ui.png",
    opts: {     
      jp: true,
      school: "tri",
    }
  },        
  {       
    name: "Utaha",
    img: "Utaha.png",
    opts: {     
      school: "mil",
    }
  },        
  {       
    name: "Wakamo",
    img: "Wakamo.png",
    opts: {     
      jp: true,
      school: "hya",
    }
  },        
  {       
    name: "Yoshimi",
    img: "Yoshimi.png",
    opts: {     
      school: "tri",
    }
  },        
  {       
    name: "Yuuka",
    img: "Yuuka.png",
    opts: {     
      school: "mil",
    }
  },        
  {       
    name: "Yuzu",
    img: "Yuzu.png",
    opts: {     
      school: "mil",
    }
  },        
  {       
    name: "Saori",
    img: "Saori.png",
    opts: {     
      jp: true,
      school: "ari",
    }
  },        
  {       
    name: "Atsuko",
    img: "Atsuko.png",
    opts: {     
      jp: true,
      school: "ari",
    }
  },        
  {       
    name: "Hiyori",
    img: "Hiyori.png",
    opts: {     
      jp: true,
      school: "ari",
    }
  },        
  {       
    name: "Misaki",
    img: "Misaki.png",
    opts: {     
      jp: true,
      school: "ari",
    }
  }       
];