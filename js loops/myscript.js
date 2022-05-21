var n = ["claire","phil","alex","luke"];
for ( var i = n.length-1; i >= 0 ; i-- ) {
	console.log(n[i]);
	document.getElementById('jOutput').innerHTML = document.getElementById('jOutput').innerHTML + n[i]

}
for ( var n = 0; n <= 20; n = n + 1 ) {
	if (n%2==0){
		console.log(n + " is even.");
		document.getElementById('evenodd').innerHTML = document.getElementById('evenodd').innerHTML + n + " is even "
	} else {
		console.log(n+" is odd");
		document.getElementById('evenodd').innerHTML = document.getElementById('evenodd').innerHTML + n + " is odd "
 }
};

var numset1 = [ 1, 3, 7, 2 ];
var numset2 = [ 10, 1200, 9000, 500 ];
var numset3 = [];
console.log( numset1[0] + numset2[0] );
for ( y =0; y < numset1.length; y++) {
  console.log( numset1[y] + numset2[y] );
  numset3[y] = numset1[y] + numset2[y];
}
console.log(numset3);
document.getElementById('numset').innerHTML = document.getElementById('numset').innerHTML + numset3

var x="rishitamehta"
var empty=""
var y= x.length
for(k=0;k<y;k++)
  if((k+1)%2==0){
    empty+="Z"
  }
  else
    empty+=x[k];
}
console.log(empty)
document.getElementById('rm').innerHTML = document.getElementById('rm').innerHTML + empty
