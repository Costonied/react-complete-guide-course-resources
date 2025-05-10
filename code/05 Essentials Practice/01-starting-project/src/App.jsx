import Header from "./components/Header.jsx";
import Calculator from "./components/Calculator.jsx";
import Board from "./components/Board.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Calculator />
                <Board />
            </main>
        </>
    )
}

export default App
