import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import GrofiLogo from "../../images/grofilogo.png"

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  ${"" /* background-color: #2026d2; */}
  background-color:white;
  height: 70px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`

const Nav = styled.nav`
  display: flex;
  width: 70%;
  height: 100%;
  align-items: center;

  @media (max-width: 496px) {
    width: 80%;
  }
`

const NavLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    margin-top: 30px;
    ${"" /* height: 100%; */}
  }
`

const NavRight = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;
`

const BtnLink = styled(Link)`
  display: flex;
  width: 120px;
  height: 40px;
  ${"" /* background-color: #f1295c; */}
  background-color:#46B86E;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 7px;
  cursor: pointer;
  margin-left: auto;
`

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <Nav>
          <NavLeft>
            <Link to="/">
              <img src={GrofiLogo} alt="Grofi Logo" />
            </Link>
          </NavLeft>
          {/* <NavRight>
              <BtnLink to="/#subscribe">
                <p
                  css={css`
                    color: white;
                    font-weight: 700;
                    font-size: 15px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                      'Helvetica Neue', sans-serif;
                    letter-spacing: 0.2;
                  `}
                >
                  Subscribe
                </p>
              </BtnLink>
            </NavRight> */}
        </Nav>
      </NavWrapper>
    </>
  )
}

export default Navbar
