
import Column from '../Column/Column';

const columns = ["Incomplete", "To Do", "Doing", "Under Review", "Completed"];

function Board() {
  return (
    <div className="board">
      {columns.map((title, index) => (
        <Column key={index} title={title} />
      ))}
    </div>
  );
}

export default Board;