import { Container, RadioBox } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useEffect, useState } from "react";

export function TransactionTypeContainer() {

  const [ type, setType ] = useState('deposit');

  return (
     <Container>
         <RadioBox
            isActive={type === 'deposit'}
            activeColor={'green'}
            onClick={() => { setType('deposit') }}
        >
            <img src={incomeImg} alt="Deposit" />Deposit
        </RadioBox>
        <RadioBox
            isActive={type === 'withdraw'}
            activeColor={'red'}
            onClick={() => { setType('withdraw') }}
        >
            <img src={outcomeImg} alt="Withdraw" />Withdraw
        </RadioBox>
     </Container>
  )   
}