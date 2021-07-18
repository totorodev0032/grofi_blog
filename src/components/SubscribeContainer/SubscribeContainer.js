import React from "react"
import styled from "styled-components"
import SubscribeInput from "../SubscribeInput/SubscribeInput"
import GrofiLogo from "../../images/grofi.png"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f4f8fc;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 100px;
  }
`

const Heading = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  color: #193259;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  letter-spacing: 1;
  margin-top: 4%;
  @media (max-width: 496px) {
    font-size: 20px;
    margin-top: 6%;
  }
`

const SubscribeContainer = () => {
  return (
    <>
      <Wrapper id="subscribe">
        {/* <RecentPost /> */}
        <Heading>Subscribe to our blog.</Heading>
        <SubscribeInput />
        <img src={GrofiLogo} alt="logo" />
      </Wrapper>
    </>
  )
}

export default SubscribeContainer
