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