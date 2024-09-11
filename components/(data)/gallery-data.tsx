
import { LayoutAsianGrid } from '../LayoutAsianGrid'
import { LayoutBigCatGrid } from '../LayoutBigCatGrid'
import { LayoutGeometricGrid } from '../LayoutGeometricGrid'
import { LayoutMoonGrid } from '../LayoutMoonGrid'


export const galleryData = [
    {
        img: "/img/customerWork/CustomerWebsite.png",
        category: "Japanese ",
        name: " Japanese",
        description: "Japanese tattoo design with a dragon and a tiger, a symbol of power and strength.",
        gridLayout: <LayoutAsianGrid />,
    },
    {
        img: "/img/customerWork/CustomerWebsite.png",
        category: "Geometric",
        name: "Geometric",
        description: "Geometric tattoo design with a dragon and a tiger, a symbol of power and strength.",
        gridLayout: <LayoutBigCatGrid />,
    },
    {
        img: "/img/customerWork/CustomerWebsite.png",
        category: "Realism",
        name: "Realism",
        description: "Japanese tattoo design with a dragon and a tiger, a symbol of power and strength.",
        gridLayout: <LayoutGeometricGrid />,
    },
    {
        img: "/img/customerWork/CustomerWebsite.png",
        category: "Photorealism",
        name: "Photorealism",
        description: "Photorealism tattoo design with a dragon and a tiger, a symbol of power and strength.",
        gridLayout: <LayoutMoonGrid />,
    },

];


