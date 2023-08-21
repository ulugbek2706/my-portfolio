import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";
import myPhoto from "../images/myPhoto.png"
import html from "../images/skills/html.png";
import css from "../images/skills/css.png";
import bootstrap from "../images/skills/bootstrap.png";
import firebase from "../images/skills/firebase.png";
import js from "../images/skills/js.png";
import nextjs from "../images/skills/nextjs.png";
import react from "../images/skills/react.png";
import reduxsaga from "../images/skills/redux-saga.png";
import tailwind from "../images/skills/tailwind.png";

export const links=[
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'about'
    },
    {
        id:3,
        link:'portfolio'
    },
    {
        id:4,
        link:'experience'
    },
    {
        id:5,
        link:'contact'
    }
]
export const socialLinks=[
    {
        id:1,
        child:(
            <>
              LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href:'https://linkedin.com',
        style:'rounded-lr-md'
    },
    {
        id:2,
        child:(
            <>
              Github <FaGithub size={30}/>
            </>
        ),
        href:'https://github.com',
    },
    {
        id:3,
        child:(
            <>
              Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:ulugbekgafurov752@gmail.com',
    },
    {
        id:4,
        child:(
            <>
              Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'/resume.pdf',
        style:'rounded-lr-md',
        download:true
    },
    
]
export const portfolio=[
    {
        id:1,
        src:myPhoto
    },
    {
        id:2,
        src:myPhoto
    },
    {
        id:3,
        src:myPhoto
    },
    {
        id:4,
        src:myPhoto
    },
    {
        id:5,
        src:myPhoto
    },
    {
        id:6,
        src:myPhoto
    },
]
export const skills=[
    {
        id:1,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-sky-500'
    },
    {
        id:3,
        src:bootstrap,
        title:'BOOTSTRAP',
        style:'shadow-violet-500'
    },
    {
        id:4,
        src:js,
        title:'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id:5,
        src:react,
        title:'REACT',
        style:'shadow-blue-600'
    },
    {
        id:6,
        src:reduxsaga,
        title:'REDUX-SAGA',
        style:'shadow-violet-600'
    },
    {
        id:7,
        src:tailwind,
        title:'TAILWIND',
        style:'shadow-sky-300'
    },
    {
        id:8,
        src:firebase,
        title:'FIREBASE',
        style:'shadow-yellow-700'
    },
    {
        id:9,
        src:nextjs,
        title:'NEXT JS',
        style:'shadow-white'
    },
]