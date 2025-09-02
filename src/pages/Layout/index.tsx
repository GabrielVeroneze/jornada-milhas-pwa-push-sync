import { Outlet } from 'react-router'
import { useNotification } from '@/hooks/useNotification'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout = () => {
    const {} = useNotification()

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
