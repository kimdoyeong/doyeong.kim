import { graphql, useStaticQuery } from "gatsby"
import { useSelector } from "react-redux"
import { RootState } from "../../store/reducer"

function usePortfolioList() {
  const { defaults, ko, en } = useStaticQuery(graphql`
    query {
      defaults: allMarkdownRemark(
        limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { lang: { eq: null } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            html
            frontmatter {
              date(formatString: "YYYY년 MM월")
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      ko: allMarkdownRemark(
        limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { lang: { eq: "ko" } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            html
            frontmatter {
              date(formatString: "YYYY년 MM월")
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      en: allMarkdownRemark(
        limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { lang: { eq: "en" } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            html
            frontmatter {
              date(formatString: "YYYY년 MM월")
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 760) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { lang } = useSelector((state: RootState) => state.Language)

  let data = [...defaults.edges]
  if (lang === "ko") {
    data = [...data, ...ko.edges]
  } else if (lang === "en") {
    data = [...data, ...en.edges]
  }

  return data.map(({ node }: any) => ({
    slug: node.fields.slug,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    description: node.frontmatter.description,
    image:
      node.frontmatter.image &&
      node.frontmatter.image.childImageSharp.fluid.src,
    html: node.html,
    excerpt: node.excerpt,
  }))
}

export default usePortfolioList
