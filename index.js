/*var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar' }*/

var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}
