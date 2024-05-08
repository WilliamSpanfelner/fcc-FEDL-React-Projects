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
        const audioSrcPrefix = "https://s3.amazonaws.com/freecodecamp/drums/"
        return (
            <div id="drum-machine">
                <div id="display"></div>
                <DrumPad keyboardKey={'Q'} audioClipName={"Heater1"} audioSrc={audioSrcPrefix + "Heater-1.mp3"}/>
                <DrumPad keyboardKey={'W'} audioClipName={"Heater2"} audioSrc={audioSrcPrefix + "Heater-2.mp3"}/>
                <DrumPad keyboardKey={'E'} audioClipName={"Heater3"} audioSrc={audioSrcPrefix + "Heater-3.mp3"}/>
                <DrumPad keyboardKey={'A'} audioClipName={"Heater4"} audioSrc={audioSrcPrefix + "Heater-4_1.mp3"}/>
                <DrumPad keyboardKey={'S'} audioClipName={"Clap"} audioSrc={audioSrcPrefix + "Heater-6.mp3"}/>
                <DrumPad keyboardKey={'D'} audioClipName={"Open-HH"} audioSrc={audioSrcPrefix + "Dsc_Oh.mp3"}/>
                <DrumPad keyboardKey={'Z'} audioClipName={"Kick-n'-Hat"} audioSrc={audioSrcPrefix + "Kick_n_Hat.mp3"}/>
                <DrumPad keyboardKey={'X'} audioClipName={"Kick"} audioSrc={audioSrcPrefix + "RP4_KICK_1.mp3"}/>
                <DrumPad keyboardKey={'C'} audioClipName={"Closed-HH"}audioSrc={audioSrcPrefix + "Cev_H2.mp3"}/>
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