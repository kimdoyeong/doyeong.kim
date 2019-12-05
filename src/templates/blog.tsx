import React from 'react'
import { graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { mobile } from '../lib/style/media';
import Button from '../components/Form/Button';
const Wrap = styled.div`
    .contents {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2.5em;
    }
`;
const Banner = styled.div<{ image?: string }>`
    height: 100vh;
    ${(props) => props.image ?
        css`
        background: url(${props.image}) no-repeat;
    ` : css`
        background: #DADADA;
    `}
    background-size: cover;
    background-position: center;
    box-shadow: 0 10px 5px -1px rgba(0,0,0,0.3);
    position: relative;
    & > .topbar {
        position: absolute;
        top: 24px;
        left: 24px;
        a {
            all: unset;
            cursor:pointer;
        }
    }
    & > header.header {
        position: absolute;
        bottom: 0;
        padding: 3em;
        padding-bottom: 10vh;
        z-index: 3;
        margin-bottom: 2rem;
        max-width: 1280px;
        margin: 0 auto;
        left: 0;
        right: 0;
        .title {
            font-size: 3.5em;
            margin-top: 0;
            margin-bottom: 1rem;

            ${mobile(css`
                font-size: 3em;
            `)}
        }
        .sub p {
            margin-top: 0;
            color: #BABABA;
            &.date {
                margin: 0;
            }
        }
    }
    & > .background {
        background: linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.7) 70%);
        
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 70vh;
        z-index: 0;
    }
`;
function BlogTemplate({ data: { markdownRemark } }: any) {
    const page = markdownRemark;

    return (
        <Layout>
            <Wrap>
                <SEO title={page.frontmatter.title} description={page.frontmatter.description || page.excerpt} />
                <Banner image={page.frontmatter.image && page.frontmatter.image.childImageSharp.fluid.src}>
                    <div className="topbar">
                        <Link to="/blog/list">
                            <Button>목록으로 가기</Button>
                        </Link>
                    </div>
                    <header className="header">
                        <h1 className="title">
                            {page.frontmatter.title}
                        </h1>
                        <div className="sub">
                            <p className="date">{page.frontmatter.date}</p>
                            {page.frontmatter.description && <p>{page.frontmatter.description}</p>}
                        </div>
                    </header>
                    <div className="background" />
                </Banner>
                <div className="contents">

                    <article className="article _content_article_" dangerouslySetInnerHTML={{ __html: page.html }} />
                </div>
            </Wrap>
        </Layout>
    );
}

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug } }) {
            id
            html
            excerpt
            frontmatter {
                title
                description
                date(formatString: "YYYY-MM-DD")
                image {
                    childImageSharp {
                        fluid(maxWidth: 3840) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
export default BlogTemplate;