import FooterMenu from './FooterMenu';

export const Layout = ({ children, freeHeight }) => {
    return (
        <>
            <main className={!!freeHeight ? 'free-height' : ''}>
                {children}
            </main>
            <FooterMenu />
        </>
    )
}

export default Layout;