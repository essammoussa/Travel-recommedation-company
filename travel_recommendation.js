

// ==================== DATA ====================
const travelData = {
  "countries": [
    {
      "id": 1, "name": "Australia", "region": "Asia Pacific",
      "cities": [
        { "name": "Sydney, Australia", "type": "cities", "rating": "4.9", "bestTime": "Sept–Nov",
          "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600",
          "description": "A vibrant harbour city iconic for its Opera House, Bondi Beach, and world-class dining scene. Sydney seamlessly blends cosmopolitan energy with natural beauty.",
          "highlights": ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Darling Harbour", "Blue Mountains"] },
        { "name": "Melbourne, Australia", "type": "cities", "rating": "4.8", "bestTime": "Mar–May",
          "imageUrl": "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600",
          "description": "A cultural powerhouse with world-famous laneways, exceptional coffee culture, and a thriving arts scene. Melbourne is consistently ranked among the world's most liveable cities.",
          "highlights": ["Federation Square", "Royal Botanic Gardens", "Queen Victoria Market", "St Kilda Beach", "Grampians"] }
      ]
    },
    {
      "id": 2, "name": "Japan", "region": "Asia Pacific",
      "cities": [
        { "name": "Tokyo, Japan", "type": "cities", "rating": "5.0", "bestTime": "Mar–May",
          "imageUrl": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600",
          "description": "A pulsating metropolis where ultramodern skyscrapers meet ancient shrines, and ramen shops nestle beside Michelin-starred restaurants. Tokyo is endlessly fascinating.",
          "highlights": ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Fish Market", "Shinjuku", "Mt. Fuji Day Trip"] },
        { "name": "Kyoto, Japan", "type": "cities", "rating": "4.9", "bestTime": "Apr & Nov",
          "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600",
          "description": "Japan's ancient imperial capital, home to over 1,600 Buddhist temples and Shinto shrines. Kyoto embodies the timeless elegance of traditional Japan.",
          "highlights": ["Fushimi Inari", "Arashiyama Bamboo", "Kinkaku-ji", "Gion District", "Nishiki Market"] }
      ]
    },
    {
      "id": 3, "name": "Brazil", "region": "Americas",
      "cities": [
        { "name": "Rio de Janeiro, Brazil", "type": "cities", "rating": "4.7", "bestTime": "Dec–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600",
          "description": "The Cidade Maravilhosa — Marvellous City — blessed with dramatic mountains, sweeping beaches, and a carnival spirit that never truly fades.",
          "highlights": ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Lapa Arches", "Santa Teresa"] },
        { "name": "São Paulo, Brazil", "type": "cities", "rating": "4.5", "bestTime": "Apr–Jun",
          "imageUrl": "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=600",
          "description": "South America's largest megalopolis — a global financial hub with an extraordinary restaurant scene, world-class art museums, and vibrant nightlife.",
          "highlights": ["Ibirapuera Park", "MASP Museum", "Vila Madalena", "Mercadão Market", "Liberdade District"] }
      ]
    },
    {
      "id": 4, "name": "France", "region": "Europe",
      "cities": [
        { "name": "Paris, France", "type": "cities", "rating": "4.9", "bestTime": "Apr–Jun",
          "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
          "description": "The City of Light is an eternal icon — a place where every cobblestone boulevard, every boulangerie, and every art-filled museum conspires to take your breath away.",
          "highlights": ["Eiffel Tower", "Louvre Museum", "Versailles", "Montmartre", "Seine River Cruise"] },
        { "name": "Nice, France", "type": "cities", "rating": "4.6", "bestTime": "May–Sep",
          "imageUrl": "https://images.unsplash.com/photo-1544084944-15472acc12e1?w=600",
          "description": "The jewel of the French Riviera, where Belle Époque architecture meets azure Mediterranean waters along the legendary Promenade des Anglais.",
          "highlights": ["Promenade des Anglais", "Old Town (Vieux-Nice)", "Castle Hill", "Monaco Day Trip", "Èze Village"] }
      ]
    },
    {
      "id": 5, "name": "Italy", "region": "Europe",
      "cities": [
        { "name": "Rome, Italy", "type": "cities", "rating": "5.0", "bestTime": "Apr–Jun",
          "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600",
          "description": "The Eternal City — 3,000 years of history layered into one magnificent living museum. From the Colosseum to the Vatican, Rome overwhelms the senses magnificently.",
          "highlights": ["Colosseum", "Vatican Museums", "Trevi Fountain", "Pantheon", "Trastevere"] },
        { "name": "Venice, Italy", "type": "cities", "rating": "4.9", "bestTime": "Mar–May",
          "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600",
          "description": "Built on 118 islands, Venice is unlike anywhere else on earth. Its canals, gondolas, and crumbling palazzos create an atmosphere of sublime, fading grandeur.",
          "highlights": ["Grand Canal", "St. Mark's Basilica", "Rialto Bridge", "Doge's Palace", "Murano Island"] }
      ]
    },
    {
      "id": 6, "name": "India", "region": "Asia Pacific",
      "cities": [
        { "name": "Jaipur, India", "type": "cities", "rating": "4.7", "bestTime": "Nov–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
          "description": "The Pink City of Rajasthan, where elephants still parade past amber-hued palaces and bustling bazaars overflow with jewels, spices, and hand-block printed fabrics.",
          "highlights": ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar", "Johari Bazaar"] },
        { "name": "Kerala, India", "type": "cities", "rating": "4.8", "bestTime": "Oct–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
          "description": "God's Own Country — a lush tropical paradise of emerald backwaters, spice plantations, Ayurvedic retreats, and misty hill stations.",
          "highlights": ["Alleppey Backwaters", "Munnar Tea Gardens", "Periyar Wildlife", "Varkala Beach", "Kathakali Dance"] }
      ]
    },
    {
      "id": 7, "name": "Morocco", "region": "Africa",
      "cities": [
        { "name": "Marrakech, Morocco", "type": "cities", "rating": "4.8", "bestTime": "Mar–May",
          "imageUrl": "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600",
          "description": "A sensory labyrinth of souks, riads, and rooftop terraces. Marrakech intoxicates with the scent of spices, the call to prayer, and the endless rhythm of Djemaa el-Fna.",
          "highlights": ["Djemaa el-Fna", "Majorelle Garden", "Saadian Tombs", "Bahia Palace", "Medina Souks"] },
        { "name": "Sahara Desert, Morocco", "type": "adventure", "rating": "4.9", "bestTime": "Oct–Apr",
          "imageUrl": "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600",
          "description": "An otherworldly sea of golden dunes stretching to the horizon. Watch the sunrise paint the Erg Chebbi dunes in molten gold while riding camels through silence.",
          "highlights": ["Erg Chebbi Dunes", "Camel Trekking", "Berber Camps", "Merzouga Village", "Stargazing"] }
      ]
    },
    {
      "id": 8, "name": "Thailand", "region": "Asia Pacific",
      "cities": [
        { "name": "Bangkok, Thailand", "type": "cities", "rating": "4.7", "bestTime": "Nov–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600",
          "description": "A glittering urban paradox — ancient temples and golden stupas alongside futuristic skyscrapers and the world's most exciting street food scene.",
          "highlights": ["Grand Palace", "Wat Pho", "Chatuchak Market", "Chao Phraya River", "Khao San Road"] },
        { "name": "Chiang Mai, Thailand", "type": "cities", "rating": "4.8", "bestTime": "Nov–Feb",
          "imageUrl": "https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=600",
          "description": "Northern Thailand's cultural heart, where hundreds of ancient temples sit serenely amid forested mountains. A haven for trekkers, spiritual seekers, and food lovers.",
          "highlights": ["Doi Suthep Temple", "Night Bazaar", "Elephant Sanctuary", "Sunday Walking Street", "Cooking Classes"] }
      ]
    },
    {
      "id": 9, "name": "Greece", "region": "Europe",
      "cities": [
        { "name": "Santorini, Greece", "type": "cities", "rating": "4.9", "bestTime": "May–Oct",
          "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600",
          "description": "The crown jewel of the Aegean — a volcanic crescent of whitewashed villages, cerulean domes, and sunsets that redefine the word beautiful.",
          "highlights": ["Oia Sunset", "Caldera Views", "Red Beach", "Ancient Akrotiri", "Ammoudi Bay"] },
        { "name": "Athens, Greece", "type": "cities", "rating": "4.7", "bestTime": "Apr–Jun",
          "imageUrl": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600",
          "description": "The cradle of Western civilization, where ancient ruins tower over a dynamic modern city buzzing with rooftop bars, vibrant street art, and exceptional cuisine.",
          "highlights": ["Acropolis", "Parthenon", "Plaka District", "National Museum", "Cape Sounion"] }
      ]
    },
    {
      "id": 10, "name": "Peru", "region": "Americas",
      "cities": [
        { "name": "Machu Picchu, Peru", "type": "cities", "rating": "5.0", "bestTime": "May–Sep",
          "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600",
          "description": "The lost citadel of the Incas, perched dramatically between misty Andean peaks. Machu Picchu is one of humanity's greatest architectural and spiritual achievements.",
          "highlights": ["Sun Gate", "Inca Trail Trek", "Huayna Picchu", "Aguas Calientes", "Sacred Valley"] },
        { "name": "Cusco, Peru", "type": "cities", "rating": "4.8", "bestTime": "May–Oct",
          "imageUrl": "https://images.unsplash.com/photo-1589396575653-c09c794ff4b2?w=600",
          "description": "The navel of the Inca Empire — a high-altitude city where Baroque cathedrals sit on Inca stone foundations and the air smells of incense and roasting corn.",
          "highlights": ["Plaza de Armas", "Sacsayhuamán", "San Pedro Market", "Qorikancha Temple", "Rainbow Mountain"] }
      ]
    },
    {
      "id": 11, "name": "Iceland", "region": "Europe",
      "cities": [
        { "name": "Reykjavik, Iceland", "type": "cities", "rating": "4.8", "bestTime": "Jun–Aug",
          "imageUrl": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600",
          "description": "The world's most northerly capital — a charming compact city that serves as gateway to glaciers, geysers, and the ethereal Northern Lights.",
          "highlights": ["Northern Lights", "Hallgrímskirkja", "Blue Lagoon", "Golden Circle", "Whale Watching"] },
        { "name": "Northern Lights, Iceland", "type": "adventure", "rating": "5.0", "bestTime": "Sep–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600",
          "description": "Nature's most breathtaking light show. The Aurora Borealis dances across Iceland's vast dark skies in ribbons of emerald, violet, and crimson.",
          "highlights": ["Aurora Hunting Tours", "Jökulsárlón Glacier Lagoon", "Ice Cave Exploration", "Snowmobile Tours", "Dog Sledding"] }
      ]
    },
    {
      "id": 12, "name": "New Zealand", "region": "Asia Pacific",
      "cities": [
        { "name": "Queenstown, New Zealand", "type": "cities", "rating": "4.9", "bestTime": "Dec–Feb",
          "imageUrl": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600",
          "description": "The adventure capital of the world, nestled beside a glacial lake surrounded by the Remarkables mountain range. Queenstown's beauty is utterly staggering.",
          "highlights": ["Bungee Jumping", "Milford Sound Cruise", "Fiordland NP", "Remarkables Ski", "Hobbiton Tour"] },
        { "name": "Rotorua, New Zealand", "type": "cities", "rating": "4.6", "bestTime": "Year Round",
          "imageUrl": "https://images.unsplash.com/photo-1591991564021-b5e2e75e6e23?w=600",
          "description": "A geothermal wonderland of bubbling mud pools, gushing geysers, and rich Māori culture. Rotorua offers an immersive window into New Zealand's natural and indigenous heritage.",
          "highlights": ["Te Puia Geyser", "Wai-O-Tapu", "Māori Hangi", "Redwood Forest", "Agrodome Farm"] }
      ]
    },
    {
      "id": 13, "name": "Tanzania", "region": "Africa",
      "cities": [
        { "name": "Serengeti, Tanzania", "type": "adventure", "rating": "5.0", "bestTime": "Jul–Oct",
          "imageUrl": "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600",
          "description": "The greatest wildlife spectacle on earth. Witness millions of wildebeest, zebra, and gazelle thunder across the golden plains during the legendary Great Migration.",
          "highlights": ["Great Migration", "Big Five Safari", "Hot Air Balloon Safari", "Ngorongoro Crater", "Olduvai Gorge"] },
        { "name": "Zanzibar, Tanzania", "type": "beaches", "rating": "4.9", "bestTime": "Jun–Oct",
          "imageUrl": "https://images.unsplash.com/photo-1541025055045-f1e5b5cd8ead?w=600",
          "description": "The Spice Island — a tropical archipelago of powder-white beaches, turquoise lagoons, and a UNESCO-listed Stone Town steeped in Swahili, Arab, and Persian history.",
          "highlights": ["Nungwi Beach", "Stone Town", "Spice Tour", "Mnemba Atoll Diving", "Prison Island"] }
      ]
    },
    {
      "id": 14, "name": "Mexico", "region": "Americas",
      "cities": [
        { "name": "Mexico City, Mexico", "type": "cities", "rating": "4.7", "bestTime": "Nov–Apr",
          "imageUrl": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600",
          "description": "One of the world's most dynamic capital cities — where Aztec ruins sit beneath Spanish cathedrals, and 60 museums share streets with taquizas and cantinas.",
          "highlights": ["Teotihuacán Pyramids", "Frida Kahlo Museum", "Zócalo Plaza", "Chapultepec Park", "Xochimilco"] },
        { "name": "Tulum, Mexico", "type": "beaches", "rating": "4.8", "bestTime": "Nov–Apr",
          "imageUrl": "https://images.unsplash.com/photo-1596467745552-b67bf94dc87c?w=600",
          "description": "A bohemian Riviera Maya paradise where ancient Mayan cliff-top ruins overlook the Caribbean Sea and cenotes invite you into crystalline underworlds.",
          "highlights": ["Tulum Ruins", "Gran Cenote", "Sian Ka'an Biosphere", "Cobá Pyramid", "Akumal Turtles"] }
      ]
    },
    {
      "id": 15, "name": "UAE", "region": "Middle East",
      "cities": [
        { "name": "Dubai, UAE", "type": "cities", "rating": "4.8", "bestTime": "Nov–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600",
          "description": "The city of superlatives — tallest towers, largest malls, most ambitious man-made islands. Dubai is audacious, glittering, and utterly unlike anywhere else.",
          "highlights": ["Burj Khalifa", "Palm Jumeirah", "Dubai Frame", "Gold Souk", "Desert Safari"] },
        { "name": "Abu Dhabi, UAE", "type": "cities", "rating": "4.7", "bestTime": "Nov–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600",
          "description": "The UAE's stately capital — home to the breathtaking Sheikh Zayed Grand Mosque, Formula 1's Yas Marina Circuit, and the Louvre Abu Dhabi.",
          "highlights": ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Ferrari World", "Mangrove Kayaking", "Heritage Village"] }
      ]
    },
    {
      "id": 16, "name": "Argentina", "region": "Americas",
      "cities": [
        { "name": "Buenos Aires, Argentina", "type": "cities", "rating": "4.8", "bestTime": "Sep–Nov",
          "imageUrl": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600",
          "description": "The Paris of South America — a passionate city of tango, steak, Malbec, and architectural grandeur. Buenos Aires seduces with its European elegance and Latin fire.",
          "highlights": ["La Boca", "Palermo", "Recoleta Cemetery", "Teatro Colón", "San Telmo Market"] },
        { "name": "Patagonia, Argentina", "type": "adventure", "rating": "5.0", "bestTime": "Nov–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
          "description": "The ends of the earth — a vast, windswept wilderness of granite towers, turquoise lakes, and ancient glaciers. Patagonia is wilderness at its most raw and sublime.",
          "highlights": ["Torres del Paine", "Perito Moreno Glacier", "El Chaltén Trekking", "Los Glaciares NP", "Tierra del Fuego"] }
      ]
    },
    {
      "id": 17, "name": "Portugal", "region": "Europe",
      "cities": [
        { "name": "Lisbon, Portugal", "type": "cities", "rating": "4.9", "bestTime": "Mar–May",
          "imageUrl": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600",
          "description": "Europe's most romantic capital — a city of melancholic fado music, rainbow-tiled facades, vintage trams rattling up cobbled hills, and extraordinary pastéis de nata.",
          "highlights": ["Belém Tower", "Jerónimos Monastery", "Alfama District", "Tram 28", "LX Factory"] },
        { "name": "Porto, Portugal", "type": "cities", "rating": "4.8", "bestTime": "May–Sep",
          "imageUrl": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600",
          "description": "A city carved by the Douro River, where terraced port wine caves face azulejo-adorned churches and the iconic Dom Luís I Bridge links two entirely different worlds.",
          "highlights": ["Livraria Lello", "Ribeira District", "Vila Nova de Gaia Cellars", "Douro Valley", "São Bento Station"] }
      ]
    },
    {
      "id": 18, "name": "Indonesia", "region": "Asia Pacific",
      "cities": [
        { "name": "Bali, Indonesia", "type": "beaches", "rating": "4.9", "bestTime": "Apr–Oct",
          "imageUrl": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600",
          "description": "The Island of the Gods — where rice terraces cascade down volcanic mountainsides, ancient temples greet the sunrise, and spa culture reaches its apex.",
          "highlights": ["Tegallalang Rice Terraces", "Uluwatu Temple", "Seminyak Beach", "Mount Batur Sunrise", "Ubud Monkey Forest"] },
        { "name": "Komodo Island, Indonesia", "type": "adventure", "rating": "4.9", "bestTime": "Apr–Oct",
          "imageUrl": "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=600",
          "description": "Home to the world's largest lizard and some of Southeast Asia's finest snorkelling. Komodo National Park is a raw, extraordinary wilderness island.",
          "highlights": ["Komodo Dragon Trek", "Pink Beach", "Manta Ray Snorkelling", "Padar Island Hike", "Sailing Liveaboard"] }
      ]
    },
    {
      "id": 19, "name": "South Africa", "region": "Africa",
      "cities": [
        { "name": "Cape Town, South Africa", "type": "cities", "rating": "4.9", "bestTime": "Nov–Mar",
          "imageUrl": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600",
          "description": "Arguably the world's most beautiful city — dramatically positioned between Table Mountain and the Atlantic Ocean, with a wine valley at its back door.",
          "highlights": ["Table Mountain", "Cape of Good Hope", "Boulders Penguin Colony", "Stellenbosch Wine Route", "V&A Waterfront"] },
        { "name": "Kruger National Park, South Africa", "type": "adventure", "rating": "5.0", "bestTime": "May–Sep",
          "imageUrl": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600",
          "description": "Africa's flagship safari destination — 20,000 square kilometres of malaria-free bushveld teeming with lions, elephants, rhinos, leopards, and Cape buffalo.",
          "highlights": ["Big Five Game Drives", "Luxury Lodges", "Bush Walks", "Night Safaris", "Blyde River Canyon"] }
      ]
    },
    {
      "id": 20, "name": "Turkey", "region": "Middle East",
      "cities": [
        { "name": "Istanbul, Turkey", "type": "cities", "rating": "4.9", "bestTime": "Apr–May",
          "imageUrl": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600",
          "description": "The city where Europe meets Asia — a magnificent metropolis of Ottoman mosques, Byzantine basilicas, teeming bazaars, and a Bosphorus strait that cleaves continents.",
          "highlights": ["Hagia Sophia", "Topkapı Palace", "Grand Bazaar", "Bosphorus Cruise", "Galata Tower"] },
        { "name": "Cappadocia, Turkey", "type": "adventure", "rating": "5.0", "bestTime": "Apr–Jun",
          "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600",
          "description": "An otherworldly landscape of fairy chimneys, cave churches, and underground cities sculpted by millennia of volcanic activity. Best experienced by hot air balloon at dawn.",
          "highlights": ["Hot Air Balloon Ride", "Göreme Open Air Museum", "Underground City", "Derinkuyu Caves", "Rose Valley Hike"] }
      ]
    }
  ],
  "temples": [
    { "id": 1, "name": "Angkor Wat, Cambodia", "type": "temples", "rating": "5.0", "bestTime": "Nov–Mar",
      "imageUrl": "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600",
      "description": "The world's largest religious monument — a 12th-century Khmer masterpiece rising from the Cambodian jungle. Angkor Wat is humbling in its scale and spiritual power.",
      "highlights": ["Sunrise at Angkor", "Bayon Temple", "Ta Prohm (Tomb Raider)", "Phnom Bakheng", "Siem Reap Night Market"] },
    { "id": 2, "name": "Taj Mahal, India", "type": "temples", "rating": "5.0", "bestTime": "Oct–Mar",
      "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
      "description": "The world's greatest love poem written in white marble. Shah Jahan's tribute to his wife Mumtaz Mahal is arguably the most beautiful building on earth.",
      "highlights": ["Sunrise Views", "Moonlight Visits", "Agra Fort", "Mehtab Bagh", "Local Marble Artisans"] },
    { "id": 3, "name": "Borobudur, Indonesia", "type": "temples", "rating": "4.9", "bestTime": "May–Sep",
      "imageUrl": "https://images.unsplash.com/photo-1596710548773-c5a5db92f8d4?w=600",
      "description": "The world's largest Buddhist temple, rising from a misty Javanese plain with 504 Buddha statues and 2,670 intricately carved relief panels. A UNESCO World Heritage site.",
      "highlights": ["Sunrise Tour", "Relief Panel Carvings", "Prambanan Temple", "Yogyakarta City", "Merapi Volcano"] },
    { "id": 4, "name": "Machu Picchu Temples, Peru", "type": "temples", "rating": "5.0", "bestTime": "May–Sep",
      "imageUrl": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600",
      "description": "Sacred site of the Inca Empire hidden in the clouds. The Temple of the Sun and Intihuatana Stone reveal the Inca's profound understanding of astronomy and spirituality.",
      "highlights": ["Temple of the Sun", "Intihuatana Stone", "Temple of Three Windows", "Agricultural Terraces", "Llama Encounters"] }
  ],
  "beaches": [
    { "id": 1, "name": "Bora Bora, French Polynesia", "type": "beaches", "rating": "5.0", "bestTime": "May–Oct",
      "imageUrl": "https://images.unsplash.com/photo-1589197331516-2e2b3a4a0f4a?w=600",
      "description": "The most beautiful island in the world. Bora Bora's lagoon — a technicolour palette of every shade of blue imaginable — surrounds a dormant volcanic peak with perfect symmetry.",
      "highlights": ["Overwater Bungalows", "Snorkelling Lagoon", "Mount Otemanu", "Shark & Ray Feeding", "Sunset Sailing"] },
    { "id": 2, "name": "Maldives", "type": "beaches", "rating": "5.0", "bestTime": "Nov–Apr",
      "imageUrl": "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600",
      "description": "An archipelago of 1,200 coral islands in the Indian Ocean. The Maldives is the ultimate expression of tropical luxury — endless white sand, gin-clear water, and absolute serenity.",
      "highlights": ["Underwater Restaurants", "Whale Shark Snorkelling", "Private Island Stays", "Sunset Cruises", "Bioluminescent Beach"] },
    { "id": 3, "name": "Amalfi Coast, Italy", "type": "beaches", "rating": "4.9", "bestTime": "May–Sep",
      "imageUrl": "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600",
      "description": "A UNESCO-listed coastline of dramatic limestone cliffs tumbling into turquoise Mediterranean waters, studded with pastel-coloured villages clinging impossibly to the rock.",
      "highlights": ["Positano Village", "Path of the Gods Hike", "Ravello Gardens", "Boat to Capri", "Limoncello Tasting"] },
    { "id": 4, "name": "Ha Long Bay, Vietnam", "type": "beaches", "rating": "4.9", "bestTime": "Oct–Apr",
      "imageUrl": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600",
      "description": "A seascape from another world — nearly 2,000 limestone karsts and islands rising dramatically from an emerald bay. A UNESCO World Heritage site of breathtaking beauty.",
      "highlights": ["Overnight Junk Cruise", "Kayaking Caves", "Floating Villages", "Titop Island", "Sunrise Tai Chi"] },
    { "id": 5, "name": "Whitsundays, Australia", "type": "beaches", "rating": "4.9", "bestTime": "Jun–Oct",
      "imageUrl": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600",
      "description": "74 pristine islands in the heart of Australia's Great Barrier Reef Marine Park. Whitehaven Beach's silica sand is so pure it squeaks underfoot.",
      "highlights": ["Whitehaven Beach", "Heart Reef Scenic Flight", "Great Barrier Reef Diving", "Sailing Charter", "Hill Inlet Lookout"] }
  ],
  "mountains": [
    { "id": 1, "name": "Swiss Alps, Switzerland", "type": "mountains", "rating": "5.0", "bestTime": "Dec–Mar",
      "imageUrl": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600",
      "description": "Europe's most spectacular mountain range — soaring peaks, crystalline lakes, and impossibly picturesque villages. The Swiss Alps represent Alpine perfection.",
      "highlights": ["Jungfraujoch", "Grindelwald", "Zermatt & Matterhorn", "Lake Geneva", "Glacier Express Train"] },
    { "id": 2, "name": "Himalayan Foothills, Nepal", "type": "mountains", "rating": "5.0", "bestTime": "Oct–Nov",
      "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
      "description": "Home to eight of the world's ten highest peaks. The Himalayas are a spiritual and physical challenge unlike any other — trekking here transforms lives.",
      "highlights": ["Everest Base Camp Trek", "Annapurna Circuit", "Kathmandu Valley", "Pokhara Lakes", "Buddhist Monasteries"] },
    { "id": 3, "name": "Dolomites, Italy", "type": "mountains", "rating": "4.9", "bestTime": "Jun–Sep",
      "imageUrl": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      "description": "Often called the most beautiful mountains in the world, the Dolomites turn rose-gold at sunset in a phenomenon called 'enrosadira.' A UNESCO World Heritage masterpiece.",
      "highlights": ["Tre Cime di Lavaredo", "Cortina d'Ampezzo", "Val Gardena", "Via Ferrata Climbing", "Lago di Braies"] }
  ]
};

// ==================== GLOBALS ====================
let allItems = [];
let displayedItems = [];
let currentFilter = 'all';
let currentDisplayCount = 9;
const ITEMS_PER_LOAD = 6;

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    buildAllItems();
    renderDestinations();
    initFilterBtns();
    initSearch();
    initHeroSlider();
    initScrollEffects();
    initSmoothScroll();
    initLoader();
});

function initLoader() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('fade-out');
    }, 2200);
}

