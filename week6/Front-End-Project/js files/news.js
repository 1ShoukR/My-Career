const newsUrl = `https://vlrggapi.herokuapp.com/news`;
const newsArticles = document.getElementById('newsArticles');


const news = async () =>{
    newsArticles.innerText = null
    const valNews = await fetch(newsUrl)
    const newsJson = await valNews.json()
    console.log(newsJson.data.segments)
    const valArticles = document.createElement('p')
    valArticles.classList = 'articles'
    for (index in newsJson.data.segments){
        var title = newsJson.data.segments[index]
        console.log(title)
        const newArticle = document.createElement('p')
        newArticle.classList = 'newArticle'
        newsArticles.append(newArticle)
        newArticle.append(" " + newsJson.data.segments[index].title);
        newArticle.append(" " + newsJson.data.segments[index].description);
        newArticle.append(" " + newsJson.data.segments[index].date);
        newArticle.append(" " + newsJson.data.segments[index].author);
        newArticle.append(' https://www.vlr.gg' + newsJson.data.segments[index].url_path
        );
    }
    // valArticles.append(" ")
    // valArticles.append(newsJson.data.segments[0].description)
}
news()

