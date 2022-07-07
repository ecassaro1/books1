const xhttp = new XMLHttpRequest();
const url = "https://46nyg947v6.execute-api.us-east-1.amazonaws.com/test/book";

let Client = {
    get: ()=> {
        return new Promise((resolve,reject)=>{
            xhttp.onload = function() {
                resolve(JSON.parse(this.response));
            }

            xhttp.open("GET", url);
            xhttp.send();    
        })
    },
    post: (book)=>{
        alert("Client is posting a book with title=" + book.title);
    }
}

export default Client;
