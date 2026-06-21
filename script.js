document.documentElement.classList.add("js");
document.body.classList.add("is-loading");

const storageKey = "kelowna-site-preferences";
const availableLanguages = ["fr", "en", "es", "de", "hi"];
const availableThemes = ["light", "dark", "sepia", "ocean", "forest"];

const readPreferences = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      lang: availableLanguages.includes(stored.lang) ? stored.lang : "fr",
      theme: availableThemes.includes(stored.theme) ? stored.theme : "light"
    };
  } catch {
    return { lang: "fr", theme: "light" };
  }
};

const preferences = readPreferences();
const translations = {
  fr: {
    languageLabel: "Français",
    themeLabels: { light: "Clair", dark: "Sombre", sepia: "Sépia", ocean: "Océan", forest: "Forêt" },
    brand: "Bienvenue à Kelowna",
    nav: ["Accueil", "Nourriture", "Divertissement", "Activités récréatives", "Transport", "Sites historiques", "Caractéristiques uniques", "Références"],
    cards: ["Nourriture", "Divertissement", "Activités récréatives", "Transport", "Sites historiques", "Caractéristiques uniques", "Références"],
    skipLink: "Aller au contenu",
    closeLabel: "Fermer",
    imageButtonLabel: "Agrandir l’image",
    pageLabels: {
      home: "Accueil",
      food: "Nourriture",
      entertainment: "Divertissement",
      recreation: "Activités récréatives",
      transportation: "Transport",
      historic: "Sites historiques",
      unique: "Caractéristiques uniques",
      works: "Références"
    },
    footer: "Projet de français - Bienvenue dans ma ville - Kelowna",
    heroTitles: {
      home: "Bienvenue à Kelowna",
      food: "FOOD | La Nourriture",
      entertainment: "ENTERTAINMENT | Le Divertissement",
      recreation: "RECREATION | Les Activités Récréatives",
      transportation: "TRANSPORTATION | Le Transport",
      historic: "HISTORIC SITES | Les Sites Historiques",
      unique: "UNIQUE FEATURES | Les Caractéristiques Uniques",
      works: "Références - Works Cited"
    },
    heroSubtitles: {
      home: "Une visite de ma communauté",
      food: "Découvrez les saveurs locales",
      entertainment: "Découvrez les activités et festivals",
      recreation: "Explorez les espaces de détente",
      transportation: "Découvrez les moyens de déplacement",
      historic: "Découvrez les sites historiques",
      unique: "Découvrez ce qui rend Kelowna unique",
      works: "Sources et références"
    },
    content: {
      home: {
        introText: "Bienvenue à Kelowna, une ville magnifique au cœur de la vallée de l’Okanagan. Cette région est connue pour ses paysages uniques, ses plages, ses montagnes et ses vergers. Dans cette présentation, je vais vous montrer mes endroits préférés pour manger, explorer, me divertir et découvrir l’histoire locale. À mon avis, Kelowna est une destination idéale pour tous ceux qui aiment la nature, la culture et la bonne nourriture."
      },
      food: {
        cards: [
          { heading: "Le centre-ville de Kelowna (Bernard Avenue)", body: "À mon avis, Bernard Avenue est l’un des meilleurs endroits pour manger à Kelowna, parce qu’il y a une grande variété de restaurants pour tous les goûts. C’est une rue très vivante où on peut trouver des cafés, des pizzerias, des restaurants asiatiques et des glaciers. J’aime beaucoup cet endroit puisque l’ambiance est animée, surtout en été quand les terrasses sont ouvertes. Pour moi, c’est l’endroit idéal pour manger avec des amis après une promenade au bord du lac." },
          { heading: "Le quartier Mission", body: "Le quartier Mission est un excellent endroit pour manger, car il est près du lac et offre une ambiance plus calme. On peut y trouver des restaurants élégants, des cafés locaux et des boulangeries artisanales. Je préfère ce quartier lorsque je veux un repas tranquille, parce que l’atmosphère est plus relaxante et les vues sur le lac sont magnifiques." },
          { heading: "Les vignobles et cidreries de l’Okanagan", body: "Les vignobles et les cidreries sont uniques à Kelowna et représentent une grande partie de la culture locale. On peut y goûter des produits faits ici, comme des vins, des cidres et des plats préparés avec des ingrédients locaux. À mon avis, c’est une expérience incontournable parce que ces endroits montrent vraiment la beauté et la richesse de la région." }
        ]
      },
      entertainment: {
        cards: [
          { heading: "Les festivals du centre-ville de Kelowna", body: "À mon avis, les festivals du centre-ville sont parmi les meilleures activités de divertissement à Kelowna. Il y a souvent des concerts, des marchés artisanaux et des événements culturels. J’aime ces festivals parce qu’ils créent une ambiance joyeuse et permettent de découvrir des artistes locaux. C’est un endroit parfait pour passer du temps avec des amis." },
          { heading: "Le centre commercial Orchard Park", body: "Orchard Park est le plus grand centre commercial de Kelowna. On peut y faire du shopping, manger, ou simplement passer du temps à l’intérieur quand il fait trop chaud ou trop froid dehors. Je trouve que c’est un endroit pratique, car il y a beaucoup de magasins différents et on peut tout trouver au même endroit." },
          { heading: "Summerhill Pyramid Winery", body: "Summerhill est un vignoble très connu pour son architecture en forme de pyramide. On peut y faire des visites guidées, goûter du vin et admirer la vue sur le lac. Je pense que c’est un endroit très spécial, parce qu’il combine culture, nature et gastronomie. C’est aussi un lieu très populaire pour les photos." }
        ]
      },
      recreation: {
        cards: [
          { heading: "Le lac Okanagan", body: "Le lac Okanagan est l’un des meilleurs endroits pour faire des activités en plein air. On peut nager, faire du paddleboard, du kayak ou simplement se détendre sur la plage. J’adore cet endroit parce qu’il représente vraiment l’été à Kelowna. C’est un lieu parfait pour passer du temps avec des amis ou en famille." },
          { heading: "Le mont Knox", body: "Knox Mountain est un endroit très populaire pour faire de la randonnée. On peut monter jusqu’au sommet pour admirer une vue incroyable sur la ville et le lac. À mon avis, c’est l’un des plus beaux endroits de Kelowna, parce que la nature y est très présente et les sentiers sont accessibles pour tout le monde." },
          { heading: "Big White", body: "Big White est une station de ski située près de Kelowna. En hiver, on peut y faire du ski, du snowboard et même du patinage. Je pense que c’est un endroit essentiel pour les amateurs de sports d’hiver, car il y a beaucoup de pistes et l’ambiance est très accueillante." }
        ]
      },
      transportation: {
        cards: [
          { heading: "Les voitures personnelles", body: "À Kelowna, la plupart des gens utilisent leur voiture pour se déplacer, parce que la ville est assez grande et les distances peuvent être longues. Je trouve que c’est pratique, car on peut partir quand on veut et aller directement à sa destination." },
          { heading: "BC Transit", body: "BC Transit est le système d’autobus de Kelowna. On peut l’utiliser pour aller au centre-ville, à l’école, au travail ou dans différents quartiers. C’est une bonne option pour les personnes qui n’ont pas de voiture. Cependant, je pense que les horaires ne sont pas toujours pratiques." },
          { heading: "Le réseau de sentiers KVR", body: "Le KVR Trail est un réseau de sentiers très populaire pour faire du vélo ou marcher. Il traverse plusieurs parties de la région et offre de superbes vues. J’aime ce réseau parce qu’il permet de se déplacer tout en profitant de la nature." }
        ]
      },
      historic: {
        cards: [
          { heading: "Les ponts en treillis de Myra Canyon", body: "Les ponts de Myra Canyon sont un site historique très important. Ce sont d’anciens ponts ferroviaires construits au début du 20ᵉ siècle. On peut marcher ou faire du vélo sur les sentiers et admirer les vues spectaculaires. À mon avis, c’est l’un des endroits les plus impressionnants de la région." },
          { heading: "La mission Father Pandosy", body: "La mission Father Pandosy est le premier établissement européen de la vallée de l’Okanagan. On peut y visiter des bâtiments historiques et apprendre l’histoire de la région. Je trouve cet endroit intéressant parce qu’il montre comment Kelowna a commencé." },
          { heading: "The Laurel Packinghouse", body: "Le Laurel Packinghouse est l’un des plus anciens bâtiments de Kelowna. Il servait autrefois à emballer les fruits de la région. Aujourd’hui, c’est un musée et un lieu d’événements. J’aime cet endroit parce qu’il représente l’histoire agricole de l’Okanagan." }
        ]
      },
      unique: {
        cards: [
          { heading: "Le paysage semi-désertique de l’Okanagan", body: "Kelowna est unique parce qu’elle se trouve dans un climat semi-désertique. Il y a des collines sèches, des cactus et beaucoup de soleil. Je pense que ce paysage est très spécial, car il n’existe pas dans la plupart des régions du Canada." },
          { heading: "Les tumbleweeds et les vergers", body: "Les tumbleweeds et les vergers font partie du charme de l’Okanagan. On voit souvent des vergers de pommes, de cerises et de pêches partout dans la région. À mon avis, cela rend Kelowna très unique, parce que l’agriculture fait vraiment partie de l’identité locale." }
        ]
      }
    },
    siteTitle: "Bienvenue à Kelowna"
  },
  en: {
    languageLabel: "English",
    themeLabels: { light: "Light", dark: "Dark", sepia: "Sepia", ocean: "Ocean", forest: "Forest" },
    brand: "Welcome to Kelowna",
    nav: ["Home", "Food", "Entertainment", "Recreation", "Transportation", "Historic Sites", "Unique Features", "Works Cited"],
    cards: ["Food", "Entertainment", "Recreation", "Transportation", "Historic Sites", "Unique Features", "Works Cited"],
    skipLink: "Skip to content",
    closeLabel: "Close",
    imageButtonLabel: "Enlarge image",
    pageLabels: {
      home: "Home",
      food: "Food",
      entertainment: "Entertainment",
      recreation: "Recreation",
      transportation: "Transportation",
      historic: "Historic Sites",
      unique: "Unique Features",
      works: "Works Cited"
    },
    footer: "French project - Welcome to my town - Kelowna",
    heroTitles: {
      home: "Welcome to Kelowna",
      food: "FOOD | Food",
      entertainment: "ENTERTAINMENT | Entertainment",
      recreation: "RECREATION | Recreation",
      transportation: "TRANSPORTATION | Transportation",
      historic: "HISTORIC SITES | Historic Sites",
      unique: "UNIQUE FEATURES | Unique Features",
      works: "Works Cited"
    },
    heroSubtitles: {
      home: "A visit to my community",
      food: "Discover local flavors",
      entertainment: "Discover activities and festivals",
      recreation: "Explore places for recreation",
      transportation: "Discover how to get around",
      historic: "Discover the historic sites",
      unique: "Discover what makes Kelowna unique",
      works: "Sources and references"
    },
    content: {
      home: {
        introText: "Welcome to Kelowna, a beautiful city at the heart of the Okanagan Valley. This region is known for its unique landscapes, beaches, mountains, and orchards. In this presentation, I will show you my favorite places to eat, explore, be entertained, and discover local history. In my opinion, Kelowna is an ideal destination for anyone who loves nature, culture, and good food."
      },
      food: {
        cards: [
          { heading: "Downtown Kelowna (Bernard Avenue)", body: "In my opinion, Bernard Avenue is one of the best places to eat in Kelowna, because there is a wide variety of restaurants for all tastes. It is a very lively street where you can find cafés, pizzerias, Asian restaurants, and ice cream shops. I like this place a lot because the atmosphere is lively, especially in summer when the terraces are open. For me, it is the ideal place to eat with friends after a walk along the lake." },
          { heading: "The Mission district", body: "The Mission district is an excellent place to eat, because it is close to the lake and offers a calmer atmosphere. You can find elegant restaurants, local cafés, and artisan bakeries there. I prefer this neighborhood when I want a quiet meal, because the atmosphere is more relaxing and the views of the lake are magnificent." },
          { heading: "The Okanagan vineyards and cideries", body: "The vineyards and cideries are unique to Kelowna and represent a large part of the local culture. You can taste products made here, such as wines, ciders, and dishes prepared with local ingredients. In my opinion, it is an experience you should not miss because these places truly show the beauty and richness of the region." }
        ]
      },
      entertainment: {
        cards: [
          { heading: "The downtown Kelowna festivals", body: "In my opinion, the downtown festivals are among the best entertainment activities in Kelowna. There are often concerts, artisan markets, and cultural events. I like these festivals because they create a joyful atmosphere and allow you to discover local artists. It is a perfect place to spend time with friends." },
          { heading: "The Orchard Park shopping centre", body: "Orchard Park is the largest shopping centre in Kelowna. You can shop, eat, or simply spend time indoors when it is too hot or too cold outside. I think it is a practical place, because there are many different stores and you can find everything in one place." },
          { heading: "Summerhill Pyramid Winery", body: "Summerhill is a very well-known vineyard for its pyramid-shaped architecture. You can take guided tours, taste wine, and admire the view of the lake. I think it is a very special place because it combines culture, nature, and gastronomy. It is also a very popular place for photos." }
        ]
      },
      recreation: {
        cards: [
          { heading: "Okanagan Lake", body: "Okanagan Lake is one of the best places for outdoor activities. You can swim, paddleboard, kayak, or simply relax on the beach. I love this place because it truly represents summer in Kelowna. It is a perfect place to spend time with friends or family." },
          { heading: "Knox Mountain", body: "Knox Mountain is a very popular place for hiking. You can go to the top to admire an incredible view of the city and the lake. In my opinion, it is one of the most beautiful places in Kelowna, because nature is very present there and the trails are accessible to everyone." },
          { heading: "Big White", body: "Big White is a ski resort located near Kelowna. In winter, you can ski, snowboard, and even skate there. I think it is an essential place for winter sports enthusiasts, because there are many slopes and the atmosphere is very welcoming." }
        ]
      },
      transportation: {
        cards: [
          { heading: "Personal cars", body: "In Kelowna, most people use their cars to get around, because the city is fairly large and the distances can be long. I find that this is practical, because you can leave when you want and go directly to your destination." },
          { heading: "BC Transit", body: "BC Transit is Kelowna’s bus system. You can use it to get to downtown, school, work, or different neighborhoods. It is a good option for people who do not have a car. However, I think the schedules are not always practical." },
          { heading: "The KVR Trail network", body: "The KVR Trail is a very popular network of trails for cycling or walking. It crosses several parts of the region and offers superb views. I like this network because it allows you to move around while enjoying nature." }
        ]
      },
      historic: {
        cards: [
          { heading: "The trestle bridges of Myra Canyon", body: "The bridges of Myra Canyon are a very important historical site. They are old railway bridges built at the beginning of the 20th century. You can walk or cycle on the trails and admire the spectacular views. In my opinion, it is one of the most impressive places in the region." },
          { heading: "Father Pandosy Mission", body: "Father Pandosy Mission is the first European settlement in the Okanagan Valley. You can visit historic buildings there and learn about the region’s history. I find this place interesting because it shows how Kelowna began." },
          { heading: "The Laurel Packinghouse", body: "The Laurel Packinghouse is one of the oldest buildings in Kelowna. It was once used to pack the region’s fruit. Today, it is a museum and event space. I like this place because it represents the agricultural history of the Okanagan." }
        ]
      },
      unique: {
        cards: [
          { heading: "The semi-desert landscape of the Okanagan", body: "Kelowna is unique because it is located in a semi-desert climate. There are dry hills, cacti, and lots of sun. I think this landscape is very special, because it does not exist in most parts of Canada." },
          { heading: "Tumbleweeds and orchards", body: "Tumbleweeds and orchards are part of the charm of the Okanagan. You often see apple, cherry, and peach orchards all over the region. In my opinion, this makes Kelowna very unique, because agriculture is truly part of the local identity." }
        ]
      }
    },
    siteTitle: "Welcome to Kelowna"
  },
  es: {
    languageLabel: "Español",
    themeLabels: { light: "Claro", dark: "Oscuro", sepia: "Sepia", ocean: "Océano", forest: "Bosque" },
    brand: "Bienvenidos a Kelowna",
    nav: ["Inicio", "Comida", "Entretenimiento", "Recreación", "Transporte", "Lugares históricos", "Características únicas", "Referencias"],
    cards: ["Comida", "Entretenimiento", "Recreación", "Transporte", "Lugares históricos", "Características únicas", "Referencias"],
    skipLink: "Ir al contenido",
    closeLabel: "Cerrar",
    imageButtonLabel: "Ampliar imagen",
    pageLabels: {
      home: "Inicio",
      food: "Comida",
      entertainment: "Entretenimiento",
      recreation: "Recreación",
      transportation: "Transporte",
      historic: "Lugares históricos",
      unique: "Características únicas",
      works: "Referencias"
    },
    footer: "Proyecto de francés - Bienvenidos a mi ciudad - Kelowna",
    heroTitles: {
      home: "Bienvenidos a Kelowna",
      food: "COMIDA | La Comida",
      entertainment: "ENTRETENIMIENTO | Entretenimiento",
      recreation: "RECREACIÓN | Recreación",
      transportation: "TRANSPORTE | Transporte",
      historic: "LUGARES HISTÓRICOS | Lugares Históricos",
      unique: "CARACTERÍSTICAS ÚNICAS | Características Únicas",
      works: "Referencias"
    },
    heroSubtitles: {
      home: "Una visita a mi comunidad",
      food: "Descubre los sabores locales",
      entertainment: "Descubre actividades y festivales",
      recreation: "Explora lugares de recreación",
      transportation: "Descubre cómo moverte",
      historic: "Descubre los sitios históricos",
      unique: "Descubre lo que hace única a Kelowna",
      works: "Fuentes y referencias"
    },
    content: {
      home: {
        introText: "Bienvenidos a Kelowna, una hermosa ciudad en el corazón del valle de Okanagan. Esta región es conocida por sus paisajes únicos, sus playas, sus montañas y sus huertos. En esta presentación, voy a mostrarles mis lugares favoritos para comer, explorar, divertirme y descubrir la historia local. En mi opinión, Kelowna es un destino ideal para todos los que aman la naturaleza, la cultura y la buena comida."
      },
      food: {
        cards: [
          { heading: "El centro de Kelowna (Bernard Avenue)", body: "En mi opinión, Bernard Avenue es uno de los mejores lugares para comer en Kelowna, porque hay una gran variedad de restaurantes para todos los gustos. Es una calle muy animada donde se pueden encontrar cafés, pizzerías, restaurantes asiáticos y heladerías. Me gusta mucho este lugar porque el ambiente es animado, especialmente en verano cuando las terrazas están abiertas. Para mí, es el lugar ideal para comer con amigos después de pasear junto al lago." },
          { heading: "El barrio Mission", body: "El barrio Mission es un excelente lugar para comer, porque está cerca del lago y ofrece un ambiente más tranquilo. Se pueden encontrar restaurantes elegantes, cafés locales y panaderías artesanales. Prefiero este barrio cuando quiero una comida tranquila, porque la atmósfera es más relajante y las vistas del lago son magníficas." },
          { heading: "Los viñedos y sidrerías de Okanagan", body: "Los viñedos y las sidrerías son únicos en Kelowna y representan una gran parte de la cultura local. Se pueden probar productos hechos aquí, como vinos, sidras y platos preparados con ingredientes locales. En mi opinión, es una experiencia imprescindible porque estos lugares muestran verdaderamente la belleza y la riqueza de la región." }
        ]
      },
      entertainment: {
        cards: [
          { heading: "Los festivales del centro de Kelowna", body: "En mi opinión, los festivales del centro son entre las mejores actividades de entretenimiento en Kelowna. A menudo hay conciertos, mercados artesanales y eventos culturales. Me gustan estos festivales porque crean un ambiente alegre y permiten descubrir artistas locales. Es un lugar perfecto para pasar tiempo con amigos." },
          { heading: "El centro comercial Orchard Park", body: "Orchard Park es el centro comercial más grande de Kelowna. Se puede comprar, comer o simplemente pasar tiempo en el interior cuando hace demasiado calor o demasiado frío fuera. Creo que es un lugar práctico, porque hay muchos comercios diferentes y se puede encontrar todo en un mismo lugar." },
          { heading: "Summerhill Pyramid Winery", body: "Summerhill es un viñedo muy conocido por su arquitectura en forma de pirámide. Se pueden hacer visitas guiadas, probar vino y admirar la vista del lago. Creo que es un lugar muy especial porque combina cultura, naturaleza y gastronomía. También es un lugar muy popular para hacer fotos." }
        ]
      },
      recreation: {
        cards: [
          { heading: "El lago Okanagan", body: "El lago Okanagan es uno de los mejores lugares para hacer actividades al aire libre. Se puede nadar, hacer paddleboard, kayak o simplemente relajarse en la playa. Me encanta este lugar porque realmente representa el verano en Kelowna. Es un lugar perfecto para pasar tiempo con amigos o en familia." },
          { heading: "La montaña Knox", body: "Knox Mountain es un lugar muy popular para hacer senderismo. Se puede subir hasta la cima para admirar una increíble vista de la ciudad y del lago. En mi opinión, es uno de los lugares más bellos de Kelowna, porque la naturaleza está muy presente y los senderos son accesibles para todo el mundo." },
          { heading: "Big White", body: "Big White es una estación de esquí situada cerca de Kelowna. En invierno, se puede esquiar, hacer snowboard e incluso patinar allí. Creo que es un lugar esencial para los amantes de los deportes de invierno, porque hay muchas pistas y el ambiente es muy acogedor." }
        ]
      },
      transportation: {
        cards: [
          { heading: "Los coches particulares", body: "En Kelowna, la mayoría de la gente usa su coche para moverse, porque la ciudad es bastante grande y las distancias pueden ser largas. Creo que es práctico, porque se puede salir cuando uno quiere y llegar directamente al destino." },
          { heading: "BC Transit", body: "BC Transit es el sistema de autobuses de Kelowna. Se puede usar para ir al centro, a la escuela, al trabajo o a distintos barrios. Es una buena opción para las personas que no tienen coche. Sin embargo, creo que los horarios no siempre son prácticos." },
          { heading: "La red de senderos KVR", body: "El KVR Trail es una red de senderos muy popular para ir en bicicleta o caminar. Cruza varias partes de la región y ofrece unas vistas magníficas. Me gusta esta red porque permite moverse mientras se disfruta de la naturaleza." }
        ]
      },
      historic: {
        cards: [
          { heading: "Los puentes en celosía de Myra Canyon", body: "Los puentes de Myra Canyon son un lugar histórico muy importante. Son antiguos puentes ferroviarios construidos a principios del siglo XX. Se puede caminar o ir en bicicleta por los senderos y admirar las vistas espectaculares. En mi opinión, es uno de los lugares más impresionantes de la región." },
          { heading: "La misión Father Pandosy", body: "La misión Father Pandosy es el primer asentamiento europeo del valle de Okanagan. Se pueden visitar edificios históricos y aprender la historia de la región. Encuentro este lugar interesante porque muestra cómo empezó Kelowna." },
          { heading: "The Laurel Packinghouse", body: "The Laurel Packinghouse es uno de los edificios más antiguos de Kelowna. Antiguamente servía para empaquetar la fruta de la región. Hoy en día, es un museo y un lugar de eventos. Me gusta este lugar porque representa la historia agrícola de Okanagan." }
        ]
      },
      unique: {
        cards: [
          { heading: "El paisaje semi-desértico de Okanagan", body: "Kelowna es única porque se encuentra en un clima semi-desértico. Hay colinas secas, cactus y mucho sol. Creo que este paisaje es muy especial, porque no existe en la mayoría de las regiones de Canadá." },
          { heading: "Los tumbleweeds y los huertos", body: "Los tumbleweeds y los huertos forman parte del encanto de Okanagan. A menudo se ven huertos de manzanas, cerezas y melocotones por toda la región. En mi opinión, esto hace que Kelowna sea muy única, porque la agricultura forma realmente parte de la identidad local." }
        ]
      }
    },
    siteTitle: "Bienvenidos a Kelowna"
  },
  de: {
    languageLabel: "Deutsch",
    themeLabels: { light: "Hell", dark: "Dunkel", sepia: "Sepia", ocean: "Ozean", forest: "Wald" },
    brand: "Willkommen in Kelowna",
    nav: ["Startseite", "Essen", "Unterhaltung", "Erholung", "Transport", "Historische Orte", "Besondere Merkmale", "Quellen"],
    cards: ["Essen", "Unterhaltung", "Erholung", "Transport", "Historische Orte", "Besondere Merkmale", "Quellen"],
    skipLink: "Zum Inhalt springen",
    closeLabel: "Schließen",
    imageButtonLabel: "Bild vergrößern",
    pageLabels: {
      home: "Startseite",
      food: "Essen",
      entertainment: "Unterhaltung",
      recreation: "Erholung",
      transportation: "Transport",
      historic: "Historische Orte",
      unique: "Besondere Merkmale",
      works: "Quellen"
    },
    footer: "Französisches Projekt - Willkommen in meiner Stadt - Kelowna",
    heroTitles: {
      home: "Willkommen in Kelowna",
      food: "ESSEN | Essen",
      entertainment: "UNTERHALTUNG | Unterhaltung",
      recreation: "ERHOLUNG | Freizeitaktivitäten",
      transportation: "VERKEHR | Transport",
      historic: "HISTORISCHE ORTE | Historische Orte",
      unique: "BESONDERE MERKMALE | Besondere Merkmale",
      works: "Quellen"
    },
    heroSubtitles: {
      home: "Ein Besuch in meiner Gemeinschaft",
      food: "Entdecke lokale Geschmäcker",
      entertainment: "Entdecke Aktivitäten und Festivals",
      recreation: "Erkunde Orte zum Entspannen",
      transportation: "Erfahre, wie man sich fortbewegt",
      historic: "Entdecke die historischen Orte",
      unique: "Entdecke, was Kelowna einzigartig macht",
      works: "Quellen und Referenzen"
    },
    content: {
      home: {
        introText: "Willkommen in Kelowna, einer schönen Stadt im Herzen des Okanagan-Tals. Diese Region ist bekannt für ihre einzigartigen Landschaften, Strände, Berge und Obstgärten. In dieser Präsentation zeige ich Ihnen meine Lieblingsorte zum Essen, Erkunden, Sich-unterhalten-Lassen und Entdecken der lokalen Geschichte. Meiner Meinung nach ist Kelowna ein ideales Ziel für alle, die Natur, Kultur und gutes Essen lieben."
      },
      food: {
        cards: [
          { heading: "Die Innenstadt von Kelowna (Bernard Avenue)", body: "Meiner Meinung nach ist Bernard Avenue einer der besten Orte zum Essen in Kelowna, weil es dort eine große Vielfalt an Restaurants für jeden Geschmack gibt. Es ist eine sehr lebhafte Straße, auf der man Cafés, Pizzerien, asiatische Restaurants und Eisdielen finden kann. Ich mag diesen Ort sehr, weil die Atmosphäre lebendig ist, besonders im Sommer, wenn die Terrassen geöffnet sind. Für mich ist es der ideale Ort, um nach einem Spaziergang am See mit Freunden zu essen." },
          { heading: "Das Mission-Viertel", body: "Das Mission-Viertel ist ein hervorragender Ort zum Essen, weil es nahe am See liegt und eine ruhigere Atmosphäre bietet. Dort kann man elegante Restaurants, lokale Cafés und handwerkliche Bäckereien finden. Ich bevorzuge dieses Viertel, wenn ich eine ruhige Mahlzeit möchte, weil die Atmosphäre entspannter ist und die Aussicht auf den See wunderschön ist." },
          { heading: "Die Weinberge und Cidre der Okanagan-Region", body: "Die Weinberge und Cidre sind in Kelowna einzigartig und stellen einen großen Teil der lokalen Kultur dar. Dort kann man Produkte probieren, die hier hergestellt werden, wie Wein, Cider und Gerichte mit lokalen Zutaten. Meiner Meinung nach ist das ein unvergessliches Erlebnis, weil diese Orte wirklich die Schönheit und den Reichtum der Region zeigen." }
        ]
      },
      entertainment: {
        cards: [
          { heading: "Die Festivals im Stadtzentrum von Kelowna", body: "Meiner Meinung nach gehören die Festivals im Stadtzentrum zu den besten Unterhaltungsaktivitäten in Kelowna. Oft gibt es Konzerte, Kunsthandwerksmärkte und kulturelle Veranstaltungen. Ich mag diese Festivals, weil sie eine fröhliche Atmosphäre schaffen und es ermöglichen, lokale Künstler kennenzulernen. Es ist ein perfekter Ort, um Zeit mit Freunden zu verbringen." },
          { heading: "Das Einkaufszentrum Orchard Park", body: "Orchard Park ist das größte Einkaufszentrum von Kelowna. Man kann dort einkaufen, essen oder einfach Zeit drinnen verbringen, wenn es draußen zu heiß oder zu kalt ist. Ich finde, es ist ein praktischer Ort, weil es viele verschiedene Geschäfte gibt und man alles an einem Ort finden kann." },
          { heading: "Summerhill Pyramid Winery", body: "Summerhill ist ein sehr bekanntes Weingut wegen seiner pyramidenförmigen Architektur. Dort kann man Führungen machen, Wein probieren und den Blick auf den See bewundern. Ich denke, es ist ein sehr besonderer Ort, weil er Kultur, Natur und Gastronomie verbindet. Es ist außerdem ein sehr beliebter Ort zum Fotografieren." }
        ]
      },
      recreation: {
        cards: [
          { heading: "Der Okanagan-See", body: "Der Okanagan-See ist einer der besten Orte für Aktivitäten im Freien. Man kann schwimmen, Paddleboard fahren, Kajak fahren oder einfach am Strand entspannen. Ich liebe diesen Ort, weil er wirklich den Sommer in Kelowna verkörpert. Es ist ein perfekter Ort, um Zeit mit Freunden oder der Familie zu verbringen." },
          { heading: "Der Mount Knox", body: "Knox Mountain ist ein sehr beliebter Ort zum Wandern. Man kann bis zum Gipfel gehen und eine unglaubliche Aussicht auf die Stadt und den See bewundern. Meiner Meinung nach ist es einer der schönsten Orte in Kelowna, weil die Natur dort sehr präsent ist und die Wege für jedermann zugänglich sind." },
          { heading: "Big White", body: "Big White ist ein Skigebiet in der Nähe von Kelowna. Im Winter kann man dort Ski fahren, Snowboard fahren und sogar Schlittschuh laufen. Ich denke, es ist ein wesentlicher Ort für Wintersportfans, weil es viele Pisten gibt und die Atmosphäre sehr gastfreundlich ist." }
        ]
      },
      transportation: {
        cards: [
          { heading: "Private Autos", body: "In Kelowna benutzen die meisten Menschen ihr Auto, um sich fortzubewegen, weil die Stadt ziemlich groß ist und die Entfernungen lang sein können. Ich finde das praktisch, weil man jederzeit losfahren und direkt an sein Ziel gelangen kann." },
          { heading: "BC Transit", body: "BC Transit ist das Busystem von Kelowna. Man kann es benutzen, um in die Innenstadt, zur Schule, zur Arbeit oder in verschiedene Viertel zu gelangen. Es ist eine gute Option für Menschen, die kein Auto haben. Ich denke aber, dass die Fahrpläne nicht immer praktisch sind." },
          { heading: "Das KVR-Wanderwegnetz", body: "Der KVR Trail ist ein sehr beliebtes Wegenetz zum Radfahren oder Wandern. Er durchquert mehrere Teile der Region und bietet wunderschöne Ausblicke. Ich mag dieses Netz, weil es erlaubt, sich fortzubewegen und gleichzeitig die Natur zu genießen." }
        ]
      },
      historic: {
        cards: [
          { heading: "Die Trestle-Brücken von Myra Canyon", body: "Die Brücken von Myra Canyon sind ein sehr wichtiger historischer Ort. Es sind alte Eisenbahnbrücken aus dem frühen 20. Jahrhundert. Man kann auf den Wegen laufen oder Fahrrad fahren und die spektakulären Aussichten bewundern. Meiner Meinung nach ist es einer der beeindruckendsten Orte der Region." },
          { heading: "Die Father-Pandosy-Mission", body: "Die Father-Pandosy-Mission ist die erste europäische Siedlung im Okanagan-Tal. Dort kann man historische Gebäude besichtigen und etwas über die Geschichte der Region lernen. Ich finde diesen Ort interessant, weil er zeigt, wie Kelowna entstanden ist." },
          { heading: "The Laurel Packinghouse", body: "The Laurel Packinghouse ist eines der ältesten Gebäude von Kelowna. Früher wurde es benutzt, um die Früchte der Region zu verpacken. Heute ist es ein Museum und ein Veranstaltungsort. Ich mag diesen Ort, weil er die landwirtschaftliche Geschichte der Okanagan-Region repräsentiert." }
        ]
      },
      unique: {
        cards: [
          { heading: "Die halbwüstenartige Landschaft der Okanagan-Region", body: "Kelowna ist einzigartig, weil es in einem halbwüstenartigen Klima liegt. Dort gibt es trockene Hügel, Kakteen und viel Sonne. Ich denke, diese Landschaft ist sehr besonders, weil sie in den meisten Teilen Kanadas nicht vorkommt." },
          { heading: "Tumbleweeds und Obstgärten", body: "Tumbleweeds und Obstgärten sind Teil des Charmes der Okanagan-Region. Man sieht oft Obstgärten mit Äpfeln, Kirschen und Pfirsichen überall in der Region. Meiner Meinung nach macht das Kelowna sehr einzigartig, weil die Landwirtschaft wirklich Teil der lokalen Identität ist." }
        ]
      }
    },
    siteTitle: "Willkommen in Kelowna"
  },
  hi: {
    languageLabel: "हिंदी",
    themeLabels: { light: "हल्का", dark: "गहरा", sepia: "सीपिया", ocean: "महासागर", forest: "वन" },
    brand: "केलाउना में आपका स्वागत है",
    nav: ["घर", "खाना", "मनोरंजन", "मनोरंजन", "परिवहन", "ऐतिहासिक स्थल", "अनूठी विशेषताएँ", "संदर्भ"],
    cards: ["खाना", "मनोरंजन", "मनोरंजन", "परिवहन", "ऐतिहासिक स्थल", "अनूठी विशेषताएँ", "संदर्भ"],
    skipLink: "सामग्री पर जाएँ",
    closeLabel: "बंद करें",
    imageButtonLabel: "चित्र बड़ा करें",
    pageLabels: {
      home: "घर",
      food: "खाना",
      entertainment: "मनोरंजन",
      recreation: "मनोरंजन",
      transportation: "परिवहन",
      historic: "ऐतिहासिक स्थल",
      unique: "अनूठी विशेषताएँ",
      works: "संदर्भ"
    },
    footer: "फ्रांसीसी परियोजना - मेरी शहर में आपका स्वागत है - केलाउना",
    heroTitles: {
      home: "केलाउना में आपका स्वागत है",
      food: "खाना | भोजन",
      entertainment: "मनोरंजन | मनोरंजन",
      recreation: "मनोरंजन | मनोरंजन",
      transportation: "परिवहन | परिवहन",
      historic: "ऐतिहासिक स्थल | ऐतिहासिक स्थल",
      unique: "अनूठी विशेषताएँ | अनूठी विशेषताएँ",
      works: "संदर्भ"
    },
    heroSubtitles: {
      home: "मेरी समुदाय की यात्रा",
      food: "स्थानीय स्वादों की खोज करें",
      entertainment: "गतिविधियों और त्योहारों की खोज करें",
      recreation: "मनोरंजन के स्थानों की खोज करें",
      transportation: "कैसे घूमना है यह जानें",
      historic: "ऐतिहासिक स्थलों की खोज करें",
      unique: "जानें कि केलाउना को अनोखा क्या बनाता है",
      works: "स्रोत और संदर्भ"
    },
    content: {
      home: {
        introText: "ओकानागन घाटी के केंद्र में स्थित केलाउना एक सुंदर शहर है। यह क्षेत्र अपने अनूठे परिदृश्यों, समुद्र तटों, पहाड़ों और बागानों के लिए जाना जाता है। इस प्रस्तुति में, मैं आपको खाने, खोजने, मनोरंजन करने और स्थानीय इतिहास को जानने के लिए अपने पसंदीदा स्थान दिखाऊँगा। मेरी राय में, केलाउना प्रकृति, संस्कृति और अच्छे भोजन से प्यार करने वालों के लिए एक आदर्श गंतव्य है।"
      },
      food: {
        cards: [
          { heading: "डाउनटाउन केलाउना (बर्नार्ड एवेन्यू)", body: "मेरी राय में, बर्नार्ड एवेन्यू केलाउना में खाना खाने के सबसे अच्छे स्थानों में से एक है, क्योंकि वहाँ हर स्वाद के लिए बहुत तरह के रेस्तरां हैं। यह एक बहुत ही जीवंत सड़क है, जहाँ आप कैफे, पिज़्ज़ेरिया, एशियाई रेस्तरां और आइसक्रीम शॉप पा सकते हैं। मुझे यह जगह बहुत पसंद है, क्योंकि यहाँ का माहौल जीवंत है, खासकर गर्मियों में जब छतें खुली होती हैं। मेरे लिए, यह झील के किनारे टहलने के बाद दोस्तों के साथ खाना खाने का आदर्श स्थान है।" },
          { heading: "मिशन पड़ोस", body: "मिशन पड़ोस खाना खाने के लिए एक उत्कृष्ट स्थान है, क्योंकि यह झील के पास है और एक अधिक शांत वातावरण प्रदान करता है। वहाँ आप सुरुचिपूर्ण रेस्तरां, स्थानीय कैफे और हस्तशिल्प बेकरियों को पा सकते हैं। मैं इस पड़ोस को पसंद करता हूँ जब मैं शांत भोजन चाहता हूँ, क्योंकि यहाँ का वातावरण अधिक आरामदायक है और झील के दृश्य बहुत सुंदर हैं।" },
          { heading: "ओकानागन के अंगूर के बागान और सिडरी", body: "केलाउना में अंगूर के बागान और सिडरी अनूठे हैं और स्थानीय संस्कृति का बड़ा हिस्सा हैं। यहाँ आप स्थानीय सामग्री से बने उत्पादों, जैसे वाइन, सिडर और व्यंजनों का स्वाद ले सकते हैं। मेरी राय में, यह एक ऐसा अनुभव है जिसे मिस नहीं करना चाहिए, क्योंकि ये जगहें इस क्षेत्र की सुंदरता और समृद्धि को वास्तव में दिखाती हैं।" }
        ]
      },
      entertainment: {
        cards: [
          { heading: "डाउनटाउन केलाउना के त्योहार", body: "मेरी राय में, डाउनटाउन के त्योहार केलाउना में मनोरंजन की सबसे अच्छी गतिविधियों में से हैं। अक्सर वहाँ संगीत कार्यक्रम, हस्तशिल्प बाजार और सांस्कृतिक कार्यक्रम होते हैं। मुझे ये त्योहार पसंद हैं क्योंकि वे एक हँसमुख वातावरण बनाते हैं और स्थानीय कलाकारों को खोजने की अनुमति देते हैं। यह दोस्तों के साथ समय बिताने के लिए एक आदर्श जगह है।" },
          { heading: "ऑर्चर्ड पार्क शॉपिंग सेंटर", body: "ऑर्चर्ड पार्क केलाउना का सबसे बड़ा शॉपिंग सेंटर है। वहाँ आप खरीदारी कर सकते हैं, खाना खा सकते हैं, या बाहर बहुत अधिक गरम या बहुत अधिक ठंड होने पर अंदर समय बिता सकते हैं। मुझे लगता है कि यह एक व्यावहारिक जगह है, क्योंकि वहाँ बहुत सारे अलग-अलग स्टोर हैं और आप सब कुछ एक ही जगह पा सकते हैं।" },
          { heading: "समरहिल पिरामिड वाइनरी", body: "समरहिल अपनी पिरामिड जैसी वास्तुकला के लिए बहुत प्रसिद्ध वाइनरी है। वहाँ आप गाइडेड टूर कर सकते हैं, वाइन का स्वाद ले सकते हैं और झील का दृश्य देख सकते हैं। मुझे लगता है कि यह एक बहुत ही विशेष जगह है, क्योंकि यह संस्कृति, प्रकृति और पाक कला को जोड़ती है। यह फोटो लेने के लिए भी बहुत लोकप्रिय जगह है।" }
        ]
      },
      recreation: {
        cards: [
          { heading: "ओकानागन झील", body: "ओकानागन झील बाहर की गतिविधियों के लिए सबसे अच्छे स्थानों में से एक है। आप तैर सकते हैं, पडलबोर्ड कर सकते हैं, कयाक कर सकते हैं या बस समुद्र तट पर आराम कर सकते हैं। मुझे यह जगह बहुत पसंद है, क्योंकि यह वास्तव में केलाउना में गर्मियों का प्रतिनिधित्व करती है। यह दोस्तों या परिवार के साथ समय बिताने के लिए एक आदर्श जगह है।" },
          { heading: "नॉक्स पर्वत", body: "नॉक्स पर्वत पहाड़ों पर चढ़ाई करने के लिए बहुत लोकप्रिय स्थान है। आप शहर और झील का अविश्वसनीय दृश्य देखने के लिए चोटी तक जा सकते हैं। मेरी राय में, यह केलाउना के सबसे सुंदर स्थानों में से एक है, क्योंकि वहाँ प्रकृति बहुत अधिक मौजूद है और ट्रेल्स सभी के लिए सुलभ हैं।" },
          { heading: "बिग व्हाइट", body: "बिग व्हाइट केलाउना के पास एक स्की रिसॉर्ट है। सर्दियों में, आप वहाँ स्की, स्नोबोर्ड और यहाँ तक कि स्केटिंग भी कर सकते हैं। मुझे लगता है कि यह зим खेल प्रेमियों के लिए एक अनिवार्य जगह है, क्योंकि वहाँ बहुत सारी ढलानें हैं और माहौल बहुत स्वागतयोग्य है।" }
        ]
      },
      transportation: {
        cards: [
          { heading: "व्यक्तिगत कारें", body: "केलाउना में, अधिकांश लोग अपने आसपास चलने के लिए अपनी कार का उपयोग करते हैं, क्योंकि शहर काफी बड़ा है और दूरियाँ लंबी हो सकती हैं। मुझे लगता है कि यह सुविधाजनक है, क्योंकि आप जब चाहें निकल सकते हैं और सीधे अपने गंतव्य तक जा सकते हैं।" },
          { heading: "बीसी ट्रांज़िट", body: "बीसी ट्रांज़िट केलाउना की बस प्रणाली है। आप इसका उपयोग डाउनटाउन, स्कूल, काम या विभिन्न पड़ोस तक पहुँचने के लिए कर सकते हैं। यह उन लोगों के लिए एक अच्छा विकल्प है जिनके पास कार नहीं है। हालांकि, मुझे लगता है कि टाइम टेबल हमेशा सुविधाजनक नहीं होते।" },
          { heading: "केवीआर ट्रेल नेटवर्क", body: "केवीआर ट्रेल साइकिल चलाने या चलने के लिए बहुत लोकप्रिय ट्रेल्स का नेटवर्क है। यह क्षेत्र के कई हिस्सों से गुज़रता है और शानदार दृश्य प्रदान करता है। मुझे यह नेटवर्क पसंद है, क्योंकि यह आपको प्रकृति का आनंद लेते हुए आगे बढ़ने की अनुमति देता है।" }
        ]
      },
      historic: {
        cards: [
          { heading: "माइरा कैन्यन की ट्रैसिल पुल", body: "माइरा कैन्यन के पुल एक बहुत महत्वपूर्ण ऐतिहासिक स्थल हैं। वे 20वीं सदी की शुरुआत में बनाए गए पुराने रेलवे पुल हैं। आप रास्तों पर चल या साइकिल चला सकते हैं और शानदार दृश्यों का आनंद ले सकते हैं। मेरी राय में, यह क्षेत्र के सबसे प्रभावशाली स्थानों में से एक है।" },
          { heading: "फादर पांडोसी मिशन", body: "फादर पांडोसी मिशन ओकानागन घाटी का पहला यूरोपीय Settlement है। वहाँ आप ऐतिहासिक इमारतों की यात्रा कर सकते हैं और क्षेत्र के इतिहास के बारे में सीख सकते हैं। मुझे यह जगह दिलचस्प लगती है क्योंकि यह दिखाती है कि केलाउना कैसे शुरू हुआ।" },
          { heading: "द लॉरेल पैकिंगहाउस", body: "लॉरेल पैकिंगहाउस केलाउना के सबसे पुराने इमारतों में से एक है। यह पहले क्षेत्र के फल पैक करने के लिए इस्तेमाल होता था। आज यह एक संग्रहालय और कार्यक्रम स्थल है। मुझे यह जगह पसंद है क्योंकि यह ओकानागन की कृषि इतिहास का प्रतिनिधित्व करती है।" }
        ]
      },
      unique: {
        cards: [
          { heading: "ओकानागन का अर्ध-रेगिस्तानी परिदृश्य", body: "केलाउना अद्वितीय है क्योंकि यह एक अर्ध-रेगिस्तानी जलवायु में स्थित है। वहाँ सूखी पहाड़ियाँ, कैक्टस और बहुत अधिक धूप है। मुझे लगता है कि यह परिदृश्य बहुत विशेष है, क्योंकि यह कनाडा के अधिकांश हिस्सों में मौजूद नहीं है।" },
          { heading: "टंबलवीड्स और बागान", body: "टंबलवीड्स और बागान ओकानागन के charme का हिस्सा हैं। आप अक्सर पूरे क्षेत्र में सेब, चेरी और आड़ू के बागान देखते हैं। मेरी राय में, इससे केलाउना बहुत अनूठा बन जाता है, क्योंकि कृषि वास्तव में स्थानीय पहचान का हिस्सा है।" }
        ]
      }
    },
    siteTitle: "केलाउना में आपका स्वागत है"
  }
};

