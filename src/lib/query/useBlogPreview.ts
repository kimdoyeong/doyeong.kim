import { useStaticQuery, graphql } from "gatsby"

function useBlogPreview() {
  const data = useStaticQuery(graphql`
    query {
      ko: allMarkdownRemark(
        limit: 5
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
        limit: 5
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
  `)
  return data;
}

export default useBlogPreview
