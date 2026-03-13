// console.log("youssef" && console.log("youssef"));
// let y = 5;
// // let y = ++x + x++
// // console.log(x);
// // console.log(y);
// x = 9 % 9;
// console.log(x);

// const { readFile } = require("fs");
// const { log } = require("node:console");
// const { get } = require("node:http");
// const { dirname } = require("node:path");

// let x = 5;
// let y = x+= 1+6;
// console.log(y);
// console.log(x);
// let x = 10;
// console.log(x);
// summation(8,8);
// function summation(x,y){
//     console.log(x+y);
    
// };
// let arr = [1,2,3,4];
// function atArr(index){
//     return arr[arr.length +index]
// }
// console.log(atArr(-2))


// const arr = [1,2,3,4,["last element"]];
// arr.push(99);
// arr2 =[...arr];
// arr[0] =899;
// console.log(arr2);

/// temporal dead zone 

// the zoon that you cant access or excute variable before it 
// let obj ={
//     CUSTOMER: 'customer',
//     ADMIN:'admin',
//     SELLER:'seller',
//     SUPPLIER:"supplier",
// }

// // Object.assign(obj , {"islam": "is a legend"})
// obj["ADMIN"] =undefined;
// console.log(obj);
// delete obj.ADMIN;
// console.log(obj);

// function findeUser(query , fn){
//     setTimeout(() => {
//         //logic of code 
//         let data = {userName:"Ahmed" , passsword:12345, salary:5000} //DB
//     if (data) console.log(
//      {success: true , messege : "done" , data })
//     else console.log( {success:false,messege:"user is not found"});
//      //2-update user
//     // updateUser({userName:"ka3bora"})
//     typeof fn == "function" ? fn() : null;
//     }, 3000);
// }
// function updateUser(){
//   setTimeout(() => {
//       //logic of code
//     let isUpdate = true; //DB driver;
//     if (isUpdate) console.log(
//      {success:true , messege: "user updated succssefully"});
//     else console.log(
//      {success:false , messege:"faile to update"});
//          //3-send response
//     // sendResponed('login successfully')
//   }, 2000);
// }
// function sendResponed(messege){
//    setTimeout(() => {
//      //logic of code
//     console.log(messege); // FE
    
//    }, 1000);
// }
// function login() {
//     //1-find user 
//      findeUser({userName:"ka3bora"},function () {
//       sendResponed("it worked successfully")
//       updateUser
//      })
// };
// login();
// function getProfile(){
//     findeUser({userName:"ka3bora"})
// }
// // getProfile()
// function findeUser() {
//   return new Promise((resolve,reject) =>{
//     setTimeout(() => {
//       let userData = { userName: 'Ahmed', passsword: 12345, salary: 5000 };
//       typeof userData == "object" && userData != null ? resolve(userData) : reject("user not found")
//     }, 3000);
//   })
// }
// function updateUser(){
//   return new Promise((resolove , reject)=>{
//     setTimeout(() => {
//           let isUpdated = true;
//     isUpdated == true ? resolove(isUpdated) : reject("user is not updated") // throing need to be catch
//     }, 2000);
//   })
// }
// findeUser()
// .then((value) =>{
//   console.log(value)
//   updateUser().then((value)=>{
//     console.log(value);
    
//   }).catch((error)=>{
//     console.log(error);
    
//   })
// })
// .catch((erro) => {
//   console.log(erro)
// }).finally(()=>{
//   console.log("function end at" , new Date());
  
// })

// async function login(){
// try {
//    const result1 =  await findeUser(); // first solution is that you need to make it all try and catch 
//       console.log(result1);
   

// } catch (error) {
//     console.log(error); 
//      return;
// } 
//   const result2 =  await updateUser()
//       console.log(result2);
//       return 0;
// }
// const result =login()
// console.log(result);
// let arr = [1,2,3];
// let arr2 = [11,222,3333];
//modify

// let newArr = arr.map(function (ele){return ele*2})
// console.log(newArr);


