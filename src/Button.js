import React, { Component } from 'react';
import styled from 'styled-components';

export default styled.button`
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
  ${props => props.zeroButton && `
    flex: 1.6;
    text-align: left;
    padding-left: 32px;
  `}
  &:active {
    background-color: #b0aeba;
  }
`
