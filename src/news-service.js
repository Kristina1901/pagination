export default class NewsApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
      
    } 
    fetchArticles() {
       const options = {
           headers: {
           Authorization: 'fd723a94ec2b4e4eabf33f8f9c11678f',
        
    }
    }
    const url =`https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&language=en&page=${this.page}`
    return fetch(url, options)
    .then(r => r.json())
    .then(data => {
        this.incrementPage()
        
        return data.articles
        })
    
    }
    incrementPage() {
        this.page += 1
    }
    resetPage() {
        this.page = 1
    }
    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
}