module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
  let array = []
  str.split('').forEach((item, index) => {

    if (item === '(' || item === '[' || item === '{') {
      array.push(item)
    }
    if (item === ')'  && array[array.length - 1] === '(') {
      array.pop()
    }
    if (item === ']'  && array[array.length - 1] === '[') {
      array.pop()
    }
    if (item === '}'  && array[array.length - 1] === '{') {
      array.pop()
    }
  })
 return  array.length ? false : true
}
