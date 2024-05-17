class CalcButtons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const buttons = [{id: "equals", label: "="}, {id: "zero", label: "0"}];
        
        return(

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