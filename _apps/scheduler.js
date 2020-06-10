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

    const hourField = $('hour');
    hourField.onchange = () => {
        leadingZeroes(hourField, 2);
        if (Number(hourField.value) < 1) {
            hourField.value = '12'
        }
        else if (Number(hourField.value) > 12) {
            hourField.value = '01'
        }
    };

    const minuteField = $('minute');
    minuteField.onchange = () => {
        leadingZeroes(minuteField, 2);
        if (Number(minuteField.value) < 0) {
            minuteField.value = '59'
        }
        else if (Number(minuteField.value) > 59) {
            minuteField.value = '00'
        }
    };

    hourField.onkeyup = () => {
        if (hourField.value.length >= 2) {
            minuteField.focus();
        }
    };

    const amBtn = $('am');
    const pmBtn = $('pm');
    amBtn.onclick = () => {
        amBtn.className = 'btn btn-dark';
        pmBtn.className = 'btn btn-secondary';
    };
    pmBtn.onclick = () => {
        pmBtn.className = 'btn btn-dark';
        amBtn.className = 'btn btn-secondary';
    };  
});

function leadingZeroes(input, zeroes) {
    const val = input.value;
    if (val.length < zeroes) {
        input.value = `${'0'.repeat(zeroes - val.length)}${val}`
    }
}

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
