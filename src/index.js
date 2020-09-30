module.exports = function check(str, bracketsConfig) {
  let array = []
  if(str.length % 2 !== 0) {
    return false
  }
  str.split('').forEach((item) => {
      for (let i = 0 ; i < bracketsConfig.length; i++){
        
        if (bracketsConfig[i][0] !== bracketsConfig[i][1] ){
          if (item === bracketsConfig[i][0]) {
            array.push(item)
          } else if(item === bracketsConfig[i][1] && array[array.length-1] === bracketsConfig[i][0]){
            array.pop()
          }
      } else {
        if (item === bracketsConfig[i][0] && array[array.length-1] !== bracketsConfig[i][0]) {
            array.push(item)
          } else if(item === bracketsConfig[i][1] && array[array.length-1] === bracketsConfig[i][0]){
            array.pop()
          }
      }
    
    }
})
 return  array.length ? false : true
}
