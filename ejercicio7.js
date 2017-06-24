var edad = [20,16,89,6, 22];
var aniosNac = [];
for(var i = 0; i< edad.length; i++){
  if (edad[i]%2==0 && edad[i]>18){
    aniosNac.push(2017-edad[i]);
  }
}
document.write(aniosNac);
