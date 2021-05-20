import { useContext } from 'react'
import { ProductsContext } from '../../../App'
import classes from './products.module.css'
import SingleProduct from './SingleProduct'

const Products = () => {
    const [products, setProducts] = useContext(ProductsContext)
    return (
        <div className="container">
            { products.length !== 0 && <h1 className="text-center" style={{ color: '#ed8d36', fontSize: '4rem' }}>Products</h1>}
            <div className="row py-5">
                {
                    products.map(product => <SingleProduct key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}

export default Products
