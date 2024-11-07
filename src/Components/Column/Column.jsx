import Card from "../Card/Card";

function Column({ title }) {
  return (
    <div className="min-w-[300px] mx-2 bg-white rounded-md shadow-md">
      <h3>{title}</h3>
      <div className="max-h-[500px] overflow-y-auto p-2">
        {[...Array(5)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}

export default Column;