const getPageKey = () => {
  const name = window.location.pathname.split("/").pop() || "index.html";
  const normalized = name.replace(/\.html$/i, "").toLowerCase();
  const pageMap = {
    "": "home",
    index: "home",
    food: "food",
    entertainment: "entertainment",
    recreation: "recreation",
    transportation: "transportation",
    "historic-sites": "historic",
    "unique-features": "unique",
    "works-cited": "works"
  };

  return pageMap[normalized] || "home";
};

const pageKey = getPageKey();

const persistPreferences = () => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(preferences));
  } catch {
    // Ignore storage errors.
  }
};

const renderPreferences = () => {
  const languageTrigger = document.querySelector('[data-menu-trigger="language"] .prefs-button-label');
  const themeTrigger = document.querySelector('[data-menu-trigger="theme"] .prefs-button-label');
  const languageOptions = document.querySelectorAll('.prefs-option[data-lang]');
  const themeOptions = document.querySelectorAll('.prefs-option[data-theme]');
  const translation = translations[preferences.lang];

  if (languageTrigger) {
    languageTrigger.textContent = `🌐 ${translation.languageLabel}`;
  }

  if (themeTrigger) {
    themeTrigger.textContent = `🌓 ${translation.themeLabels[preferences.theme]}`;
  }

  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === preferences.lang);
  });

  themeOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.theme === preferences.theme);
  });
};

