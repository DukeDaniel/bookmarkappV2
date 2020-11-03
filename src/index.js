//will be used for templates
import $ from 'jquery';

function landingPage(){
    console.log('landing page')
    $('main').html(startingPageLayout());
}
//Layout for starting page
function startingPageLayout() {
    let startingPageLayout = `
        <h1>Bookmark App</h1>
            <div class="outerBox">
                <div class="upperSection">
                    <button id="create" type="button">Create</button>
                    <button id="filter" type="button">+ New</button>
                        <select id="filter" onchange="stars()" Value="Filter" >
                            <option>Filter By</option>
                            <option>5 stars</option>
                            <option>4 stars</option>
                            <option>3 stars</option>
                            <option>2 stars</option>
                            <option>1 stars</option>
                        </select>
                    <button id="extra" type="button">Extra</button>   
                </div>
                <div class="bottomSection">
                </div>
            </div>`;
            return startingPageLayout;
};


function main() {
    startingPageLayout(),
    landingPage()
};

$(main);