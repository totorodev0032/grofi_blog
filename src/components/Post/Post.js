import React from "react"
import { Link } from "gatsby"
import "./Post.css"
import styled from "styled-components"
import Img from "gatsby-image"
import { slugify } from "../../util/UtilityFunctions"

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 290px;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #cecece;
  margin-right: 25px;

  @media (max-width: 496px) {
    width: 100%;
    margin-right: 0;
  }
`

const PostUp = styled.div`
  display: flex;
  flex-basis: 45%;
  ${"" /* background: url(${ImageLogo}); */}
  ${"" /* background-position: center;
  background-repeat: none;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px; */}
  width: 100%;
  object-fit: cover;

  img {
    height: 60%;
  }
`

const PostDown = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
  width: 100%;
`

const PostFooter = styled.div`
  display: flex;
  flex-basis: 20%;
  width: 100%;
`

const PostTitle = styled.p`
  ${"" /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */}
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #193259;
  margin: 0;
  padding: 20px 10px 10px 20px;
  letter-spacing: 1px;
`

const PostExcerpt = styled.p`
  font-family: "Jost", sans-serif;
  font-size: 13px;
  font-weight: 400;
  padding: 0 20px 0 20px;
  letter-spacing: 0.5px;
  color: #193259;
`

const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  height: auto;
  width: 100px;
  margin-left: 20px;
  color: #1e8aff;
  font-family: "Jost", sans-serif;
  font-size: 15px;
  margin-bottom: 2%;

  &:focus {
    background-color: none;
  }
`

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <>
      {/* <div>
        <Img fluid={fluid} />
        <div className="post_wrapper">
          <Link to={slug} className="link">
            <p className="title">{title}</p>
          </Link>
        </div>
      </div> */}

      <PostWrapper>
        <Img fluid={fluid} />

        <PostDown>
          <PostTitle>{title}</PostTitle>
          {/* <PostExcerpt>{post.excerpt}</PostExcerpt> */}
        </PostDown>
        {/* <PostFooter> */}
        {/* <NavLink to={post.slug}> */}
        <NavLink to={slug}>Read More &rarr;</NavLink>
        {/* </NavLink> */}
        {/* </PostFooter> */}
      </PostWrapper>
    </>
  )
}

export default Post
