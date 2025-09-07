"use strict" 

/////// object ::




// const michaelInfo = {   /// key(propretie) : value
//   firstName : "Michael" ,
//   lastName : "jackson" ,
//   age : 25 ,
//   job : "singer" ,
//   active : false ,
//   hobbies : ["singing" , "dancing" , "acting"]

// }

////// dot notation ===> (name of object).key
// console.log(michaelInfo.firstName)
// console.log(michaelInfo.hobbies[1])

///// bracket notation : ===> (name of object)["key"]

// console.log(michaelInfo["job"])
// console.log(michaelInfo["hobbies"][2])


// const michaelInfo = {   
//   firstName : "Michael" ,
//   lastName : "jackson" ,
//   age : 25 ,
//   job : "singer" ,
//   active : false ,
//   hobbies : ["singing" , "dancing" , "acting"]

// }


// const interestedIn = prompt(
//     "what do you want to khnow about Michael ? choose between firstName , lastName , age ,job"
// )
// ///// bracket notation : ===> (name of object)["key"]
// console.log(michaelInfo[interestedIn])



///// how to add (key : value) in object with (dot (.)) notation :



// const michaelInfo = {   
//   firstName : "Michael" ,
//   lastName : "jackson" ,
//   age : 25 ,
//   job : "singer" ,
//   active : false ,
//   hobbies : ["singing" , "dancing" , "acting"] , 

          


// }

/// ====> syntaxe :: (object name).new-key = new-value

// michaelInfo.location = "america"
// michaelInfo.trophies = "oscar"

// console.log(michaelInfo)



///// how to add (key : value) in object with (bracket, []) notation :

// const michaelInfo = {   
//   firstName : "Michael" ,
//   lastName : "jackson" ,
//   age : 25 ,
//   job : "singer" ,
//   active : false ,
//   hobbies : ["singing" , "dancing" , "acting"] , 

          


// }

// /// ====> syntaxe :: (object name)["new-key"] = "new-value" 
// michaelInfo["gender"] = "male"
// console.log(michaelInfo)



//////// edit (modification)


// const michaelInfo = {   
//   firstName : "Michael" ,
//   lastName : "jackson" ,
//   age : 25 ,
//   job : "singer" ,
//   active : false ,
//   hobbies : ["singing" , "dancing" , "acting"] , 

          


// }

//// ===> syntaxe  : (object name).old-key = "new-value"

// michaelInfo.firstName = "peter"
// console.log(michaelInfo)

///////// key word : this (es6) ::


// const jonas = {
//     firstName : "jonas" , 
//     lastName : "shmedman" ,
//     bearthYear : 1993 , 
//     calcAge : function (now){
//          return now - this.bearthYear
//     }
// }


//  const michaelInfo = {   
//   firstName : "Michael" ,
//    lastName : "jackson" ,
//     bearthYear : 1990 , 
//     calcAge : function (now){
//          return now - this.bearthYear
//     }
  
// }



//  const peter = {   
//   firstName : "peter" ,
//    lastName : "karlos" ,
//     bearthYear : 1994, 
//     calcAge : function (now){
//          return now - this.bearthYear
//     } ,
//     job : "designer" , 
//     hobbies : ["football" , "movies" , "running"]
  
// }

// console.log(jonas.calcAge(2025))
// console.log(michaelInfo.calcAge(2025))
// console.log(peter.calcAge(2025))


////// challange ::: 

 const peter = {   
  firstName : "peter" ,
   lastName : "karlos" ,
    bearthYear : 1994, 
    calcAge : function (now){
         return now - this.bearthYear
    } ,
    job : "designer" , 
    hobbies : ["football" , "movies" , "running"]
  
}

/// (peter) is a (31) years old (designer) and has a/no driver license and he love watching (movies)

const message = `${peter.firstName} is a ${peter.calcAge(2025)} years old ${peter.job} and has ${peter.calcAge(2025) >= 18 ? "a" : "no"} driver license and he love watching ${peter.hobbies[1]} `
console.log(message)


