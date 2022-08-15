import { useEffect, useState } from 'react';
import Loader from './Loader';
import ProductItem from './ProductItem';
import './../styles/products.css';
import ProductDetail from './ProductDetail';
import { fetchProducts } from '../service/productServices';

export const ProductList = ({ filters }) => {
    const [products, setProducts] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [modal, setModal] = useState(null);

    useEffect(() => {
        fetchProducts().then(res => {
            setProducts(res);
            setFetching(false);
        });
    }, [])

    const handleClick = (p) => {
        setModal(<ProductDetail product={p} onClose={setModal} />);
    }

    return (
        <section className='product-list'>
            {fetching ?
                <Loader />
                :
                <>
                {products.filter(p => p.title.includes(filters.name) || p.category === filters.category )
                    .map((p, index) => <ProductItem key={`${p}-${index}`} item={p} onClick={() => handleClick(p)} />)}
                </>
            }
            {modal}
        </section>
    )
};

export default ProductList;