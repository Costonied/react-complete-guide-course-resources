import {useState} from "react";

import Header from "./components/Header.jsx";
import Calculator from "./components/Calculator.jsx";
import Board from "./components/Board.jsx";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <>
            <Header/>
            <main>
                <Calculator userInput={userInput} onChange={handleChange}/>
                <Board />
            </main>
        </>
    )
}

export default App
