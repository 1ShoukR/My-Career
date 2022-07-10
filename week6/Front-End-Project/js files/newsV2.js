const newsUrl = `https://vlrggapi.herokuapp.com/news`;
const newsArticles = document.getElementById('newsArticles');

const news = async () => {
  newsArticles.innerText = null;
  const valNews = await fetch(newsUrl);
  const newsJson = await valNews.json();
  console.log(newsJson);
  for (index in newsJson.data.segments) {
    var titleObj = newsJson.data.segments[index];
    console.log(titleObj);
    const newArticle = document.createElement('p');
    newArticle.classList = 'newArticle';
    console.log("\tTITLE STARTING")
    console.log("\t\t", Object.keys(titleObj.author))
    console.log("\t\t", titleObj.title)
    const newsTitle = document.createElement('p')
    newsTitle.classList = 'newsTitle'
    const newsPage = document.createElement('p')
    newsPage.classList = 'newsPage'
    const date = document.createElement('p');
    date.classList = 'date'
    const author = document.createElement('p')
    author.classList = "author"
    author.innerHTML = `${titleObj.author}`
    date.innerHTML = `${titleObj.date} | `
    newsTitle.innerHTML = `${titleObj.title} | `;
    newsPage.innerHTML = `
    ${titleObj.description} | 
    `
    newsArticles.append( newsPage, newsTitle, date, author);
  }
};
news();
