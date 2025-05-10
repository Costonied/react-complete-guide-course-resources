function Calculator() {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor={"inputInitialInvestment"}>Initial Investment</label>
                    <input id={"inputInitialInvestment"} type={"number"} required={true} />
                </p>
                <p>
                    <label htmlFor={"inputAnnualInvestment"}>Annual Investment</label>
                    <input id={"inputAnnualInvestment"} type={"number"} required={true} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor={"inputExpectedReturn"}>Expected Return</label>
                    <input id={"inputExpectedReturn"} type={"number"} required={true} />
                </p>
                <p>
                    <label htmlFor={"inputDuration"}>Duration</label>
                    <input id={"inputDuration"} type={"number"} required={true} />
                </p>
            </div>
        </section>
    )
}

export default Calculator