    let data=[];
	 let obj={};

let enterelement=document.getElementById("enter");
let signInElm=document.getElementById("sign-in");
let newuser=document.getElementById("login");
let newInput=document.getElementById("new-inputid");

	let home=document.getElementById("mainpage");
	
	
     signInElm.addEventListener("click",function(){
		 
		 let emailInput=document.getElementById("email");
         let passwordsInput=document.getElementById("passwords");

		let email= emailInput.value;
		let passwords= passwordsInput.value;
	

		 if(data.length>0){
			 for(let i in data){
			 if(email===data[0].usremail&&passwords===data[0].usrpasswords){
				 home.style.display="block";
				 newuser.style.display="none";
			   }	 
		    }
		 }
		 else{
			 alert("please sign up account");
			 emailInput.value="";
			 passwords="";
			 enterelement.addEventListener("click",function(){
			 newuser.style.display="none";
			 newInput.style.display="block";
		 });
		 }


}); 

     let logoutelement=document.getElementById("logout");
	 logoutelement.addEventListener("click",function(){
		     home.style.display="none";
			 newuser.style.display="block";
		 })


/*------------------------------------------  js main page --------------------------------------------------------*/



let userDataElm=document.getElementById("userdata");
let infoData=
[
  {
	id:"fed01",
	name:"Sithu",
	progaram:"FrontEnd Devaloper",
	pic:"img/pi8.jpg",
	follow:"656468 followers",
	butt:"Follow"
  },
  {
	id:"fed02",
	name:"Suriya",
	progaram:"FrontEnd Devaloper",
	pic:"img/pi10.jpg",
	follow:"46844686 followers",
	butt:"Follow"
  },
  {
	id:"fed03",
	name:"Arjun ",
	progaram:"FrontEnd Devaloper",
	pic:"img/pi.jpg",
	follow:"6546444 followers",
	butt:"Follow"
  },
   {
	id:"fed04",
	name:"Muginraw",
	progaram:"FrontEnd Devaloper",
	pic:"img/pi21.jpg",
	follow:"6866554 followers",
	butt:"Follow"
  },
  {
	id:"fed05",
	name:"Jaya suriya",
	progaram:"FrontEnd Devaloper",
	pic:"img/pi.jpg",
	follow:"98798787 followers",
	butt:"Follow"
  },
  {
	id:"fed06",
	name:"Raju ",
	progaram:"FrontEnd Devaloper",
	pic:"img/pi8.jpg",
	follow:"9878546 followers",
	butt:"Follow"
  }
 ]
 infoData.forEach(function(obj,i){
	let myItem=document.createElement("div");
	let profileboxItem=document.createElement("div");
	let picTag=document.createElement("img");
	let infoItem=document.createElement("div");
	let titleTag=document.createElement("h1");
	let proTag=document.createElement("h5");
	let classTag=document.createElement("p");
	let butTag=document.createElement("button");
	
	myItem.setAttribute("class","mainid");
	myItem.setAttribute("id",obj.id);
	profileboxItem.setAttribute("class","profile");
    infoItem.setAttribute("class","content");

	
	picTag.src=obj.pic;
	titleTag.innerText=obj.name;
	proTag.innerText=obj.progaram; 
	classTag.innerText=obj.follow;
	butTag.innerText=obj.butt;
	
	
	profileboxItem.append(picTag);
	userDataElm.appendChild(profileboxItem);
	
	infoItem.append(titleTag,proTag,classTag);
	userDataElm.appendChild(infoItem);
	
	myItem.append(profileboxItem,infoItem,butTag);
	userDataElm.appendChild(myItem,profileboxItem,infoItem,butTag);
	
    });
	
	
/*------------------------------------------- SIGN UP PAGE ----------------------------------------*/	
	


let siginelement=document.getElementById("update");
let nameInput=document.getElementById("name");
let phoneInput=document.getElementById("phone");
let passwordsInput=document.getElementById("signuppasswords");
let emailInput=document.getElementById("signupemail");

   siginelement.addEventListener("click",function(){
let name = nameInput.value;
let phone = phoneInput.value;
let usrpasswords = passwordsInput.value;
let usremail = emailInput.value;

    
	   obj["name"]=name;
	   obj["phone"]=phone;
	   obj["usrpasswords"]=usrpasswords;
	   obj["usremail"]=usremail;
	   
	
   data.push(obj);

   	let inset=document.getElementById("new-inputid")
	inset.style.display="none";
   	let outset=document.getElementById("login")
	outset.style.display="block";
   
        
});
    
	
	
	
	