import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"
import { slugify } from "../../util/UtilityFunctions"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./single-post.css"
import Navbar from "../../components/Navbar/Navbar"
import SubscribeContainer from "../../components/SubscribeContainer/SubscribeContainer"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <>
      <Navbar />
      <SEO title={post.title} />
      <div className="single_parent">
        <div className="postArea">
          <h1>{post.title}</h1>
          <Img fluid={post.image.childImageSharp.fluid} />
          <br />

          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
          {/* <ul>
                {
                    post.tags.map(tag => (
                        <li key = {tag}>
                            <Link to = {`/tag/${slugify(tag)}`}>
                                {tag}
                            </Link>
                        </li>
                    ))
                }
            </ul> */}
        </div>
      </div>
      <SubscribeContainer />
    </>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
