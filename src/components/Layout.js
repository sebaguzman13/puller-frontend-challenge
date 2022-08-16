import FooterMenu from './FooterMenu';

export const Layout = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
            <FooterMenu />
        </>
    )
}

export default Layout;