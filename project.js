// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    

quote: `"True terror is to wake up one morning and discover that your high school class is running the country."`,
person: 'Kurt Vonnegut'
}, {
quote:`"Always forgive your enemies; nothing annoys them so much."`,
person: 'Oscar Wilde' 
}, {
quote:`"Sometimes the road less traveled is less traveled for a reason."`, 
person: 'Jerry Seinfeld'
}, {
quote:`"Never go to bed mad. Stay up and fight."`, 
person: 'Phyllis Diller' 
}, {
quote:`"If you can’t be kind, at least be vague."`, 
person: 'Judith Martin'
}, {
quote:`"Misers are no fun to live with, but they make great ancestors."`, 
person: 'Tom Snyder' 
}, {
quote:`"The statistics on sanity are that one out of every four Americans is suffering from some form of mental illness. Think of your three best friends. If they’re okay, then it’s you."`,
person: 'Rita Mae Brown'
}, {
quote:`"If you want to know what God thinks of money, just look at the people he gave it to."`, 
person: 'Dorothy Parker'
}, {
quote:`"Doing nothing is very hard to do. You never know when you’re finished."`,
person: 'Leslie Nielsen'
}, {
quote:`"When in doubt, look intelligent."`, 
person: 'Garrison Keillor'
},];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
