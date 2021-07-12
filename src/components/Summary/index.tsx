import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export default function Summary() {
    const { transactions } = useTransactions();

    const totalSummary = transactions.reduce((acc, transaction) => { 
        if (transaction.type === 'withdraw') {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }

        return acc;
    }, {
        deposits: 0, 
        withdraws: 0, 
        total: 0
    });

    return(
        <Container>
            <div>
                <header>
                    <p>Deposits</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(totalSummary.deposits)}</strong>  
            </div>

            <div>
                <header>
                    <p>Withdraws</p>
                    <img src={outcomeImg} alt="Saidas"></img>
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(totalSummary.withdraws)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"></img>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(totalSummary.total)}</strong>
            </div>
        </Container>
    )
}