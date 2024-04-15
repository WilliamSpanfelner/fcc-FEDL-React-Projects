class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div id="editor-label">
                    <label for="editorContent">Editor</label>
                </div>
                <textarea 
                id='editor'
                name="editorContent"
                onInput={this.props.handleContent}
                placeholder="Type content to be marked down here"
                rows={4}
                cols={40}
                />
            </div>
        );
    }
}

class PreviewComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const createMarkupFrom = (content) => {
            return {__html: marked.parse(content)};
        }
        const rawContent = this.props.editorContent;
        return (
            <div>
                <div id="preview-label">
                    <label for="preview">Preview</label>
                </div>
                <div 
                id='preview'
                dangerouslySetInnerHTML={createMarkupFrom(rawContent)} />
            </div>
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
                <EditorComponent handleContent={this.handleContent} />
                <PreviewComponent editorContent={this.state.editorContent} />
            </div>
        );
    }
}

ReactDOM.render(<MarkdownPreviewerApp />, document.getElementById('app'));