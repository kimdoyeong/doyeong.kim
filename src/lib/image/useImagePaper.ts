import { graphql, useStaticQuery } from 'gatsby'

function useImageCode() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "page/paper.jpg"}) {
                childImageSharp {
                    fluid(maxWidth:3840, duotone: {highlight: "#7f5cff", shadow: "#1f1f1f", opacity: 70}) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return data.file.childImageSharp.fluid;
}

export default useImageCode;