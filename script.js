

let content_div = document.getElementById("big_content_div");

let reccomandations = document.getElementById("reccomandations");

let anime_list = ['Bloodlad', 'Kekkai Sensen', 'No Game No Life', 'Overlord'];


let old_header = document.getElementById('outaku');

reccomandations.onclick = function(){
    content_div.remove();
    old_header.remove();
    let reccom_header = document.createElement("h1");
    body.appendChild(reccom_header);
    reccom_header.innerHTML = "Top 10 Anime List"; 
    
    // let newElement1 = document.createElement("p"); 
    // newElement1.innerHTML = "Overlord";
    // newElement1.style["textAlign"] = "center";
    // newElement1.style["fontSize"] = "30px";
    // body.appendChild(newElement1);

    for (let i = 0; i < anime_list.length; i++){
        let newElement = document.createElement("p");
        newElement.innerHTML = anime_list[i];
        newElement.style["textAlign"] = "center";
        newElement.style["fontSize"] = "30px";
        body.appendChild(newElement);
    }
}

let body = document.querySelector("body");
let home = document.getElementById("home");

home.onclick = function(){
    reccom_header.remove();
    body.appendChild(content_div);
}