// ==================== DATA PROCESSING ====================
function buildAllItems() {
    allItems = [];

    // Countries / Cities
    travelData.countries.forEach(country => {
        country.cities.forEach(city => {
            allItems.push({
                ...city,
                country: country.name,
                region: country.region,
                category: city.type || 'cities'
            });
        });
    });

    // Temples
    travelData.temples.forEach(t => {
        allItems.push({ ...t, category: 'temples', country: t.name.split(',')[1]?.trim() || '' });
    });

    // Beaches
    travelData.beaches.forEach(b => {
        allItems.push({ ...b, category: 'beaches', country: b.name.split(',')[1]?.trim() || '' });
    });

    // Mountains
    travelData.mountains.forEach(m => {
        allItems.push({ ...m, category: 'mountains', country: m.name.split(',')[1]?.trim() || '' });
    });
}

// ==================== FILTER & RENDER ====================
function initFilterBtns() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            currentDisplayCount = 9;
            renderDestinations();
        });
    });
}

function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    const filtered = currentFilter === 'all'
        ? allItems
        : allItems.filter(item => item.category === currentFilter || item.type === currentFilter);

    displayedItems = filtered;

    const toShow = filtered.slice(0, currentDisplayCount);
    grid.innerHTML = toShow.map(item => createCard(item)).join('');

    const loadBtn = document.getElementById('loadMoreBtn');
    loadBtn.style.display = filtered.length > currentDisplayCount ? 'inline-block' : 'none';
}