const applyLanguage = () => {
  const translation = translations[preferences.lang];
  document.documentElement.lang = preferences.lang;
  document.title = translation.siteTitle;

  const brand = document.querySelector(".brand");
  if (brand) brand.textContent = translation.brand;

  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
  translation.nav.forEach((label, index) => {
    if (navLinks[index]) navLinks[index].textContent = label;
  });

  const cardLabels = Array.from(document.querySelectorAll(".site-card span"));
  cardLabels.forEach((label, index) => {
    if (translation.cards[index]) label.textContent = translation.cards[index];
  });

  const heading = document.querySelector(".hero h1, .page-hero h1");
  if (heading) heading.textContent = translation.heroTitles[pageKey] || translation.heroTitles.home;

  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = translation.heroSubtitles[pageKey] || translation.heroSubtitles.home;

  const pageLabel = document.querySelector(".page-hero p");
  if (pageLabel) pageLabel.textContent = translation.pageLabels[pageKey] || translation.pageLabels.home;

  const footer = document.querySelector(".site-footer");
  if (footer) footer.textContent = translation.footer;
};

const applyContentTranslations = () => {
  const translation = translations[preferences.lang];
  const pageContent = translation.content?.[pageKey];

  if (pageContent?.cards) {
    const storyCards = Array.from(document.querySelectorAll(".story-card"));
    storyCards.forEach((card, index) => {
      const heading = card.querySelector(".story-copy h2");
      const paragraph = card.querySelector(".story-copy p");
      const contentCard = pageContent.cards[index];

      if (heading && contentCard) heading.textContent = contentCard.heading;
      if (paragraph && contentCard) paragraph.textContent = contentCard.body;
    });
  }

  const introText = document.querySelector(".intro-text");
  if (introText && translation.content?.home?.introText) {
    introText.textContent = translation.content.home.introText;
  }

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.textContent = translation.skipLink;

  document.querySelectorAll(".image-button").forEach((button) => {
    button.setAttribute("aria-label", translation.imageButtonLabel);
  });

  const lightboxClose = document.querySelector(".lightbox-close");
  if (lightboxClose) lightboxClose.setAttribute("aria-label", translation.closeLabel);
};

