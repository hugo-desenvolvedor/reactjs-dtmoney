import { Container, RadioBox } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useEffect, useState } from "react";
import { useType } from "../../hooks/useType";

export function TransactionTypeContainer() {
  const { type, setType } = useType();

  function handleType(type: string) {
      setType(type);
  }

  return (
     <Container>
         <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor={'green'}
            onClick={() => handleType('deposit')}
        >
            <img src={incomeImg} alt="Deposit" />Deposit
        </RadioBox>
        <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            activeColor={'red'}
            onClick={() => handleType('withdraw')}
        >
            <img src={outcomeImg} alt="Withdraw" />Withdraw
        </RadioBox>
     </Container>
  )   
}