import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';

const Items = [
    {
        id: 0,
        title: 'Alfombra',
        price: '$500',
        imagen: fotoAlfombra
    },
    {
        id: 1,
        title: 'Equipo de musica',
        price: '$2000',
        imagen: fotoEquipo
    },
    {
        id: 2,
        title: 'Maceta',
        price: '$250',
        imagen: fotoMaceta
    }
]

const asyncGetData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Items);
        reject(error => console.error(error));
    }, 3000);
});

export default asyncGetData;