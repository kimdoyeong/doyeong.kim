import styled, { css } from 'styled-components';

interface ButtonProps {
    primary?: boolean;
}
const Button = styled.button<ButtonProps>`
    all: unset;
    opacity: 1;
    padding: .5em 1em;
    border-radius: 3px;
    box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.3);
    box-sizing: border-box;

    ${(props) => props.primary ? css`
        color: white !important;
        -webkit-text-fill-color: white;
        background: #7f5cff;
    ` : css`
        color: black !important;
        -webkit-text-fill-color: black;
        background: rgb(230,230,230);
    `}
`;

export default Button;