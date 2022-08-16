import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct, getProduct } from '../service/productServices';
import { initialProduct } from '../utils/emptyEntites';
import backArrow from './../assets/arrow.png';
import Loader from './Loader';

export const ProductDetail = ({ productProp }) => {
    const navigate = useNavigate();
    const [fetching, setFetching] = useState(true);
    const [product, setProduct] = useState({...initialProduct})
    let { id } = useParams();

    useEffect(() => {
        if (!!productProp) {
            setProduct(productProp)
            setFetching(false)
        } else {
            getProduct(id).then(res => {
                console.log(res)
                setProduct(res)
                setFetching(false)
            })
        }
    }, [productProp])

    const handleNavBack = () => {
        navigate(-1);
    }

    const handleEdit = () => {
        navigate(`edit`);
    }

    const handleDelete = (productId) => {
        if (window.confirm(`Do you want to delete this product? ${product.title}`)) {
            deleteProduct(productId);
        }
    }

    return (
        <>
            {fetching ? 
            <Loader /> 
            :
            <article className='item-detail'>
                <button onClick={handleNavBack} className="nav-back"><img src={backArrow} alt="navigate back"/></button>
                <img src={product.image} className="item-detail-image" alt={product.title}/>
                <h3 className="item-detail-title">{product.title}</h3>
                <p>
                    <span className="item-price">{product.price}</span> <span className="item-currency">frqtal</span>
                </p>
                <p className='item-description'>{product.description}</p>
                <span className="chip" disabled>{product.category}</span>

                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </article>}
        </>
    )
};

export default ProductDetail;