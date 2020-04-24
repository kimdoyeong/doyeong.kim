import React from "react"
import styled, { css } from "styled-components"
import useBlogPreview from "../../../lib/query/useBlogPreview"
import useLang from "../../../lib/useLang"
import { Link } from "gatsby"
import { mobile, tablet } from "../../../lib/style/media"

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  a {
    all: unset;
    cursor: pointer;
  }
  & > .blog-post {
    width: 300px;
    margin: 1em;
    box-sizing: border-box;
    background: #333;
    border-radius: 7px;
    box-shadow: 3px 3px 5px -1px rgba(0, 0, 0, 0.3);
    ${tablet(css`
      width: 100%;
      margin: 1em 2em;
    `)}
    ${mobile(css`
      margin: 1em 0;
    `)}
        .contents {
      padding: 1.5em 1em;
      h3.title {
        margin: 0;
      }
      p {
        margin-bottom: 0;
        color: #dadada;
      }
      p.description {
        margin: 0;
        margin-top: 4px;
      }
    }
  }
`
const Image = styled.div<{ image?: string }>`
  background: ${props =>
    props.image ? `url(${props.image}) no-repeat` : "#DADADA"};
  background-size: cover;
  background-position: center;
  height: 200px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;

  ${mobile(css`
    height: 150px;
  `)}
`
function Element({
  excerpt,
  fields: { slug },
  frontmatter: { date, title, description, image },
}: any) {
  return (
    <Link to={slug} className="blog-post">
      <Image image={image && image.childImageSharp.fluid.src} />
      <div className="contents">
        <h3 className="title">{title}</h3>
        <p className="date">{date}</p>
        <p className="description">{description || excerpt}</p>
      </div>
    </Link>
  )
}
function BlogSectionList() {
  const data = useBlogPreview()
  const lang = useLang()

  const list = data[lang].edges

  return (
    <Wrap>
      {list.map((data: any) => (
        <Element key={data.node.fields.slug} {...data.node} />
      ))}
    </Wrap>
  )
}

export default BlogSectionList
