import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactioModalOpen, setIsNewTransactioModalOpen] = useState(false);

  function handleOpenNewTransactioModal(){
      setIsNewTransactioModalOpen(true);
  }

  function handleCloseNewTransactioModal(){
      setIsNewTransactioModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionalModal={handleOpenNewTransactioModal} />
      <Dashboard />

      <Modal
          isOpen={isNewTransactioModalOpen}
          onRequestClose={handleCloseNewTransactioModal}>
          <h2>Modal Title</h2>
      </Modal>

      <TransactionsTable />
      <GlobalStyle />
    </>
  );
}