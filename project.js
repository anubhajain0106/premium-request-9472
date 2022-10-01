

let container = document.getElementById("newsContainer");
let newArr = []

function displaynews(data){
   
    data.map(function(ele){
        let div = document.createElement("div")
        div.id="newsDiv"
        div.addEventListener("click",function(){
            addtols()
        })
        
        let author = document.createElement("p")
        author.innerText = ele.author;
        author.id="author"
        
        let image = document.createElement("img")
        image.src = ele.urlToImage;

        let title = document.createElement("p")
        title.innerText = ele.title;
        title.id="newsTitle"

        let desc = document.createElement("p")
        desc.innerText = ele.description;
        desc.id = "newsDesc"

        let content = document.createElement("p")
        content.innerText = ele.content
        content.id = "newsContent"

        div.append(author,image,title,desc)
        container.append(div)

        function addtols(){
            newArr.push(ele)
            localStorage.setItem("news",JSON.stringify(newArr))
            window.location.href = "news.html"
        }
    })
}





async function getNews(){
    try{
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=87903b8b7029404d9b7996762aaca7af"
         let res = await fetch(url)
         let data = await res.json()
         let actualData = data.articles
         console.log(actualData)
         displaynews(actualData)
    }catch{
        console.log(error)
    }
}
getNews()
