class CalcDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <input id="display" value={this.props.output ? this.props.output : this.props.input} />
        );
    }
}

class CalcButtons extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [{id: "equals", label: "="}, {id: "zero", label: "0"}, {id: "one", label: "1"}, {id: "two", label: "2"}, {id: "three", label: "3"}, {id: "four", label: "4"}, {id: "five", label: "5"}, {id: "six", label: "6"}, {id: "seven", label: "7"}, {id: "eight", label: "8"}, {id: "nine", label: "9"}, {id: "add", label: "＋"}, {id: "subtract", label: "－"}, {id: "multiply", label: "×"}, {id: "divide", label: "÷"}, {id: "decimal", label: "."}, {id: "clear", label: "C"},];
    }
    render() {
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
            output: '',
            operation: '',
            operand1: '',
            operand2: '',
        };
        this.calculate = {
            add: (x, y) => x + y,
        }
        // this.clearDisplay = this.clearDisplay.bind(this);
        this.buttonAction = this.buttonAction.bind(this);
    }
    componentWillMount() {
        this.setState(() => {
            return {
                input: '0',
                output: ''
            }
        });
        console.log("Initializing display");
    }
    clearDisplay() {
        this.componentWillMount();
    }
    // buildOperand will take the keyTapped and progressively build a string representing a number to be saved as an operand in state.
    buildOperand(keyTapped) {
        this.setState(prevState => {
            const numberInConstruction = prevState.input;
            if (numberInConstruction === '0' && Number(keyTapped.innerText) > 0) {
                return {
                    input: keyTapped.innerText,
                }
            }
            // if there is already a decimal and the decimal is tapped again return early to prevent multiple decimal chars
            if (numberInConstruction.includes(".") && keyTapped.innerText === ".") {
                return;
            }
            //  otherwise concatenate the keyTapped value to the end of the string
            return {
                input: prevState.input + keyTapped.innerText,
            }
        })
    }
    // saveOperand will set state based on desired operation and operands available
    saveOperand(op) {
        const operator = op.id;
        this.setState(prevState => {
            const updateOperand = Number(this.state.input);
            if (prevState.operation && prevState.operand1 && operator === 'equals') {
                return {
                    output: this.calculate[`${prevState.operation}`](Number(prevState.operand1), Number(updateOperand)),
                    operand2: updateOperand,
                }
            }
            return {
                input: '0',
                output: prevState.output,
                operation: operator != "equals" ? operator : prevState.operation,
                operand1: operator != "equals" ? prevState.input : prevState.operand1,
                operand2: op.id === "equals" ? updateOperand : prevState.operand2,
            }
        });
    }
    buttonAction(e) {
        const keyTapped = e.target;
        switch (keyTapped.id) {
            case 'clear':
                this.clearDisplay();
                break;
            case 'equals':
                this.saveOperand(keyTapped);
                break;
            case 'add':
                this.saveOperand(keyTapped);
                break;
            default:
                this.buildOperand(keyTapped);
        }
        console.log(`You clicked the ${e.target.id} number button`);
    }
    render() {
        return (
            <div>
                <CalcDisplay input={this.state.input} output={this.state.output} />
                <CalcButtons execute={this.buttonAction} />
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));