import React, { useState } from 'react';
import Modal from 'react-modal';
import './AttachmentModal.css';

Modal.setAppElement('#root'); // set root element

function AttachmentModal({ closeModal }) {
    const [attachments, setAttachments] = useState([]);

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const fileData = files.map((file) => ({
            name: file.name,
            type: file.type,
        }));
        setAttachments([...attachments, ...fileData]);
    };

    return (
        <Modal isOpen={true} onRequestClose={closeModal} className="modal">
            <h2>Attachments</h2>
            <input
                type="file"
                multiple
                onChange={handleFileUpload}
            />
            <ul className="attachment-list">
                {attachments.map((file, index) => (
                    <li key={index}>
                        {file.name} <span className="file-extension">({file.type.split('/')[1] || 'unknown'})</span>
                    </li>
                ))}
            </ul>
            <button onClick={closeModal} className="close-button">Close</button>
        </Modal>
    );
}

export default AttachmentModal;
