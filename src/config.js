var config = {
  style: "mapbox://styles/mapbox/outdoors-v12",
  accessToken:
    "pk.eyJ1IjoianVhbmNvcnRlczc5IiwiYSI6ImNsd3J5ZGRpdDAxZzkyaXB6dmVleHRiNTgifQ.mXBxteDncu7JFKRuW8fPJg",
  showMarkers: true,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "CARTOGRAFIA DE LA ESPERANZA",
  subtitle: "",
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
        "A continuación se presentan los principales lugares de memoria en Bogotá asociados a la figura de Jaime Garzón y los personajes a los que le dio vida 1 . Esta breve revisión puso en evidencia la gran importancia que ha tenido esta figura en el espacio público bogotano. Aunque se encontraron numerosas intervenciones efímeras, ya fuera por su carácter temporal 2 , o por la destrucción de las que fueron objeto, se concentró la mirada en aquellas que han permanecido en el tiempo consolidándose, o en proceso de consolidarse, como lugares de memoria. La presentación se divide en murales, monumentos y colegios.",
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
      id: "cap02",
      alignment: "left",
      hidden: false,
      title: "Calle 26 entre carrera 25 y carrera 27",
      image: "./images/muralJaimeGarzon.png",
      tagline: "MAL Crew, 2022. Mural Jaime Garzón. Quinta versión",
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
      id: "cap03",
      alignment: "right",
      hidden: false,
      title: "Mural Carrera 40",
      image: "./images/muralCarrera40.png",
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
      id: "cap04",
      alignment: "left",
      hidden: false,
      title: "Facultad de Diseño Grafico UNAL",
      image: "./images/muralUnal01.png",
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
      alignment: "right",
      hidden: false,
      title: "Plaza Che",
      image: "./images/muralChe.png",
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
    {
      id: "cap06",
      alignment: "left",
      hidden: false,
      title: "Poste conmemorativo a Jaime Garzón",
      image: "./images/poste.png",
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
      image: "./images/monumento.png",
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
      id: "cap09",
      alignment: "right",
      hidden: false,
      title: "Colegio Campestre Jaime Garzón,",
      image: "./images/colegioCampestre.png",
      description:
        "El Colegio Campestre Jaime Garzón, abre sus puertas a la educación el 6 de junio de 1996, en ese momento se llamó Unidad Básica y Agropecuaria Las Auras y ofrecía la educación Básica Secundaria hasta el grado 9°, en el año 2001 fue autorizada por la Secretaría de Educación del Distrito para ofrecer la educación media académica. Luego de un proceso de integración que se dio en el año 2003, se integró con los 13 Centros Educativos Rurales de los corregimientos de Nazareth y Betania, adoptando el nombre de Institución Educativa Distrital Rural Las Auras y Otras. Posteriormente por incluir el vocablo COLEGIO e identidad institucional mediante un proceso de participación con la comunidad educativa por acuerdo del Consejo Directivo adopta el nombre de COLEGIO CAMPESTRE JAIME GARZÓN I.E.D. (RedAcadémica, SED, 2021)",
      location: {
        center: [-74.17221324232851, 4.1708950092991754], //4.1708950092991754, -74.17221324232851
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
