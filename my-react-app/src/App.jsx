import Header from "./Header.jsx"  
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Square from "./Square.jsx";

function Board() {
  return(
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board