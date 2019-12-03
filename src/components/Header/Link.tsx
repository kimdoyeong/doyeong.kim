import React from 'react'
import styled, { css } from 'styled-components';

interface LinkProps {
    image: string;
    size?: number;
}
const Link = styled.a<LinkProps>`
    all: unset;
    cursor: pointer;
    display: block;
    ${props => css`
        .image {
            background: url(${props.image}) no-repeat;
            width: ${props.size || 40}px;
            height: ${props.size || 40}px;
            background-position: center;
            background-size: contain;
        }
    `}
`;
interface LinkButtonProps {
    image: string;
    size?: number;
    to: string;
    name: string;
}
function LinkButton({ image, size, to, name }: LinkButtonProps) {
    return (
        <Link image={image} href={to} target="_blank" size={size}>
            <div className="image" role="img" aria-label={name + ' logo'} />
        </Link>
    )
}

export default LinkButton;