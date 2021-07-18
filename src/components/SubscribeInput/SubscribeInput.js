import React from "react"
import styled from "styled-components"

const InputContainer = styled.form`
  display: flex;
  height: 50px;
  width: 30%;
  background-color: white;
  border: 3px solid #e9e3fe;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 496px) {
    width: 90%;
  }
`

const Input = styled.input`
  display: flex;
  flex-basis: 80%;
  height: 75%;
  border: none;
  ${"" /* margin-left: 2%; */}
  margin-top: 4px;
  padding-left: 15px;
  background-color: white;
  margin-left: 20px;
  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 15px;
    color: gray;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  @media (max-width: 496px) {
    width: 50%;
  }
`

const Button = styled.button`
  display: flex;
  flex-basis: 20%;
  height: 90%;
  background: white;
  justify-content: center;
  align-items: center;
  color: #5e17eb;
  font-weight: 900;
  font-size: 25px;
  border: none;
  border-radius: 7px;
  margin-right: 15px;
  margin-top: 2px;
  font-size: 15px;
  font-family: monospace;

  &:hover {
    cursor: pointer;
    background: #f5f5f5;
  }
`

const SymbolNext = styled.p`
  padding-bottom: 5px;
`

const SubscribeInput = () => {
  return (
    <>
      <InputContainer>
        <Input type="text" placeholder="Your Email Id" />
        <Button>Subscribe</Button>
      </InputContainer>
    </>
  )
}

export default SubscribeInput