function loadMoreDestinations() {
    currentDisplayCount += ITEMS_PER_LOAD;
    renderDestinations();
}

function createCard(item) {
    const categoryLabel = {
        cities: 'City', beaches: 'Beach', temples: 'Temple',
        mountains: 'Mountain', adventure: 'Adventure'
    }[item.category] || item.category;

    return `
    <div class="destination-card" onclick='openDestinationModal(${JSON.stringify(item).replace(/'/g, "&#39;")})'>
        <div class="card-img-wrap">
            <img src="${item.imageUrl}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600'">
            <span class="card-badge">${categoryLabel}</span>
        </div>
        <div class="card-body">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-desc">${item.description}</p>
            <div class="card-footer">
                <span class="card-rating">★ ${item.rating || '4.8'}</span>
                <span class="card-tag">Best: ${item.bestTime || 'Year Round'}</span>
                <button class="card-explore-btn">Explore</button>
            </div>
        </div>
    </div>`;
}

// ==================== SEARCH ====================
function initSearch() {
    const input = document.getElementById('searchInput');
    const dropdown = document.getElementById('suggestions');

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (query.length < 2) { dropdown.classList.remove('visible'); return; }

        const matches = allItems.filter(item =>
            item.name.toLowerCase().includes(query) ||
            (item.country || '').toLowerCase().includes(query) ||
            (item.region || '').toLowerCase().includes(query) ||
            (item.category || '').toLowerCase().includes(query)
        ).slice(0, 6);

        if (!matches.length) { dropdown.classList.remove('visible'); return; }

        dropdown.innerHTML = matches.map(item => `
            <div class="suggestion-item" onclick="selectSuggestion('${item.name.replace(/'/g,"\\'")}')">
                <i class="fa fa-map-marker-alt suggestion-icon"></i>
                <span>${item.name}</span>
                <span style="margin-left:auto;font-size:0.72rem;color:var(--text-muted)">${item.category || ''}</span>
            </div>
        `).join('');
        dropdown.classList.add('visible');
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.hero-search')) dropdown.classList.remove('visible');
    });

    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') searchDestinations();
    });
}

