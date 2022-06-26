function generateHashtag (str) {
  if ( str === '' || str.charAt(0) == '#' || str === ' ') {
   return false 
 } else {
  str = str.toLowerCase()
     let arr = str.split(' ');
     let another = arr.map( (val) => {
       let first = val.charAt(0).toUpperCase()
       let rest = val.slice(1)
       return first + rest
     })

   return '#' + another.join('')

 }
}


console.log(generateHashtag('CodeWars is amazing '))