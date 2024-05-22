class CalcDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <input id="display" value={this.props.input} />
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
        const renderKeypad = buttons.map(button =>
            <button key={button.id} id={button.id} onClick={this.props.execute}>
                {button.label}
            </button>
        );
        return(
            <div>{renderKeypad}</div>
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
        // this.clearDisplay = this.clearDisplay.bind(this);
        this.buttonAction = this.buttonAction.bind(this);
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
    clearDisplay() {
        console.log("Display will be cleared!");
        this.componentWillMount();
        document.getElementById("display").value = this.state.input;
    }
    buttonAction(e) {
        const onKeyTap = e.target.innerText;
        switch (onKeyTap) {
            case 'C':
                this.clearDisplay();
                break;
        
            default:
                // Replace 0 with first keyTap value or simply add to existing string.
                const updatedInput = this.state.input != '0' ? this.state.input + onKeyTap : onKeyTap;
                this.setState(()=> {
                    return {
                        input: updatedInput,
                    }
                });
        }
        console.log(`You clicked the ${e.target.id} number button`);
    }
    render() {
        return (
            <div>
                <CalcDisplay input={this.state.input} />
                <CalcButtons execute={this.buttonAction} />
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));