import { FaPaperclip } from 'react-icons/fa';

function Card() {
  return (
    <div className="card">
      <h4>Client Name</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div className="card-footer">
        <span className="attachment-icon">
          <FaPaperclip />
        </span>
      </div>
      
    </div>
  );
}

export default Card;
