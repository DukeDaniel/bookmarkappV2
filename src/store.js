//will be used for variables and store
import $ from 'jquery';
import cuid from 'cuid';

const store = {
  bookmarks: [
    //{ id: cuid(), name: 'apples', siteLink: 'url', description: 'desc', rating: 'rating' hidden: true}
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }  
  ],
  adding: true,
  error: null,
  flter: 0
};

export default{
  store
}