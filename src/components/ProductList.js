import { useEffect, useState } from 'react';
import Loader from './Loader';
import ProductItem from './ProductItem';
import './../styles/products.css';
import ProductDetail from './ProductDetail';

export const ProductList = ({ filters }) => {
    const [products, setProducts] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [modal, setModal] = useState(null);

    useEffect(() => {
        let stored = localStorage.getItem("p");
        if (!!stored) {
            setProducts(JSON.parse(stored));
        } else {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    setProducts(json)
                    localStorage.setItem("p", JSON.stringify(json));
                })
        }
        setFetching(false);
    }, [])

    const handleClick = (p) => {
        setModal(<ProductDetail product={p} onClose={setModal}/>);
    }

    return (
        <>
        <section className='product-list'>
            {fetching ?
                <Loader />
                :
                products
                .filter(p => true)
                .map((p, index) => <ProductItem key={`${p}-${index}`} item={p} onClick={() => handleClick(p)}/>)
            }
            {modal}
        </section>
        </>
    )
};

export default ProductList;