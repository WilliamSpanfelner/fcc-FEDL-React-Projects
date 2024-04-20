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
                >{this.props.editorContent}</textarea>
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
            {/* https://marked.js.org/using_advanced#options */}
            marked.setOptions({
                breaks: true
            })
            return {__html: marked.parse(content)};
        }
        const rawContent = this.props.editorContent;
        return (
            <div>
                <div id="preview-label">
                    <label for="preview">Preview</label>
                </div>
                {/* https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html */}
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

    componentWillMount() {
        const defaultText = `# Welcome to my React Markdown Previewer!

        ## This is a sub-heading...
        ### And here's some other cool stuff:
        
        Heres some code, \`<div></div>\`, between 2 backticks.
        
        \`\`\`
        // this is multi-line code:
        
        function anotherExample(firstLine, lastLine) {
          if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
            return multiLineCode;
          }
        }
        \`\`\`
        
        You can also make text **bold**... whoa!
        Or _italic_.
        Or... wait for it... **_both!_**
        And feel free to go crazy ~~crossing stuff out~~.
        
        
        There's also [links](https://www.freecodecamp.org), and
        > Block Quotes!
        
        And if you want to get really crazy, even tables:
        
        Wild Header | Crazy Header | Another Header?
        ------------ | ------------- | -------------
        Your content can | be here, and it | can be here....
        And here. | Okay. | I think we get it.
        
        
        - And of course there are lists.
          - Some are bulleted.
             - With different indentation levels.
                - That look like this.
        
        
        1. And there are numbered lists too.
        1. Use just 1s if you want!
        1. And last but not least, let's not forget embedded images:
        
        ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
        `
        this.setState(() => {
            return {
                editorContent: defaultText
            };
        }); 
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
                <EditorComponent editorContent={this.state.editorContent} handleContent={this.handleContent} />
                <PreviewComponent editorContent={this.state.editorContent} />
            </div>
        );
    }
}

ReactDOM.render(<MarkdownPreviewerApp />, document.getElementById('app'));