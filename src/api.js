//Application functions
import $ from 'jquery';
import index from './index'
import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Daniel/bookmarks'



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
        store.store.adding = true;
        index.startForm();
    });
};

//Cancels form and sends it back to loadingpage
function cancelButton() {
    $('body').on('click', '#cancel', function() {
        index.render()
    });
}

//button you click on a list item to delete it
function deleteItemButton() {
    $('body').on('click', '.delButton', function(event) {
        let id = $(event.target).closest(".scanning").attr("id");
        deleteBookmark(id)
            .then(function() {showLists()
            })
            .then(function() {index.render()
            })
    });
}

function deleteBookmark(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"     
    })
}

//when i click submit after form is filled out
function formSubmit() {
    $('body').on('submit', '.submitInfo', (event) => {
         event.preventDefault();
        formPOST()
            .then(function() {index.render()});

    });
}

//submit the data from the form to the api via post and then inside of the post also adds to the bookmark library
function formPOST() {

        let title = $('#title').val();
        let url = $('#url').val();
        let desc = $('#description').val();
        let rating = $('input[type="radio"]:checked').val();

        return fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title":title, 
                "url":url,
                "desc":desc,
                "rating":rating
            })
        })
        .then(response => response.json())
        .then(responseJson => {
            store.store.bookmarks.push(responseJson);
            console.log(store.store.bookmarks)
            console.log(responseJson)
                
        })
};

function showLists() {
    return fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(responsejson => store.store.bookmarks = responsejson)
}



function eventBinder() {
    insertListElements();
    createNewBookmark();
    cancelButton();
    formSubmit();
    showLists();
    deleteItemButton();
}

export default {
   eventBinder,
   showLists
} 