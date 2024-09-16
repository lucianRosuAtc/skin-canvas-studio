
import { LayoutAsianGrid } from '../LayoutAsianGrid'
import { LayoutBigCatGrid } from '../LayoutBigCatGrid'
import { LayoutGeometricGrid } from '../LayoutGeometricGrid'
import { LayoutMoonGrid } from '../LayoutMoonGrid'
import { LayoutWereWolfGrid } from '../LayoutWereWolfGrid'


export const galleryData = [
    {
        category: "Japanese ",
        name: "Japanese",
        description: "Japanese tattoo, floral design and oni, a symbol of power and strength.",
        gridLayout: <LayoutAsianGrid />,
    },
    {
        category: "Big Cat",
        name: "Big Cat",
        description: "Big Cat tattoo design with a dragon and a tiger, a symbol of power and strength.",
        gridLayout: <LayoutBigCatGrid />,
    },
    {
        category: "Geometric",
        name: "Geometric",
        description: "Geometric floral patterns that are perfect for those who love clean lines and symmetry.",
        gridLayout: <LayoutGeometricGrid />,
    },
    {
        category: "Blood Moon",
        name: "Blood Moon",
        description: "Photorealism Blood Moon tattoo design with photo-realistic details.",
        gridLayout: <LayoutMoonGrid />,
    },
    {
        category: "WereWolf",
        name: "WereWolf",
        description: "Werewolf tattoo design with photo-realistic details.",
        gridLayout: <LayoutWereWolfGrid />,
    },
   
];


