import type { StaticImageData } from 'next/image';
import sbs from "@/public/assets/svg/sbs.svg"
import kel from "@/public/assets/svg/kel.svg"
import kids from "@/public/assets/svg/Kids.png"
import Teens from "@/public/assets/svg/Teens.png"
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
    {title: "Teens", img:Teens, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url:"/"},
    {title: "Adults ", img:adults1, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", url:"/"},
]

export const gradesContent = [
    {category:"Starter", title:"Starter ", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:starters},
    {category:"Beginner", title:"Beginner ", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:begginers},
    {category:"Prekid", title:"Prekid ", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:prekids},
    {category:"Kids", title:"Kids 1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 2", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 3", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 4", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Kids", title:"Kids 5 ", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:kids1},
    {category:"Teens", title:"Teens 1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Teens", title:"Teens 2", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Teens", title:"Teens 3", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Teens", title:"Teens 4", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Teens", title:"Teens 5", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"Teens", title:"Teens 6", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:teens},
    {category:"F.C.E", title:"F.C.E ", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:fce},
    {category:"Adults", title:"Adults 1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 2", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 3", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 4", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 5", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
    {category:"Adults", title:"Adults 6", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo leo, blandit a sagittis quis, lobortis eget quam. Nullam nec accumsan sapien. ", duration:"10 meses", img:adults},
]



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
    {title: "London bridge", images: [{title:"bridge2" ,bgImage:bridge1},
      {title:"bridge2" ,bgImage:bridge2},
      {title:"bridge3" ,bgImage:bridge3},
      {title:"bridge4" ,bgImage:bridge4},
      {title:"bridge5" ,bgImage:bridge5}]},
    {title: "Stonehendge", images: [
      {title:"stonehenge" ,bgImage:stonehenge},{title:"stonehenge1" ,bgImage:stonehenge1},{title:"stonehenge2" ,bgImage:stonehenge2},{title:"stonehenge3" ,bgImage:stonehenge3},{title:"stonehenge students" ,bgImage:stonehenge4}]},
    {title: "Warwick Castle", images: [{title:"warwick" ,bgImage:warwick}, {title:"warwick2" ,bgImage:warwick2}, {title:"warwick3" ,bgImage:warwick3}, {title:"warwick4" ,bgImage:warwick4}, {title:"warwick5" ,bgImage:warwick5}]},
    {title: "Salesbury Cathedral", images: [{title:"salesbury" ,bgImage:salesbury}, {title:"salesbury1" ,bgImage:salesbury1}, {title:"salesbury2" ,bgImage:salesbury2}, {title:"salesbury3" ,bgImage:salesbury3}, {title:"salesbury4" ,bgImage:salesbury4}   , {title:"salesbury5" ,bgImage:salesbury5}]},
    {title: "Godolphin School", images: [{title:"godolphin" ,bgImage:godolphin}, {title:"godolphin1" ,bgImage:godolphin1}, {title:"godolphin2" ,bgImage:godolphin2}, {title:"godolphin3" ,bgImage:godolphin3}, ]},
    {title: "Warner Brothers Studios", images: [{title:"warner" ,bgImage:warner}, {title:"warner1" ,bgImage:warner1}, {title:"warner2" ,bgImage:warner2}, {title:"warner3" ,bgImage:warner3}]} 
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
  }

export interface Grade {
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
