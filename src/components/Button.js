import React from 'react';
import styled, { css } from 'styled-components'

export const Button = styled.a`
  display: inline-block;
  border-radius: 23px;
  padding: 0.6rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background:  ${props => props.back ? "gray" : "white"};
  color: white;
  border: 2px solid  ${props => props.back ? "gray" : "white"};
  cursor:pointer;
  text-align:center;
  font-family:sans-serif;
  color:black;
  font-weight: 550;
  transition: .4s ;
  &:hover{
    background:transparent;
    color:white;
  }
`;