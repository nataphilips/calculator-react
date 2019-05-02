import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      input: 0,
      aState: "0",
      bState: "0",
      operator: "",
      newCalculation: false,
      digitsAmount: 0,
      fontSize: 90,
      fontWidth: 49,
    }
    this.state = this.initialState;
  }

  addDigit(x) {
    let a = this.state.aState;
    let digits = this.state.digitsAmount;
    if (x == 0 && this.state.input == 0) {
      this.setState({ input: 0 });
      this.setState({ aState: "0" });
      this.setState({ digitsAmount: 0 });
    } else {
      if (a === "0" && x == ".") {
        a = a.concat(x);
        digits = digits + 2;
      }
      else if (x == ".") {
        if (a.indexOf(".") === -1) {
          a = a.concat(x.toString(10));
          digits = digits + 1;
        }
      }
      else if (this.state.newCalculation === true) {
        a = x.toString(10);
        this.setState({ newCalculation: false });
        digits = 1;
      }
      else if (a == "0") {
        a = x.toString(10);
        digits = 1;
      } else {
        a = a.concat(x.toString(10));
        digits = digits + 1;
      }
      this.setState({ input: a });
      this.setState({ aState: a });
      this.setState({ digitsAmount: digits });
    }

    if (digits > 6) {
      let width = this.state.fontWidth;
      let newWidth = 300 / digits;
      let ratio = newWidth / width;
      let size = this.state.fontSize * ratio;
      this.setState({ fontSize: size });
      this.setState({ fontWidth: newWidth});
    }
  }

  operation(x) {
    var operator = x;
    this.setState({ operator });

    let a = this.state.aState;
    let b = this.state.bState;

    if (a !=="0"  && b !=="0") {
      const result = this.calculation(a, b, operator);
      this.setState({ bState: result.toString(10) });
      this.setState({ input: result });
      this.setState({ aState: "0" });
    } else {
      this.setState({ bState: a.toString(10) });
      this.setState({ aState: "0" });
    }
  }

  calculation(a, b, operator) {
    operator = this.state.operator;
    a = Number(a);
    b = Number(b);
    let result = 0;
    if(operator === "+") {
      result = a + b;
    }
    else if(operator === "-") {
      result = b - a;
    }
    else if(operator === "/") {
      if (b == 0) {
        result = 0;
      }
      else if (a == 0) {
        result = "&infin;";
      } else {
        result = b / a;
      }
    }
    else {
      result = a * b;
    }
    return result;
  }

  equals() {
    var toPrint = this.calculation(this.state.aState, this.state.bState, this.state.operator);
    this.setState({ aState: toPrint.toString(10) });
    this.setState({ input: toPrint });
    this.setState({ bState: "" });
    this.setState({ newCalculation: true });
  }

  plusMinus() {
    let digits = this.state.digitsAmount;
    var displayed = this.state.aState;
    if (displayed[0] == "-") {
      displayed = displayed.substring(1);
      digits = digits - 1;
    } else {
      displayed = "-" + displayed;
      digits = digits + 1;
    }
    this.setState({ input: displayed });
    this.setState({ aState: displayed });
    this.setState({ digitsAmount: digits });
  }

  percent() {
    var displayed = this.state.aState;
    displayed = (Number(displayed) / 100).toString(10);
    this.setState({ input: displayed });
    this.setState({ aState: displayed });
  }

   reset() {
     this.setState({ ...this.initialState });
   }

  render() {
    return (
      <AppBody>
        <CalcualtorContainer>
          <Input
            type="text"
            value={this.state.input}
            font={this.state.fontSize}>
          </Input>
          <ButtonRow>
            <Button greyButton={true} onClick={() => this.reset()}>AC</Button>
            <Button greyButton={true} onClick={() => this.plusMinus()}>&plusmn;</Button>
            <Button greyButton={true} onClick={() => this.percent()}>%</Button>
            <Button orangeButton={true} onClick={() => this.operation("/")}>&divide;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => this.addDigit(7)}>7</Button>
            <Button onClick={() => this.addDigit(8)}>8</Button>
            <Button onClick={() => this.addDigit(9)}>9</Button>
            <Button orangeButton={true} onClick={() => this.operation("*")}>&times;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => this.addDigit(4)}>4</Button>
            <Button onClick={() => this.addDigit(5)}>5</Button>
            <Button onClick={() => this.addDigit(6)}>6</Button>
            <Button orangeButton={true} onClick={() => this.operation("-")}>&minus;</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={() => this.addDigit(1)}>1</Button>
            <Button onClick={() => this.addDigit(2)}>2</Button>
            <Button onClick={() => this.addDigit(3)}>3</Button>
            <Button orangeButton={true} onClick={() => this.operation("+")}>+</Button>
          </ButtonRow>
          <ButtonRow>
            <ZeroButton onClick={() => this.addDigit(0)}>0</ZeroButton>
            <Button onClick={() => this.addDigit('.')}>	&#1628;</Button>
            <Button orangeButton={true} onClick={() => this.equals()}>=</Button>
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
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`
const ButtonRow = styled(Flex)`
  border-top: none;
  flex: 2;
  width: 100%;
  text-align: center;
`
const Input = styled.input`
  flex: 3;
  border-left: 1px solid black;
  background-color: black;
  border: 0px;
  width: 300px;
  font-family: 'Roboto', sans-serif;
  text-align: right;
  font-size: ${props => props.font}px;
  font-weight: 100;
  color: white;
  padding: 3%;
  @media (max-width: 768px) {
    width: 94%;
  }
`

const Button = styled.button`
  flex: 1;
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
  &:active {
    background-color: #b0aeba;
  }
`
const ZeroButton = styled(Button)`
  flex: 1.6;
  text-align: left;
  padding-left: 32px;
`

export default App;
