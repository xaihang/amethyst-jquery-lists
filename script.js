$(document).ready(onReady);

//STATE
// array of cats
let cats = [
    {
        name: 'Tiny',
        color: 'Blue',
        age: 33,
        hasPersonality: true,
    },
    {
        name: 'Amethyst',
        color: 'Purple',
        age: 0.115,         // 6 weeks
        hasPersonality: true,
    },
    {
        name: 'Frank', 
        color: 'Beige',
        age: 13,
        hasPersonality: false
    }
];

//RENDERING - Initial Render - Get those cats on the DOM
function onReady() {
  
    render();

    //handle adding new cat
    $('#addCatForm').on('submit', onAddCat)

    //handle removing cat
    $(document).on('click', '.deleteCatBtn', onDeleteCat);


}

function render() {
console.log('in render()');

// empty ()
 $('#cat-table').empty();

    for (let cat of cats) {
        console.log('for cat...', cat.name);

        $('#cat-table').append(`
            <tr style="background-color: ${cat.color}"> // the style bg color here changes the table color
                <td>${cat.name}</td>
                <td>${cat.color}</td>
                <td>${cat.age}</td>
                <td>${cat.hasPersonality}</td>
                <td>
                    <button class="deleteCatBtn">DELETE that cat</button>
                </td>
            </tr>
 
        `)
    }
}

function onAddCat (evt) {

    console.log('in onAddCat():');
    // do not refresh the page
    evt.preventDefault(); 

    //TODO:
    // 1. make a new cat obj
    let newCat = {
        name: $('#nameInput').val() ,       // get the 'value =' attribute from the <input /> 
        color: $('#colorInput').val() ,
        age: Number($('#ageInput').val()) ,  // val() will return result as 'string', so if it is a number type you need to include Number() 
        hasPersonality: $('#personalityInput').is(':checked')   //The Checkboxes are used to let a user select one or more options for a limited number of choices. The :checkbox selector selects input elements with type checkbox.
    }
    console.log('newCat:', newCat);
    // add newCat object to the array using the push()
    cats.push(newCat);
    render();
};


function onDeleteCat() {
    console.log('onDeleteCat', onDeleteCat);


    // tip: find which number <tr> this is, withing the table, so we can find the orrresponding cat object index. 
    let myTr = $(this).parent().parent();
    let indexOfCat = myTr.index();
    console.log('indexOfCat', indexOfCat);

    // using splice()
    // js let us remove an element by index
    // update state (remove that cat!)
    cats.splice(indexOfCat, 1); 
    console.log('cats after removal', cats);

    render();
}




