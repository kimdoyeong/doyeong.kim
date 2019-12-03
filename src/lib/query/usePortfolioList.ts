import { graphql, useStaticQuery } from 'gatsby';

function usePortfolioList() {
  const query = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort:{fields:[frontmatter___date], order:DESC}) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY년 MM월 DD일")
              title
              description
              image {
                  childImageSharp {
                      fluid(maxHeight: 200) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
            }
          }
        }
      }
    }
    `);

  return query.allMarkdownRemark.edges.map(({ node }: any) => ({
    slug: node.fields.slug,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    description: node.frontmatter.description,
    image: node.frontmatter.image.childImageSharp.fluid.src,
    excerpt: node.excerpt
  }));
}

export default usePortfolioList
