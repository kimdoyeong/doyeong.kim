import React from 'react'
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
const Wrap = styled.div`
    .contents {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2.5em;
        & > header.header {
            margin-bottom: 2rem;
            .title {
                font-size: 3.5em;
                margin-top: 0;
                margin-bottom: 1rem;
            }
            .sub p {
                margin-top: 0;
                color: #BABABA;
                &.date {
                    margin: 0;
                }
            }
        }
    }
`;
const Banner = styled.div<{ image?: string }>`
    height: 50vh;
    ${(props) => props.image ?
        css`
        background: url(${props.image}) no-repeat;
    ` : css`
        background: #DADADA;
    `}
    background-size: cover;
    background-position: center;
    box-shadow: 0 10px 5px -1px rgba(0,0,0,0.3);
`;
function BlogTemplate({ data: { markdownRemark } }: any) {
    const page = markdownRemark;
    return (
        <Layout>
            <Wrap>
                <SEO title={page.frontmatter.title} />
                <Banner image={page.frontmatter.image && page.frontmatter.image.childImageSharp.fluid.src} />
                <div className="contents">
                    <header className="header">
                        <h1 className="title">
                            {page.frontmatter.title}
                        </h1>
                        <div className="sub">
                            <p className="date">{page.frontmatter.date}</p>
                            {page.frontmatter.description && <p>{page.frontmatter.description}</p>}
                        </div>
                    </header>
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