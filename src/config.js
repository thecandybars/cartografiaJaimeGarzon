var config = {
  // style: "mapbox://styles/juancortes79/clxpabyhm035q01qofghr7yo7",
  // style: "mapbox://styles/juancortes79/clzivyft6005201pchqxifycu",
  // style: "mapbox://styles/juancortes79/clxbt6q9w09jt01ql089jau20",
  style: "mapbox://styles/mapbox/outdoors-v12",
  accessToken:
    "pk.eyJ1IjoianVhbmNvcnRlczc5IiwiYSI6ImNsd3J5ZGRpdDAxZzkyaXB6dmVleHRiNTgifQ.mXBxteDncu7JFKRuW8fPJg",
  showMarkers: true,
  markerColor: "#3FB1CE",
  // projection: "equirectangular",
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "CARTOGRAFIA DE LA ESPERANZA",
  subtitle:
    "Homenaje a Jaime y a todxs lxs defensores de derechos humanos y constructores de Paz en Colombia",
  byline: "",
  footer: "CNMH",
  chapters: [
    {
      id: "cap01",
      alignment: "right",
      hidden: false,
      title: "Homenaje a Jaime Garzón",
      image: "./images/jaimeG.png",
      description:
        "En alianza entre el Centro de Memoria Paz y Reconciliación y el Centro Nacional de Memoria Histórica, se propone la siguiente cartografía llamada 'Cartografía de la Esperanza', en ella se busca resaltar la memoria de Jaime Garzón, pero también de visibilizar todos aquellos espacios de memoria que de una u otra forma nos identifican con las luchas por los derechos humanos y la construcción de paz en Colombia. Esta breve revisión puso en evidencia la gran importancia que ha tenido esta figura en el espacio público bogotano. Aunque se encontraron numerosas intervenciones efímeras, ya fuera por su carácter temporal, o por la destrucción de las que fueron objeto, se concentró la mirada en aquellas que han permanecido en el tiempo consolidándose, o en proceso de consolidarse, como lugares de memoria. La presentación se divide en murales, monumentos y colegios.",
      location: {
        center: [-74.03084, 4.70324], //4.622786830213004, -74.07809809815039
        zoom: 10,
        pitch: 45,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "cap06",
      alignment: "left",
      hidden: false,
      title: "Poste conmemorativo a Jaime Garzón",
      image: "./images/Poste.jpeg",
      description:
        "En la madrugada del 13 de agosto de 1999, la camioneta de Jaime Garzón se estrelló contra este poste tras los disparos que acabaron con su vida. Desde entonces, este poste ha sido intervenido gráficamente en cada uno de los aniversarios del asesinato de Garzón por su hermana Marisol y con ayuda de múltiples colectivos artísticos como Dexpierte apostándole a la resignificación y apropiación del espacio público como mecanismo para la exigencia de justicia y verdad. Asimismo, estas intervenciones han estado acompañadas de acciones performativas, homenajes y procesos simbólicos para la activación colectiva de la memoria de Jaime Garzón, la dimensión política de su asesinato",
      location: {
        center: [-74.09080645582132, 4.632445600628698], //4.632445600628698, -74.09080645582132
        zoom: 19,
        pitch: 70,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cap07",
      alignment: "right",
      hidden: false,
      title: "Monumento a Jaime Garzón",
      image: "./images/monumentoTeusaquillo.jpg",
      description:
        "En la localidad de Teusaquillo, en el Barrio Quinta Paredes, se encuentra ubicado el monumento a Jaime Garzón a pocos metros del lugar en donde fue asesinado. Esta escultura representa la dimensión de mediador y constructor de paz de Jaime Garzón capturando un momento icónico ante la opinión pública cuando acompañó un proceso de liberación de secuestrados y ondeó la bandera de Colombia junto a un helicóptero 11 . Esta iniciativa colectiva estuvo acompañada también por CARACOL y no tuvo financiación pública. El escultor Alejandro Hernández fue el encargado del diseño de este monumento y el de Heriberto de la Calle.",
      location: {
        center: [-74.09289491710322, 4.6308879777927485], //4.6308879777927485, -74.09289491710322
        zoom: 19,
        pitch: 70,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cap09",
      alignment: "left",
      hidden: false,
      title: "Colegio Campestre Jaime Garzón,",
      image: "./images/colegioCampestre.png",
      description:
        "El Colegio Campestre Jaime Garzón, abre sus puertas a la educación el 6 de junio de 1996, en ese momento se llamó Unidad Básica y Agropecuaria Las Auras y ofrecía la educación Básica Secundaria hasta el grado 9°, en el año 2001 fue autorizada por la Secretaría de Educación del Distrito para ofrecer la educación media académica. Luego de un proceso de integración que se dio en el año 2003, se integró con los 13 Centros Educativos Rurales de los corregimientos de Nazareth y Betania, adoptando el nombre de Institución Educativa Distrital Rural Las Auras y Otras. Posteriormente por incluir el vocablo COLEGIO e identidad institucional mediante un proceso de participación con la comunidad educativa por acuerdo del Consejo Directivo adopta el nombre de COLEGIO CAMPESTRE JAIME GARZÓN I.E.D. (RedAcadémica, SED, 2021)",
      location: {
        center: [-74.17221324232851, 4.1708950092991754], //4.1708950092991754, -74.17221324232851
        zoom: 16,
        pitch: 65,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cap02",
      alignment: "right",
      hidden: false,
      title: "Calle 26 entre carrera 25 y carrera 27",
      image: "./images/malCrew.gif",
      tagline: "Fotografía // Proceso de Intervención Gráfica // MAL CREW",
      description:
        "El mural de la calle 26 es una de las intervenciones artísticas callejeras más grandes de la ciudad y la más grande de las hechas sobre Jaime Garzón. Es la quinta versión de un homenaje a su memoria que permanece en estas mismas paredes desde el año 2012. En todas las versiones los responsables han sido el colectivo de arte callejero MAL Crew 3 , un grupo de jóvenes bogotanos que con su trabajo ha hecho parte de luchas sociales de diverso tipo.",
      location: {
        center: [-74.07809809815039, 4.622786830213004], //4.622786830213004, -74.07809809815039
        zoom: 19,
        pitch: 80,
        bearing: -70,
        speed: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "cap08",
      alignment: "left",
      hidden: false,
      title: "Colegio Jaime Garzón, Britalia",
      image: "./images/colegioBritalia.png",
      description:
        "La conmemoración de Jaime Garzón, a través de la dedicación del colegio en la localidad de Kennedy en su memoria, representa un acto de justicia histórica y reconocimiento a su legado. Jaime no solo fue una voz crítica y satírica que desafió los abusos de poder y la corrupción en Colombia, sino que también desempeñó un rol crucial como alcalde de la localidad de Sumapaz. Su trabajo en esta región, caracterizada por su historia de conflicto armado, se destacó por su compromiso con la paz y el desarrollo social. Nombrar instituciones educativas en su honor no solo preserva su memoria, sino que también inspira a las nuevas generaciones a seguir luchando por una sociedad más justa y equitativa, basada en los valores de la paz y la reconciliación que Jaime defendió hasta su asesinato.",
      location: {
        center: [-74.17548195767148, 4.626048371613873], //4.626048371613873, -74.17548195767148
        zoom: 19,
        pitch: 70,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cap03",
      alignment: "right",
      hidden: false,
      title: "Mural Carrera 40",
      image: "./images/muralCarrera40.gif",
      tagline:
        "Fotografía // Proceso de Intervención Gráfica Independiente // Dexpierte Colectivo, Somos, Guache, Dj Lu (Juega Siempre), Teck 24",
      description:
        "El mural ubicado en la carrera 40 con calle 24A se encuentra aproximadamente a 200 metros del lugar donde fue asesinado Jaime Garzón y a unos 100 metros del monumento de conmemoración y memoria de Jaime Garzón. Este mural, debido a su ubicación geográfica, también forma parte del eje de la paz y la memoria. En el duodécimo aniversario del asesinato de Jaime Garzón, este espacio fue apropiado como lugar de memoria en el año 2011 por DEXPIERTE COLECTIVO, en colaboración con artistas urbanos como SOMOS, DJ LU y Guache. La primera intervención en el mural reflejaba el rostro de Jaime Garzón con una frase elocuente: “12 años sin Jaime”, complementada por la palabra “MEMORIA”.",
      location: {
        center: [-74.09174289075199, 4.6319957573232164], //4.6319957573232164, -74.09174289075199
        zoom: 17,
        pitch: 60,
        bearing: -43.2,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cap049",
      alignment: "left",
      hidden: false,
      title: "Parque Jaime Garzón",
      image: "./images/Parque_Jaime 4.jpeg",
      tagline: "Fotografía COLECTIVO EPSILON",
      description:
        "Tras la toma Cultural 'Los imaginarios otros de ser joven' ocurrida el primero de Junio del 2014 diversos procesos Juveniles del territorio de la Chiguazá, en la localidad Rafael Uribe Uribe, tras un ejercicio participativo y deliberativo resignifican el antiguo parque Molinos II como un escenario de encuentro de las Juventudes populares, un espacio público liberado de la violencia urbana y policial desde las prácticas culturales, ambientales y deportivas que la juventud de este territorio de manera organizada y esporádica venía transformando en este parque. Jaime Garzón representa entonces una apuesta clara por reconocer el papel transformador, crítico y creativo de las Juventudes, una lucha además por la vida, la memoria y la verdad desde el sur oriente de la ciudad. Actualmente es ya un escenario con identidad propia para la comunidad y las luchas juveniles de la ciudad. La existencia de este importante lugar para el territorio dió pie a la realización del festival Jaime Garzón liderado por el movimiento Hip hop del barrio, que tuvo una gran y emotiva versión en el marco del estallido social en la estación Molinos TM.",
      location: {
        center: [-74.10773831698003, 4.552838469575169], // 4.552838469575169, -74.10773831698003
        zoom: 17,
        pitch: 40,
        bearing: 10.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cap04",
      alignment: "right",
      hidden: false,
      title: "Facultad de Diseño Grafico UNAL",
      image: "./images/unalDiseno.png",
      description:
        "El edificio de Diseño Gráfico de la Universidad Nacional guarda otro lugar de la memoria de Jaime Garzón que ha permanecido por más de una década. Aunque para el momento de presentar este documento no se ha podido establecer una fecha exacta de su creación, se encontró información de una usuaria de Flickr, coautora del mural, que tomó este registro el 26 de septiembre de 2011, de tal forma que por lo menos desde este año el mural se encuentra allí. Además, en su publicación lo presenta como “aud. Jaime Garzón”, lo que indica una intención del mural de generar una marca de memoria en el auditorio del edificio. En la publicación señala sobre los autores: “En una jornada hermosa se creó esta pieza homenaje a Jaime Garzón con la ayuda de muchos personajes importantes en mi vida. Todos parimos este mural y todavía lo gozamos gracias a valeria, yisel, sergio, karen, daniel, y los que se me escapan; que lindo momento”.",
      location: {
        center: [-74.08209372016562, 4.634262283415334],
        zoom: 18,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "cap05",
      alignment: "left",
      hidden: false,
      title: "Plaza Che",
      image: "./images/MuroJaimeUniversidadNacional.jpg",
      description:
        "En el año 2024, durante el paro universitario adelantado por la exigencia de los estudiantes de avanzar en democracia interna en la universidad, y suscitado por el irrespeto a la consulta para la elección del rector, la plaza Ché y los símbolos que históricamente la dotaron de sentido vivieron una importante transformación. A las imágenes del Ché Guevara, presente desde inicios de los años noventa, y a la de Jaime Garzón, pintada desde el 2016, se sumaron las representaciones de Policarpa Salavarrieta, Jorge Eliecer Gaitán y la estudiante Beatriz Sandoval, quien murió en el marco de una protesta el 16 de mayo de 1991. Además, un látigo y una espada rotas, junto a la frase “con autonomía y sin permiso”, rematan una composición con significados libertarios y pacifistas. Esto ha reflejado la consolidación de la imagen de Jaime Garzón como uno de los principales símbolos de este lugar de memoria. Aunque en la Universidad Nacional su figura ha sido apropiada históricamente por muchos estudiantes, su rostro fue pintado en este lugar por primera vez en octubre de 2016, en medio de una discusión sobre los símbolos que representaban a la UN y su comunidad, y, particularmente, sobre la figura del Che. Sectores de la comunidad rechazaban e intentaban dañar el rostro del revolucionario argentino, mientras otros defendían su presencia e incluso la vinculaban a la memoria de los hermanos San Juan, autores de la primera versión de este mural y víctimas de desaparición forzada 7 . Entre tanto, el mismo grupo de estudiantes que había repintado el Che semanas atrás, se propuso pintar a Jaime Garzón búscando que en su figura se encontrara la unidad fragmentada entre los universitarios.",
      location: {
        center: [-74.08284071534263, 4.635688562295812], //4.635688562295812, -74.08284071534263
        zoom: 19,
        pitch: 70,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
