
import {ImProfile,FaLaptopCode,TbSocial,TiContacts,MdPhotoLibrary,MdBusiness,FaHome} from '../icons'

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
    iconName:FaHome,
    url:'/address'
  }
]