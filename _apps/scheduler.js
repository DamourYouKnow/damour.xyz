const $ = document.getElementById.bind(document);

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = $('submit');
    submitBtn.onclick = async () => {
        const data = {
            'title': $('title').value,
            'description': $('description').value,
            'startDate': $('startDate').value,

        };
        await post('http://localhost:3939/events', data);
    };
});

async function post(url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    resolve();
                }  else {
                    reject(Error('Request failed'));
                }
            } 
        }
        xhr.send(JSON.stringify(data));
    });
}
