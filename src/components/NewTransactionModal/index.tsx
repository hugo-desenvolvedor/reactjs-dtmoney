
import Modal from 'react-modal'
import { Container } from './styles';

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
            <Container>
                <h2>Create Transaction</h2>
                <input
                    placeholder="Title" 
                    type="text" />

                <input
                    placeholder="Amount" 
                    type="number" />
                
                <input
                    placeholder="Category" 
                    type="text" />

                <button type="submit">Create</button>
            </Container>
        </Modal>
    )
}
