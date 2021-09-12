class TonightsPlan extends React.Component {
    render() {
        const fiftyFifty = Math.random() < 0.5;
        return (
            <div>
                { fiftyFifty ? <h1>Tonight I'm going out WOOO</h1> : <h1>Tonight I'm going to bed WOOO</h1>}
                <p>{ fiftyFifty }</p>
            </div>
        )
    }
}