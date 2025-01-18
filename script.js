const contacts = {
    krushna: "8767055734",
    pratik: "9845342312",
    raj: "5645342312",
    rudransh: "7845346782",
    rudraksh: "9876543210",
    Avishkar: "8765432109",
    sai: "7654321098",
    veer: "8943210987",
    siddharth: "9932109876",
    arjun: "9521098765"
};

function search(){
    const searchinput=document.getElementById("search");
    const query=searchinput.value.toLowerCase();
    const mobileno = contacts[query];
    const result=document.getElementById("result");

    if(mobileno){
        result.innerText= `Name is ${query.toUpperCase([0])} and Moblie is ${mobile}`;
        document.getElementById("search").value = "";
    }
    else{
        result.innerText='contact was not found';
        
    }
}

