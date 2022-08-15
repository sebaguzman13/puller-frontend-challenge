import { useEffect, useState } from "react";
import { createProduct, fetchCategories, updateProduct } from "../service/productServices";
import { initialProduct } from "../utils/emptyEntites";

export const ProductForm = ({ product }) => {
    const formLabel = !!product ? 'Create' : 'Edit';
    const [categories, setCategories] = useState([]);
    const [productData, setProductData] = useState(product || { ...initialProduct });

    useEffect(() => {
        fetchCategories().then(res => setCategories(res));
    }, [])

    const handleChange = (e) => {
        setProductData({...initialProduct, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!product) {
            updateProduct(productData);
        } else {
            createProduct(productData);
        }
    }

    return (
        <article className="product-form">
            <h1>{formLabel} Product</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={productData.id} onChange={handleChange}/>

                <label htmlFor="title" >Title</label>
                <input type="text" name="title" value={productData.title} onChange={handleChange}/>

                <label htmlFor="price" >Price</label>
                <input type="number" name="price" value={productData.price} step={0.1} onChange={handleChange}/>

                <label htmlFor="category" >Category</label>
                <select name="category" value={productData.category} onChange={handleChange}>
                    {!!categories && categories.map((category, index) => {
                        console.log(category, categories)
                        return(
                        <option key={index} value={category}>{category}</option>
                    )})}
                </select>

                <label htmlFor="description" >Description</label>
                <textarea name="description" value={productData.description} rows="8" onChange={handleChange}></textarea>

                <label htmlFor="image-url" >Image</label>
                <input type="text" name="image-url" value={productData.image?? ''} onChange={handleChange}/>

                <button type="submit">{formLabel}</button>
            </form>
        </article>
    )
}

export default ProductForm;