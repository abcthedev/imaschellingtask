import React from 'react';
import { Modal } from 'react-bootstrap';

interface IProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const ModalWrapper: React.FC<IProps> = ({ show, onClose, title, children }) => (
    <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
    </Modal>
);

export default ModalWrapper