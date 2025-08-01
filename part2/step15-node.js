/* 
step 16
let mod = require("./step15-node");

console.log(mod)
*/
let user = "Vijay";
let city = "Bangalore";
let company = "Oracle";


// console.log(user);
// export
/* 
module.exports.user = user;
module.exports.city = city;
module.exports.company = company; 
*/

/* 
module.exports = {
    user : user,
    city : city,
    company : company
} 
*/

module.exports = { user, city, company };