// function modify(target,factory){
//   let result = []
//   for (const ele of target) {
//      // 1 op 1
//      // 2 op 2
//      const moifiedEle = factory(ele);
//      result.push(moifiedEle);
//   }
//   return result
// }
// let newArr = modify(arr,function factory(ele) {
//     const newEle = ele + 2
//     return newEle;
// })
// console.log(newArr);
// let newArr2 =  modify(arr2, function factory(ele) {
//     const newEle2 = ele *2;
//     return newEle2;
// })
// console.log(newArr2);
// let arr = [1,2,3,4,5,6,7,8];
// function filter(target , factory) {
//   let res = [];
//   for (let i = 0; i < target.length; i++) {
//     const ele = target[i];
//     let newEle = factory(ele);
//     if(newEle === true){res.push(ele)};
//   }
//   return res;
// }
// let newFilter = filter(arr, (ele)=>{
//   if (ele %2 ===0){
//     return true
//   }
// });
// console.log(newFilter);

// let arr = [1,2,3,4,5,6,7,8];
// let newArrr = arr.filter((ele)=> {if (ele %2 === 0) { return true
// }})
// console.log(arr);
// console.log(newArrr);
// let productList = [{iphone: "17promx" , price :800000} , {name:"kart sh7n" , price : 200}]
// function getTotalPrice(target) {
  // let totalPrice = 0;
  // for (const ele of target) {
  //   totalPrice += ele.price;

  // }
  //       return totalPrice;
  // }
  // let res = getTotalPrice(productList)
  // console.log(res);
// let productList = [{iphone: "17promx" , price :800000} , {name:"kart sh7n" , price : 200}];
// let newProduct = productList.reduce((acc,cur)=>{return acc + cur.price},0);
// console.log(newProduct);
// let user = {
//   name:"islam",
//   password:12345,
//   salary:5000, 
//   getName: function (){
//     return this
//   }
  

// }
// console.log(user.getName());
// var c = 19;
// if (true){
//   var c = 33232;
//   console.log("x in scoop if",c);
  
// }

// const sayed = require("./md")
// sayed()
// require("fs");
// readFile()
// const {md2} = require("./allmd.js");
// md2()
// const path = require("node:path");
//   let filepath = "C:\\Users\\ISLAM\\Desktop\\js prac\\js\\pics\\1234.png";
//  console.log( path.basename(filepath));
// function getFolderName(fileName) {
//   let arr = fileName.split("\\");
// let popy = arr.pop();
// let res = arr.join("\\")
// return res;
// }
// console.warn(getFolderName(filepath));
//  let folderName = path.dirname(filepath);
//  console.log(folderName);
// function getFirstElement(path) {
// return  path.split("\\")[0];
  
// }
// console.log(getFirstElement(filepath));
// let res = path.parse(filepath);
// console.log(res);

 
// function getFileName(path){
// let arr = path.split("\\");
// let res = arr.at(-1);
// return res;
// }
// console.log(getFileName(filepath));
// let fs = require("node:fs");
// if (!fs.existsSync("uploads/user/nader/profil-pic")) {
//   fs.mkdir("uploads/user/nader/profil-pic",{recursive:true},(error)=>{
//  if(error){
//   console.log(error);
  
//  }
  
// });
// };
// fs.rmdir("uploads/user/nader/profil-pic",(error)=>{
//   if (error) {
//     console.log(error);
    
//   }
// });
// C:\Users\ISLAM\Desktop\js prac\uploads\users\profile-pics\islam.jpg
// const path = require("node:path")
// let filePath = "../uploads/users/profile-pics/islam.jpg";
// let res = __dirname + "/"+ filePath;
// let finalRes = res.replaceAll("\\", "/");
// console.log(finalRes);
// let finalRes = path.join( filePath);
// let finalRes2 = path.resolve( filePath);
// console.log(finalRes);
// console.log(finalRes2);
// let {EventEmitter} = require("node:events");
// let eventEmitter = new EventEmitter();//object
// eventEmitter.on("call me daddy",()=>{
//   console.log("daddy");
  
// })
// eventEmitter.on("islam",()=>{console.log("gihan");
// });
// eventEmitter.prependListener("islam",()=>{console.log("gigi");
// })
// eventEmitter.emit("islam");
// // console.log(eventEmitter.eventNames());



// let x = require("./ay7aga");
// // console.log(x);
// x.ay7aga2()

// const { buffer } = require("node:stream/consumers");
// fs.open("./data.json", (err,fd)=>{
//   // console.log(fd);
//   fs.read(fd,(err,bytes,buffer)=>{
//     console.log({bytes});
//     console.log({buffer});
//     fs.close(fd,(err)=>{
//       if(err){
//         console.log(err);
        
//       }
//       else{"file is closed succefully"}
//     })
//   })
// });
// fs.readFile("./data.json",{encoding:"utf-8"},(err,data)=>{
//   console.log(data);
  
