function Calculator({userInput, onChange}) {
    return (<section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor={"inputInitialInvestment"}>Initial Investment</label>
                    <input
                        id={"inputInitialInvestment"} type={"number"} required={true}
                        value={userInput.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor={"inputAnnualInvestment"}>Annual Investment</label>
                    <input
                        id={"inputAnnualInvestment"} type={"number"} required={true}
                        value={userInput.annualInvestment}
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor={"inputExpectedReturn"}>Expected Return</label>
                    <input
                        id={"inputExpectedReturn"} type={"number"} required={true}
                        value={userInput.expectedReturn}
                        onChange={(event) => onChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor={"inputDuration"}>Duration</label>
                    <input
                        id={"inputDuration"} type={"number"} required={true}
                        value={userInput.duration}
                        onChange={(event) => onChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>)
}

export default Calculator