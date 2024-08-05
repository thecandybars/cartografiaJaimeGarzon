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
  title: "MAPEO DE LOS LUGARES DE MEMORIA SOBRE JAIME GARZÓN",
  subtitle:
    "A continuación se presentan los principales lugares de memoria en Bogotá asociados a la figura de Jaime Garzón y los personajes a los que le dio vida",
  byline: "Centro Nacional de Memoria Historica",
  footer:
    // 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    "CNMH",
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "Bogota",
      image: "./images/jaimeG.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit primis in, viverra eros lacus nulla aliquet ante nam consequat conubia, ultrices sagittis tristique fringilla cubilia pulvinar eu egestas. Fames neque massa senectus ultricies habitant in turpis nisi, hendrerit sem facilisis pulvinar auctor ridiculus phasellus, non luctus nibh risus habitasse purus congue. Felis ultricies urna velit morbi facilisi fringilla laoreet orci dignissim, egestas ut malesuada rhoncus eget nulla ultrices justo, class dapibus imperdiet litora leo bibendum lacus mus.",
      location: {
        center: [-74.20084, 4.70324], //4.622786830213004, -74.07809809815039
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
      id: "second-identifier",
      alignment: "left",
      hidden: false,
      title: "MAL Crew - Mural Jaime Garzon",
      image: "./images/muralJaimeGarzon.png",
      tagline: "MAL Crew, 2022. Mural Jaime Garzón. Quinta versión",
      description:
        "A continuación se presentan los principales lugares de memoria en Bogotá asociados a la figura de Jaime Garzón y los personajes a los que le dio vida 1 . Esta breve revisión puso en evidencia la gran importancia que ha tenido esta figura en el espacio público bogotano. Aunque se encontraron numerosas intervenciones efímeras, ya fuera por su carácter temporal 2 , o por la destrucción de las que fueron objeto, se concentró la mirada en aquellas que han permanecido en el tiempo consolidándose, o en proceso de consolidarse, como lugares de memoria. La presentación se divide en murales, monumentos y colegios.",
      location: {
        center: [-74.07809809815039, 4.622786830213004], //4.622786830213004, -74.07809809815039
        zoom: 19,
        pitch: 80,
        bearing: -70,
        speed: 1,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
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
      id: "second-identifier1",
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
      id: "third-identifier",
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
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-chapter",
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
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
