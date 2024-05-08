class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('audioClipName: ', this.props.audioClipName, 'Keyboard key: ', this.props.keyboardKey);
        return(
            <button id={this.props.audioClipName} class-name="drum-pad">
                {this.props.keyboardKey}
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

class DrumApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <DrumMachine />
            </div>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));