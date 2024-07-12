class CalcDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div> 
            {/* TODO Create label element for input */}
                <input id="display" value={this.props.output ? this.props.output : this.props.input} />
                {this.props.expression}
            </div>
        );
    }
}

class CalcButtons extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {id: "equals", label: "=", class: "operation"}, 
            {id: "zero", label: "0"}, 
            {id: "one", label: "1"}, 
            {id: "two", label: "2"}, 
            {id: "three", label: "3"}, 
            {id: "four", label: "4"}, 
            {id: "five", label: "5"}, 
            {id: "six", label: "6"}, 
            {id: "seven", label: "7"}, 
            {id: "eight", label: "8"}, 
            {id: "nine", label: "9"}, 
            {id: "add", label: "＋", class: "operation"}, 
            {id: "subtract", label: "－", class: "operation"}, 
            {id: "multiply", label: "×", class: "operation"}, 
            {id: "divide", label: "÷", class: "operation"}, 
            {id: "decimal", label: "."}, 
            {id: "clear", label: "C"},
        ];
    }
    render() {
        // https://react.dev/learn#rendering-lists
        //TODO: Decide whether a class is really needs for "operations"

        const renderKeypad = this.buttons.map(button =>
            <button key={button.id} id={button.id} onClick={this.props.execute}>
                {button.label}
            </button>
        );
        return <div>{renderKeypad}</div>;
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
            subtract: (x, y) => x - y,
            multiply: (x, y) => x * y,
            divide: (x, y) => x / y,
        }
        this.operators = ["+", "-", "x", "÷", "="];
        this.isNegative = false;
        // this.clearDisplay = this.clearDisplay.bind(this);
        this.buttonAction = this.buttonAction.bind(this);
    }
    componentWillMount() {
        this.clearDisplay();
    }
    clearDisplay() {
        this.setState(() => {
            return {
                input: '0',
                output: '', 
                operation: '',
                operand1: '',
                operand2: '',
                expression: '',
            }
        });
        console.log("Initializing display");
    }
    // buildOperand takes the keyTapped and progressively build a string representing a number to be saved as an operand in state.
    buildOperand(numberKey) {
        this.setState(prevState => {

            // Check if last character in expression is an operator, if so, 
            // this means that the input value should be replaced by the value just entered
            const lastExpressionCharIsOperator = this.operators.includes(prevState.expression.slice(-1));
            if (numberKey.innerText === "." && lastExpressionCharIsOperator) {
                return {
                    input: "0" + numberKey.innerText,
                    expression: prevState.expression + "0" + numberKey.innerText,
                }
            }
            
            if (lastExpressionCharIsOperator) {
                return {
                    input: numberKey.innerText,
                    expression: prevState.expression + numberKey.innerText,
                }
            }

            if (numberKey.innerText === ".") {          // if a decimal is entered
                if (prevState.input.includes(".")) {    // if decimal already exists in input 
                    return;                             // return early
                } else if (prevState.input === "0") {   // if a zero was previous value i.e. "0."
                    return {
                        input: prevState.input + numberKey.innerText,   // = "0."
                        expression: prevState.expression + prevState.input + numberKey.innerText,  // = whatever the expression was + "0."
                    };
                } else {
                    return {  // this is same as the case above except for expression value
                        input: prevState.input + numberKey.innerText,
                        expression: prevState.expression + numberKey.innerText,
                    };
                }
            } 
            
            if (numberKey.innerText === "0" && prevState.input === "0") { // Prevent multiple leading zeroes
                return;  // return early;
            }
            
            if (numberKey.innerText != "0" && prevState.input === "0") {  // Remove leading zero for numbers > 0
                return {
                    input: numberKey.innerText,
                    expression: prevState.expression + numberKey.innerText,
                };
            }  

            return {  // in any other case proceed to add value to input and expression
                input: prevState.input + numberKey.innerText,
                expression: prevState.expression + numberKey.innerText, 
            };
        });
    }
    
    oldBuildOperand(numberKey) {
        this.setState(prevState => {
            // const valueEnteredNow = Number(numberKey.innerText);
            // const priorInputValue = Number(prevState.input);
            // if an operation has already been entered with operands
            // if (prevState.operand2 && prevState.operand1 && prevState.operation) {
                
            // }
            // Disallow leading zeroes and > 1 decimal.
            if ((prevState.input === '0' && Number(numberKey.innerText) === 0) || 
            (prevState.input.includes(".") && numberKey.innerText === ".")) {
                // If there is already a zero and the zero is tapped again return early to prevent multiple leading zeroes
                // if there is already a decimal and the decimal is tapped again return early to prevent multiple decimal chars
                return;
            }

            if (priorInputValue === 0 && !valueEnteredNow.isNaN) {
                console.log(`Will replace leading zero ${numberKey.innerText} Number to display: ${valueEnteredNow}` );
                return {
                    input: valueEnteredNow,
                    expression: prevState.expression + numberKey.innerText,
                };
            }
            
            return {
                input: prevState.input + numberKey.innerText,
                expression: prevState.expression + numberKey.innerText,
            }
        })
    }
    // saveOperand sets state based on desired operation and operands available
    saveOperand(operator) {
        this.setState(prevState => {
            const updateOperand = this.state.input;
            if (operator.id === 'subtract' && prevState.operation) {
                console.log("The number that follows will be negative");
            }
            if (prevState.operation && prevState.operand1 && operator.id === 'equals') {
                const result = this.calculate[`${prevState.operation}`](Number(prevState.operand1), Number(updateOperand));
                return {
                    output: result,
                    operand2: updateOperand,
                    expression: prevState.expression + operator.innerText + result,
                }
            }
            // if (prevState.operation && !prevState.operand2) {
            //     return {
            //         operator: operator.id,
            //     }
            // }
            return {
                input: '0',
                output: prevState.output,
                operation: operator.id != "equals" ? operator.id : prevState.operation,
                operand1: operator.id != "equals" ? prevState.input : prevState.operand1,
                operand2: operator.id === "equals" ? updateOperand : prevState.operand2,
                expression: prevState.expression + operator.innerText,
            }
        });
    }
    buttonAction(e) {
        const keyTapped = e.target;
        switch (keyTapped.id) {
            case 'clear':
                this.clearDisplay();
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
            case 'equals':
                this.saveOperand(keyTapped);
                break;
            default:
                this.buildOperand(keyTapped);
        }
        console.log(`You clicked the ${e.target.id} number button`);
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <CalcDisplay input={this.state.input} output={this.state.output} expression={this.state.expression} />
                <CalcButtons execute={this.buttonAction} />
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));