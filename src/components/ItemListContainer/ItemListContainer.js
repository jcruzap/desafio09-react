import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { recuperarProductos, recuperarProductosfiltrados } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ saludo, setPaginas }) => {

    const [productos, setProductos] = useState([])

    const { idCategorias } = useParams()

    useEffect(() => {

        if (!idCategorias) {

            recuperarProductos().then(productos => {
                setProductos(productos)
            })

        } else {
            recuperarProductosfiltrados(idCategorias).then(productos => {
                setProductos(productos)
            })
        }


    }, [idCategorias])


    return (
        <>

            <h1 className="saludos">{saludo}</h1>
            <ItemList productos={productos} setPaginas={setPaginas} />

        </>

    )
}

export default ItemListContainer