import Card from "../Card/Card";

function Column({ title }) {
  return (
    <div className="min-w-[300px] mx-2 bg-white rounded-md shadow-md">
      <div className="p-2 bg-gray-100 font-bold flex justify-between items-center"> <h3 >{title}</h3> <p className="bg-gray-200 px-2 py-1 rounded-md"> 0 </p></div>
      <div className="max-h-[500px] overflow-y-auto p-2">
        {[...Array(5)].map((_, index) => (
          // Array(5) creates a new array with 5 empty slots[undefined] and (_) means each item
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Column;