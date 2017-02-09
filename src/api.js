let API = {
    fetch(path) {
        return new Promise( (resolve, reject) => {
            let uri = `http://localhost:3000/${path}`;
            let request = new XMLHttpRequest();

            request.open("GET", uri, true);
            request.onload = () => {
                if(request.status >= 200 && request.status < 400) {
                    resolve( JSON.parse(request.response) );
                }
            };

            request.onerror = () => {
                reject( new Error("Oh snap he dead") );
            }

            request.send();
        });
    }
}

export default API;