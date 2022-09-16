import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';
import fotoCuadro from '../imagenes/fotoCuadro.jpg';
import fotoMantel from '../imagenes/fotoMantel.jpg';
import fotoTaza from '../imagenes/fotoTaza.jpg';


const Items = [
    {
        id: 0,
        title: 'Alfombra',
        price: 500,
        imagen: fotoAlfombra,
        category: "hogar",
        description: 'Alfombra moderna',
        stock: 10
    },
    {
        id: 1,
        title: 'Equipo de musica',
        price: 2000,
        imagen: fotoEquipo,
        category:"tecnologia",
        description: 'Tocadiscos nuevo en estilo retro',
        stock: 20
    },
    {
        id: 2,
        title: 'Maceta',
        price: 250,
        imagen: fotoMaceta,
        category: "hogar",
        description: 'Maceta blanca con detalle en madera',
        stock: 50
    },
    {
        id: 3,
        title: 'Mantel',
        price: 100,
        imagen: fotoMantel,
        category: "hogar",
        stock: 85
    },
    {
        id: 4,
        title: 'Cuadro',
        price: 400,
        imagen: fotoCuadro,
        category: "novedades",
        stock: 60
    },
    {
        id: 5,
        title: 'Juego de tazas',
        price: 270,
        imagen: fotoTaza,
        category: "novedades",
        stock: 70
    }
]

export const DatosProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Items);
        reject(err => console.log(err));
    }, 2000);
});
    


/*const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getFetch.then(items => {
            setItems(items)
            setLoading(false)
        })
    },[])

    return (
        <>
        <h1>Productos</h1>
        {
            loading ? <div class="fa-3x"><i class="fas fa-stroopwafel fa-spin"></i></div>
            :

            <div className='grid-product'>
                {items.map(items => (
                    <Item key = {items.title} items={items}/>
                ))}
            </div>
        }
        </>
    )*/


    /*const obtenerItems = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Items)
            }, 2000);
        })

    }

    useEffect(()=>{ 
        const funcionAsincrona = async()=>{
            try {
                const listado = await obtenerItems();
                setItems(listado);
                console.log('listado',listado);
            } catch (error) {
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
    },[])*/

    /*return(
        <div className="listContainer">
            <p>Productos disponibles</p>
            <div className= 'itemContainer'>
                {
                    Items.map((item)=>{
                        return(
                            <Item item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )*/

 