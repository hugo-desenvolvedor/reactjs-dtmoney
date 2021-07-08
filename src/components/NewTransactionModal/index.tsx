
import Modal from 'react-modal'
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

import { TransactionTypeContainer } from '../TransactionTypeContainer';

Modal.setAppElement('#root');

type ModalProps = {
    isOpen?: boolean;
    onRequestClose: () => void;
}
        
export  function NewTransactionModal({isOpen = false, onRequestClose} : ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close Modal" />
            </button>

            <Container>
                <h2>Create Transaction</h2>
                <input
                    placeholder="Title"
                    type="text" />

                <input
                    placeholder="Price"
                    type="number" />

                <TransactionTypeContainer />
                
                <input
                    placeholder="Category"
                    type="text" />

                <button type="submit">Create</button>
            </Container>
        </Modal>
    )
}
