async function lookup(event){
    event.preventDefault();
    let userID = document.getElementById("UserID");
    document.getElementById('LookupResults').style.display = "block";
    let rUID = document.getElementById('rUID');
    let rUName = document.getElementById('rUName');
    let rDName = document.getElementById('rDName');
    let rTranscript = document.getElementById('rTranscript');
    let rServer = document.getElementById('rServer');
    let rDate = document.getElementById('rDate');

    var data = await fetch(`../data/${userID.value}`);
    if(!data.ok){
        rUID.textContent = "Not found";
        rDName.textContent = "Not found";
        rUName.textContent = "Not found";
        rServer.textContent = "Not found";
        rDate.textContent = "Not found";
        rTranscript.textContent = "Not found";
    }else{
        data = await data.json()

        rUID.textContent = data.UserID;
        rDName.textContent = data.Displayname;
        rUName.textContent = data.Username;
        rServer.textContent = `${data.Server.Name} (${data.Server.SID})`;
        rDate.textContent = new Date(data.Date).toLocaleDateString();
        rTranscript.textContent = data.Transcript;
    }
}

async function toggle(id){
    let element = document.getElementById(id);
    if(element.style.display === "none"){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }

}