// })
// fs.writeFile("./data.txt","hi islam to ",{flag:"w"},(err)=>{
//   err?console.log(err):console.log("file is loged succefully to ");
  
  
// });
// // delete file by unlink
// fs.unlink("./data.txt",(err)=>{
//   console.log("fille logged succefully");

// })
// const fs = require("node:fs");
// let floderExist =  fs.existsSync("uploads");
// if(floderExist){
//   fs.rmdir("uploads",{recursive:true},(err)=>{if(err){console.log(err);
// }else{"it worked successfully"}});
// }
// const {stream} = require("node:stream");
// const stream = stream();
// stream.on();
// stream.emit();
// const fs = require("node:fs");
// const data =  fs.readFileSync("./data/text");
// const fs = require("node:fs");
// const { start } = require("node:repl");
// const readStream = fs.createReadStream("./js/data.txt",{start:2000,end:20000,encoding:"utf-8"});
// readStream.on("open",(fd)=>{

//     console.log("file is opend");
    
// });
// readStream.on("ready",()=>{
//   console.log('file is ready');
  
// });
// let CHUNKNUMBER = 1;
// readStream.on("data",(chunk)=>{
//   console.log(chunk);
  
//   console.log("==================",CHUNKNUMBER++ ,"================");
//   readStream.pause();//emit event paus
//   setTimeout(() => {
//     readStream.resume()
//   }, 1000);
// });
// readStream.on("end",()=>{
//   console.log("file is end");
  
// });
// readStream.on("close",()=>{
//   console.log("file is end");
  
// });
// readStream.on("resume",()=>{
//   console.log("file is resumed");
  
// })
// readStream.on("pause",()=>{
//   console.log("file is paused");
  
// });
// const fs = require("node:fs");
// const writeStream = fs.createWriteStream("./data1.txt");
// const readStream = fs.createReadStream("./js/data.txt");
// readStream.on("data",(chunk)=>{
//   writeStream.write(chunk);
  
// })
// readStream.on("end",()=>{
//   writeStream.end();
// })
// writeStream.write("hi habibty");
// writeStream.write("hi habibty");
// writeStream.write("hi habibty");

// writeStream.write("hi chunk")

// readStream.pipe(writeStream);

// const http = require("node:http");
// const fs = require("node:fs")
// const {EventEmitter } = require("node:events");
// let users = [{userName: "islam", password:1234, salary:3000}];
// const server = http.createServer((req,res)=>{
  
//   const {url,method} = req;
//   if(url =="/user" && method =="GET"){
//     const data = fs.readFileSync("./data1.json")
//     res.writeHead(200,{"content-type":"application/json"});
//     res.write(data);
//     res.end();
//     return;
//   }else if(url =="/user" && method =="POST"){
//     let data = "";
//    req.on("data",(chunk)=>{

//     data += chunk;
//     console.log(data);
    
//     console.log("=========");
    
    
//    })
//     req.on("end",()=>{
//       data = JSON.parse(data);
//       // console.log(data);
//       users.push(data);
//       fs.writeFileSync("./data1.json",JSON.stringify(users))
//       // console.log(users);
//       res.write("res created successfully");
//       res.end();
//     })
//     return;
//   }
  //   res.writeHead(400,"ok",{"content-type":"application/mcword"});
  // res.write(JSON.stringify({name:"islam",password:123}));
  
  // res.end(()=>{
  //   console.log("end");
    
  // })
// });
// const port = 3000;
// server.listen(port,()=>{
//   console.log("server is runnung on port ",port);
  
// });
// server.on("error",(err)=>{
//   console.error(err.message);
  
// });
// const crypto = require("node:crypto");
// crypto.pbkdf2()

const express = require("express");
const app = express();
const port = 3000;
let users = [{"userName": "islam", "password":12345,"salary":3000}]
app.listen(port,()=>{
  console.log("app is runnung", port);
  
})
app.get("/user",(req,res,next)=>{
  console.log(2);
  
  next()
},(req,res,next)=>{
  //logic of code
  // res.writeHead(200,{"content-type":"apllication/json"})
  // res.write(JSON.stringify(users));
  // res.end();
  res.status(201).send({message:"done"})
  console.log(1);
  
}
);
app.post("/user",(req,res,next)=>{
  let body = "";
  req.on("data",(chunk)=>{
    body += chunk;
  })
  req.on("end",()=>{
     
  })
})
// app.post("/user");
// app.delete("/user");
// app.put("/user");

console.log("islam");




