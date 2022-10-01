let newArr = JSON.parse(localStorage.getItem("news")) || []
console.log(newArr)
let container = document.getElementById("newscontainer")
function displaynews(data){
    container.innerHTML = null
     data.forEach(function(ele){
        let div = document.createElement("div")
        div.id = "divnewsPage"

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
        // content.id = "newsContent"

        div.append(image,author,title,content)
        container.append(div)
     })
}
displaynews(newArr)