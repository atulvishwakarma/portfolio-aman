import { ImProfile } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
import { FcHome } from "react-icons/fc";
import {MdPhotoLibrary,MdBusiness} from 'react-icons/md'
export const menuLink = [
  {
    id: 101,
    name: "Profile",
    iconName: ImProfile,
    url: "/profile",
  },
  {
    id: 102,
    name: "Job Info",
    iconName: FaLaptopCode,
    url: "/jobinfo",
  },
  {
    id: 103,
    name: "Contact",
    iconName: TiContacts,
    url: "/contact",
  },
  {
    id: 104,
    name: "Social Media",
    iconName: TbSocial,
    url: "/social-media",
  },
];

export const extraMenu = [
  
  {
    id:201,
    name:'Gallery',
    iconName:MdPhotoLibrary,
    url:'/gallery'
  },{
    id:202,
    name:'Business',
    iconName:MdBusiness,
    url:'/business'
  }
  ,{
    id:203,
    name:'Address',
    iconName:FcHome,
    url:'/address'
  }
]