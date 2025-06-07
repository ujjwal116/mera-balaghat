const serviceDataOld = [
  {
    id: "cat_plumber",
    categoryName: { en: "Plumbing Services", hi: "नलसाज़ी सेवाएं" },
    categoryIcon: "Wrench",
    colors: {
      light: { bg: 'bg-sky-100', text: 'text-sky-700', hoverBg: 'hover:bg-sky-200', border: 'border-sky-200', cardHover: 'hover:border-sky-300' },
      dark: { bg: 'bg-sky-900/60', text: 'text-sky-300', hoverBg: 'hover:bg-sky-900/90', border: 'border-sky-800', cardHover: 'hover:border-sky-700' }
    },
    providers: [
      {
        id: "p101",
        name: { en: "Ramesh Plumbing Works", hi: "रमेश प्लंबिंग वर्क्स" },
        description: { en: "24/7 plumbing solutions for homes and offices. Highly experienced.", hi: "घरों और कार्यालयों के लिए 24/7 प्लंबिंग समाधान। अत्यधिक अनुभवी।" },
        contact: "9876543210",
        location: { en: "Civil Lines, Balaghat", hi: "सिविल लाइंस, बालाघाट" },
        rating: 4.5,
        tags: { en: ["tap fixing", "pipeline", "leakage"], hi: ["नल ठीक करना", "पाइपलाइन", "लीकेज"] },
        availability: { en: "24 Hours", hi: "२४ घंटे" },
      },
      {
        id: "p102",
        name: { en: "Suresh Tap Experts", hi: "सुरेश टैप एक्सपर्ट्स" },
        description: { en: "Specialists in tap and shower repairs. Quick service guaranteed.", hi: "नल और शॉवर मरम्मत के विशेषज्ञ। त्वरित सेवा की गारंटी।" },
        contact: "9876543211",
        location: { en: "Main Market, Balaghat", hi: "मुख्य बाजार, बालाघाट" },
        rating: 4.8,
        tags: { en: ["taps", "showers", "fast service"], hi: ["नल", "शॉवर", "तेज सेवा"] },
        availability: { en: "9 AM - 8 PM", hi: "सुबह ९ बजे - रात ८ बजे" },
      }
    ]
  },
  {
    id: "cat_electrician",
    categoryName: { en: "Electrical Services", hi: "विद्युत सेवाएं" },
    categoryIcon: "Zap",
    colors: {
      light: { bg: 'bg-amber-100', text: 'text-amber-700', hoverBg: 'hover:bg-amber-200', border: 'border-amber-200', cardHover: 'hover:border-amber-300' },
      dark: { bg: 'bg-amber-900/60', text: 'text-amber-300', hoverBg: 'hover:bg-amber-900/90', border: 'border-amber-800', cardHover: 'hover:border-amber-700' }
    },
    providers: [
      {
        id: "p201",
        name: { en: "Gupta Electricals", hi: "गुप्ता इलेक्ट्रिकल्स" },
        description: { en: "Complete wiring, fan, and meter solutions. Certified electricians.", hi: "पूरी वायरिंग, पंखे और मीटर के समाधान। प्रमाणित इलेक्ट्रीशियन।" },
        contact: "9876543212",
        location: { en: "Gaulipara, Balaghat", hi: "गौलीपारा, बालाघाट" },
        rating: 4.7,
        tags: { en: ["wiring", "fan repair", "safety check"], hi: ["वायरिंग", "पंखा मरम्मत", "सुरक्षा जांच"] },
        availability: { en: "8 AM - 9 PM", hi: "सुबह ८ बजे - रात ९ बजे" },
      },
      {
        id: "p202",
        name: { en: "PK Power Solutions", hi: "पीके पावर सॉल्यूशंस" },
        description: { en: "Emergency electrical services. Fast response time.", hi: "आपातकालीन विद्युत सेवाएं। त्वरित प्रतिक्रिया समय।" },
        contact: "9876543213",
        location: { en: "Budhi, Balaghat", hi: "बूढ़ी, बालाघाट" },
        rating: 4.4,
        tags: { en: ["emergency", "fuse", "inverter"], hi: ["आपातकालीन", "फ्यूज", "इन्वर्टर"] },
        availability: { en: "24/7 Emergency", hi: "२४/७ आपातकालीन" },
      }
    ]
  },
  {
    id: "cat_mason",
    categoryName: { en: "Masonry Services", hi: "राजमिस्त्री सेवाएं" },
    categoryIcon: "HardHat",
    colors: {
      light: { bg: 'bg-orange-100', text: 'text-orange-700', hoverBg: 'hover:bg-orange-200', border: 'border-orange-200', cardHover: 'hover:border-orange-300' },
      dark: { bg: 'bg-orange-900/60', text: 'text-orange-300', hoverBg: 'hover:bg-orange-900/90', border: 'border-orange-800', cardHover: 'hover:border-orange-700' }
    },
    providers: [
      {
        id: "p301",
        name: { en: "Balaji Construction", hi: "बालाजी कंस्ट्रक्शन" },
        description: { en: "For all new construction, plastering and renovation work.", hi: "सभी नए निर्माण, प्लास्टरिंग और नवीनीकरण के कामों के लिए।" },
        contact: "9876543214",
        location: { en: "Hanuman Chowk", hi: "हनुमान चौक" },
        rating: 4.2,
        tags: { en: ["construction", "plaster", "renovation"], hi: ["निर्माण", "प्लास्टर", "नवीनीकरण"] },
        availability: { en: "By Project", hi: "प्रोजेक्ट के अनुसार" },
      }
    ]
  },
  {
    id: "cat_cleaner",
    categoryName: { en: "Cleaning Services", hi: "सफाई सेवाएं" },
    categoryIcon: "SprayCan",
    colors: {
      light: { bg: 'bg-violet-100', text: 'text-violet-700', hoverBg: 'hover:bg-violet-200', border: 'border-violet-200', cardHover: 'hover:border-violet-300' },
      dark: { bg: 'bg-violet-900/60', text: 'text-violet-300', hoverBg: 'hover:bg-violet-900/90', border: 'border-violet-800', cardHover: 'hover:border-violet-700' }
    },
    providers: [
      {
        id: "p401",
        name: { en: "Sparkling Clean Co.", hi: "स्पार्कलिंग क्लीन कंपनी" },
        description: { en: "Deep cleaning for homes, offices, and shops. We make it shine!", hi: "घरों, कार्यालयों और दुकानों की गहरी सफाई। हम इसे चमकाते हैं!" },
        contact: "9876543215",
        location: { en: "Serves entire city", hi: "पूरे शहर में सेवा" },
        rating: 4.9,
        tags: { en: ["deep cleaning", "office", "home"], hi: ["गहरी सफाई", "ऑफिस", "घर"] },
        availability: { en: "On Booking", hi: "बुकिंग पर" }
      },
      {
        id: "p402",
        name: { en: "Daily Dust Busters", hi: "डेली डस्ट बस्टर्स" },
        description: { en: "Affordable daily and weekly cleaning packages available.", hi: "किफायती दैनिक और साप्ताहिक सफाई पैकेज उपलब्ध हैं।" },
        contact: "9876543216",
        location: { en: "Gondia Road, Balaghat", hi: "गोंदिया रोड, बालाघाट" },
        rating: 4.6,
        tags: { en: ["daily clean", "weekly", "affordable"], hi: ["दैनिक सफाई", "साप्ताहिक", "किफायती"] },
        availability: { en: "7 AM - 6 PM", hi: "सुबह ७ बजे - शाम ६ बजे" }
      }
    ]
  }
];

