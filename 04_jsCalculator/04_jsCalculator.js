class CalcDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <textarea id="display">This is the display</textarea>
            </div>
        );
    }
}

class CalcButtons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const buttons = [{id: "equals", label: "="}, {id: "zero", label: "0"}, {id: "one", label: "1"}, {id: "two", label: "2"}, {id: "three", label: "3"}, {id: "four", label: "4"}, {id: "five", label: "5"}, {id: "six", label: "6"}, {id: "seven", label: "7"}, {id: "eight", label: "8"}, {id: "nine", label: "9"}, {id: "add", label: "＋"}, {id: "subtract", label: "－"}, {id: "multiply", label: "×"}, {id: "divide", label: "÷"}, {id: "decimal", label: "."}, {id: "clear", label: "C"},];
        
        // https://react.dev/learn#rendering-lists
        const renderButtons = buttons.map(button =>
            <button key={button.id} id={button.id} >
                {button.label}
            </button>
        );
        return(
            <div>{renderButtons}</div>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: ''
        };
    }
    componentWillMount() {
        this.setState(() => {
            return {
                input: '0',
                output: '0'
            }
        });
        console.log("Initializing display");
    }
    render() {
        return (
            <div>
                <CalcDisplay input={this.state.input} />
                <CalcButtons />
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));