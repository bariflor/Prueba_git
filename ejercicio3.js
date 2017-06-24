var array = [7,21,44,80,77,35];
var multNum = 7;
var newArray = [];
array.forEach(function(element){
  if(element%multNum==0){

    newArray.push(element);
    console.log(newArray);

     }

})

// Mi Output debe ser []
