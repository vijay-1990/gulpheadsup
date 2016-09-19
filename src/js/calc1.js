function calculate(){
			var p = document.getElementById("p").value;
			var n = document.getElementById("n").value;
			var r = document.getElementById("r").value;
			console.log(p+"-"+r+"-"+n);
			var si = p * ( 1+ (r * n) );
			document.getElementById("si").value = si;
		}