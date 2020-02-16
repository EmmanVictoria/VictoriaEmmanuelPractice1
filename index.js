function alertUser(){
    if (document.getElementById("ET").value=="")
    {
        alert("Missing Event Title. Please write again.");
    }
    else if (document.getElementById("ED1").value=="")
    {
        alert("Missing the first Event Date. Please write again.");
    }
    else if (document.getElementById("ED2").value=="")
    {
        alert("Missing the second Event Date. Please write again.");
    }
    else if (document.getElementById("PD").value=="")
    {
        alert("Missing Posting Date. Please write again.");
    }
}