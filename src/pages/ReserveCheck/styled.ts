import { Link as RouterLink } from 'react-router'
import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    padding: 0 23px;

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 60px;
        padding: 0;
    }

    @media (min-width: 1024px) {
        max-width: 1000px;
    }
`

export const Wrapper = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
        align-items: center;
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
    }
`

export const Heading = styled.h1`
    color: #6750a4;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    @media (min-width: 1024px) {
        align-self: flex-start;
    }
`

export const Link = styled(RouterLink)`
    align-self: flex-start;
    color: #6750a4;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;

    @media (min-width: 768px) {
        align-self: center;
    }
`
