import { useEffect, useState } from 'react';
import Loader from './Loader';
import ProductItem from './ProductItem';
import './../styles/products.css';
import ProductDetail from './ProductDetail';
import { fetchProducts } from '../service/productServices';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import Routes from '../routes/Routes';

export const ProductList = ({ filters }) => {
    const navigate = useNavigate();
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
        navigate(`${p.id}`)
    }

    return (
        <Layout>
            <section className='product-list'>
                {fetching ?
                    <Loader />
                    :
                    <>
                        {products.length > 0 && products.filter(p => !!filters.name ? p.title.toLowerCase().includes(filters.name.toLowerCase()) : true)
                            .filter(p => filters.categories.length > 0 ? filters.categories.some(c => c === p.category) : true)
                            .map((p, index) => <ProductItem key={`${p}-${index}`} item={p} onClick={() => handleClick(p)} />)}
                    </>
                }
            </section>
        </Layout>
    )
};

export default ProductList;