//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click',function() {
	let colorIndex = document.getElementById("colorSelect");
	let selectIndex = colorIndex.selectedIndex;
	if(selectIndex !==-1){
		colorIndex.remove(selectIndex);
	}
})