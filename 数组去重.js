let arr=[1,1,2,3,4,3,1,5,6]
//es6 set
// let result=Array.from(new Set(arr))

//es6 展开运算符
// let result=[...new Set(arr)]

//for循环+indexOf
// let result=[]
// for(let i in arr){
//     if(result.indexOf(arr[i])==-1){
//         result.push(arr[i])
//     }
// }

//forEach+indexOf
// let result=[]
// arr.forEach(item=>{
//     if(result.indexOf(item)==-1){
//         result.push(item)
//     }
// })

//filter+indexOf---1
//filter进行过滤，item代表当前过滤的值，index代表索引值
// let result=arr.filter((item,index)=>{
//     // console.log("item",item);
//     // console.log("index",index);
//     // console.log("indexOf(item)",arr.indexOf(item));
//     //返回 检测的indexOf的结果 如果不存在就返回-1 存在则返回第一个找到值所在的索引值
//     //判断是否等于index 也就是原本所在的索引值
//     return arr.indexOf(item)==index 
// })

//filter+indexOf---2
// let result=[]
// arr.filter((item,index)=>{
//     if(arr.indexOf(item)==index){
//         result.push(item)
//     }
// })

//sort
// let result=[]
// let temp=arr.sort();
// console.log(temp);
// for(let i =0;i<temp.length;i++){
//     if(temp[i]!==temp[i+1]){
//         result.push(temp[i])
//     }
// }


// for循环+splice方法
// for(let i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(j,1)
//         }
//     }
// }
// console.log(arr);

//include
let result=[]
for(let i in arr){
    if(!result.includes(arr[i])){
        result.push(arr[i])
    }
}

console.log(result);
