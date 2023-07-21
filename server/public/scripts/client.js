console.log('script sourced.');

function getQuotes(){
    axios.get('/quotes').then((response) => {
        console.log("success", response.data);
        let quotesFromServer = response.data
        renderToDom(quotesFromServer)
// good indication of end of route })
    }).catch((error) => {
        console.log(error);
        alert("something went wrong")
    })
}

//getQuotes()

function renderToDom(quotes){
    let outputList = document.querySelector('#output')
    outputList.innerHTML = ''

    for(let quote of quotes) {
        outputList.innerHTML +=`
            <p>${quote.text}  -  ${quote.author} </p>
        `
    }
}


function submitForm(event){
    event.preventDefault();
    let quote = document.querySelector('#quoteInput').value
    let author = document.querySelector('#authorInput').value

    let quoteToAdd = {
        text: quote,
        author: author
    }
    console.log(quoteToAdd);

    axios.post('/quotes' , quoteToAdd).then((response)=> {
        console.log(response);
        document.querySelector('#quoteInput').value =''
        document.querySelector('#authorInput').value =''
        getQuotes()
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    })

}