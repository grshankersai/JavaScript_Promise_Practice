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

function putPost(post){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push(post);
            let err = false;

            if(!err){
                resolve();
            }else{
                reject("Some error occured.");
            }
    
        },2000)

    });

}

// putPost({title:"Post3",content:"This is Post3"})
// .then(getPosts)
// .catch(err=>console.log(err));

// Async / Await::

async function init(){
    await putPost({title:"Post3",content:"This is Post3"});

    getPosts();
}


init()


//Async await in  fetch:

async function fetchData(){
    var rawdata = await fetch("https://jsonplaceholder.typicode.com/users");
    var processedData = await rawdata.json();

    console.log(processedData);
}


fetchData();


//Promise All::

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve , reject)=>{
//     setTimeout(resolve,2000,"GoodBye")
// });

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));