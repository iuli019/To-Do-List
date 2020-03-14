let ulRef = document.querySelector("ul");
let inp = document.querySelector("input");
let buttonRef = document.querySelector("button");
inp.focus();
buttonRef.onclick = function(){
	if(inp.value == '')
		return 0;
	let a = inp.value;
	inp.value = '';
	let li = document.createElement('li');
	let span = document.createElement('span');
	let buton = document.createElement('button');
	li.appendChild(span);
	li.appendChild(buton);
	span.textContent = a;
	buton.textContent = 'X';
	ulRef.appendChild(li);
	buton.onclick = function(){
		li.removeChild(span);
		li.removeChild(buton);
		ulRef.removeChild(li);
		for(let i = 0; i <= Number(localStorage.count); i++){
			if(localStorage.getItem(String(i))== span.textContent){
				localStorage.removeItem(String(i));
			}
		}
	}
	inp.focus();
	if(localStorage.count){
		localStorage.count = Number(localStorage.count) + 1;
	}else{
		localStorage.count = 1;
	}
	localStorage.setItem(localStorage.count,a);
	//console.log(localStorage.count);
}
if(localStorage.count){
	for(let i = 0; i <= Number(localStorage.count); i++){
		if(localStorage.getItem(String(i))){
			inp.value = localStorage.getItem(String(i));
			let a = inp.value;
			inp.value = '';
			let li = document.createElement('li');
			let span = document.createElement('span');
			let buton = document.createElement('button');
			li.appendChild(span);
			li.appendChild(buton);
			span.textContent = a;
			buton.textContent = 'X';
			ulRef.appendChild(li);
			buton.onclick = function(){
				li.removeChild(span);
				li.removeChild(buton);
				ulRef.removeChild(li);
				for(let i = 0; i <= Number(localStorage.count); i++){
					if(localStorage.getItem(String(i)) == span.textContent){
						localStorage.removeItem(String(i));
					}
				}
			}
		}
	}
}
inp.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   buttonRef.click();
  }
});