ShowNotes();
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('add-text');
    let notes = localStorage.getItem("notes"); //notes is an array.
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj)); // it will return that addText's values in a string form from notesObj array.
    addText.value = '';
    //console.log(notesObj);
    ShowNotes();
})
// function to show elements from localstorage.
function ShowNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    let html = "";
    notesObj.forEach(function (element, index) {
        html += ` <div class="noteCard my-3 mx-3 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deleteFunction(this.id)" class="btn btn-primary" style="background-color:rgb(42, 165, 159)">Delete Note</button>
    </div>
</div>`
    });

    let notesElement = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElement.innerHTML = html;
    }
    else{
        notesElement.innerHTML=`<h2>NOTHING TO SHOW!</h2>`;
    }
}

//function to delete a note

function deleteFunction(index) {
    //console.log("note deleted", index);
    let notes = localStorage.getItem("notes"); //notes is an array.
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    ShowNotes();

}

let search= document.getElementById('searchtxt');
search.addEventListener("input",function (params) {
    let inputVal = search.value.toLowerCase();
    //console.log('you searched something.', inputVal);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        //console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display="block";
        } else {
            element.style.display="none"; 
        }
    })
})

//https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css