const applyTheme = () => {
  document.documentElement.dataset.theme = preferences.theme;
  document.body.dataset.theme = preferences.theme;
};

const applyPreferences = () => {
  applyTheme();
  applyLanguage();
  applyContentTranslations();
  renderPreferences();
  persistPreferences();
};

const createPreferencesControls = () => {
  const headerInner = document.querySelector(".header-inner");
  if (!headerInner || headerInner.querySelector(".prefs-controls")) return;

  headerInner.insertAdjacentHTML("beforeend", `
    <div class="prefs-controls" aria-label="Website preferences">
      <div class="prefs-group" data-menu="language">
        <button class="prefs-button" type="button" data-menu-trigger="language" aria-haspopup="true" aria-expanded="false">
          <span class="prefs-button-label">🌐 Français</span>
          <span class="prefs-button-caret">▾</span>
        </button>
        <div class="prefs-menu" role="menu" data-menu-panel="language">
          <button class="prefs-option" type="button" data-lang="fr" role="menuitem">🇫🇷 Français</button>
          <button class="prefs-option" type="button" data-lang="en" role="menuitem">🇬🇧 English</button>
          <button class="prefs-option" type="button" data-lang="es" role="menuitem">🇪🇸 Español</button>
          <button class="prefs-option" type="button" data-lang="de" role="menuitem">🇩🇪 Deutsch</button>
          <button class="prefs-option" type="button" data-lang="hi" role="menuitem">🇮🇳 हिन्दी</button>
        </div>
      </div>
      <div class="prefs-group" data-menu="theme">
        <button class="prefs-button" type="button" data-menu-trigger="theme" aria-haspopup="true" aria-expanded="false">
          <span class="prefs-button-label">🌓 Clair</span>
          <span class="prefs-button-caret">▾</span>
        </button>
        <div class="prefs-menu" role="menu" data-menu-panel="theme">
          <button class="prefs-option" type="button" data-theme="light" role="menuitem">☀️ Light</button>
          <button class="prefs-option" type="button" data-theme="dark" role="menuitem">🌙 Dark</button>
          <button class="prefs-option" type="button" data-theme="sepia" role="menuitem">🪵 Sepia</button>
          <button class="prefs-option" type="button" data-theme="ocean" role="menuitem">🌊 Ocean</button>
          <button class="prefs-option" type="button" data-theme="forest" role="menuitem">🌲 Forest</button>
        </div>
      </div>
    </div>
  `);
};

