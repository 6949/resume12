/*function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState=="4" && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send(null);
}
json("main.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	carr(d.carrier);
	basics(d.basicdetalis);
	edu(d.education);
	techskills(d.skills);
	ache(d.achievements);
	desc(d.descripition);

})*/
//fecth API
fetch("main.json")
.then(function(response){
	return response.json();
})
.then(function(d){
console.log(d);
	carr(d.carrier);
	basics(d.basicdetalis);
	edu(d.education);
	techskills(d.skills);
	ache(d.achievements);
	desc(d.descripition);

})

 var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(b){
var i=document.createElement("img");
i.src=b.image;
i.alt="profile photo"
l.appendChild(i);
var nam=document.createElement("h3");
nam.textContent=b.name;
l.appendChild(nam);
var nam=document.createElement("h3");
nam.textContent=b.phone;
l.appendChild(nam);
var nam=document.createElement("h3");
nam.textContent=b.email;
l.appendChild(nam);
var nam=document.createElement("h3");
nam.textContent=b.address;
l.appendChild(nam);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(e){
	var e1=document.createElement("div");
	e1.classList.add("educa");
	r.appendChild(e1);
	var head=document.createElement("h4");
	head.textContent="education details";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for(var i = 0; i < e.length; i++){
		var h=document.createElement("h3");
		h.textContent=e[i].course;
		e1.appendChild(h);
		var m = document.createElement("h3");
		e1.appendChild(m);
		var list=document.createElement("li");
		list.textContent=e[i].college;
		m.appendChild(list);
		var list1=document.createElement("li");
		list1.textContent=e[i].percentage;
		list.appendChild(list1);

	}

 }
function techskills(s){
	var d=document.createElement("div");
	d.textContent="Skill Set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);

}
function carr(car){
	var c1=document.createElement("div");
	r.appendChild(c1)
	var h1=document.createElement("h1");
	h1.textContent="carrier objective",
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=car.ca;
	c1.appendChild(para);
}
function  ache(ach) {
	var d=document.createElement("div");
	d.setAttribute("id","achievements");
	r.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="achievements";
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));
	for(i in ach){
		var u=document.createElement("li");
		u.textContent=ach[i];
		d.appendChild(u);
	}

	
}
function desc(D){
	var c1=document.createElement("div");
	r.appendChild(c1)
	var h1=document.createElement("h1");
	h1.textContent="descripition";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("h3");
	para.textContent=D.des;
	c1.appendChild(para);                                                                                                                                                                                 
}







