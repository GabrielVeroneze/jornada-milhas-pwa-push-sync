import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Picture from '@/components/Picture'
import * as Styled from './styled'

const NotFound = () => {
    return (
        <>
            <Header />
            <Picture
                srcMobile="/images/banner2-home-mobile.png"
                srcTablet="/images/banner2-home-tablet.png"
                srcDesktop="/images/banner2-home-desktop.png"
                alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu"
            />
            <Styled.Container>
                <Styled.Heading>
                    Ops! Página não encontrada! Retorne à tela inicial.
                </Styled.Heading>
                <Picture
                    srcMobile="/images/not-found-mobile.png"
                    srcTablet="/images/not-found-tablet.png"
                    srcDesktop="/images/not-found-tablet.png"
                    alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu"
                />
            </Styled.Container>
            <Footer />
        </>
    )
}

export default NotFound
