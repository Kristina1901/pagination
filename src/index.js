import './css/styles.css';
import NewApiService from './news-service'
import articlesTpl from './templates/articles.hbs'



const formEl = document.querySelector(".form")
const input = document.getElementById('search-box')
const show = document.querySelector(".show")
const container = document.querySelector(".container")
const newsApiService = new NewApiService();
formEl.addEventListener('submit', onSearch)    
function onSearch(e) {
  e.preventDefault();
    clearArticlesContainer()
    newsApiService.query = input.value
    newsApiService.resetPage()
    newsApiService.fetchArticles().then(appendArtticleMarkup)
   }
show.addEventListener('click', onLoadMore)
function onLoadMore() {
  newsApiService.fetchArticles().then(appendArtticleMarkup)
}
function appendArtticleMarkup(articles) {
    container.insertAdjacentHTML('beforeend', articlesTpl
        (articles));
}
function clearArticlesContainer() {
  container.innerHTML = ''
}