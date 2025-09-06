import { useNavigate } from 'react-router'
import type { Card } from '@/types/Card'

export const useReserva = () => {
    const navigate = useNavigate()

    const reservar = async (card: Card) => {
        const reservationData = {
            data_ida: card.data_ida,
            data_volta: card.data_volta,
            origem: card.origem,
            destino: card.destino,
            tipo: card.tipo,
        }

        try {
            const resposta = await fetch('http://localhost:3000/reservas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservationData),
            })

            if (!resposta.ok) {
                throw new Error('Erro ao enviar os dados da reserva')
            }

            navigate('/reservas/finish')
        } catch (error) {
            console.error(error)
        }
    }

    return { reservar }
}
