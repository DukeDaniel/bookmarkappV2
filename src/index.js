//will be used for templates
import $ from 'jquery';
import './styles.css';
import api from './api'
import store from './store'
//$('body').on('click', '#extra', function() {}


//Layout for starting page
function startingPageLayout() {
    
    $('main').html(`
        <h1>Bookmark App</h1>
            <div class="outerBox">
                <div class="upperSection">
                    <button id="create" type="button">Create</button>
                    <button id="new" type="button">+ New</button>
                    <button id="extra" type="button">Extra</button>   
                        <select id="filter" onchange="stars()" Value="Filter" >
                            <option>Filter By</option>
                            <option>5 stars</option>
                            <option>4 stars</option>
                            <option>3 stars</option>
                            <option>2 stars</option>
                            <option>1 stars</option>
                        </select>
                </div>
                <div class="bottomSection">
                <ul class='listBoxes'>${store.store.bookmarks.length}</ul>
                </div>
            </div>`);
};

function startForm() {
    $('.bottomSection').html(
        `<form id='submitInfo'>
            <label>Insert Bookmark Information below</label><br>
            <input id='title' type='text' value='title' required:True></input><br>
            <input id='url' type='text' value='https://google.com' required:True></input><br>
            <textarea name="description" id="description" cols="30" rows="10" required:True>write your description</textarea>
            <div id="rating" class="rating" required:True>
                <span><input type="radio" name="rating" id="str5" value="5"><label for="str5">5</label></span>
                <span><input type="radio" name="rating" id="str4" value="4"><label for="str4">4</label></span>
                <span><input type="radio" name="rating" id="str3" value="3"><label for="str3">3</label></span>
                <span><input type="radio" name="rating" id="str2" value="2"><label for="str2">2</label></span>
                <span><input type="radio" name="rating" id="str1" value="1"><label for="str1">1</label></span>
                </div>
                <button type='submit'>Submit</button>
                <button id='cancel'>Cancel</button> 
            </form>
        </form>`);
};


function render(){
    //api.eventBinder();
    $('#bottomSection').html(startingPageLayout());
    store.scanStore();
    api.showLists()
        .then(response => response.json())
        .then(responsejson => {
            store.store.bookmarks = responsejson;
        });
}

function bookmarkList() {
    api.showLists()
        .then(function() {render()})
}
function main() {
    bookmarkList();
    api.eventBinder();
};

export default {
    startForm,
    startingPageLayout,
    render
}

$(main);