//verificação com hasOwnProperty
let obj = {nome:'victor'};
function objetoVazio(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}
console.log(objetoVazio(obj));