function selectSuggestion(name) {
    document.getElementById('searchInput').value = name;
    document.getElementById('suggestions').classList.remove('visible');
    searchDestinations();
}

function searchDestinations() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    document.getElementById('suggestions').classList.remove('visible');

    if (!query) { showToast('Please enter a destination to search.', 'info'); return; }

    const results = allItems.filter(item =>
        item.name.toLowerCase().includes(query) ||
        (item.country || '').toLowerCase().includes(query) ||
        (item.region || '').toLowerCase().includes(query) ||
        (item.category || '').toLowerCase().includes(query) ||
        (item.description || '').toLowerCase().includes(query)
    );

    const section = document.getElementById('searchResults');
    const grid = document.getElementById('resultsGrid');
    const title = document.getElementById('searchResultsTitle');

    if (!results.length) {
        showToast(`No destinations found for "${query}". Try another search.`, 'error');
        return;
    }

    title.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`;
    grid.innerHTML = results.map(item => createCard(item)).join('');
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(`Found ${results.length} destination${results.length !== 1 ? 's' : ''} ✓`, 'success');
}

function clearResults() {
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchInput').value = '';
    document.getElementById('resultsGrid').innerHTML = '';
    document.getElementById('suggestions').classList.remove('visible');
}

// ==================== DESTINATION MODAL ====================
function openDestinationModal(item) {
    document.getElementById('modalImg').src = item.imageUrl;
    document.getElementById('modalImg').alt = item.name;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalCategory').textContent = item.category || 'Destination';

    document.querySelector('#modalCountry span').textContent = item.country || item.name.split(',')[1]?.trim() || 'International';
    document.querySelector('#modalTime span').textContent = item.bestTime || 'Year Round';
    document.querySelector('#modalRating span').textContent = `${item.rating || '4.8'} / 5.0`;

    document.getElementById('modalDesc').textContent = item.description;

    const highlights = document.getElementById('modalHighlights');
    if (item.highlights && item.highlights.length) {
        highlights.innerHTML = item.highlights.map(h => `<span class="modal-highlight">✦ ${h}</span>`).join('');
    } else {
        highlights.innerHTML = '';
    }

    document.getElementById('bookingDestination').value = item.name;
    openModal('destinationModal');
}

// ==================== EXPERIENCE MODAL ====================
const experienceData = {
    luxury: {
        icon: '<i class="fa-solid fa-crown"></i>', title: 'Luxury Escapes',
        content: `Indulge in the world's most exclusive retreats — private island resorts in the Maldives, palatial riads in Marrakech, and cliff-top villas overlooking the Aegean. Our luxury tier includes dedicated private butler service, private jet transfers, Michelin-starred dining reservations, and access to spaces money alone cannot buy. Starting from $3,500 per night.`,
        highlights: ['Private Island Villas', 'Michelin-Starred Dining', 'Private Jet Transfers', 'Personal Butler Service', 'Exclusive Access Experiences']
    },
    adventure: {
        icon: '<i class="fa-solid fa-mountain-sun"></i>', title: 'Adventure Expeditions',
        content: `Push your limits in the world's most dramatic landscapes. Summit Himalayan passes, dive pristine coral atolls, kayak alongside icebergs in Patagonia, or traverse ancient Silk Road routes with expert local guides. Every expedition is fully supported with professional equipment, emergency protocols, and seasoned expedition leaders.`,
        highlights: ['Himalayan Base Camp Trek', 'Patagonia Expedition', 'Arctic Snowmobile Tour', 'Sahara Camel Trek', 'Scuba Diving Expeditions']
    },
    culture: {
        icon: '<i class="fa-solid fa-landmark"></i>', title: 'Cultural Immersion',
        content: `Go beyond sightseeing. Live with a Berber family in the Moroccan mountains, learn to make ramen from a 3rd-generation Tokyo chef, study Balinese gamelan for a week, or participate in sacred Shinto ceremonies closed to regular tourists. These are the experiences that reshape how you see the world.`,
        highlights: ['Family Homestays', 'Traditional Craft Workshops', 'Sacred Ceremony Access', 'Language & Cooking Classes', 'Off-Itinerary Local Access']
    },
    wellness: {
        icon: '<i class="fa-solid fa-spa"></i>', title: 'Wellness Retreats',
        content: `Restore body and soul in the world's most transformative wellness destinations. Ancient Ayurvedic panchakarma in Kerala's backwaters, silent Vipassana meditation in Kyoto monasteries, mineral hot springs in Iceland's lava fields, and the finest spa resorts across Ubud, Bali and Tuscany, Italy.`,
        highlights: ['Ayurvedic Panchakarma', 'Vipassana Meditation', 'Thermal Spa Retreats', 'Forest Bathing (Shinrin-yoku)', 'Digital Detox Programmes']
    },
    culinary: {
        icon: '<i class="fa-solid fa-utensils"></i>', title: 'Culinary Journeys',
        content: `Travel through taste. Tour Tokyo's 13 Michelin-starred ramen shops, take a private pasta masterclass in a Bologna nonna's kitchen, explore Istanbul's spice bazaars with our resident chef, or spend a week wine-tasting through Burgundy's premier cru vineyards. For those who believe the best way to know a place is to eat it.`,
        highlights: ['Private Chef Masterclasses', 'Wine Estate Tours', 'Market & Street Food Tours', 'Farm-to-Table Experiences', 'Michelin Restaurant Access']
    },
    honeymoon: {
        icon: '<i class="fa-solid fa-heart"></i>', title: 'Honeymoon Collection',
        content: `Begin forever in paradise. Our honeymoon specialists design utterly bespoke romantic journeys — overwater bungalows above Bora Bora's lagoon, private dhow cruises through the Maldives at sunset, hot air balloon rides over Cappadocia at dawn, and private beach picnics on deserted Seychelles shores. Every detail, perfected.`,
        highlights: ['Overwater Bungalows', 'Private Beach Picnics', 'Couples Spa Rituals', 'Sunset Sailing Charters', 'In-Villa Romantic Dining']
    }
};

