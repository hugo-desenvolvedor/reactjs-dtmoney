import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

export function TransactionTypeContainer() {
 return (
     <Container>
         <button>
            <img src={incomeImg} alt="Income" />
            Income
        </button>
        <button>
            <img src={outcomeImg} alt="Outcome" />
            Outcome
        </button>
     </Container>
 )   
}