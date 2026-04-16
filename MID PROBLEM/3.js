function collect(){
const age = document.getElementById("age").value ;
const msg = document.getElementById("msg");
if(age < 40 )
{
msg.innerHTML = "To be a part of the community, you need to at least 40";
}
else if (age>=40 && age<=50 )
{
msg.innerHTML = "You are the youngsters of this community";
}
else if (age >50)
{
msg.innerHTML = "Top level members of the group";
msg.style.color = "red";
return false;
}
}