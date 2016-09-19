function calculate1(){
			var p = document.getElementById("p1").value;
			var n = document.getElementById("n1").value;
			var r = document.getElementById("r1").value;
			console.log(p+"-"+r+"-"+n);
			var si = p * ( 1+ (r * n) );
			document.getElementById("si1").value = si;
		}