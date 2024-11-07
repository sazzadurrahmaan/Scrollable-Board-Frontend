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
        <Modal isOpen={true} onRequestClose={closeModal} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 w-[400px] rounded-lg shadow-lg">
            <h2>Attachments</h2>
            <input
                type="file"
                multiple
                onChange={handleFileUpload}
            />
            <ul className="list-none p-0">
                {attachments.map((file, index) => (
                    <li key={index} className='flex justify-between mt-2'>
                        {file.name} <span className="text-[#888]">({file.type.split('/')[1] || 'unknown'})</span>
                    </li>
                ))}
            </ul>
            <button onClick={closeModal} className="mt-2 px-3 py-2 bg-[#007bff] text-white rounded-md cursor-pointer hover:bg-[#0056b3]">Close</button>
        </Modal>
    );
}

export default AttachmentModal;