function openExperienceModal(type) {
    const data = experienceData[type];
    if (!data) return;

    document.getElementById('experienceModalBody').innerHTML = `
        <div style="text-align:center;margin-bottom:1.5rem">
            <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,rgba(201,168,76,0.2),rgba(201,168,76,0.05));border:1px solid rgba(201,168,76,0.2);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;font-size:1.5rem;color:var(--gold)">${data.icon}</div>
            <h2 style="font-family:var(--font-heading);font-size:1.8rem;font-weight:400;color:var(--cream);margin-bottom:1rem">${data.title}</h2>
        </div>
        <p style="font-size:0.93rem;color:rgba(255,255,255,0.75);line-height:1.8;margin-bottom:1.5rem">${data.content}</p>
        <div style="margin-bottom:1.5rem">
            <p style="font-size:0.72rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--gold);font-weight:600;margin-bottom:0.75rem">What's Included</p>
            <div class="modal-highlights">${data.highlights.map(h => `<span class="modal-highlight">✦ ${h}</span>`).join('')}</div>
        </div>
        <div class="modal-actions">
            <button class="cta-btn" onclick="closeModal('experienceModal');openBookingModal()"><i class="fa fa-paper-plane"></i> Enquire Now</button>
            <button class="secondary-btn" onclick="closeModal('experienceModal')">Explore More</button>
        </div>
    `;
    openModal('experienceModal');
}

