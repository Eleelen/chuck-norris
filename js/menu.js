document.getElementById("showFavBtn").addEventListener("click", myFunction);

function myFunction() {
	const showFav = document.getElementById("show-fav");
	if (showFav.style.display === "none") {
		document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
		showFav.style.cssText = "display:block; background:#f8f8f8; width: 400px; height:100vh; position:absolute;"; 
	} else {
		showFav.style.display = "none";
		document.body.style.backgroundColor = "#fff";
	}
}