var posts = [
    {title:"Post1",content:"This is Post1"},
    {title:"Post2",content:"This is Post2"}
]

function getPosts(){
    setTimeout(()=>{
        let output = "";
        posts.forEach((post,index)=>{
            output+=`<li> title is ${post.title} and the content is ${post.content} </li>`;
        });

        document.body.innerHTML = output;
    },1000);

    
}

function putPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();

    },2000)
}




putPost({title:"Post3",content:"This is Post3"} ,getPosts);