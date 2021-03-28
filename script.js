function compute()
{ 

	var p,t,r,si, d, n, def_text, i, yr;

	p = document.getElementById("principal").value;
	r = document.getElementById ("rate").value;
	t = document.getElementById ("years");

	if (p <= 0) {
		alert ("Enter a positive number"); 
		return false;
	}

	def_text = "";
	yr=t.options[t.selectedIndex].value;

	si = parseInt((p*yr*r)/100 );

	d = new Date();
	n = parseInt(d.getFullYear(),10) + parseInt(yr,10);

	def_text = "<p>If you deposit <mark>" + p + "</mark>,<br>" +
	"at an interest rate of <mark>" + r + "%</mark>.<br>" +
	"You will receive an amount of <mark>" + si + "</mark>, <br>" +
	"in the year <mark>" +   n + "</mark><br></p>" ;

	document.getElementById ('result').innerHTML = def_text;

}
