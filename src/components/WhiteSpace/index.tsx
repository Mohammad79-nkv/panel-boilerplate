import React from 'react';
import { WhiteSpacePropsType } from './types';
import { Container } from './styles';

const WhiteSpace = (props?: WhiteSpacePropsType) => {
  return <Container size={props?.size} />;
};

export default WhiteSpace;
