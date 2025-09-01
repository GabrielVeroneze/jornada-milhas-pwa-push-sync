import styled from 'styled-components'

export const Card = styled.div`
    background-color: #f7f2fa;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    width: 100%;

    & > div:last-child {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    @media (min-width: 768px) {
        align-items: center;
        padding: 24px;
        width: 100%;

        & > div:first-child {
            display: flex;
            gap: 24px;
            width: 100%;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 32px;

        & > div:first-child {
            width: 60%;
        }

        & > div:last-child {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    }
`

export const Heading = styled.h2`
    color: #6750a4;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`

export const Divisor = styled.div`
    background-color: #6750a4;
    height: 1px;
    width: 100%;

    @media (min-width: 1024px) {
        height: 250px;
        width: 1px;
    }
`

export const Image = styled.img`
    height: 260px;
    width: 100%;

    @media (min-width: 768px) {
        width: 310px;
    }
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Paragraph = styled.p`
    color: #49454f;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
`

export const Price = styled.p`
    color: #49454f;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
`
