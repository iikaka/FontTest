function promiseAll(args){
    return new Promise((resolve,reject)=>{
        // if(!Array.isArray(args)){
        //     throw TypeError(`error`)
        // }
        let count=0;
        let resolveResult=[];
        let num=args.length;

        for(let k in args){
            Promise.resolve(args[k]).then(res=>{
                count++;
                resolveResult[k]=res;
                if(count===num){
                    return resolve(resolveResult)
                }
            }).catch(err=>{
                return err
            })
        }
    })
}

let p1=new Promise(resolve=>{
    setTimeout(()=>{
        resolve('1')
    },100)
})
let p2=new Promise(resolve=>{
    setTimeout(()=>{
        resolve('2')
    },200)
})
let p3=new Promise(resolve=>{
    setTimeout(()=>{
        resolve('3')
    },300)
})

promiseAll([p1,p2,p3]).then(res=>{
    console.log(res);
})
promiseAll('123').then(res=>{
    console.log(res);
})