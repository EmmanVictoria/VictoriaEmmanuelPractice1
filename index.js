function validate(){
    var type= document.getElementById('event').value;
    var title= document.getElementById('Title').value;
    var date=document.getElementById('date1').value;
    var to=document.getElementById('2').value;
    var post=document.getElementById('deliver').value;
    

    if (type==""){
        alert("Please Enter Event Type")
        return false;
    }else if (title==""){
        alert("Please Enter Title")
        return false;
    }else if (date==""){
        alert("Please Enter Event Date")
        return false;
    }else if (to==""){
        alert("Please Enter Event Date")
        return false;
    }else if (post==""){
        alert("Please Enter Posting Date")
        return false;
    }else{
       alert("You have submitted your entry to the server")
        return true;
    }
}