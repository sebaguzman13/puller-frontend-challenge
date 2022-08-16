import { useEffect, useState } from "react";
import { createProduct, fetchCategories, getProduct, updateProduct } from "../../service/productServices";
import { initialProduct } from "../../utils/emptyEntites";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./../layout/Layout";
import Loader from "./../common/Loader";
import backArrow from './../../assets/arrow.png';
import './../../styles/product-form.css';

export const ProductForm = ({ product }) => {
    const [fetching, setFetching] = useState(true);
    const [formLabel, setFormLabel] = useState("Create");
    const [categories, setCategories] = useState([]);
    const [productData, setProductData] = useState(product || { ...initialProduct });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchCategories().then(res => setCategories(res));
        if (!!id) {
            setFormLabel("Edit")
            getProduct(id).then(res => {
                setProductData(res)
                setFetching(false)
            });
        } else {
            setFetching(false);
        }
    }, [])

    const handleNavBack = () => {
        navigate(-1);
    }

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!id) {
            updateProduct(productData).then(res => alert("Product updated succesfully")).then(() => navigate(-1));
        } else {
            createProduct(productData).then(res => {
                setProductData({ ...initialProduct });
                alert("Product created successfully");
                navigate(-1);
            });
        }
    }

    return (
        <Layout freeHeight>
            {fetching ?
                <Loader />
                :
                <article className="product-form">
                    <h1>{formLabel} Product</h1>
                    <button onClick={handleNavBack} className="nav-back"><img src={backArrow} alt="navigate back" /></button>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="hidden" name="id" value={productData.id} onChange={handleChange} />

                        <label htmlFor="image-url">Image URL</label>
                        <input type="text" name="image" value={productData.image ?? ''} onChange={handleChange} />

                        <label htmlFor="title" >Title</label>
                        <input type="text" name="title" value={productData.title} onChange={handleChange} />

                        <label htmlFor="price" >Price</label>
                        <input type="number" name="price" value={productData.price} step={0.1} onChange={handleChange} />

                        <label htmlFor="category" >Category</label>
                        <select name="category" value={productData.category} onChange={handleChange}>
                            {!!categories && categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>

                        <label htmlFor="description" >Description</label>
                        <textarea name="description" value={productData.description} rows="8" onChange={handleChange}></textarea>


                        <button type="submit" className="edit">{formLabel}</button>
                    </form>
                </article>}
        </Layout>
    )
}

export default ProductForm;