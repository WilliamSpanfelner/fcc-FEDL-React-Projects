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
                <DrumPad keyboardKey={'W'} audioClipName={"Heater2"}/>
                <DrumPad keyboardKey={'E'} audioClipName={"Heater3"}/>
                <DrumPad keyboardKey={'A'} audioClipName={"Heater4"}/>
                <DrumPad keyboardKey={'S'} audioClipName={"Clap"}/>
                <DrumPad keyboardKey={'D'} audioClipName={"Open-HH"}/>
                <DrumPad keyboardKey={'Z'} audioClipName={"Kick-n'-Hat"}/>
                <DrumPad keyboardKey={'X'} audioClipName={"Kick"}/>
                <DrumPad keyboardKey={'C'} audioClipName={"Closed-HH"}/>
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