function getData(uId) {

    return new Promise((resolve,respose)=>{

        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
            
            }, 4000);

    })

    }
    


    async function myfunction(){
        console.log("start");
        var email = await getData("skc");
        console.log("Email id of the user id is: " + email);
        console.log("end");
    }

    myfunction();

