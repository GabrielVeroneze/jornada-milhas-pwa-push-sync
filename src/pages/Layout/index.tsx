import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { onMessageListener, requestToken } from '@/firebase'
import Header from '@/components/Header'
import NotificationButton from '@/components/NotificationButton'
import Footer from '@/components/Footer'

const Layout = () => {
    useEffect(() => {
        onMessageListener()
    }, [])

    return (
        <>
            <Header />
            <NotificationButton action={requestToken} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
