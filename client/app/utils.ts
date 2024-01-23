import type { StaticImageData } from 'next/image';
import sbs from "@/public/assets/svg/sbs.svg"
import kel from "@/public/assets/svg/kel.svg"
import kids from "@/public/assets/svg/Kids.png"
import Adol from "@/public/assets/svg/Teens.png"
import adults1 from "@/public/assets/svg/Adults.png"
import starters from "@/public/assets/svg/Starters.svg"
import begginers from "@/public/assets/svg/Begginers.png"
import prekids from "@/public/assets/svg/Pre 1 kids.png"
import kids1 from "@/public/assets/svg/kids1.png"
import teens from "@/public/assets/svg/Teens2.png"
import fce from "@/public/assets/svg/FCE.png"
import adults from "@/public/assets/svg/Adults1.png"






export const librerias = [
    {title: "Sbs libreria", img: sbs, url:"https://www.sbs.com.ar/"},
    {title: "Kel libreria", img: kel,url:"https://www.kelediciones.com/"}
]


export const courses = [
    {title: "Kids", img: kids, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url:"/"},
    {title: "Adol", img:Adol, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url:"/"},
    {title: "Adults ", img:adults1, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url:"/"},
]

export const gradesContent = [
    {category:"Starter", title:"Starter ", age: "Niños y niñas de 5 años", Horario: ["Viernes de 18 a 20hs"], description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:starters},
    {category:"Beginner", title:"Beginner ", age: "Niños y niñas de 6 años", Horario: ["Martes y jueves de 18hs a 19hs"],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:begginers},
    {category:"Prekid", title:"Prekid ", age: "Niños y niñas de 7 años", Horario: ["Viernes de 18 a 20hs", "martes y jueves 18 a 19hs"],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:prekids},
    {category:"Kids", title:"Kids 1", Horario: ["Martes y jueves 10:30 a 11:45", "Lunes y miércoles de 16:45 a 18hs", "Lunes y miércoles de 18 a 19:15", "Martes y jueves de 18 a 19:15"],  age: "Desde los 8 años", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 2", age: "Desde los 8 años", Horario: ["Martes y jueves de 10:30 a 12",
"Lunes y miércoles de 16:30 a 18hs",
"Lunes y miércoles 18 a 19:30",
"Martes y jueves 18 a 19:30"],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 3", age: "Desde los 8 años", Horario: ["Martes y jueves de 9 a 10:30",
"Lunes y miércoles de 18 a 19:30",
"Martes y jueves de 16:30 a 18hs",
"Martes y jueves de 18 a 19:30",
"Viernes de 17:30 a 20:30"],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 4", age: "Desde los 8 años", Horario: ["martes y jueves de 9 a 10:30hs",
"Lunes y miércoles de 18 a 19:30",
"Martes y jueves 18 a 19:30"],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 5 ", age: "Desde los 8 años", Horario: ["Lunes y miércoles de 18 a 19:30"
    ],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Adol", title:"Adol 1", age: "Niños y niñas de 5 años", Horario: ["Lunes y miércoles de 19:30 a 21hs."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Adol", title:"Adol 2", age: "Niños y niñas de 5 años", Horario: ["Martes y jueves de 19:30 a 21hs."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Adol", title:"Adol 3", age: "Niños y niñas de 5 años", Horario: ["Lunes y miércoles de 16:30 a 18hs.", "Lunes y miércoles de 19:15 a 20:45.",
"Martes y jueves 19:15 a 20:45."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Adol", title:"Adol 4", age: "Niños y niñas de 5 años", Horario: ["Lunes y miércoles 19:30 a 21hs."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Adol", title:"Adol 5", age: "Niños y niñas de 5 años", Horario: ["Lunes y miércoles de 19:30 a 21:15hs", "Martes de 17 a 18hs y viernes de 17 a 19: 30."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Adol", title:"Adol 6", age: "Niños y niñas de 5 años", Horario: ["Lunes y miércoles 19:30 a 21:30."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"F.C.E", title:"F.C.E ", age: "Niños y niñas de 5 años", Horario: ["martes, miércoles y jueves de 19:30 a 21:30."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:fce},
    {category:"Adults", title:"Adults 1", age: "Niños y niñas de 5 años", Horario: ["martes y jueves de 19:30 a 21hs"],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 2", age: "Niños y niñas de 5 años", Horario: ["martes y jueves 16:30 a 18hs.", "Martes y jueves de 19:30 a 21hs."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 3", age: "Niños y niñas de 5 años", Horario: ["lunes y miércoles de 19:30 a 21hs."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 4", age: "Niños y niñas de 5 años", Horario: ["martes y jueves 19:30 a 21hs."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 5", age: "Niños y niñas de 5 años", Horario: ["lunes y miércoles de 19:30 a 21:15."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 6", age: "Niños y niñas de 5 años", Horario: ["martes, miércoles y jueves de 19:30 a 21:30."],  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
]

export const menuItems = [
  {
    id: "examen",
    label: "Examen Nivelador",
  },
  {
    id: "notas",
    label: "Notas",
  },
  {
    id: "contenido",
    label: "Contenido",
  },
  {
    id: "consultas",
    label: "Consultas",
  },
];

import bridge1 from "@/public/assets/svg/london-bridge/1.webp"
import bridge2 from "@/public/assets/svg/london-bridge/2.jpg"
import bridge3 from "@/public/assets/svg/london-bridge/3.jpg"
import bridge4 from "@/public/assets/svg/london-bridge/4.jpeg"
import bridge5 from "@/public/assets/svg/london-bridge/5.jpg"
import stonehenge from '@/public/assets/svg/stonehenge/1.jpg';
import stonehenge1 from '@/public/assets/svg/stonehenge/2.jpg';
import stonehenge2 from '@/public/assets/svg/stonehenge/3.jpg';
import stonehenge3 from '@/public/assets/svg/stonehenge/stonehenge.jpg';
import stonehenge4 from '@/public/assets/svg/stonehenge/alumnosstonehendge.png';
import warwick from '@/public/assets/svg/warwick/1.jpg';
import warwick2 from '@/public/assets/svg/warwick/2.jpg';
import warwick3 from '@/public/assets/svg/warwick/3.jpg';
import warwick4 from '@/public/assets/svg/warwick/4.jpg';
import warwick5 from '@/public/assets/svg/warwick/5.jpg';
import salesbury from '@/public/assets/svg/salesbury/1.jpg';
import salesbury1 from '@/public/assets/svg/salesbury/2.jpg';
import salesbury2 from '@/public/assets/svg/salesbury/3.jpg';
import salesbury3 from '@/public/assets/svg/salesbury/4.jpg';
import salesbury4 from '@/public/assets/svg/salesbury/5.jpg';
import salesbury5 from '@/public/assets/svg/salesbury/6.webp';
import warner from '@/public/assets/svg/warner/1.jpg'
import warner1 from '@/public/assets/svg/warner/2.jpg'
import warner2 from '@/public/assets/svg/warner/3.jpg'
import warner3 from '@/public/assets/svg/warner/4.jpg'
import godolphin from '@/public/assets/svg/godolphin/godolphin.jpg'
import godolphin1 from '@/public/assets/svg/godolphin/godolphin1.jpg'
import godolphin2 from '@/public/assets/svg/godolphin/godolphin2.jpg'
import godolphin3 from '@/public/assets/svg/godolphin/godolphin3.jpg'


export const toursData: Tour[] = [
    {title: "London bridge",description:"El puente original se construyó hace más de 2,000 años por los romanos, convirtiéndose en un punto vital para el comercio y la conexión entre las partes norte y sur de la ciudad. A lo largo de los años, ha sufrido múltiples reconstrucciones y renovaciones debido a incendios, daños estructurales y cambios en el diseño. El puente actual, inaugurado en 1973, es un diseño moderno que reemplazó al anterior construido en el siglo XIX. Sin embargo, su predecesor, conocido por su arquitectura victoriana, fue desmantelado y transportado a Arizona, Estados Unidos, donde se volvió a montar como atracción turística. El Puente de Londres es un símbolo icónico reconocido en todo el mundo. Su diseño actual, que incorpora elementos modernos, ofrece una vista espectacular del horizonte de la ciudad. Con sus imponentes pilares y sus luces nocturnas, es una de las postales más fotografiadas y emblemáticas de Londres. Aunque el puente actual es moderno, su historia y relevancia cultural se remontan a siglos pasados. Ha sido testigo de eventos históricos significativos, desde la época romana hasta la actualidad, y ha sido inmortalizado en canciones, poemas y obras literarias. El puente no solo ofrece una vista impresionante del río Támesis y de los principales monumentos londinenses, como la Torre de Londres y la Catedral de San Pablo, sino que también está rodeado de actividades y atracciones turísticas que ofrecen una experiencia completa a los visitantes. El Puente de Londres, con su historia rica y su presencia icónica, es mucho más que una estructura arquitectónica: es un símbolo perdurable de la historia de la ciudad y un punto de referencia vital para los londinenses y los turistas que exploran esta metrópolis vibrante.", images: [{title:"bridge2" ,bgImage:bridge1},
      {title:"bridge2" ,bgImage:bridge2},
      {title:"bridge3" ,bgImage:bridge3},
      {title:"bridge4" ,bgImage:bridge4},
      {title:"bridge5" ,bgImage:bridge5}]},
    {title: "Stonehendge",   description: `La construcción de Stonehenge comenzó hace aproximadamente 5,000 años, y su propósito exacto aún es motivo de especulación y debate. Se cree que fue erigido en varias fases a lo largo de siglos, siendo sus primeras estructuras de tierra y madera antes de la colocación de las famosas piedras.\n\n
    Stonehenge es un sitio de una belleza y presencia inigualables. La vista de las piedras masivas y su disposición circular evoca una sensación de misterio y grandeza, invitando a los visitantes a reflexionar sobre su propósito y significado.\n\n
    Como Patrimonio de la Humanidad de la UNESCO, Stonehenge atrae a visitantes de todo el mundo. Los turistas pueden caminar alrededor del monumento y aprender sobre su historia en el Centro de Visitantes, que alberga exhibiciones interactivas y detalles sobre la construcción y el contexto histórico. Además de Stonehenge, la zona alberga otros sitios prehistóricos, como los montículos funerarios de barro llamados túmulos. Estos monumentos adicionales realzan la experiencia histórica y arqueológica del área.\n\n
    Stonehenge, con su misteriosa construcción y su legado ancestral, es un destino impresionante que invita a los visitantes a sumergirse en la historia antigua y a contemplar los enigmas que rodean este monumento icónico. Su presencia evocadora continúa cautivando a aquellos que buscan comprender su significado y su lugar en la historia de la humanidad.`, images: [
      {title:"stonehenge" ,bgImage:stonehenge},{title:"stonehenge1" ,bgImage:stonehenge1},{title:"stonehenge2" ,bgImage:stonehenge2},{title:"stonehenge3" ,bgImage:stonehenge3},{title:"stonehenge students" ,bgImage:stonehenge4}]},
    {title: "Warwick Castle", description:"El Castillo de Warwick es un magnífico ejemplo de arquitectura medieval y renacentista. Sus murallas imponentes, torres bien conservadas y su foso reflejan la grandiosidad y la fortaleza de su pasado. Los visitantes pueden explorar sus inmensos terrenos, disfrutar de jardines exuberantes y maravillarse con su estructura medieval bien conservada. El castillo ofrece una variedad de actividades y entretenimiento. Desde recorridos por las mazmorras hasta espectáculos de aves de presa y recreaciones históricas, ofrece una experiencia inmersiva que transporta a los visitantes a través del tiempo. Los jardines victorianos, el Gran Salón y las exposiciones de armaduras y armas antiguas son solo algunas de las maravillas que se pueden explorar. Además, Warwick Castle organiza eventos especiales durante todo el año, como fiestas medievales, festivales temáticos y experiencias nocturnas, ofreciendo a los visitantes una visión más profunda de la historia y la cultura del lugar. El Castillo de Warwick, con su impresionante presencia y rica historia, es un destino turístico que atrae a personas de todo el mundo, ofreciendo una experiencia única y cautivadora que combina historia, arquitectura y entretenimiento.", images: [{title:"warwick" ,bgImage:warwick}, {title:"warwick2" ,bgImage:warwick2}, {title:"warwick3" ,bgImage:warwick3}, {title:"warwick4" ,bgImage:warwick4}, {title:"warwick5" ,bgImage:warwick5}]},
    {title: "Salesbury Cathedral",description:"Una maravilla arquitectónica que se alza majestuosamente en Salisbury, Inglaterra, la Catedral de Salisbury es un hito histórico con una impresionante arquitectura gótica que ha cautivado a visitantes durante siglos. La construcción de la catedral comenzó en 1220 y se completó en un tiempo récord de 38 años. Es conocida por su torre de aguja alta y su diseño innovador que destaca por ser uno de los ejemplos más puros de la arquitectura gótica inglesa. La catedral alberga una de las cuatro copias originales de la Carta Magna de 1215, un documento histórico que ayudó a sentar las bases para la libertad y los derechos. Además, cuenta con una de las mejores colecciones de vidrieras medievales en el mundo, con alrededor de 700 años de antigüedad. La catedral se destaca por su arquitectura gótica excepcional y su majestuosa torre de aguja que se eleva a más de 120 metros. Los visitantes quedan impresionados por la delicadeza de sus detalles arquitectónicos, las intrincadas vidrieras y la grandiosidad de sus espacios interiores. El interior de la catedral alberga un tesoro de arte y patrimonio cultural, incluyendo esculturas medievales, reliquias históricas y un magnífico órgano de tubos. Las vidrieras medievales, que iluminan el espacio con colores vibrantes, cuentan historias bíblicas y eventos históricos. Los jardines de la catedral ofrecen un espacio tranquilo para contemplar su belleza y disfrutar de momentos de paz. Además, los terrenos que rodean la catedral brindan oportunidades para explorar la historia y la atmósfera única del lugar. La Catedral de Salisbury es mucho más que un edificio histórico; es un testimonio vivo de la habilidad y la imaginación humanas. Con su arquitectura sobresaliente y su rica historia, la catedral ofrece a los visitantes una experiencia cultural y espiritual que perdura a lo largo del tiempo.", images: [{title:"salesbury" ,bgImage:salesbury}, {title:"salesbury1" ,bgImage:salesbury1}, {title:"salesbury2" ,bgImage:salesbury2}, {title:"salesbury3" ,bgImage:salesbury3}, {title:"salesbury4" ,bgImage:salesbury4}   , {title:"salesbury5" ,bgImage:salesbury5}]},
    {title: "Godolphin School",description:"La Escuela Godolphin, ubicada en Salisbury, es una institución educativa con una rica historia y una reputación destacada en el ámbito académico y extracurricular. Fundada en 1726, la Escuela Godolphin ha mantenido una sólida tradición de excelencia académica y ha sido un pilar en la educación femenina desde sus inicios. Nombrada en honor a Lady Elizabeth Godolphin, ha tenido una trayectoria significativa en el empoderamiento y la educación de mujeres jóvenes. A lo largo de los años, la escuela ha evolucionado para ofrecer una educación moderna y equilibrada, manteniendo su enfoque en valores tradicionales como la excelencia académica, el liderazgo y el servicio comunitario. La Escuela Godolphin se enorgullece de su enfoque en la excelencia académica, brindando programas educativos rigurosos y diversas oportunidades de aprendizaje. Fomenta el desarrollo de habilidades críticas, creatividad y pensamiento independiente. Además de su enfoque académico, la escuela ofrece un amplio abanico de actividades extracurriculares que abarcan desde deportes hasta artes, música y actividades de servicio comunitario. Esto permite a las estudiantes desarrollar intereses diversos y habilidades prácticas más allá del aula. La Escuela Godolphin se enfoca en cultivar valores como la integridad, el respeto y la responsabilidad social entre sus estudiantes. Fomenta un ambiente inclusivo y de apoyo mutuo que promueve el crecimiento personal y académico. La Escuela Godolphin ha sido una institución educativa reconocida por su compromiso con la excelencia académica y el desarrollo integral de las mujeres jóvenes. A lo largo de su historia, ha mantenido una reputación enriquecedora que ha influenciado positivamente a generaciones de estudiantes.", images: [{title:"godolphin" ,bgImage:godolphin}, {title:"godolphin1" ,bgImage:godolphin1}, {title:"godolphin2" ,bgImage:godolphin2}, {title:"godolphin3" ,bgImage:godolphin3}, ]},
    {title: "Warner Brothers Studios", description:"  Los estudios Warner Bros. en Londres, también conocidos como Warner Bros. Studio Tour London-he Making of Harry Potter, son una fascinante y emocionante experiencia para los fanáticos de la saga de Harry Potter y para los entusiastas del cine en general. Este lugar icónico permite a los visitantes adentrarse en el mundo mágico de Harry Potter, ofreciendo un vistazo detrás de escena a la realización de las películas. Desde el Gran Comedor de Hogwarts hasta el Bosque Prohibido, cada rincón está meticulosamente recreado para capturar la esencia y la magia de la serie. Los visitantes tienen la oportunidad de explorar decorados auténticos, accesorios, vestuario y efectos especiales utilizados en las películas. Se les invita a recorrer los estudios a su propio ritmo, con la oportunidad de tomar fotografías y sumergirse en la rica historia y los detalles de la producción. El recorrido ofrece una visión privilegiada del proceso de realización de las películas, desde la concepción de las ideas hasta la postproducción. Los visitantes pueden aprender sobre los efectos especiales, la magia de los decorados y el trabajo artístico que llevó a la creación de este universo cinematográfico. Además de explorar los decorados emblemáticos, los visitantes pueden disfrutar de experiencias interactivas como montar en una escoba voladora, probar la cerveza de mantequilla y aprender hechizos de magia. También hay oportunidades para comprar recuerdos y productos exclusivos de Harry Potter. Los estudios Warner Bros. en Londres ofrecen una experiencia mágica y envolvente que transporta a los visitantes al mundo de Harry Potter. Es una oportunidad única para explorar el legado cinematográfico de la saga y sumergirse en la creatividad y la magia que hay detrás de las cámaras. ", images: [{title:"warner" ,bgImage:warner}, {title:"warner1" ,bgImage:warner1}, {title:"warner2" ,bgImage:warner2}, {title:"warner3" ,bgImage:warner3}]} 
  ]


  export interface ImageData {
    title: string;
    bgImage: StaticImageData;
  }
  
  export interface Tour {
    title: string;
    width?: number;
    height?: number;
    images: ImageData[];
    description?: string;
  }

export interface Grade {
    Horario: any;
    title: string;
    description: string;
    category: string;
    duration: string;
    img: string;

  }


  export const carouselObject= [
    {title: "oxford", bgImage: warwick},
    {title: "warwick", bgImage: warwick},
    {title: "londoneye", bgImage: warwick},
    {title: "stonehenge", bgImage: stonehenge},
    {title: "stonehenge", bgImage: stonehenge},
 
  
  ]