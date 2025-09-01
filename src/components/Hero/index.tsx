import Picture from '@/components/Picture'
import * as Styled from './styled'

const Hero = () => {
    return (
        <Styled.Container>
            <Styled.Title>Compartilhe milhas, compartilhe o mundo</Styled.Title>
            <Picture
                srcMobile="/images/banner-home-mobile.png"
                srcTablet="/images/banner-home-tablet.png"
                srcDesktop="/images/banner-home-desktop.png"
                alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu"
            />
        </Styled.Container>
    )
}

export default Hero
