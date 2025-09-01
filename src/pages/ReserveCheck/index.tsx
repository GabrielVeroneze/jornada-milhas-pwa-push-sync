import { useParams } from 'react-router'
import Picture from '@/components/Picture'
import cards from '@/assets/cards.json'
import ReserveCard from './ReserveCard'
import * as Styled from './styled'

const ReserveCheck = () => {
    const { reserva } = useParams()
    const card = cards.find((card) => card.id === reserva)

    return (
        <>
            <Picture
                srcMobile="/images/reserve-check-mobile.png"
                srcTablet="/images/reserve-check-tablet.png"
                srcDesktop="/images/reserve-check-desktop.png"
                alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu"
            />
            <Styled.Container>
                <Styled.Wrapper>
                    <Styled.Link to="/">
                        &larr; Voltar a página inicial
                    </Styled.Link>
                    <Styled.Heading>Resumo da Reserva</Styled.Heading>
                </Styled.Wrapper>
                <Styled.Description>
                    A partir de agora você tem 3 dias úteis para concluir seu
                    pagamento.
                    <br />
                    Confira abaixo os detalhes da sua reserva:
                </Styled.Description>
                {card && <ReserveCard card={card} />}
            </Styled.Container>
        </>
    )
}

export default ReserveCheck
