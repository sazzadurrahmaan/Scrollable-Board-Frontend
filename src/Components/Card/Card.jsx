import { FaPaperclip } from 'react-icons/fa';
import CardImage from '../../assets/carImage.png'
import CardImage2 from '../../assets/cardImage2.png'

function Card() {
  return (
    <div className="bg-white p-2 mb-2 rounded-md shadow-lg">

      <div className="flex items-center justify-between">
        {/* Left side: Client Image and Name */}
        <div className="flex items-center  flex-col">
          <img
            src={CardImage}
            alt="Client"
            className="w-8 h-8 rounded-full mr-2" 
          />
          <h4 className="font-semibold">Donald Trump</h4>
        </div>

        {/* Right side: User Image and Name */}
        <div className="flex flex-col-reverse items-center">
          <h4 className="mr-2">Barak Obama</h4>
          <img
            src={CardImage2}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Card Content */}
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

      {/* Attachment Icon */}
      <div className="flex justify-end mt-2">
        <span className="cursor-pointer text-[1.2rem] text-[#007bff]">
          <FaPaperclip />
        </span>
      </div>
    </div>
  );
}

export default Card;
