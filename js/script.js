var formLabels= document.getElementsByTagName("label");
	
function validation(){	
	var valid=true;
	var firstName= document.regForm.firstName.value;
	
	if(firstName=="")
	{
		formLabels[0].innerHTML="First Name:*Reuired";
		formLabels[0].style.color="red";
		valid=false;
	}
	else if(!isNaN(firstName)){
		formLabels[0].innerHTML="First Name:*[Text Only]";
		formLabels[0].style.color="red";
		valid=false;
	}
	else
	{
		formLabels[0].innerHTML="First Name:";
		formLabels[0].style.color="black";
		valid=true;
	}
	
	var lastName= document.regForm.lastName.value;
	
	if(lastName=="")
	{
		formLabels[1].innerHTML="Last Name:*Reuired";
		formLabels[1].style.color="red";
		valid=false;
	}
	else if(!isNaN(lastName)){
		formLabels[1].innerHTML="Last Name:*[Text Only]";
		formLabels[1].style.color="red";
		valid=false;
	}
	else
	{
		formLabels[1].innerHTML="Last Name:";
		formLabels[1].style.color="black";
		valid=(valid)? true:false;
	}
	  
	  
	  var email= document.regForm.email.value;
	  var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(email=="")
	{
		formLabels[2].innerHTML="E-mail:*Reuired";
		formLabels[2].style.color="red";
		valid=false;
	}
else if(re.test(email)==false)
{
		formLabels[2].innerHTML="Incorrect E-mail";
		formLabels[2].style.color="red";
		valid=false;   
		   
	}
	else
	{
		formLabels[2].innerHTML="E-mail  :";
		formLabels[2].style.color="black";
		valid=(valid)? true:false;
	}

	var password  = document.regForm.password.value;
	
	if(password=="")
	{
		 
		formLabels[3].innerHTML  ="Password:*Required";
		formLabels[3].style.color  ="red";
		valid=false;
	}
	
	else if(password.length < 8){
		formLabels[3].innerHTML="Password:*Must be Greater than 8 index";
		formLabels[3].style.color="red";
		valid=false;
	}
	
	else
	{ 
		formLabels[3].innerHTML="Password:*";
		formLabels[3].style.color="black";
		valid=(valid)? true:false;
	}
	  
	  
	var age = document.regForm.age.value;
	
	if(age=="")
	{
	
		formLabels[4].innerHTML  ="Age:*Required"
		formLabels[4].style.color  ="red";
		valid=false;
	}
  
	else if(age <17 || age  >100)
	{
		formLabels[4].innerHTML="Age Must be Between 17 to 100";
		formLabels[4].style.color="red";
		valid=false;
	}
	
	else
	{ 
		formLabels[4].innerHTML="Age:*";
		formLabels[4].style.color="black";
		valid=(valid)? true:false;
	}
	 


	var  sems= document.regForm.sems.value;
	
	if(sems=="")
	{
		formLabels[6].innerHTML  ="Semester is:*Required"
		formLabels[6].style.color  ="red";
		valid=false;
	}
  
	else if( sems<1 || sems>10)
	{
		formLabels[6].innerHTML="Semester Must be from 1 to 10 ";
		formLabels[6].style.color="red";
		valid=false;
	}
	
	else
	{ 
		formLabels[6].innerHTML="Semester:*";
		formLabels[6].style.color="black";
		valid=(valid)? true:false;
	}




	var  mobile= document.regForm.mobile.value;
	
	if(mobile=="")
	{
		formLabels[8].innerHTML  ="Mobile Number:*Required"
		formLabels[8].style.color  ="red";
		valid=false;
	}
  
	else if(isNaN(mobile) || mobile.length !=11)
	{
		formLabels[8].innerHTML="Must be only 11 Number";
		formLabels[8].style.color="red";
		valid=false;
	}
	
	else
	{ 
		formLabels[8].innerHTML="Mobile Number:*";
		formLabels[8].style.color="black";
		valid=(valid)? true:false;
	}
	
	

	
	return valid; 
	
}
function clear2()
{
	var myLabels=new Array();
	myLabels[0]="First Name:*";
	myLabels[1]="Last Name:*";
	myLabels[2]="E-mail:*";
	myLabels[3]="Password:*";
	myLabels[4]="Age:*";
	myLabels[5]="Facebook Link:*";
	myLabels[6]="Semester:*";
	myLabels[8]="Mobile Number:*";
	
	for(var i=0; i<myLabels.length;i++)
	{
		formLabels[i].innerHTML= myLabels[i];
		formLabels[i].style.color="black";
		
		
	}
	
	
	
}