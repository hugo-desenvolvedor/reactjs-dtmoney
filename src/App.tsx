import React, { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';

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
      <Header onOpenNewTransactionalModal={handleOpenNewTransactioModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactioModalOpen}
        onRequestClose={handleCloseNewTransactioModal}
      />

      <TransactionsTable />
      <GlobalStyle />
    </TransactionsProvider>
  );
}