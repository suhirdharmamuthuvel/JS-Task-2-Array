// ----------------------------------1) different two array
// function fn (a,b){
    
//     for(let i=0;i<a.length;i++){
//         for(j=0;j<b.length;j++){
//             if (a[i]==b[j]){
//                 a.splice(i,1)
//                 b.splice(j,1)
//                 i--
//             }
//         }
        
//     }
//  console.log(a)
//  console.log(b)
// }
// fn([1,2,3,4,5],[3,4,5,6,7])

// ----------------------------------2) check the string---------------------------- 

// function Checkstring(duparr,check){
//     let arr=[]
//     let chk=check.toLowerCase()
//     let x=true;
//     for(let i=0;i<duparr.length;i++){
        // arr[arr.length]=duparr[i].toLowerCase();     //used to push too
//         if(arr[i]==chk){
//             x=false;
//             console.log("true","'"+check+"'","is in the Index of",i)
//         } 
//     }
//     if(x===true){
//         console.log("-1")
//     }
// }
// Checkstring(["SUHI","suhirDharmA","eat"],"eat")

// ----------------------------------3) count the odd numbers in the array----------------------------

// let arr = [22,23,24,25,26,27,28,29];
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     count += 1;
//   }
// }
// if (count >= 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(count);