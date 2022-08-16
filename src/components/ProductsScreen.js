import { useEffect, useState } from 'react';
import SearchComponent from "./SearchComponent";
import { fetchCategories } from '../service/productServices';
import ProductList from './ProductList';
import Layout from './Layout';

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