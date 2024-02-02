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

class QuoteComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const index = Math.trunc(Math.random() * quotes.length);
      return (
        <div className="container w-50 p-4 bg-dark text-white">
          <figure>
            <blockquote class="blockquote">
            <p id='text'>{quotes[index].text}</p>
            </blockquote>
            <figcaption class="blockquote-footer d-flex justify-content-end fst-italic text-white">
              <p id='author'>{quotes[index].author}</p> 
            </figcaption>
          </figure>
          <a href='twitter.com/intent/tweet' id='tweet-quote'>
            <button type='button' className='btn btn-secondary btn-lg'id='new-quote'>Twitter</button>
          </a>
          <button type='button' className='btn btn-primary btn-lg'id='new-quote'>New quote</button>
  
        </div>
      );
    }
  }
  ReactDOM.render(<QuoteComponent />, document.getElementById('quote-box'));