const closeMenus = () => {
  document.querySelectorAll(".prefs-button").forEach((button) => button.setAttribute("aria-expanded", "false"));
  document.querySelectorAll(".prefs-menu").forEach((menu) => menu.classList.remove("is-open"));
};

const wirePreferences = () => {
  document.addEventListener("click", (event) => {
    const option = event.target.closest(".prefs-option");

    if (option) {
      const group = option.closest(".prefs-group");
      if (group?.dataset.menu === "language") {
        preferences.lang = option.dataset.lang;
      }
      if (group?.dataset.menu === "theme") {
        preferences.theme = option.dataset.theme;
      }
      applyPreferences();
      closeMenus();
      return;
    }

    if (!event.target.closest(".prefs-group")) {
      closeMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenus();
    }
  });

  document.querySelectorAll(".prefs-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const group = button.closest(".prefs-group");
      const menu = group?.querySelector(".prefs-menu");
      const isOpen = button.getAttribute("aria-expanded") === "true";

      closeMenus();
      if (!isOpen && menu) {
        button.setAttribute("aria-expanded", "true");
        menu.classList.add("is-open");
      }
    });
  });
};

window.addEventListener("load", () => {
  document.body.classList.remove("is-loading");
});

createPreferencesControls();
applyPreferences();
wirePreferences();

