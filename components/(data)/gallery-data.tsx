
import { LayoutAsianGrid } from '../LayoutAsianGrid'
import { LayoutBigCatGrid } from '../LayoutBigCatGrid'
import { LayoutGeometricGrid } from '../LayoutGeometricGrid'
import { LayoutMoonGrid } from '../LayoutMoonGrid'
import { LayoutRealismGrid } from '../LayoutRealismGrid'
import { LayoutWolfGrid } from '../LayoutWolfGrid'


export const galleryData = [
    {
        category: "Japanese ",
        name: "Japanese",
        description: "Japanese tattoo, floral design and oni, a symbol of power and strength.",
        gridLayout: <LayoutAsianGrid />,
    },
    {
        category: "Big Cats",
        name: "Big Cats",
        description: "Big Cats tattoo design with a dragon and a tiger, a symbol of power and strength.",
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
        category: "Werewolf",
        name: "Werewolf",
        description: "Werewolf tattoo design with photo-realistic details and forest background. Most popular tattoo design.",
        gridLayout: <LayoutWolfGrid />,
    },
    {
        category: "Realism",
        name: "Realism",
        description: "Realism tattoo design with photo-realistic details: skuls and flowers are the new Guns & Roses.",
        gridLayout: <LayoutRealismGrid />,
    },
   
];


