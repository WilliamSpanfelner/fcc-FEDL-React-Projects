class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="drum-machine">
                <div id="display"></div>
            </div>
        );
    }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));