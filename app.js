


function createTodo() {

console.log("Create New To-do")

let text=$("#txtTodo").val();

console.log(text);

let htmlString = document.createElement('div');
let lbl = document.createElement('label');
lbl.classList.add('red-text');
lbl.innerText = text;

htmlString.append(lbl);

let syntax = 
`
<div>
    <label>${text}<label>
    <button class="btn btn-sm btn-primary"><i class="fas fa-check-square"></i> Done</button>
    <button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i> Delete</button>


</div>
`

$("#pendingList").append(syntax);


//clear the text
$("#txtTodo").val('').focus();


}


function init() {


    console.log("To-do APP");


    $("#btnSave").click(createTodo);

    $("#txtTodo").keypress(function(args){
        if(args.keCode === 13) {
            createTodo();
        }
    });
}
window.onload = init;