import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function AttachmentModal({ closeModal, onFileUpload }) {
    const [attachments, setAttachments] = useState([]);

    const handleFileUpload = async (event) => {
        const files = Array.from(event.target.files);

        //  to avoid duplicates
        const newFiles = files.filter(
            (file) => !attachments.some((attachment) => attachment.name === file.name && attachment.type === file.type)
        );

        for (const file of newFiles) {

            const formData = new FormData();
            formData.append('file', file);

            try {
                // Send the file to the backend API
                await axios.post('http://localhost:5000/upload', formData);


                const fileData = { name: file.name, type: file.type };
                setAttachments((prevAttachments) => [...prevAttachments, fileData]);


                onFileUpload(); // Just notify to fetch the new count
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }

        // Reset the file input to allow re-upload of the same file if needed
        event.target.value = null;
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 w-[600px] rounded-lg shadow-lg"
        >
            <h2 className='font-semibold my-2'>Attachments</h2>
            <input
                type="file"
                multiple
                onChange={handleFileUpload}
            />
            <ul className="list-none p-0">
                {attachments.map((file, index) => (
                    <li key={index} className='flex justify-between mt-4'>
                        {file.name} <span className="text-[#888]">({file.type.split('/')[1] || 'unknown'})</span>
                    </li>
                ))}
            </ul>
            <button
                onClick={closeModal}
                className="mt-4 px-3 py-2 bg-[#007bff] text-white rounded-md cursor-pointer hover:bg-[#0056b3]"
            >
                {attachments.length > 0 ? "Submit" : "Close"}
            </button>
        </Modal>
    );
}

export default AttachmentModal;
