//Application functions
import $ from 'jquery';
import index from './index'
import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Duke/bookmarks'



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
    $('body').on('submit', '.submitInfo', (event) => {
        event.preventDefault();
        console.log('some stuff')
        console.log('form submitted');
        console.log('returning to homepage');
        
        let newObj = {}
        newObj.title = $('#title').val();
        newObj.url = $('#url').val();
        newObj.desc = $('#description').val();
        newObj.rating = $('[name=rating]:checked').val();
        fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
        .then(response => response.json())
        .then(responseJson => {
            store.store.bookmarks.push(responseJson);
            //console.log(store.store.bookmarks)
            index.startingPageLayout();    
        })
    });
};



    


//shows list elements that are already in the store
/*function showLists() {
    for (let i=0; i<store.store.bookmarks.length)
}*/


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

export default eventBinder