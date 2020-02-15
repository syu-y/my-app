import React from 'react';
import styled from "styled-components";

const PageTitle =　styled.h1`
  margin: auto;
  padding: 30px 20px 10px 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
`
type Props ={
  title: string
}

const PageName: React.FC<Props> = (props: Props) => {
  return <PageTitle>{props.title}</PageTitle>;
}

export default PageName;
