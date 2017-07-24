function showContactUsScreen(){
	var i = document.getElementById("number").value;
	if(i == 0){
		document.getElementById("contact_us_screen").style.display = "block";
		document.getElementById("about_us").style.display = "none";
		document.getElementById("slide_show").style.display = "block";
		i=i+1;
		document.getElementById("number").value=i;
		document.getElementById("number1").value=0;
	}
	else{
		document.getElementById("contact_us_screen").style.display = "none";
		document.getElementById("slide_show").style.display = "block";
		i=0;
		document.getElementById("number").value=i;
		document.getElementById("number1").value=0;
	}
	}

	function showAboutUsScreen(){
		var i = document.getElementById("number1").value;
	if(i == 0){
		document.getElementById("contact_us_screen").style.display = "none";
		document.getElementById("about_us").style.display = "block";
		document.getElementById("slide_show").style.display = "none";
		i=i+1;
		document.getElementById("number1").value=i;
		document.getElementById("number").value=0;
	}
	else{
		document.getElementById("about_us").style.display = "none";
		document.getElementById("slide_show").style.display = "block";
		document.getElementById("contact_us_screen").style.display = "none";
		i=0;
		document.getElementById("number1").value=i;
		document.getElementById("number").value=0;
	}
	}

	function showHomePage(){
		location.reload();
	}