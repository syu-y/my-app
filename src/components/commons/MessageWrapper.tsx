import React from 'react';
import styled from "styled-components";

const　StyledMesssge =　styled.span`
  margin: auto;
  padding: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
`

type Props ={
  message: string
}

const MessageWrapper: React.FC<Props> = (props: Props) => {
  return <StyledMesssge>{props.message}</StyledMesssge>;
}

export default MessageWrapper;
