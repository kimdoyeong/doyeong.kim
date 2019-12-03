import { graphql, useStaticQuery } from 'gatsby'

function useImageCode() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "page/coding.jpg"}) {
                childImageSharp {
                    fixed(height:3000, grayscale: true) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return data.file.childImageSharp.fixed;
}

export default useImageCode;