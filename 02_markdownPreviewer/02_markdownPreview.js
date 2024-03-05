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