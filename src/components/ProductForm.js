import { useEffect, useState } from "react";
import { createProduct, fetchCategories, getProduct, updateProduct } from "../service/productServices";
import { initialProduct } from "../utils/emptyEntites";
import Layout from "./Layout";
import './../styles/product-form.css';
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

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
        <Layout>
            {fetching ?
                <Loader />
                :
                <article className="product-form">
                    <h1>{formLabel} Product</h1>
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


                        <button type="submit">{formLabel}</button>
                    </form>
                </article>}
        </Layout>
    )
}

export default ProductForm;