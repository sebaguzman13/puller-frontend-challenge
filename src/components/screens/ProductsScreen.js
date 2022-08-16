import { useEffect, useState } from 'react';
import { fetchCategories } from '../../service/productServices';
import SearchComponent from "./../products/SearchComponent";
import ProductList from './../products/ProductList';

export const ProductsScreen = () => {
    const [categories, setCategories] = useState([]);
    const [filters, setFilters] = useState({ name: "", categories: [] })

    useEffect(() => {
        fetchCategories().then(res => setCategories(res))
    }, [])

    const updateFilters = (filters) => {
        setFilters(filters);
    }

    return (
        <>
            <SearchComponent categories={categories} setFilters={updateFilters} />
            <ProductList filters={filters} />
        </>
    )
}

export default ProductsScreen;