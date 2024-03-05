class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <textarea id='editor'>Hello</textarea>
        );
    }
}

class PreviewComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>World</div>
        );
    }
}

class MarkdownPreviewerApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <EditorComponent />
                <PreviewComponent />
            </div>
        );
    }
}

ReactDOM.render(<MarkdownPreviewerApp />, document.getElementById('app'));