const header = document.querySelector(".site-header");
const mobileHeaderToggle = document.createElement("button");
mobileHeaderToggle.className = "mobile-header-toggle";
mobileHeaderToggle.type = "button";
mobileHeaderToggle.setAttribute("aria-expanded", "false");
mobileHeaderToggle.setAttribute("aria-label", "Open navigation");
mobileHeaderToggle.textContent = "☰";
document.body.appendChild(mobileHeaderToggle);

const setMobileHeaderState = (isOpen) => {
  if (!header) return;
  header.classList.toggle("is-open", isOpen);
  mobileHeaderToggle.setAttribute("aria-expanded", String(isOpen));
  mobileHeaderToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  mobileHeaderToggle.textContent = isOpen ? "✕" : "☰";
};

const closeMobileHeader = () => {
  if (window.matchMedia("(max-width: 640px)").matches) {
    setMobileHeaderState(false);
  }
};

mobileHeaderToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  if (window.matchMedia("(max-width: 640px)").matches && header) {
    setMobileHeaderState(!header.classList.contains("is-open"));
  }
});

document.addEventListener("click", (event) => {
  if (!window.matchMedia("(max-width: 640px)").matches || !header) return;
  const clickedInsideHeader = header.contains(event.target) || mobileHeaderToggle.contains(event.target);
  if (!clickedInsideHeader) {
    closeMobileHeader();
  }
});

