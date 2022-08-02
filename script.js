// get quotes from api
const quoteContainer =document.getElementById('quote-container');
const quoteText =document.getElementById('quote-text');
const authorText =document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newquotebtn =document.getElementById('new-quote');

// show loading


let apiQuotes=[];

// show new Code
function newquote()
{
  //pick a ramdom quotes
  const quote=apiQuotes[Math.floor( Math.random()* apiQuotes.length)];
  if(!quote.author)
  {
    authorText.textContent='GOD'
  }
  else{
    authorText.textContent=quote.author;
  }
  // check the quote length to determine the styling
  if(quote.text.length>50)
    {
        quoteText.classList.add('long-quote'); 
    }
    else{
        quoteText.classList.remove('long-quote'); 
    }

  
  quoteText.textContent=quote.text;
}
async function getquotes()
{
   const apiUrl='https://type.fit/api/quotes';
   try {
    const response = await fetch(apiUrl);
    apiQuotes=await response.json();
    newquote();

   } catch (error) {
    // handle error here
   }
   
}

function tweetQuote()
{
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}


//event listener always bottom
newquotebtn.addEventListener('click',newquote);
twitterBtn.addEventListener('click',tweetQuote);


//on load
 getquotes();
