class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <button id={audioClipName} class-name="drum-pad">
                {keyboardKey}
            </button>
        )
    }
}

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="drum-machine">
                <div id="display"></div>
                <DrumPad keyboardKey={'Q'} audioClipName={"Heater1"}/>
            </div>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));