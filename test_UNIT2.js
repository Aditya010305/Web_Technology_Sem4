//<-- 1st -->

// console.log("1");

// setTimeout(()=> {
//     console.log("2")
// },2000);

// console.log("3")



//<-- 2nd -->

// function bakeCake(myCallBack){
//     console.log("1. Cake is in oven")
//     setTimeout(() => {
//         console.log("2.Cake is baked")
//         myCallBack();
//     },1000)
// }

// bakeCake(() => {
//     console.log("3. Now i can eat the cake")
// })



//<-- 3rd -->  <====PROMISE====>

// function bakeCake(){
//     return new Promise((myResolve, myReject) => {
//         console.log("1.Baking cake")
//         setTimeout(() => {
//             let flag = false;
//             if(flag)
//                 myResolve("2.Cake is Ready")
//             else
//                 myReject("2.Cake is Burnt")
//         },2000)
//     })
// }

// bakeCake().then((msg)=>{
//     console.log(msg);
//     console.log("3.lets eat cake")
// }).catch((error) => {
//     console.log(error)
//     console.log("3.Have pizza instead")
// })

//WAP in JS whether you can go to kashmir or not based on petrol

function goKashmir(){
    return new Promise((myResolve,myReject) => {
        console.log("Checking Petrol")
        setTimeout(() => {
            let petrol = 199;
            if(petrol>=100){
                myResolve("Petrol is sufficient")
            }else{
                myReject("Petrol is insufficient")
            }
        },2000)
    })
}

goKashmir().then((msg) => {
    console.log(msg);
    console.log("Driving to Kashmir")
}).catch((err) => {
    console.log(err)
    console.log("Go back to Home")
})