const isIsomorphic2 = (s, t) => {
  //check lengths of both strings, NOT equal return false
  if( s.length !== t.length ){ return false; }

  // create local variables set to objects to track string char frequencies
  let sFreqs = {}
  let tFreqs = {}

  //create local variabe set to boolean flag
  let isIso = true

  // create loop to traverse through
  for( let i = 0; i < s.length; i++ ){
    //check to see if key already esists in either object
    if( !sFreqs[ s[i] ] && !tFreqs[ t[i] ] ){
      // if NOT add new key set to value of char at index in opposite string
      sFreqs[ s[i] ] = t[i] // value of key in s set to char in t
      tFreqs[ t[i] ] = s[i] // value of key in t set to char in s
    }
    // if key is present in object check the value
    else if ( sFreqs[ s[i] ] !== t[i] || tFreqs[ t[i] ] !== s[i] ){
      // if the key in Sfreqs dosen't match the char at current index in t flip boolean flag
      isIso = false

    }
  }
  // return boolean flag variable
  console.log(sFreqs)
  console.log(tFreqs)
  return isIso;

};

let a = [0,0,1,1,1,2,2,3,3,4]
let b = [1,3,4]
let c = 'kkkk'
console.log(isIsomorphic2('egg', 'add'))