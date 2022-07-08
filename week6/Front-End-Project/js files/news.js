const newsUrl = `https://vlrggapi.herokuapp.com/news`;
const newsArticles = document.getElementById('newsArticles');


// try .innerText and see if that changes anything

const news = async () =>{
    newsArticles.innerText = null
    const valNews = await fetch(newsUrl)
    const newsJson = await valNews.json()
    console.log(newsJson)
    for (index in newsJson.data.segments){
        var title = newsJson.data.segments[index]
        console.log(title)
        const newArticle = document.createElement('p')
        newArticle.classList = 'newArticle'
        newsArticles.append(newArticle)
        for (var item of Object.keys(newsJson.data.segments[index])){
            var content = ' https://www.vlr.gg';
            newArticle.append(newsJson.data.segments[index][item]  + "   |    ")
        }
    }
}
news()

