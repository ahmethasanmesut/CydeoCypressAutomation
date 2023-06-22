//For Loop
for (var i = 0; i < 5; i++) {
  console.log("Inside the loop:"+i)
}
console.log('outside the loop:'+i);
//nested Loop
for (var i = 0; i < 3; i++) {
  console.log("outer loop at state:" + i);
  for (var p = 0; p < 2; p++) {
    console.log('inner loop state:'+ p);
    if(p==1){
      console.log("\n"+"mesut");
    }
  }
}
//while loop
var count=6;
while (count<15) {
  console.log(count);
  count +=2;
}
//break
for (var i = 0; i < 10; i++) {
  console.log(i);
  if(i>4){
    break;
  }
}
//Continue
console.log('CONTINUEEXAMPLE');
var start = 2;

var sum =0;
do {
  if(start%2==0){
    continue;
  }
  sum+=start;
  console.log(sum);
} while (++start<=10);
console.log(sum);
