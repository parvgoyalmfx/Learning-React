import Header from "./Header.jsx"  
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Square from "./Square.jsx";

function Board() {
  return(
    <>
    <div className="board-row">
      <Square value="X" />
      <Square value="O" />
      <Square value="X" />
    </div>
    <div className="board-row">
      <Square value="X" />
      <Square value="O" />
      <Square value="X" />
    </div>
    <div className="board-row">
      <Square value="X" />
      <Square value="O" />
      <Square value="X" />
    </div>
    </>
  );
}

export default Board