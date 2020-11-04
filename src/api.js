//Application functions
import $ from 'jquery';
import index from './index'
let title = $('#title').val();
let url = $('#url').val();
let description = $('#description').val();
let rating = $('#rating').val();



//insert boxes inside of bottompage element in page 1
function insertListElements() {
    $('body').on('click', '#new', function() {
        $('.listBoxes').append(`<li>test box</li>`);
            //return listitem()
            console.log('printed the list box')
    });
};

//Create new bookmark
function createNewBookmark() {
    $('body').on('click', '#create', function() {
        index.startForm();
    });
};

//Cancels form and sends it back to loadingpage
function cancelButton() {
    $('body').on('click', '#cancel', function() {
        index.startingPageLayout()
    });
}

function formSubmit() {
    $('body').on('click', '#submit', function() {
        submitFormToStore();
        console.log('form submitted');
        index.startingPageLayout();
        console.log('returning to homepage');
    });
};


//Will take information from submit form and input it to the store
function submitFormToStore() {
    let title = $('#title').val();
    let url = $('#url').val();
    let description = $('#description').val();
    let rating = $('#rating').val();
    console.log(title);
    console.log(url);
    console.log(description);
    console.log(rating);
}


//the HTML for the list box going into the app
/*function listitem() {
    return `<li>test box</li>`
}*/

function eventBinder() {
    insertListElements();
    createNewBookmark();
    cancelButton();
    formSubmit();
}

export default {
    eventBinder,
    
}