import React from 'react'
import { 
  Container,
  Title,
  Amout,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles';

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amout: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props){
  return(
    <Container>
      <Title>{data.title}</Title>

      <Amout type={data.type}>{ data.type === 'negative' && '-'} {data.amout}</Amout>

      <Footer>
        <Category>
          <Icon name={data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>

    </Container>
  )
}