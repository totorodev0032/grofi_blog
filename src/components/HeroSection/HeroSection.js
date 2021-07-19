import React from "react"
import styled from "styled-components"

const Herosection = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;
  background: #f8f9fa;
`

const HeroContent = styled.div`
  display: flex;
  height: 400px;
  width: 80%;
  justify-content: center;
  align-items: center;
`

const LeftHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  flex-basis: 60%;
  justify-content: center;
  align-items: center;
  @media (max-width: 496px) {
    flex-basis: 100%;
    ${"" /* justify-content: flex-start; */}
    align-items: flex-start;
  }
`

const Heading = styled.p`
  ${"" /* font-family: 'Jost', sans-serif; */}
  font-family: 'Josefin Sans', sans-serif;
  color: #193259;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 50px;
  @media (max-width: 496px) {
    font-size: 30px;
    line-height: 35px;
    text-align: left;
  }
`

const ButtonJoin = styled.button`
  display: flex;
  height: 50px;
  width: 200px;
  background-color: #3a2dce;
  color: white;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  letter-spacing: 0.3;
  ${"" /* font-family: 'Jost', sans-serif; */}
  cursor: pointer;
  margin-top: 20px;
  letter-spacing: 0.5px;
  font-size: 17px;
  font-family: "Josefin Sans", sans-serif;

  @media (max-width: 496px) {
    margin-top: 10px;
  }
`

const HeroSection = () => {
  return (
    <>
      <Herosection>
        <HeroContent>
          <LeftHero>
            <Heading>
              Join us on our mission to help people around the world to be
              financially empowered.
            </Heading>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://t.me/Gro_fi"
            >
              <ButtonJoin>Join Community</ButtonJoin>
            </a>
          </LeftHero>
        </HeroContent>
      </Herosection>
    </>
  )
}

export default HeroSection
