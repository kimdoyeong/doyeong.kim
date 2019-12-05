import { useStaticQuery, graphql } from "gatsby"

function useImageBlog() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "page/blog.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2309, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.file.childImageSharp.fluid
}

export default useImageBlog
