
import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

import { TransactionTypeContainer } from '../TransactionTypeContainer';
import { useType } from '../../hooks/useType';
import { useTransactions } from '../../hooks/useTransactions';


Modal.setAppElement('#root');

type ModalProps = {
    isOpen?: boolean;
    onRequestClose: () => void;
}
        
export function NewTransactionModal({isOpen = false, onRequestClose} : ModalProps) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');

    const { createTransaction }= useTransactions();
    const { type, setType } = useType();

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount: price,
            category,
            type
        })

        setTitle('');
        setPrice(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Create Transaction</h2>
                <input
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={event => setTitle(event.target.value)} />

                <input
                    placeholder="Price"
                    type="number"
                    value={price}
                    onChange={event => setPrice(+event.target.value)} />

                <TransactionTypeContainer />
                
                <input
                    placeholder="Category"
                    type="text"
                    value={category}
                    onChange={event => setCategory(event.target.value)} />

                <button type="submit">Create</button>
            </Container>
        </Modal>
    )
}
