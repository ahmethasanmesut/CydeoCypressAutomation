let promiseToCleanTheRoom = new Promise (function(resolve,reject){
let isClean = false;
if(isClean){
  resolve('Room is Clean') //this assigns to then
}else{
  reject ('Room is still dirty') //this assigns to catch
}

})
promiseToCleanTheRoom.then(function(fromResolve){
  console.log('The room is '+ fromResolve);
}).catch(function(fromReject){
  console.log('The room is '+fromReject);
})
//Now we have dependencies
let cleanRoom = function(){
  return new Promise(function(resolve,reject){
    resolve('Room is clean');
  })
}
let removeGarbage = function(msg){
  return new Promise(function(resolve,reject){
    resolve (msg +'Garbage is removed')
  })
}
let winIceCream = function(msg){
  return new Promise(function(resolve,reject){
    resolve(msg + 'you got the icecream')
  })
}
cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIceCream(result);
}).then(function(result){
  console.log('Finished'+ result);
})
