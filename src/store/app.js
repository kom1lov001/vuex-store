// let obj = {'a': 666, 'adwd': 1, 0: 2};
// console.log(obj['adwd']);
// for(let key in  {1:1, 0:0,2:2}) {
//   console.log(key);
//  }
// function f(x) {
//   console.log(x)
// }

// (function() {
//   f(1)
// }())
// let name = "Вася";
// function sayHi() {
//   console.log(name);
// }

// setTimeout(function() {
//   let name = "Петя";
//   sayHi();
// }, 1000);
// let a = [1,2];

// (function() { console.log(a) })()

// function F() { return F; } [funktsiya F() { F qaytarish }]

// alert( new F() instanceof F ); [ogohlantirish (yangi F() instanceof F );]
// alert( new F() instanceof Function ); [ogohlantirish (Funktsiyaning yangi F() instance)]
// console.log(
//   ( 20e-1['toString'](2) ))
// function f() {
//   let a = 5;
//   return new Function('b', 'return a + b');
// }

// console.log( f()(1) );
// import Vuex from 'vuex'
// import Vue from 'vue'

// Vue.use(Vuex)
// export default new Vuex.Store({
//     state:{
//         num:0
//     }
// })
// let product = { id:1,name:'Bread',count:1 }
// let Cart = function(){
//   this.products = []
// }
// Cart.prototype.addProduct = function(product){
//   if(this.products.find(product =>product.id)){
//     return
//   }
//   // this.products
//   this.products.push(product)
// }
// Cart.prototype.increaseAmount = function(id){
// this.products = this.products.map(product=>{
//   if(product.id == id){
//     product.count++
//     return product
//   }
//   return product
// }).filter(product => product.count > 0 )
// }
// let cart = new Cart()
// cart.addProduct(product)
// console.log(cart);
// let res = new Cart()
// res.increaseAmount(1)
// console.log(res);

// let product = {id:1,name:"Avaz",count:1}
// let Cart = function(){
//   this.products = []
// }
// Cart.prototype.addProduct = function(product){
// if(this.products.find(product => product.id)){
//   return
// }
// this.products.push(product)
// }
// Cart.prototype.inceaseProduct = function(id){
// this.products = this.products.map(product =>{
//   if(product.id == id){
//     product.count++
//     return product
//   }
//   return product
// })}
// Cart.prototype.decreaseProduct = function(id){
//   this.products = this.products.map(product =>{
//     if(this.products == id){
//       product.count--
//       return product
//     }
//     return product
//   })
// }
// let cart = new Cart()
// cart.addProduct(product)
// cart.inceaseProduct(1)
// cart.inceaseProduct(1)
// cart.inceaseProduct(1)
// cart.decreaseProduct(1)
// console.log(cart);

// class fruits{
//   constructor(name,color){
//     this.name = name
//     this.color = color
//   }
//   isEat = false
//   isCount = 4000
//   isKg = 82
//   id = 1
// }

// let res = new fruits('Apple','Green')
// Object.entries(res).forEach((re) => console.log(re[0])
//   )
// class fruits {
//   constructor(name,color){
//     this.name = name
//     this.color = color
//     this.id = 1
//     this.isHas
//   }
//   isTrue(itrue){
//     this.itrue = itrue
//   }
// }

// let res = new fruits('limon','yellow')
// res.isTrue(false)
// console.log(res);
// let fullName = function(){
//   return this.name + ' ' + this.surname
// }
// let person1 ={
//   name:'Defender',
//   surname:'Kokiyev'
// }
// let person2 ={
//   name:'Avaz',
//   surname:"Komilov"
// }
// let res = fullName.call(person2)
// console.log(res);
// let myFullName = function(){
//   return this.name + ' ' + this.surname
// }
// let person1 ={
//   name:'aziz',
//   surname:"Adilov"
// }
// let person2={
//   name:"Odil",surname:'Dilshodov'
// }
// let person3={name:"Avaz",surname:"Komilov"}
// let res = myFullName.apply(person3)
// console.log(res);
