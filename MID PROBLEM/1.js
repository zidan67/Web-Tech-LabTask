function collect_data()
{
const firstname = document.getElementById("fname").value ;
const lastname = document.getElementById("lname").value;
if (firstname == "" || lastname =="")
{
alert("Both need to written")
return false;
}
if (firstname.length<2 || lastname.length<2 ){
alert("Length is less than 2 ");
return false;
}
return true;
}