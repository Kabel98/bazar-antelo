import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';

const Items = [
    {
        id: 0,
        title: 'Alfombra',
        price: '$500',
        imagen: fotoAlfombra,
        description: 'Alfombra moderna'
        
    },
    {
        id: 1,
        title: 'Equipo de musica',
        price: '$2000',
        imagen: fotoEquipo,
        description: 'Tocadiscos nuevo en estilo retro'
    },
    {
        id: 2,
        title: 'Maceta',
        price: '$250',
        imagen: fotoMaceta,
        description: 'Maceta blanca con detalle en madera'
    }
]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Items);
        reject(err => console.log(err));
    }, 3000);
});

export default getFetch;