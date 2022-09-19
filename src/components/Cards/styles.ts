import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.orange_secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 10px;
  padding: ${RFValue(19)}px ${RFValue(23)}px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(40)}px;

  ${({type}) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.green};
  `};

  ${({type}) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.red};
  `};

  ${({type}) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `};

`;

export const Footer = styled.View`

`;

export const Amout = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.shape : theme.colors.title};
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) => 
  type === 'total' ? theme.colors.shape : theme.colors.text};
`;
