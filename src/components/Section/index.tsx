import React from 'react'
import styled, { css } from 'styled-components';
import { mobile } from '../../lib/style/media';

interface WrapProps {
    image?: string;
    noPadding?: boolean;
}
const Wrap = styled.div<WrapProps>`
    .contents {
        
        ${props => !props.noPadding && css`
        padding: 2.5em 3em;
        `}
        ${mobile(css`
            font-size: 14px;
        `)}
        .title {
            font-size: 3em;
            font-weight: lighter;
        }
    }
    ${props => props.image && css`
        .image {
            height: 30vh;
            background: url(${props.image}) no-repeat;
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }
    `}
`;
type SectionProps = WrapProps & {
    children: React.ReactNode
};
function Section({ image, children }: SectionProps) {
    return (
        <Wrap image={image}>
            {image && <div className="image"></div>}
            <div className="contents">
                {children}
            </div>
        </Wrap>
    )
}

export default Section;