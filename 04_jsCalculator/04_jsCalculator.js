class CalcButtons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const buttons = [{id: "equals", label: "="}, {id: "zero", label: "0"}];
        
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

class AppName extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

ReactDOM.render(<AppName />, document.getElementById("app"));