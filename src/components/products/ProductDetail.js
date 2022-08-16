import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct, getProduct } from '../../service/productServices';
import { initialProduct } from '../../utils/emptyEntites';
import backArrow from './../../assets/arrow.png';
import Loader from './../common/Loader';
import Avatar from './../common/Avatar';
import './../../styles/item-details.css';

export const ProductDetail = ({ productProp }) => {
    const navigate = useNavigate();
    const [fetching, setFetching] = useState(true);
    const [product, setProduct] = useState({ ...initialProduct })
    let { id } = useParams();

    useEffect(() => {
        if (!!productProp) {
            setProduct(productProp)
            setFetching(false)
        } else {
            getProduct(id).then(res => {
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
        if (window.confirm(`Do you want to delete this product? \n ${product.title}`)) {
            deleteProduct(productId);
        }
    }

    return (
        <>
            {fetching ?
                <Loader />
                :
                <article className='item-detail'>
                    <button onClick={handleNavBack} className="nav-back"><img src={backArrow} alt="navigate back" /></button>
                    <img src={product.image} className="item-detail-image" alt={product.title} />
                    <section className='item-information'>
                        <h3 className="item-detail-title">{product.title}</h3>
                        <p className="item-price">
                            {product.price} <span className="item-currency">frqtal</span>
                        </p>
                        <hr className='item-price-line'/>
                        <div className='avatar-wrapper'>
                            <Avatar />
                            <section>
                            <h4>Author's name</h4>
                            <h5>Authoer's extra-info</h5>
                            </section>
                        </div>
                        <p className='item-description'>{product.description}</p>
                        <hr className='divider' />
                        <span className="chip" disabled>{product.category}</span>
                    </section>
                    <section className='action-btns'>
                        <button onClick={handleEdit} className="edit">Edit</button>
                        <button onClick={handleDelete} className="delete">Delete</button>
                    </section>
                </article>}
        </>
    )
};

export default ProductDetail;