// ==================== BOOKING MODAL ====================
function openBookingModal() {
    openModal('bookingModal');
}

function handleBookingSubmit(e) {
    e.preventDefault();
    closeModal('bookingModal');
    setTimeout(() => {
        showToast('🎉 Your journey request has been received! Our specialists will contact you within 24 hours.', 'success');
    }, 400);
}

// ==================== CONTACT FORM ====================
function handleContactSubmit(e) {
    e.preventDefault();
    showToast('✓ Message sent successfully! We\'ll be in touch within one business day.', 'success');
    e.target.reset();
}

// ==================== NEWSLETTER ====================
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    document.getElementById('newsletterEmail').value = '';
    showToast('🎉 Welcome to Wanderlust! Your first curated guide is on its way.', 'success');
}

// ==================== MODAL HELPERS ====================
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
}
function closeModalOnBackdrop(e, id) {
    if (e.target === document.getElementById(id)) closeModal(id);
}
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        ['destinationModal','bookingModal','experienceModal'].forEach(id => closeModal(id));
    }
});

// ==================== TOAST ====================
let toastTimer;
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 4500);
}

// ==================== HERO SLIDER ====================
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

// ==================== SCROLL EFFECTS ====================
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 60);
        backToTop.classList.toggle('visible', y > 400);
    });
}

// ==================== NAV MOBILE ====================
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

// Smooth scroll for nav links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}