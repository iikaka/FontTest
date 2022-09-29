const oldObj={
    name:'kk'
}

const deepClone = function (obj = {}) {
    if(typeof obj !=='object'||obj==null) return obj
    let result;
    if(obj instanceof Array){
        result=[]
    }else{
        result={}
    }
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return obj
}

const newObj=deepClone(oldObj)
newObj.name  = '00'
console.log('oldObj',oldObj);
console.log('newObj',newObj);