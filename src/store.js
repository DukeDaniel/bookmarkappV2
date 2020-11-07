//will be used for variables and store
import $ from 'jquery';

const store = {
  bookmarks: [],
  adding: true,
  error: null,
  flter: 0
};

//scan the bookmark library and for every item in there populate the div bottomsection with the objects in there
function scanStore() {
  let list = store.bookmarks;
  let listTwo = "";
      for (let i = 0; i < list.length; i++) {
        listTwo +=   
              `<section class="scanning" id=${list[i].id}>
                      <h3>${list[i].title}</h3>
                      <h3>${list[i].rating}</h3>
                  <section>
                      <button class="delButton">Del</button>
                      <button class="editButton">Edit</button>
                  </section>
              </section>`};
              $('.bottomSection').html(listTwo);
}

export default {
  scanStore,
  store,
}