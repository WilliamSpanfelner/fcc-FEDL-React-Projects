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
            <div id='preview'>World</div>
        );
    }
}

class MarkdownPreviewerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorContent: ""
        };
        this.handleContent = this.handleContent.bind(this);
    }
    handleContent() {
        this.setState(() => {
            return {
                editorContent: document.getElementById("editor").value
            };
        });
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