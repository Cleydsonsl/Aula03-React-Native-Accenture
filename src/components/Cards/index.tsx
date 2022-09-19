import React from "react";
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amout,
  LastTransaction 
} from "./styles";

interface Props{
  title: string;
  amout: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
};

const icon ={
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function Cards( { type, amout, lastTransaction, title }: Props){

  return(
    <Container type={type}>
      <Header>
        <Title type={type} >{title}</Title>
        <Icon name={icon[type]} type={type}/>
      </Header>

      <Footer>
        <Amout type={type} >{amout}</Amout>
        <LastTransaction type={type} >{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}