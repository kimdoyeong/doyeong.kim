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
        box-shadow: 5px 0 5px -1px rgba(0,0,0,0.5);
        & > .foot {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;

            .goto {
                position: absolute;
                bottom: 20px;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
                & > a {
                    all: unset;
                }
            }
            .bg {
                z-index: -1;
                height: 30vh;
                pointer-events: none;
                background: linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3))
            }
        }
    }

    ${mobile(css`
        flex-direction: column;
        min-height: auto;
        padding-bottom: 20vh;
        & > .image {
            width: auto;
            height: 30vh;
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
                    <div className="foot">
                        <div className="goto">
                            <Link to="/blog/list"><Button primary>목록 보기</Button></Link>
                        </div>
                        <div className="bg" />
                    </div>
                </div>
            </Wrap>
        </Section>
    )
}

export default BlogSection;