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
        return new Promise((resolve,reject)=>{
            xhttp.onload = function() {
                resolve((this.response?JSON.parse(this.response):""));
            }
            xhttp.onerror = function(error) {
                debugger;
                reject("deu ruim... Error="+error);
            }

            xhttp.open("POST", url );
            xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
            xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhttp.send(JSON.stringify(book));
        })
    },
    delete: (isbn)=>{
        return new Promise((resolve,reject)=>{
            xhttp.onload = function() {
                resolve((this.response?JSON.parse(this.response):""));
            }
            xhttp.onerror = function(error) {
                debugger;
                reject("deu ruim... Error="+error);
            }

            let params=`isbn=${isbn}`;

            xhttp.open("DELETE", url+"?"+params );
            xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
            xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhttp.send();
        })
    }
}

export default Client;
