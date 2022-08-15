function submission(){
    if(nameValidation() && emailValidation() && subjectValidation() && messageValidation() ){
        document.getElementById("submissionerror").className = "text-success";
        document.getElementById("submissionerror").innerHTML = "Submitted Successfully";
        setTimeout(redirecting,1000);
        
    }
    else{
        document.getElementById("submissionerror").innerHTML = "Please Fill all the fields Before Submission";
    }
}
function redirecting()
{
    location.href = "https://www.google.com/";
}


function nameValidation(){
    testCase =/^[A-Za-z]+$/;
    nid = document.getElementById("name");
    nval = nid.value;
    if(testCase.test(nval)){
        nid.className = "form-control valid";
        document.getElementById("nm").innerHTML="Correct";
        document.getElementById("nm").className="text-success mt-2";
        return true;
    }
    else{
        nid.className = "form-control invalid";
        document.getElementById("nm").className="text-danger mt-2";
        document.getElementById("nm").innerHTML="Incorrect";
    }
}

function emailValidation(){
    testCase =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    eid = document.getElementById("email");
    evalue = eid.value;
    if(testCase.test(evalue)){
        eid.className = "form-control valid";
        document.getElementById("nm1").innerHTML="Correct";
        document.getElementById("nm1").className="text-success mt-2";
        return true;
    }
    else{
        eid.className = "form-control invalid";
        document.getElementById("nm1").className="text-danger mt-2";
        document.getElementById("nm1").innerHTML="Incorrect Email";
    }
}

function subjectValidation(){
    sval = document.getElementById("subject").value;
    strim = sval.replace(/\s+/g,' ').trim();
    slength = strim.length;
    if(slength==0){
        document.getElementById("subject").style.border = "1px outset red";
        document.getElementById("subjecterror").innerHTML = "Subject Cannot be empty";
    }
    else if(slength>40){
        document.getElementById("subjecterror").innerHTML = "Subject Cannot be more then 40 words";
    }
    else{
        document.getElementById("subject").style.border = "1px solid rgb(141, 138, 138)";
        document.getElementById("subjecterror").innerHTML = "";
        return true;
    }
}

function messageValidation(){
    mval = document.getElementById("message").value;
    mtrim = mval.replace(/\s+/g,' ').trim();
    mlength = mtrim.length;
    if(mlength==0){
        document.getElementById("message").style.border = "1px outset red";
        document.getElementById("messageerror").innerHTML = "Message Cannot be empty";
    }
    else if(mlength>500){
        document.getElementById("messageerror").innerHTML = "Message Cannot be more then 500 words";
    }
    else{
        document.getElementById("message").style.border = "1px solid rgb(141, 138, 138)";
        document.getElementById("messageerror").innerHTML = "";
        return true;
    }
}