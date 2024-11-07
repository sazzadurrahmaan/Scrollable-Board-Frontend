import Card from "../Card/Card";

function Column({ title }) {
    return (
      <div className="column">
        <h3>{title}</h3>
        <div className="column-content">
          {[...Array(5)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Column;