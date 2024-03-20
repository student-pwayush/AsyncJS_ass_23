
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);


xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        
        let users = JSON.parse(xhr.responseText);

        
        users.forEach(function(user) {
            console.log(user.name);
        });

        
        document.getElementById('output').innerText = users.map(user => user.name).join(', ');
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};


xhr.onerror = function() {
    console.error('Request failed');
};


xhr.send();
