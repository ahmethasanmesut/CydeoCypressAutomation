let promiseToCleanTheRoom = new Promise(function(resolve,reject){
  let isClean = false;
  if(isClean){
    resolve(' clean') //this assigns to then
  }else{
    reject(' dirty') //this assigns to catch
  }
})

promiseToCleanTheRoom.then(function(fromResolve){
  //console.log('The room is' + fromResolve);
}).catch(function(fromReject){
  //console.log('The room is '+ fromReject);
})



//Now we have dependicies
let cleanRoom = function(){
  return new Promise(function(resolve,reject){
    resolve('clean');
    reject('dirty');
  })
}
let removeGarbage = function(msg){
  return new Promise(function(resolve,reject){
   resolve(msg +'Garbage is removed');
    reject(msg + 'Garbage is in the room');
  })
}
let winIceCream = function(msg){
  return new Promise(function(resolve,reject){
    resolve(msg +'You got the icecream');
    reject(msg + 'You got my rage');
  })
}
cleanRoom().catch(function(result){
  return removeGarbage(msg + result);
});
