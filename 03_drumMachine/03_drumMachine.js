class AppHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <header className="d-flex flex-column align-items-center">
                <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine" target="_blank">
                    <img src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="freeCodeCamp logo image" />
                </a>
                <div className="app-title">Drum Machine</div>
            </header>
        );
    }
}

class Signature extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <p className="d-flex justify-content-center signature">Designed & Coded by <a href="https://www.freecodecamp.org/wil-1-am" target="_blank"> William</a></p>
      );
    }
}

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <button id={this.props.audioClipName} class-name="drum-pad" onClick={this.props.onPadClick}>
                <audio className="clip" id={this.props.keyboardKey} src={this.props.audioSrc}></audio>
                {this.props.keyboardKey}
            </button>
        )
    }
}
class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(padKey) {
        const audio = document.getElementById(padKey);
        console.log("Clicked:", padKey, audio);
        // Get access to the clip name which is the id of the parent element of the audio element 
        const displayText = audio.parentElement.id;
        // Get access to the display element in order to alter its innerText property.
        const displayElement = document.getElementById('display');
        displayElement.innerText = displayText;
        // Update the innerText color when this method is activate to make it visible and 
        // eliminate the appearance of the ui jumping
        displayElement.style.color = "white";

        audio.play();
    }
    render() {
        const audioSrcPrefix = "https://s3.amazonaws.com/freecodecamp/drums/"
        return (
            <div 
            id="drum-machine"
            onKeyDown = {e => {
                // This will listen for keydown events and compare the key values to a valid key list
                const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
                const keyTapped = e.key.toUpperCase();
                // Now call the handleClick method with the approved keyTapped 
                if (validKeys.includes(keyTapped)) {
                    this.handleClick(keyTapped);
                }
                // otherwise do nothing.
                return;
            }}>
                <div id="display">Audio Clip Name</div>
                <div className="drumPadRow">
                    <DrumPad keyboardKey={'Q'} audioClipName={"Heater1"} audioSrc={audioSrcPrefix + "Heater-1.mp3"} onPadClick={() => this.handleClick('Q')} />
                    <DrumPad keyboardKey={'W'} audioClipName={"Heater2"} audioSrc={audioSrcPrefix + "Heater-2.mp3"} onPadClick={() => this.handleClick('W')} />
                    <DrumPad keyboardKey={'E'} audioClipName={"Heater3"} audioSrc={audioSrcPrefix + "Heater-3.mp3"} onPadClick={() => this.handleClick('E')} />
                </div>
                <div className="drumPadRow">
                    <DrumPad keyboardKey={'A'} audioClipName={"Heater4"} audioSrc={audioSrcPrefix + "Heater-4_1.mp3"} onPadClick={() => this.handleClick('A')} />
                    <DrumPad keyboardKey={'S'} audioClipName={"Clap"} audioSrc={audioSrcPrefix + "Heater-6.mp3"} onPadClick={() => this.handleClick('S')} />
                    <DrumPad keyboardKey={'D'} audioClipName={"Open-HH"} audioSrc={audioSrcPrefix + "Dsc_Oh.mp3"} onPadClick={() => this.handleClick('D')} />
                </div>
                <div className="drumPadRow">
                    <DrumPad keyboardKey={'Z'} audioClipName={"Kick-n'-Hat"} audioSrc={audioSrcPrefix + "Kick_n_Hat.mp3"} onPadClick={() => this.handleClick('Z')} />
                    <DrumPad keyboardKey={'X'} audioClipName={"Kick"} audioSrc={audioSrcPrefix + "RP4_KICK_1.mp3"} onPadClick={() => this.handleClick('X')} />
                    <DrumPad keyboardKey={'C'} audioClipName={"Closed-HH"} audioSrc={audioSrcPrefix + "Cev_H2.mp3"} onPadClick={() => this.handleClick('C')} />
                </div>
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
                <AppHeader />
                <DrumMachine />
                <Signature />
            </div>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));