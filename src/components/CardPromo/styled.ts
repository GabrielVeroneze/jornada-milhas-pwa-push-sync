import { Link } from 'react-router'
import styled from 'styled-components'

export const Container = styled.li`
    background-color: #f7f2fa;
    border: 1px solid #cac4d0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 242px;

    @media (min-width: 768px) {
        width: 312px;
    }
`

export const Image = styled.img`
    border-radius: 8px 8px 0 0;
    height: 260px;
    width: 240px;

    @media (min-width: 768px) {
        width: 310px;
    }
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 16px 16px 16px;
`

export const Title = styled.h2`
    color: #6750a4;
    font-size: 28px;
    text-align: left;
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

export const CardLink = styled(Link)<{ $variant?: 'primario' | 'secundario' }>`
    background-color: ${({ $variant }) =>
        $variant === 'secundario' ? 'transparent' : '#6750a4'};
    border: ${({ $variant }) =>
        $variant === 'secundario' ? '1px solid #79747E' : 'none'};
    border-radius: 50px;
    color: ${({ $variant }) =>
        $variant === 'secundario' ? '#6750a4' : '#ffffff'};
    cursor: pointer;
    display: flex;
    font-weight: 500;
    justify-content: center;
    padding: 10px 24px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #d0bcff;
    }
`
