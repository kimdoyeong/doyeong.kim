import React from 'react'
import styled, { css } from 'styled-components';

import useImageBlog from '../../../lib/image/useImageBlog';
import Section from '..';
import { mobile } from '../../../lib/style/media';
import List from './List';
import Button from '../../Form/Button';
import { Link } from 'gatsby';

const Wrap = styled.div<{ image: string }>`
    display: flex;
    min-height: 100vh;
    flex-direction: row-reverse;
    position: relative;
    
    & > .image {
        display: block;
        background: url(${props => props.image}) no-repeat;
        background-size: cover;
        background-position: center bottom;
        width: 30vw;
    }
    & > .contents {
        padding: 3em;
        flex: 1;
        & > .goto {
            position: absolute;
            text-align: center;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 2.5em;
            & > a {
                all: unset;
            }
        }
        & > .bg {
            position: absolute;
            z-index: -1;
            bottom: 0;
            top: 70vh;
            left: 0;
            right: 0;
            background: linear-gradient(to bottom, rgba(255,255,255,0) 40%, rgba(255,255,255,0.3))
        }
    }

    ${mobile(css`
        flex-direction: column;
        min-height: auto;
        & > .image {
            width: auto;
            height: 60vh;
        }
    `)}
`;
function BlogSection() {
    const image = useImageBlog()
    return (
        <Section noPadding>
            <Wrap image={image.src}>
                <div className="image" />
                <div className="contents">
                    <h1 className="section-title">Blog</h1>
                    <div className="list">
                        <List />
                    </div>
                    <div className="goto">
                        <Link to="/blog/list"><Button primary>목록 보기</Button></Link>
                    </div>
                    <div className="bg" />
                </div>
            </Wrap>
        </Section>
    )
}

export default BlogSection;