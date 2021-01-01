console.log("i am live");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        title:addTitle.value ,
        text:addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `  <div class="noteCard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
          <h5 class="card-title">Note ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete notes</button>
        </div>
      </div>
         `
    });
    let notesElm = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerText = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }

}

// function to delete a call
function deleteNote(inde){
    console.log("i am deleting",inde);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(inde,1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}
let search =document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let input = search.value
//   console.log("searching mera aka",input);
let noteCard= document.getElementsByClassName("noteCard");
Array.from(noteCard).forEach(function (element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
   
    if(cardTxt.includes(input)){
        element.style.dispay=""
    }else{
        element.style.display="none"
    }
})

});