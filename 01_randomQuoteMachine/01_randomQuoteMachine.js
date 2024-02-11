const quotes = [{
      text: '...in spite of everything, I still believe that people are really good at heart.',
      author: 'Anne Frank'
    },
    {
      text: 'Always code as if the guy who ends up maintaining your cod will be a violent psychopath who knows where you live.',
      author: 'John Woods'
    },
    {
      text: 'Truth can only be found in one place: the code.',
      author: 'Robert C. Martin'
    },
    {
      text: 'A bend in the road is not the end of the road - unless you fail to make the turn.',
      author: 'Hellen Keller'
    },
    {
      text: 'If we all did the things we are capable of doing, we would literally astound ourselves',
      author: 'Thomas Alva Edison'
    },
    {
      text: 'The only way to do great work is to do what you love.  If you haven\'t found it yet,  keep looking, Don\'t settle.',
      author: 'Steve Jobs'
    },
    {
      text: 'It is a profound and necessary truth that the deep things in science are not found because they are useful; they are found because it was possible to find them.',
      author: 'Robert Oppenheimer'
    }];

class QuotesApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        randomNum: ""
      };
      this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
      {this.handleClick};
    }
    handleClick(event) {
      this.setState({
        randomNum: Math.random()
      });
    }
    render() {
      const index = Math.trunc(this.state.randomNum * quotes.length);
      return (
        <div className="d-flex justify-content-center align-items-center bg-success vh-100">
          <div className="row bg-light w-50" id="quote-box">
            <figure className="text-center">
                <blockquote className="blockquote">
                  <p id='text'>{quotes[index].text}</p>
                </blockquote>
                <figcaption className="blockquote-footer text-end fst-italic">
                  <p id='author'>{quotes[index].author}</p>
                </figcaption>
            </figure>
            <p className="d-flex justify-content-between">
              <a className='btn btn-outline-dark' href='twitter.com/intent/tweet' id='tweet-quote' role="button" target="_blank">
              Twitter</a>
              <button className='btn btn-outline-dark' id='new-quote' type='button' onClick={this.handleClick}>New quote</button>
            </p>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<QuotesApp />, document.getElementById('app'));