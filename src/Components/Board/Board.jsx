
import Column from '../Column/Column';

const columns = ["Incomplete", "To Do", "Doing", "Under Review", "Completed"];

function Board() {
  return (
    <div className="flex overflow-x-auto p-2 bg-[#f4f5f7]">
      {columns.map((title, index) => (
        <Column key={index} title={title} />
      ))}
    </div>
  );
}

export default Board;