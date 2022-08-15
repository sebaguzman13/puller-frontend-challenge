import { Route, Routes } from 'react-router-dom';
import Page404 from '../components/Page404';
import HomeScreen from '../components/HomeScreen';
import ProductDetail from '../components/ProductDetail';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export const RouterSwitch = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/products' element={<HomeScreen />} />
            <Route path='/product/{id}' element={<ProductDetail />} />
            <Route path='/product/edit' element={<ProductForm />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    )
}