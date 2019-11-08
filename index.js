function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
                console.log(json)
                let tableBody = document.getElementsByTagName('tbody')[0];
                //let newRow = tableBody.insertRow();
                for (i = 0; i < json.length; i++) {
                    let newRow = tableBody.insertRow();

                    let cel1 = newRow.insertCell(0);
                    let cel2 = newRow.insertCell(1);
                    let cel3 = newRow.insertCell(2);
                    let cel4 = newRow.insertCell(3);

                    cel1.innerHTML = json[i]['id'];
                    cel2.innerHTML = json[i]['userId'];
                    cel3.innerHTML = json[i]['title'];
                    cel4.innerHTML = json[i]['body'];

                }

            }

        )
}

function addPost(userId1, body1, title1, lbl) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title1.value,
                body: body1.value,
                userId: userId1.value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {

            lbl.style.color = 'rgb(52, 188, 52)';
            lbl.innerHTML = 'Adding new post succeeded';
            console.log(json)

        }).catch(err => {
            lbl.style.color = 'red';
            lbl.innerHTML = 'There was an error';
        })
}

function editPost(id2, userId2, body2, title2, lbl2) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id2, {
            method: 'PUT',
            body: JSON.stringify({
                id: id2,
                title: title2,
                body: body2,
                userId: userId2
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {

            lbl2.style.color = 'rgb(52, 188, 52)';
            lbl2.innerHTML = 'Changed data of id number ' + id2 + ' successfully';
            console.log(json)

        }).catch(err => {
            lbl2.style.color = 'red';
            lbl2.innerHTML = 'There was an error';
        })
}


let getPost = document.getElementById('get');
getPost.addEventListener('click', function() {
    let tb = document.getElementById('myTable');
    tb.style.display = "block";
    getPosts();
})

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', function() {
    getPosts();
})

let addBtn = document.getElementById('add');
addBtn.addEventListener('click', function() {

    let userId1 = document.getElementById('userId');
    let body1 = document.getElementById('body');
    let title1 = document.getElementById('title');
    let lbl = document.getElementById('lbl');
    addPost(userId1, body1, body1, lbl);
})

let editBtn = document.getElementById('update');
editBtn.addEventListener('click', function() {

    let id2 = document.getElementById('id2').value;
    let userId2 = document.getElementById('userId2').value;
    let body2 = document.getElementById('body2').value;
    let title2 = document.getElementById('title2').value;
    let lbl2 = document.getElementById('lbl2');
    editPost(id2, userId2, body2, title2, lbl2);
})