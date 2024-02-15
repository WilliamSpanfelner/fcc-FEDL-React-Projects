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

console.log("unshuffled: ", quotes);

const shuffledQuotes = quotes.map(quote => ({sort: Math.random(), value: quote}))
.sort((a, b) => a.sort - b.sort)
.map(a => a.value);

console.log("shuffled: ", shuffledQuotes);