import React from 'react'
import Layout from '../../components/Layout';
import styled, { css } from 'styled-components';
import useImageBlog from '../../lib/image/useImageBlog';
import LanguageSelector from '../../components/MultiLanguage/LanguageSelector';
import MultiLanguage from '../../components/MultiLanguage';
import { graphql, Link } from 'gatsby';
import useLang from '../../lib/useLang';
import { tablet, mobile } from '../../lib/style/media';

const Wrap = styled.div<{ image: string }>`
    .header {
        background: url(${(props) => props.image}) no-repeat;
        background-size: cover;
        background-position: center bottom;
        height: 60vh;
        box-shadow: 0 5px 5px -1px rgba(0,0,0,0.5);
        position: relative;
        color: black;
        & > .language-select {
            position: absolute;
            top: 1em;
            right: 1em;
        }
        & > .contents {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;

            padding: 1.5em;
            background: linear-gradient(
                to bottom,
                rgba(255,255,255,0),
                rgba(255,255,255,60)
            );
            h1.title {
                margin-top: 0;
                font-size: 3.5em;
                margin-bottom: 1rem;
            }
        }
    }
    .article {
        max-width: 1280px;
        margin: 0 auto;
        margin-top: 20px;
        padding: 1.5em;
        display: flex;
        flex-wrap: wrap;
    }
`;
const PostWrap = styled.div<{ image?: string }>`
width: 300px;
background: #333;
border-radius: 7px;
box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.3);
margin: 1em;
.go {
    all: unset;
    cursor: pointer;
    .image {
        height: 200px;
        background: ${props => props.image ? css`url(${props.image}) no-repeat` : css`#EAEAEA`};
        background-size: cover;
        background-position: center;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
    .contents {
        padding: .5em 1.5em;
    }
}

${tablet(css`
  width: 100%;
  margin: 1em 3em;
`)}
${mobile(css`
  margin: 1em 1.5em;
  font-size: 0.8rem;
`)}
`;
function Post({ excerpt, slug, date, description, image, title }: any) {
  return (
    <PostWrap image={image}>
      <Link className="go" to={slug}>
        <div className="image"></div>
        <div className="contents">
          <h1 className="title">{title}</h1>
          <p className="date">{date}</p>
          <p className="description">{description || excerpt}</p>
        </div>
      </Link>
    </PostWrap>
  );
}
function Page({ data }: any) {
  const image = useImageBlog();
  const lang = useLang();

  console.log(data[lang]);

  const ldata = (data[lang].edges as any[]).map(({ node }: any) => ({
    excerpt: node.excerpt,
    slug: node.fields.slug,
    date: node.frontmatter.date,
    description: node.frontmatter.description,
    image: node.frontmatter.image && node.frontmatter.image.childImageSharp.fluid.src,
    title: node.frontmatter.title
  }));

  return (
    <Layout>
      <Wrap image={image.src}>
        <header className="header">
          <div className="language-select">
            <LanguageSelector />
          </div>
          <div className="contents">
            <h1 className="title">
              <MultiLanguage ko="블로그" en="Blog" />
            </h1>
          </div>
        </header>
        <article className="article">
          {ldata.map(prop => <Post key={prop.slug} {...prop} />)}
        </article>
      </Wrap>
    </Layout>
  )
}

export const query = graphql`
    query BlogListQuery {
        ko: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
              frontmatter: { lang: { eq: "ko" } }
              fields: { slug: { regex: "/^/blog/" } }
            }
          ) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "YYYY-MM-DD")
                  title
                  description
                  image {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
          en: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
              frontmatter: { lang: { eq: "en" } }
              fields: { slug: { regex: "/^/blog/" } }
            }
          ) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "YYYY-MM-DD")
                  title
                  description
                  image {
                    childImageSharp {
                      fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
`;
export default Page;