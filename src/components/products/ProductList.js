import { useEffect, useState } from 'react';
import { fetchProducts } from '../../service/productServices';
import { useNavigate } from 'react-router-dom';
import Loader from './../common/Loader';
import Layout from './../layout/Layout';
import ProductItem from './ProductItem';
import './../../styles/products.css';

export const ProductList = ({ filters }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [fetching, setFetching] = useState(true);

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