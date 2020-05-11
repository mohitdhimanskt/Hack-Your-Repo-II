function fetchJSON(url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 299){
                resolve(xhr.response);
            } else{
                    reject(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
            }
        };
        xhr.onerror = () => reject(new Error('Network request failed'));
        xhr.send();
    })
}