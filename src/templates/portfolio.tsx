import React from "react"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"
import SEO from "../components/SEO"
import { mobile } from "../lib/style/media"
import Button from '../components/Form/Button';
import MultiLanguage from "../components/MultiLanguage"
import Layout from "../components/Layout"

const Wrap = styled.div`
  & > .contents {
    padding: 2em 3em;
    max-width: 1280px;
    box-sizing: border-box;
    margin: 0 auto;

    ${mobile(css`
      font-size: 16px;
      padding: 2em 1.5em;
    `)}

    & > header.header {
      h1.title {
        font-size: 3em;
        margin-top: 0;
        margin-bottom: 1rem;
      }
      p {
        margin-top: 0;
        margin-bottom: 5px;
        color: #BABABA;
      }
      margin-bottom: 2em;
    }
  }
`
const Banner = styled.div<{ image?: string }>`
  height: 40vh;
  background: ${props =>
    props.image ? css`url(${props.image}) no-repeat` : css`#DADADA`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 5px -1px rgba(0, 0, 0, 0.3);
  position: relative;
  & > .back {
    position: absolute;
    left: 5vw;
    top: 1em;
  }
`
function Portfolio({ data: { markdownRemark } }: any) {
  const page = markdownRemark
  return (
    <Layout>
      <Wrap>
        <SEO title={page.frontmatter.title} />
        <Banner image={page.frontmatter.image.childImageSharp.fluid.src} />
        <div className="contents">
          <header className="header">
            <h1 className="title">{page.frontmatter.title}</h1>
            <p className="date">{page.frontmatter.date}</p>
            <p className="description">{page.frontmatter.description}</p>
          </header>
          <article
            className="article _content_article_"
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </div>
      </Wrap>
    </Layout>
  )
}
export const query = graphql`
  query PortfolioPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM, YYYY")
        description
      }
    }
  }
`
export default Portfolio
