const bookData = [
  {
    id: 'OXeMG8wNskc',
    title: 'One Piece: Romance Down',
    subtitle:
      'Join Monkey D. Luffy and his swashbuckling crew in their search for the ultimate treasure, One Piece!',
    authors: 'Eiichiro Oda',
    publishedDate: 2003,
    description:
      'As a child, Monkey D. Luffy dreamed of becoming King of the Pirates. But his life changed when he accidentally gained the power to stretch like rubber…at the cost of never being able to swim again! Years, later, Luffy sets off in search of the “One Piece,” said to be the greatest treasure in the world',
    pageCount: 216,
    category: 'Adventure',
    thumbnail: '../assets/img/1.jpg',
    language: 'en',
    listPrice: {
      amount: 9.99,
      currencyCode: 'EUR',
      isOnSale: true,
    },
  },
  {
    id: 'JYOJa2NpSCq',
    title: 'One Piece: Dressrosa',
    subtitle:
      'Join Monkey D. Luffy and his swashbuckling crew in their search for the ultimate treasure, One Piece!',
    authors: 'Eiichiro Oda',
    publishedDate: 2016,
    description:
      'The battle over the fate of Dressrosa continues as the Straw Hat pirates face off against the Doflamingo family. With the birdcage threatening to kill the citizens of the island, it all be up to Luffy to save the day again. But can he take down Doflamingo, one of the fiercest pirates in the world?!',
    pageCount: 200,
    category: 'Adventure',
    thumbnail: '../assets/img/2.jpg',
    language: 'en',
    listPrice: {
      amount: 12.99,
      currencyCode: 'EUR',
      isOnSale: true,
    },
  },
  {
    id: '1y0Oqts35DQ',
    title: 'Demon Slayer: Season 1',
    subtitle:
      'Tanjiro sets out on the path of the Demon Slayer to save his sister and avenge his family!',
    authors: 'Koyoharu Gotouge',
    publishedDate: 2019,
    description:
      'After dealing with several demonic enemies aboard the Infinity Train, Tanjiro, Zenitsu and Inosuke must face the demon spirit of the train itself! Even if they can stop the demon train, the minions of Muzan Kibutsuji are still out there and Tanjiro must continue to improve his strength and skills. Learning the secret of the Hikonami Kagura and Flame Breathing will give him a powerful new advantage.',
    pageCount: 192,
    category: 'Dark Fantasy',
    thumbnail: '../assets/img/3.jpg',
    language: 'en',
    listPrice: {
      amount: 16.99,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
  {
    id: 'kSnfIJyikTP',
    title: 'Demon Slayer: Season 2',
    subtitle:
      'Tanjiro sets out on the path of the Demon Slayer to save his sister and avenge his family!',
    authors: 'Koyoharu Gotouge',
    publishedDate: 2019,
    description:
      'Tanjiro and his friends accompany the Hashira Tengen Uzui to an entertainment district where Tengens female ninja agents were gathering information on a demon before they suddenly disappeared. In order to investigate, Tanjiro and the others disguise themselves as women to sneak in! As they close in on their target, the demon reaches out for the courtesans of the district!',
    pageCount: 192,
    category: 'Dark Fantasy',
    thumbnail: '../assets/img/4.jpg',
    language: 'en',
    listPrice: {
      amount: 30,
      currencyCode: 'EUR',
      isOnSale: true,
    },
  },
  {
    id: 'f4iuVmbuKCC',
    title: 'Naruto: Uzumaki Naruto',
    subtitle: 'The most popular ninja comic!',
    authors: 'Masashi Kishimoto',
    publishedDate: 2003,
    description:
      'Naruto is a young shinobi with an incorrigible knack for mischief. He got a wild sense of humor, but Naruto is completely serious about his mission to be the greatest ninja!',
    pageCount: 192,
    category: 'Adventure',
    thumbnail: '../assets/img/5.jpg',
    language: 'en',
    listPrice: {
      amount: 19,
      currencyCode: 'USD',
      isOnSale: false,
    },
  },
  {
    id: 'U2rfZO6oBZf',
    title: "Naruto Novals: Itachi's Story",
    subtitle:
      'A new series of prose novels, straight from the worldwide Naruto franchise',
    authors: 'Takashi Yano',
    publishedDate: 2016,
    description:
      'Uchiha Itachi, four years of age. With the hell of war burned into his eyes, the boy makes a resolution: he will rid this world of all violence. The birth of Sasuke, meeting his friend Shisui, the academy, genin, chunin, and then the Anbu—Itachi races down the path of glory toward his dream of becoming the first Uchiha Hokage, unaware of the darkness that lies ahead…',
    pageCount: 180,
    category: 'Adventure',
    thumbnail: '../assets/img/6.jpg',
    language: 'en',
    listPrice: {
      amount: 10.99,
      currencyCode: 'USD',
      isOnSale: true,
    },
  },
  {
    id: 'xI0wrXaaAcq',
    title: 'Bleach: Ichigo Kurosaki',
    subtitle:
      'Part-time student, full-time Soul Reaper, Ichigo is one of the chosen few guardians of the afterlife',
    authors: 'Tite Kubo',
    publishedDate: 2011,
    description:
      'Ichigo Kurosaki never asked for the ability to see ghosts—he was born with the gift. When his family is attacked by a Hollow—a malevolent lost soul—Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace. Find out why Tite Kubo’s Bleach has become an international manga smash-hit.',
    pageCount: 65,
    category: 'Supernatural',
    thumbnail: '../assets/img/7.jpg',
    language: 'he',
    listPrice: {
      amount: 90,
      currencyCode: 'USD',
      isOnSale: false,
    },
  },
  {
    id: '9laHCEdSpFy',
    title: 'Death Note',
    subtitle:
      'When Light Yagami finds a notebook giving him power over death, will he use it for good—or evil?',
    authors: 'Tsugumi Ohba',
    publishedDate: 2005,
    description:
      "Light Yagami is an ace student with great prospects--and he's bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and now Light has vowed to use the power of the Death Note to rid the world of evil. But when criminals begin dropping dead, the authorities send the legendary detective L to track down the killer. With L hot on his heels, will Light lose sight of his noble goal...or his life?",
    pageCount: 501,
    category: 'Thriller',
    thumbnail: '../assets/img/8.jpg',
    language: 'he',
    listPrice: {
      amount: 176,
      currencyCode: 'EUR',
      isOnSale: false,
    },
  },
]

export default bookData
