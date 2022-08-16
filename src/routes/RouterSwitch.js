import { Route, Routes } from 'react-router-dom';
import Page404 from '../components/screens/Page404';
import HomeScreen from '../components/screens/HomeScreen';
import ProductDetail from '../components/products/ProductDetail';
import ProductForm from '../components/products/ProductForm';
import ProductsScreen from '../components/screens/ProductsScreen';
import { Routes as AppRoutes } from './Routes';

export const RouterSwitch = () => {
    return (
        <Routes>
            <Route path={AppRoutes.HOME} element={<HomeScreen />}/>
            <Route path={AppRoutes.PRODUCTS} element={<ProductsScreen />} />
            <Route path={AppRoutes.PRODUCT_FORM} element={<ProductForm />} />
            <Route path={AppRoutes.PRODUCT_DETAIL} element={<ProductDetail />} />
            <Route path={AppRoutes.PRODUCT_EDIT} element={<ProductForm />} />
            <Route path={AppRoutes.PAGE_404} element={<Page404 />} />
        </Routes>
    )
}