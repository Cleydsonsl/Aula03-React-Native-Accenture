import React from "react";

import { Cards } from "../../components/Cards";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import { 
  Container, 
  Header, 
  UserInfo, 
  Image, 
  User, 
  UserGreeting, 
  UserName, 
  UserContainer, 
  Icon,
  Transaction,
  Title, 
  TransactionList } from "./styles";

  export interface DataListProps extends TransactionCardProps {
    id: string;
  }

export function Dashboard() {
  const data: DataListProps[] = [  
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de Site",
      amout: "R$ 12.200,00",
      category: {
        name: 'vendas',
        icon: 'dollar-sign'
      },
      date: "07/04/2022"
    },
    {
      id: '2',
      type: 'negative',
      title: "Pizza",
      amout: "R$ 2.200,00",
      category: {
        name: 'Alimentacao',
        icon: 'coffee'
      },
      date: "07/04/2022"
    },
    {
      id: '3',
      type: 'positive',
      title: "Aluguel do apartamento",
      amout: "R$ 12.200,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: "07/04/2022"
    },
  ]

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Image source={{ uri: 'https://avatars.githubusercontent.com/u/55638843?v=4' }}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Emanuel Souza</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserContainer>
      </Header>

      <Transaction>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => <TransactionCard data={item} /> }
        />
      </Transaction>
    </Container>
  )
}