// rules = {
//     name:[
//      {   required:true},
//     ],
//     email: [
//         {required: true}
//     ]
// }
// let form = {
//     name: 'tran ngoc tien',
//     email:'tien@gmail.com'
// }

// error = {
//     required: "please fill in this field",
// }

// for in => array  object
// for (let prop in ['a', 'b', 'c']) 
//   console.log(prop);    // 0, 1, 2 (array indexes)

// for (let prop in {a: 1, b: 2, c: 3}) 
//   console.log(prop);    // a, b, c (object property names)



// for of => array => k chay  

// for (let val of ['a', 'b', 'c']) 
//   console.log(val);  


//   if in => kiem tra gia trong bien

const REGEXP = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  phone: /^[0-9\-\+]{9,15}$/,
  website:/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
};
const ERROR_MESSAGE = {
  required: "please fill in this field",
  regexp: "field not like format ",
};
export const validate = (rules, forms) => {

  let errorObject = {};
   

  for(let name in rules){
    for(let rule of rules[name] ){
        if(rule.required){
         if(!forms[name]){
            errorObject[name] = rule.message||ERROR_MESSAGE.required
         }
        }
        if(rule.regexp && forms[name]  ){
            let regexp ={}
            if(rule.regexp in REGEXP){
                regexp = REGEXP[rule.regexp]
            }
  
            if(!regexp.test(forms[name])){
                errorObject[name] = rule.messageRegexp || ERROR_MESSAGE.regexp;
            }
        }
    }
  }



  return errorObject;
};