const serviceData = [
  {
    "id": "cat_carpenter",
    "categoryName": { "en": "Carpentry Services", "hi": "बढ़ई सेवाएं" },
    "categoryIcon": "Hammer",
    "colors": {
      "light": { "bg": "bg-yellow-100", "text": "text-yellow-700", "hoverBg": "hover:bg-yellow-200", "border": "border-yellow-200", "cardHover": "hover:border-yellow-300" },
      "dark": { "bg": "bg-yellow-900/60", "text": "text-yellow-300", "hoverBg": "hover:bg-yellow-900/90", "border": "border-yellow-800", "cardHover": "hover:border-yellow-700" }
    },
    "providers": [
      {
        "id": "p501",
        "name": { "en": "Manoj", "hi": "मनोज" },
        "description": { "en": "Expert in all types of carpentry work for homes and offices.", "hi": "घरों और कार्यालयों के लिए सभी प्रकार के बढ़ई कामों में विशेषज्ञ।" },
        "contact": "9301981135",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.3,
        "tags": { "en": ["woodwork", "furniture", "custom work"], "hi": ["लकड़ी का काम", "फर्नीचर", "कस्टम कार्य"] },
        "availability": { "en": "9 AM - 7 PM", "hi": "सुबह ९ बजे - शाम ७ बजे" }
      },
      {
        "id": "p502",
        "name": { "en": "Vijewar", "hi": "विजेवार" },
        "description": { "en": "Skilled carpenter for modular and traditional woodwork.", "hi": "मॉड्यूलर और पारंपरिक लकड़ी के काम में कुशल बढ़ई।" },
        "contact": "9630393945",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.2,
        "tags": { "en": ["modular", "doors", "wardrobes"], "hi": ["मॉड्यूलर", "दरवाज़े", "अलमारियाँ"] },
        "availability": { "en": "10 AM - 6 PM", "hi": "सुबह १० बजे - शाम ६ बजे" }
      },
      {
        "id": "p503",
        "name": { "en": "Hemchand Patle", "hi": "हेमचंद पाटले" },
        "description": { "en": "Provides quality carpentry work with reliable finish.", "hi": "गुणवत्तापूर्ण बढ़ई काम के साथ विश्वसनीय फिनिश प्रदान करते हैं।" },
        "contact": "9754680242",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.4,
        "tags": { "en": ["repairs", "fittings", "wood polish"], "hi": ["मरम्मत", "फिटिंग्स", "लकड़ी पॉलिश"] },
        "availability": { "en": "Flexible Hours", "hi": "लचीला समय" }
      },
      {
        "id": "p504",
        "name": { "en": "Sunil", "hi": "सुनील" },
        "description": { "en": "Handles carpentry jobs like fixing doors, cabinets, and more.", "hi": "दरवाजे, अलमारियाँ और अन्य बढ़ई कामों को संभालते हैं।" },
        "contact": "9406559160",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.1,
        "tags": { "en": ["doors", "cabinets", "fixing"], "hi": ["दरवाज़े", "अलमारियाँ", "मरम्मत"] },
        "availability": { "en": "On Call", "hi": "कॉल पर" }
      },
      {
        "id": "p505",
        "name": { "en": "Turkar Door House", "hi": "तुर्कार डोर हाउस" },
        "description": { "en": "Specializes in custom doors and fittings.", "hi": "कस्टम दरवाजों और फिटिंग्स में विशेषज्ञ।" },
        "contact": "9755613181",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.3,
        "tags": { "en": ["doors", "frames", "custom work"], "hi": ["दरवाज़े", "फ्रेम", "कस्टम कार्य"] },
        "availability": { "en": "10 AM - 5 PM", "hi": "सुबह १० बजे - शाम ५ बजे" }
      },
      {
        "id": "p506",
        "name": { "en": "Sleek Studio", "hi": "स्लीक स्टूडियो" },
        "description": { "en": "Stylish carpentry designs for interiors.", "hi": "इंटीरियर्स के लिए स्टाइलिश बढ़ई डिज़ाइन।" },
        "contact": "9340160989",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.5,
        "tags": { "en": ["interior", "design", "stylish"], "hi": ["इंटीरियर", "डिज़ाइन", "स्टाइलिश"] },
        "availability": { "en": "By Appointment", "hi": "नियुक्ति पर" }
      },
      {
        "id": "p507",
        "name": { "en": "Akash Raut", "hi": "आकाश राऊत" },
        "description": { "en": "Experienced carpenter for furniture repair and installation.", "hi": "फर्नीचर मरम्मत और स्थापना के अनुभवी बढ़ई।" },
        "contact": "8120704598",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.2,
        "tags": { "en": ["furniture", "repair", "installation"], "hi": ["फर्नीचर", "मरम्मत", "स्थापना"] },
        "availability": { "en": "9 AM - 6 PM", "hi": "सुबह ९ बजे - शाम ६ बजे" }
      },
      {
        "id": "p508",
        "name": { "en": "Diksha Father", "hi": "दिक्षा फादर" },
        "description": { "en": "Affordable carpentry work for homes.", "hi": "घरों के लिए किफायती बढ़ई काम।" },
        "contact": "9630928856",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.0,
        "tags": { "en": ["budget", "home", "basic work"], "hi": ["बजट", "घर", "मूल कार्य"] },
        "availability": { "en": "10 AM - 4 PM", "hi": "सुबह १० बजे - शाम ४ बजे" }
      },
      {
        "id": "p509",
        "name": { "en": "Praveen Panche", "hi": "प्रवीण पानचे" },
        "description": { "en": "Custom furniture and renovation support.", "hi": "कस्टम फर्नीचर और नवीनीकरण सहायता।" },
        "contact": "9981262216",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.3,
        "tags": { "en": ["renovation", "furniture", "custom design"], "hi": ["नवीनीकरण", "फर्नीचर", "कस्टम डिज़ाइन"] },
        "availability": { "en": "On Request", "hi": "अनुरोध पर" }
      }
    ]
  },
  {
    "id": "cat_plumber_ext",
    "categoryName": { "en": "Plumbing Services", "hi": "नलसाज़ी सेवाएं" },
    "categoryIcon": "Wrench",
    "colors": {
      "light": { "bg": "bg-sky-100", "text": "text-sky-700", "hoverBg": "hover:bg-sky-200", "border": "border-sky-200", "cardHover": "hover:border-sky-300" },
      "dark": { "bg": "bg-sky-900/60", "text": "text-sky-300", "hoverBg": "hover:bg-sky-900/90", "border": "border-sky-800", "cardHover": "hover:border-sky-700" }
    },
    "providers": [
      {
        "id": "p601",
        "name": { "en": "Chouragade", "hi": "चौरागड़े" },
        "description": { "en": "Professional plumber for home and office repairs.", "hi": "घर और कार्यालय की मरम्मत के लिए पेशेवर प्लंबर।" },
        "contact": "9406751275",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.2,
        "tags": { "en": ["leak repair", "tap", "pipes"], "hi": ["लीकेज मरम्मत", "नल", "पाइप"] },
        "availability": { "en": "9 AM - 6 PM", "hi": "सुबह ९ बजे - शाम ६ बजे" }
      },
      {
        "id": "p602",
        "name": { "en": "Pache", "hi": "पाचे" },
        "description": { "en": "Experienced in fitting and fixing plumbing systems.", "hi": "प्लंबिंग सिस्टम की फिटिंग और मरम्मत में अनुभवी।" },
        "contact": "9755258636",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.3,
        "tags": { "en": ["fitting", "bathroom", "maintenance"], "hi": ["फिटिंग", "बाथरूम", "रखरखाव"] },
        "availability": { "en": "Flexible Timing", "hi": "लचीला समय" }
      },
      {
        "id": "p603",
        "name": { "en": "Satish Dhande", "hi": "सतीश धांडे" },
        "description": { "en": "Affordable plumbing solutions for everyday issues.", "hi": "दैनिक समस्याओं के लिए किफायती प्लंबिंग समाधान।" },
        "contact": "7879338234",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.0,
        "tags": { "en": ["budget plumbing", "leak", "tap repair"], "hi": ["बजट प्लंबिंग", "लीकेज", "नल मरम्मत"] },
        "availability": { "en": "10 AM - 5 PM", "hi": "सुबह १० बजे - शाम ५ बजे" }
      },
      {
        "id": "p604",
        "name": { "en": "Sudhir", "hi": "सुधीर" },
        "description": { "en": "Expert in advanced plumbing tasks and pipework.", "hi": "उन्नत प्लंबिंग कार्य और पाइप वर्क में विशेषज्ञ।" },
        "contact": "9893184101",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.4,
        "tags": { "en": ["pipe fitting", "advanced repair", "bathroom"], "hi": ["पाइप फिटिंग", "उन्नत मरम्मत", "बाथरूम"] },
        "availability": { "en": "9 AM - 7 PM", "hi": "सुबह ९ बजे - शाम ७ बजे" }
      },
      {
        "id": "p605",
        "name": { "en": "Rembo Plumbing", "hi": "रेम्बो प्लंबिंग" },
        "description": { "en": "Fast and reliable plumbing service for all needs.", "hi": "सभी जरूरतों के लिए तेज़ और विश्वसनीय प्लंबिंग सेवा।" },
        "contact": "8999984647",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.5,
        "tags": { "en": ["quick service", "faucet", "installation"], "hi": ["त्वरित सेवा", "फॉसेट", "स्थापना"] },
        "availability": { "en": "24/7 Service", "hi": "२४/७ सेवा" }
      },
      {
        "id": "p606",
        "name": { "en": "Chouhan", "hi": "चौहान" },
        "description": { "en": "Trusted plumber for emergency and regular plumbing needs.", "hi": "आपातकालीन और नियमित प्लंबिंग आवश्यकताओं के लिए विश्वसनीय प्लंबर।" },
        "contact": "8839518813",
        "location": { "en": "Balaghat", "hi": "बालाघाट" },
        "rating": 4.1,
        "tags": { "en": ["emergency", "leak repair", "bath fittings"], "hi": ["आपातकालीन", "लीकेज मरम्मत", "बाथ फिटिंग्स"] },
        "availability": { "en": "On Call", "hi": "कॉल पर" }
      }
    ]
  },
  {
  "id": "cat_electrician_ext",
  "categoryName": { "en": "Electrical Services", "hi": "विद्युत सेवाएं" },
  "categoryIcon": "Zap",
  "colors": {
    "light": { "bg": "bg-amber-100", "text": "text-amber-700", "hoverBg": "hover:bg-amber-200", "border": "border-amber-200", "cardHover": "hover:border-amber-300" },
    "dark": { "bg": "bg-amber-900/60", "text": "text-amber-300", "hoverBg": "hover:bg-amber-900/90", "border": "border-amber-800", "cardHover": "hover:border-amber-700" }
  },
  "providers": [
    {
      "id": "p701",
      "name": { "en": "Chouhan", "hi": "चौहान" },
      "description": { "en": "Skilled electrician for residential electrical needs.", "hi": "आवासीय विद्युत आवश्यकताओं के लिए कुशल इलेक्ट्रीशियन।" },
      "contact": "8839518813",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.2,
      "tags": { "en": ["residential", "wiring", "switchboard"], "hi": ["घरेलू", "वायरिंग", "स्विचबोर्ड"] },
      "availability": { "en": "9 AM - 6 PM", "hi": "सुबह ९ बजे - शाम ६ बजे" }
    },
    {
      "id": "p702",
      "name": { "en": "Moti", "hi": "मोती" },
      "description": { "en": "Fast service for fan, lights and general faults.", "hi": "पंखा, लाइट और सामान्य खराबी के लिए तेज़ सेवा।" },
      "contact": "8959420666",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.3,
      "tags": { "en": ["fan", "light", "fault repair"], "hi": ["पंखा", "लाइट", "मरम्मत"] },
      "availability": { "en": "10 AM - 5 PM", "hi": "सुबह १० बजे - शाम ५ बजे" }
    },
    {
      "id": "p703",
      "name": { "en": "Sudhir", "hi": "सुधीर" },
      "description": { "en": "Expert electrician for home and office wiring.", "hi": "घर और कार्यालय की वायरिंग के लिए विशेषज्ञ इलेक्ट्रीशियन।" },
      "contact": "9893184101",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.5,
      "tags": { "en": ["home wiring", "office setup", "repair"], "hi": ["घर की वायरिंग", "ऑफिस सेटअप", "मरम्मत"] },
      "availability": { "en": "9 AM - 7 PM", "hi": "सुबह ९ बजे - शाम ७ बजे" }
    },
    {
      "id": "p704",
      "name": { "en": "Praful", "hi": "प्रफुल" },
      "description": { "en": "Handles meter installation and load management.", "hi": "मीटर स्थापना और लोड प्रबंधन में निपुण।" },
      "contact": "8959420759",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.1,
      "tags": { "en": ["meter", "load", "installation"], "hi": ["मीटर", "लोड", "स्थापना"] },
      "availability": { "en": "On Call", "hi": "कॉल पर" }
    },
    {
      "id": "p705",
      "name": { "en": "Manish Sahare", "hi": "मनीष सहारे" },
      "description": { "en": "Certified electrician for complete home setup.", "hi": "पूरे घर की व्यवस्था के लिए प्रमाणित इलेक्ट्रीशियन।" },
      "contact": "6264030546",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.4,
      "tags": { "en": ["home setup", "fan", "switches"], "hi": ["घर की व्यवस्था", "पंखा", "स्विच"] },
      "availability": { "en": "8 AM - 8 PM", "hi": "सुबह ८ बजे - रात ८ बजे" }
    },
    {
      "id": "p706",
      "name": { "en": "Patle", "hi": "पाटले" },
      "description": { "en": "Deals in inverter wiring and battery issues.", "hi": "इन्वर्टर वायरिंग और बैटरी समस्याओं का समाधान।" },
      "contact": "9977520946",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.2,
      "tags": { "en": ["inverter", "battery", "wiring"], "hi": ["इन्वर्टर", "बैटरी", "वायरिंग"] },
      "availability": { "en": "9 AM - 6 PM", "hi": "सुबह ९ बजे - शाम ६ बजे" }
    },
    {
      "id": "p707",
      "name": { "en": "Vinay", "hi": "विनय" },
      "description": { "en": "Available for routine electrical maintenance.", "hi": "नियमित विद्युत रखरखाव के लिए उपलब्ध।" },
      "contact": "7509724921",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.0,
      "tags": { "en": ["maintenance", "switchboard", "fan"], "hi": ["रखरखाव", "स्विचबोर्ड", "पंखा"] },
      "availability": { "en": "10 AM - 4 PM", "hi": "सुबह १० बजे - शाम ४ बजे" }
    },
    {
      "id": "p708",
      "name": { "en": "Mohit", "hi": "मोहित" },
      "description": { "en": "Specializes in short circuit and fuse repairs.", "hi": "शॉर्ट सर्किट और फ्यूज मरम्मत में विशेषज्ञ।" },
      "contact": "8305588119",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.3,
      "tags": { "en": ["short circuit", "fuse", "safety"], "hi": ["शॉर्ट सर्किट", "फ्यूज", "सुरक्षा"] },
      "availability": { "en": "24 Hours", "hi": "२४ घंटे" }
    },
    {
      "id": "p709",
      "name": { "en": "Bopche", "hi": "बोपचे" },
      "description": { "en": "Offers full wiring for new buildings and homes.", "hi": "नई इमारतों और घरों के लिए पूरी वायरिंग की सेवा।" },
      "contact": "7489143823",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.4,
      "tags": { "en": ["new wiring", "construction", "setup"], "hi": ["नई वायरिंग", "निर्माण", "सेटअप"] },
      "availability": { "en": "By Project", "hi": "प्रोजेक्ट के अनुसार" }
    }
  ]
},{
  "id": "cat_electrician_ext",
  "categoryName": { "en": "Electrical Services", "hi": "विद्युत सेवाएं" },
  "categoryIcon": "Zap",
  "colors": {
    "light": { "bg": "bg-amber-100", "text": "text-amber-700", "hoverBg": "hover:bg-amber-200", "border": "border-amber-200", "cardHover": "hover:border-amber-300" },
    "dark": { "bg": "bg-amber-900/60", "text": "text-amber-300", "hoverBg": "hover:bg-amber-900/90", "border": "border-amber-800", "cardHover": "hover:border-amber-700" }
  },
  "providers": [
    {
      "id": "p701",
      "name": { "en": "Chouhan", "hi": "चौहान" },
      "description": { "en": "Skilled electrician for residential electrical needs.", "hi": "आवासीय विद्युत आवश्यकताओं के लिए कुशल इलेक्ट्रीशियन।" },
      "contact": "8839518813",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.2,
      "tags": { "en": ["residential", "wiring", "switchboard"], "hi": ["घरेलू", "वायरिंग", "स्विचबोर्ड"] },
      "availability": { "en": "9 AM - 6 PM", "hi": "सुबह ९ बजे - शाम ६ बजे" }
    },
    {
      "id": "p702",
      "name": { "en": "Moti", "hi": "मोती" },
      "description": { "en": "Fast service for fan, lights and general faults.", "hi": "पंखा, लाइट और सामान्य खराबी के लिए तेज़ सेवा।" },
      "contact": "8959420666",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.3,
      "tags": { "en": ["fan", "light", "fault repair"], "hi": ["पंखा", "लाइट", "मरम्मत"] },
      "availability": { "en": "10 AM - 5 PM", "hi": "सुबह १० बजे - शाम ५ बजे" }
    },
    {
      "id": "p703",
      "name": { "en": "Sudhir", "hi": "सुधीर" },
      "description": { "en": "Expert electrician for home and office wiring.", "hi": "घर और कार्यालय की वायरिंग के लिए विशेषज्ञ इलेक्ट्रीशियन।" },
      "contact": "9893184101",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.5,
      "tags": { "en": ["home wiring", "office setup", "repair"], "hi": ["घर की वायरिंग", "ऑफिस सेटअप", "मरम्मत"] },
      "availability": { "en": "9 AM - 7 PM", "hi": "सुबह ९ बजे - शाम ७ बजे" }
    },
    {
      "id": "p704",
      "name": { "en": "Praful", "hi": "प्रफुल" },
      "description": { "en": "Handles meter installation and load management.", "hi": "मीटर स्थापना और लोड प्रबंधन में निपुण।" },
      "contact": "8959420759",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.1,
      "tags": { "en": ["meter", "load", "installation"], "hi": ["मीटर", "लोड", "स्थापना"] },
      "availability": { "en": "On Call", "hi": "कॉल पर" }
    },
    {
      "id": "p705",
      "name": { "en": "Manish Sahare", "hi": "मनीष सहारे" },
      "description": { "en": "Certified electrician for complete home setup.", "hi": "पूरे घर की व्यवस्था के लिए प्रमाणित इलेक्ट्रीशियन।" },
      "contact": "6264030546",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.4,
      "tags": { "en": ["home setup", "fan", "switches"], "hi": ["घर की व्यवस्था", "पंखा", "स्विच"] },
      "availability": { "en": "8 AM - 8 PM", "hi": "सुबह ८ बजे - रात ८ बजे" }
    },
    {
      "id": "p706",
      "name": { "en": "Patle", "hi": "पाटले" },
      "description": { "en": "Deals in inverter wiring and battery issues.", "hi": "इन्वर्टर वायरिंग और बैटरी समस्याओं का समाधान।" },
      "contact": "9977520946",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.2,
      "tags": { "en": ["inverter", "battery", "wiring"], "hi": ["इन्वर्टर", "बैटरी", "वायरिंग"] },
      "availability": { "en": "9 AM - 6 PM", "hi": "सुबह ९ बजे - शाम ६ बजे" }
    },
    {
      "id": "p707",
      "name": { "en": "Vinay", "hi": "विनय" },
      "description": { "en": "Available for routine electrical maintenance.", "hi": "नियमित विद्युत रखरखाव के लिए उपलब्ध।" },
      "contact": "7509724921",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.0,
      "tags": { "en": ["maintenance", "switchboard", "fan"], "hi": ["रखरखाव", "स्विचबोर्ड", "पंखा"] },
      "availability": { "en": "10 AM - 4 PM", "hi": "सुबह १० बजे - शाम ४ बजे" }
    },
    {
      "id": "p708",
      "name": { "en": "Mohit", "hi": "मोहित" },
      "description": { "en": "Specializes in short circuit and fuse repairs.", "hi": "शॉर्ट सर्किट और फ्यूज मरम्मत में विशेषज्ञ।" },
      "contact": "8305588119",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.3,
      "tags": { "en": ["short circuit", "fuse", "safety"], "hi": ["शॉर्ट सर्किट", "फ्यूज", "सुरक्षा"] },
      "availability": { "en": "24 Hours", "hi": "२४ घंटे" }
    },
    {
      "id": "p709",
      "name": { "en": "Bopche", "hi": "बोपचे" },
      "description": { "en": "Offers full wiring for new buildings and homes.", "hi": "नई इमारतों और घरों के लिए पूरी वायरिंग की सेवा।" },
      "contact": "7489143823",
      "location": { "en": "Balaghat", "hi": "बालाघाट" },
      "rating": 4.4,
      "tags": { "en": ["new wiring", "construction", "setup"], "hi": ["नई वायरिंग", "निर्माण", "सेटअप"] },
      "availability": { "en": "By Project", "hi": "प्रोजेक्ट के अनुसार" }
    }
  ]
}


  

]



export default serviceData;
import { Wrench, Zap, HardHat, SprayCan } from 'lucide-react'; // Ensure you have these icons installed