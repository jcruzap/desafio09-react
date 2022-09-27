import { useState, useEffect } from "react";
import { recuperarProductosxID } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [productos, setProductos] = useState()

    const { idProductos } = useParams()




    useEffect(() => {
        recuperarProductosxID(idProductos)
            .then(productos => {
                setProductos(productos)

            })
            .catch(error => {
                console.log(error)
            })
    }, [idProductos])

    return (
        <div>
            <h3>Conoce sobre nuestro producto</h3>
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer