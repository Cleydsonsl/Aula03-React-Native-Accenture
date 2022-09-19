import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { Input } from '../../components/Forms/Input';
import { TransactionButton } from '../../components/Forms/TransactionButton';

import { CategorySelect } from '../CategorySelect';

import { Container, Fields, Form, Header, Title, TransactionsTypes } from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  };

  function handleOpenSelectCategory(){
    setCategoryModalOpen(true)
  };

  function handleCloseSelectCategory(){
    setCategoryModalOpen(false)
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
          <Header>
            <Title>Cadastro</Title>
          </Header>
          
          <Form>
            <Fields>
              <Input
                placeholder='Nome'
              />
              <Input
                placeholder='Preço'
              />

              <TransactionsTypes>
                <TransactionButton
                  type='up'
                  title='Income'
                  onPress={() => handleTransactionTypeSelect('up')}
                  isActive={transactionType === 'up'}
                />
                <TransactionButton
                  type='down'
                  title='Outcome'
                  onPress={() => handleTransactionTypeSelect('down')}
                  isActive={transactionType === 'down'}
                />
              </TransactionsTypes>

              <CategorySelectButton
                title={category.name}
                onPress={handleOpenSelectCategory}
              />
            </Fields>
            <Button 
              title='ENVIAR'
            />
          </Form>

          <Modal visible={categoryModalOpen}>
            <CategorySelect
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseSelectCategory}
            />
          </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}