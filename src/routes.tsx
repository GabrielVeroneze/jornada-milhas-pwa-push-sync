import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Layout from '@/pages/Layout'
import Home from '@/pages/Home'
import ReserveCheck from '@/pages/ReserveCheck'
import ReserveComplete from '@/pages/ReserveComplete'
import NotFound from '@/pages/NotFound'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="reservas/:reserva"
                        element={<ReserveCheck />}
                    />
                    <Route
                        path="reservas/finish"
                        element={<ReserveComplete />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
