//import logo from './logo.svg';
import './App.css';
import Game from "./Game";
import "./index.css";
import { GiTicTacToe } from "react-icons/gi";

function App() {
  return (
    <>
     <h1><GiTicTacToe size={40} />    Tic tac toe</h1>
      <Game />
    </>
  );
}

export default App;
