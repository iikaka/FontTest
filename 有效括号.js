/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

 */
let mapS=new Map([
    ['{','}'],
    ['[',']'],
    ['(',')']
])
console.log('mapS',mapS);

const fun = (str='') =>{
    const stk=[]
    for(let s of str){
        //判断mapS中有没有s
        if(mapS.has(s)){
            //如果mapS含有s则，s为属性名，.get()获得属性值
            console.log(s);
            console.log(mapS.get(s));
            stk.push(mapS.get(s))
        //如果没有 则进行匹配比较
        }else{
            if(stk.pop!==s){
                return 
            }
        }
    }
}
fun('(')