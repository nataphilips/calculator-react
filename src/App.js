import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 0,
    }
  }

  render() {
    return (
      <AppBody>
        <CalcualtorContainer>
          <Input
            type="text"
            value={this.state.input}>
          </Input>
          <ButtonRow>
            <Button greyButton={true}>AC</Button>
            <Button greyButton={true}>&plusmn;</Button>
            <Button greyButton={true}>%</Button>
            <Button orangeButton={true}>&divide;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button orangeButton={true}>&times;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button orangeButton={true}>&minus;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button orangeButton={true}>+</Button>
          </ButtonRow>
          <ButtonRow>
            <ZeroButton>0</ZeroButton>
            <Button>	&#1628;</Button>
            <Button orangeButton={true}>=</Button>
            </ButtonRow>
        </CalcualtorContainer>
      </AppBody>
    );
  }
}
const Flex = styled.div`
  display: flex;
`
const AppBody = styled(Flex)`
  text-align: center;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`
const CalcualtorContainer = styled(Flex)`
  height: 500px;
  width: 320px;
  flex-direction: column;
  background-color: grey;
  border: none;
  box-shadow: 1px 1px 10px 1px grey;
`
const ButtonRow = styled(Flex)`
  border-top: none;
  height: 16%;
  width: 100%;
  text-align: center;
`
const Input = styled.input`
  height: 25%;
  border-left: 1px solid black;
  background-color: black;
  border: 0px;
  width: 300px;
  font-family: 'Roboto', sans-serif;
  text-align: right;
  font-size: 80px;
  font-weight: 100;
  color: white;
  padding: 10px;
`

const Button = styled.button`
  width: 25%;
  height: 100%;
  padding: 0px;
  border: 0px;
  border-top: 0.3px solid black;
  border-right: 0.3px solid black;
  background-color: #E0E0E7;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 100;
  ${props => props.orangeButton && `
    background-color: #FA9318;
    color: white;
    border-right: none;
    font-size: 40px;
  `}
  ${props => props.greyButton && `
    background-color: #C4C3CC;
  `}
`
const ZeroButton = styled(Button)`
  width: 50.5%;
  text-align: left;
  padding-left: 32px;
`

export default App;
