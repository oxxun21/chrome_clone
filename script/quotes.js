const quotes = [
    { quote: "You will face many defeats in life, but never let yourself be defeated",},
    { quote: "    Love asks me no questions, and gives me endless support.",},
    { quote: "    Try not to become a man of success but rather try to become a man of value.",},
    { quote: "    Do not try to be original, just try to be good.",},
    { quote: "    If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",},
    { quote: "    No great man ever complains of want of opportunity.",},
    { quote: "    It ain't over till it's over.",},
    { quote: "    Success doesn't come overnight.",},
    { quote: "    Let thy speech be short, comprehending much in few words.",},
    { quote: "    To love someone, you have to love yourself first.",},
]

const quote = document.querySelector('#quote span');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;