document.addEventListener("click", (event) => {
  if (!window.matchMedia("(max-width: 640px)").matches) return;
  if (event.target.closest(".site-nav a")) {
    closeMobileHeader();
  }
});

let headerFrame = 0;
const updateHeader = () => {
  if (!header) return;
  if (headerFrame) return;

  headerFrame = window.requestAnimationFrame(() => {
    const currentScrollY = window.scrollY;
    header.classList.toggle("is-scrolled", currentScrollY > 12);
    headerFrame = 0;
  });
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (!window.matchMedia("(max-width: 640px)").matches) {
    setMobileHeaderState(false);
  }
});

const revealItems = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("img").forEach((image) => {
  if (!image.hasAttribute("loading")) {
    image.setAttribute("loading", image.getAttribute("fetchpriority") === "high" ? "eager" : "lazy");
  }
  if (!image.hasAttribute("decoding")) {
    image.setAttribute("decoding", "async");
  }
});

const imageButtons = document.querySelectorAll(".image-button");

if (imageButtons.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-hidden", "true");

  const lightboxImage = document.createElement("img");
  lightboxImage.alt = "";

  const closeButton = document.createElement("button");
  closeButton.className = "lightbox-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Fermer");
  closeButton.textContent = "×";

  lightbox.append(lightboxImage, closeButton);
  document.body.append(lightbox);

  const openLightbox = (image) => {
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.removeAttribute("src");
  };

  imageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      if (image) openLightbox(image);
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
