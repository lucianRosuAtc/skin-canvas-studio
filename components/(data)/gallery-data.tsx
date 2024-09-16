
import { LayoutAsianGrid } from '../LayoutAsianGrid'
import { LayoutBigCatGrid } from '../LayoutBigCatGrid'
import { LayoutGeometricGrid } from '../LayoutGeometricGrid'
import { LayoutMoonGrid } from '../LayoutMoonGrid'


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
        category: "Realism",
        name: "Realism",
        description: "Japanese tattoo design with a dragon and a tiger, a symbol of power and strength.",
        gridLayout: <LayoutGeometricGrid />,
    },
    {
        category: "Photorealism",
        name: "Photorealism",
        description: "Photorealism tattoo design with a dragon and a tiger, a symbol of power and strength.",
        gridLayout: <LayoutMoonGrid />,
    },

];


