import { useReserva } from '@/hooks/useReserva'
import type { Card } from '@/types/Card'
import Button from '@/components/Button'
import * as Styled from './styled'

interface ReserveCardProps {
    card: Card
}

const ReserveCard = ({ card }: ReserveCardProps) => {
    const { reservar } = useReserva()

    return (
        <Styled.Card>
            <div>
                <Styled.Image src={card.imagem} alt={card.alt} />
                <Styled.Infos>
                    <div>
                        <Styled.Paragraph>
                            Data de ida: {card.data_ida}
                        </Styled.Paragraph>
                        <Styled.Paragraph>
                            Data de volta: {card.data_volta}
                        </Styled.Paragraph>
                        <Styled.Paragraph>
                            Origem: {card.origem}
                        </Styled.Paragraph>
                        <Styled.Paragraph>
                            Destino: {card.destino}
                        </Styled.Paragraph>
                        <Styled.Paragraph>Tipo: {card.tipo}</Styled.Paragraph>
                    </div>
                </Styled.Infos>
            </div>
            <Styled.Divisor />
            <div>
                <Styled.Heading>Valor final</Styled.Heading>
                <Styled.Price>R$ {card.valor}</Styled.Price>
                <Button onClick={() => reservar(card)}>Concluir reserva</Button>
            </div>
        </Styled.Card>
    )
}

export default ReserveCard
