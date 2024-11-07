import { FaPaperclip } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardImage from '../../assets/carImage.png';
import CardImage2 from '../../assets/cardImage2.png';
import AttachmentModal from '../AttachmentModal/AttachmentModal';

function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attachmentCount, setAttachmentCount] = useState(0);


  const openModal = () => setIsModalOpen(true);


  const closeModal = () => setIsModalOpen(false);


  const fetchAttachmentCount = async () => {
    try {
      const response = await axios.get('http://localhost:5000/attachment-count');
      setAttachmentCount(response.data.count);
    } catch (error) {
      console.error('Error fetching attachment count:', error);
    }
  };

  const handleFileUpload = async () => {
    // Fetch the updated attachment count after file upload
    fetchAttachmentCount();
  };

  useEffect(() => {
    fetchAttachmentCount(); // Fetch the initial count when the component mounts
  }, []);

  return (
    <div className="bg-white p-2 mb-2 rounded-md shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left side: Client Image and Name */}
        <div className="flex items-center flex-col">
          <img src={CardImage} alt="Client" className="w-8 h-8 rounded-full mr-2" />
          <h4 className="font-semibold">Donald Trump</h4>
        </div>

        {/* Right side: User Image and Name */}
        <div className="flex flex-col-reverse items-center">
          <h4 className="mr-2 font-semibold">Barak Obama</h4>
          <img src={CardImage2} alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

      {/* Attachment Icon */}
      <div className="flex justify-end mt-2">
        <div className="cursor-pointer text-[1.2rem] text-[#007bff] flex items-center gap-3" onClick={openModal}>
          <span>{attachmentCount}</span> <span><FaPaperclip /></span>
        </div>
      </div>

      {isModalOpen && <AttachmentModal closeModal={closeModal} onFileUpload={handleFileUpload} />}
    </div>
  );
}

export default Card;
