const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    let situataion = true;
    if (situataion) {
      resolve("Happy ");
    } else {
      reject("break up");
    }
  }, 5000);
});




// console.log("we are getting married")
// data.then((res)=>{
// console.log(res)
// }).catch((err)=>{
// console.log("err",err)
// })

// console.log("I am getting job")



async function handleData() {

    try{
   const res=await data
    console.log(res)
    }catch(err){
console.log(err)
    }
 
    
}

// handleData()

// console.log(data)




//node js core modules // fs,path,http
// event loop 
