const notes = [
    {content: "Mañana sera otro dia"},
    {content: "los obstaculos son una piñata que hay que darle palo, aunque tengamos los ojitos requete bendados"},
    {content: "el saber es poder"},
    {content: "señora inspiracion, musa y dueña de mis buenos sentimientos"}
];


function updateNotes() {
    const divNotes = document.querySelector(".notes-container");
    divNotes.innerHTML = "";
    //accedemos a cada uno de los elementos del arreglo notes
    for(let i = 0; i < notes.length; i++) {
        //creamos un element div nuevo
        const divElement = createNoteElement(notes[i]);
        //agregamos la nota como un contenido del divElement
        divNotes.append(divElement);
        
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const formElement = event.target;
    const newContent = formElement.querySelector("#new-note").value;
    const newNote = {content: newContent}
    notes.push(newNote);
    
    form.reset();
    updateNotes();
}

/*<div>
<p>Nota1</p>
<button>Eliminar</button>
</div>
*/

function createNoteElement(note) {
    const div = document.createElement("div");
    div.className = "note";
    const text = document.createElement("p");
    const button = document.createElement("button");

    text.textContent = note.content;
    button.textContent = "Delete";

    button.addEventListener("click", function deleteNote(){
        const position = notes.indexOf(note);
        notes.splice(position, 1);
        updateNotes();

    });

    div.append(text, button);

    return div;
}

document.addEventListener("DOMContentLoaded", function() {
    updateNotes();
});

const form = document.querySelector("#new-note-form");
form.addEventListener("submit", handleSubmit);
