function changeBackgroundColor(color) {

	 if(document.body.style.backgroundColor == "grey"){
	 	console.log("changed to green")
	 	document.body.style.backgroundColor = "green";
	 }
	 else {if(document.body.style.backgroundColor == "green"){
	 	console.log("changed to grey")
	 	document.body.style.backgroundColor = "grey";
	 }
	}

}


document.body.style.backgroundColor = "green";