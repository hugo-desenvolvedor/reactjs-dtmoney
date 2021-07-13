import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';
import { TypeProvider } from './hooks/useType';

export function App() {
  const [isNewTransactioModalOpen, setIsNewTransactioModalOpen] = useState(false);

  function handleOpenNewTransactioModal(){
      setIsNewTransactioModalOpen(true);
  }

  function handleCloseNewTransactioModal(){
      setIsNewTransactioModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <TypeProvider>
        <Header onOpenNewTransactionalModal={handleOpenNewTransactioModal} />

        <Dashboard />≈
          <NewTransactionModal
            isOpen={isNewTransactioModalOpen}
            onRequestClose={handleCloseNewTransactioModal}
          />

        <TransactionsTable />
        <GlobalStyle />
      </TypeProvider>
    </TransactionsProvider>
  );
}