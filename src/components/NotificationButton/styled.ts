import styled from 'styled-components'

type ExpandedProps = {
    $expanded: boolean
}

export const ButtonWrapper = styled.div`
    align-items: center;
    bottom: 20px;
    display: flex;
    left: 20px;
    position: fixed;
    z-index: 1000;
`

export const Button = styled.button<ExpandedProps>`
    align-items: center;
    background-color: #6750a4;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 10px 20px;
    position: relative;
    text-align: left;
    transition: width 0.3s;
    white-space: nowrap;
    width: ${({ $expanded }) => ($expanded ? '250px' : '40px')};

    &:hover {
        width: 250px;
    }
`

export const Message = styled.span<ExpandedProps>`
    margin-left: 10px;
    opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
    transition: opacity 0.3s;
`

export const Interrogation = styled.p`
    display: block;
    font-size: 20px;
`
