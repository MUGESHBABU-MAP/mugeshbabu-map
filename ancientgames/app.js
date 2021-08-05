var start = 0;
var root = location.protocol + '//' + location.host+ location.pathname;
if(location.pathname==='/'){
    var root = location.protocol + '//' + location.host;
}

function startGame(){
    var button_color = document.getElementById("button_start_stop");
    if(start == 1){
        location.reload();
    }
    else{
        button_color.style.backgroundColor='Red';
        start+=1;
        gamerun();
    }

}

function gamerun(){
    var statusmsg = document.getElementById("status");
    statusmsg.innerHTML = "Game Started";
    var outsidereds = document.getElementById("outsidered");
    var outsidegreens = document.getElementById("outsidegreen");

    functionisrunningred = true;
    functionisrunninggreen = false;
    movered = false;
    movegreen = false;
    winning();
}

function ProcessUserInput(element){
    var outsidereds = document.getElementById("outsidered");
    var outsidegreens = document.getElementById("outsidegreen");
    winning();
    if(functionisrunningred){
        
        if(outsidereds.innerHTML>0&&element.src == root+"/images/bg003.png"){
            outsidereds.innerHTML-=1;
            img_change = document.getElementById(element.id);
            img_change.src = "images/red03.png";
            functionisrunningred = false;
            functionisrunninggreen = true;
            if(movered){
                

                document.getElementById(0).hidden = false;
                document.getElementById(1).hidden = false;
                document.getElementById(2).hidden = false;
                document.getElementById(3).hidden = false;
                document.getElementById(4).hidden = false;
                document.getElementById(5).hidden = false;
                document.getElementById(6).hidden = false;
                document.getElementById(7).hidden = false;
                document.getElementById(8).hidden = false;
                
                /*
                //alert(movedpiece);
                if(movedpiece == 0){
                    if(img_change.id == 0){
                        document.getElementById(0).hidden = true;
                    outsidereds.innerHTML+=1;
                    functionisrunningred = true;
                    functionisrunninggreen = false;
                    }else if(img_change.id == 1){
                        document.getElementById(0).hidden = false;
                    outsidereds.innerHTML-=1;
                    functionisrunningred = false;
                    functionisrunninggreen = true;
                    }
                }*/
                movered = false;
                
            }
            winning();
        }
        else if(outsidereds.innerHTML<1&&element.src == root+"/images/red03.png"&&functionisrunningred){
            img_change = document.getElementById(element.id);
            img_change.src = "images/bg003.png";
            outsidereds.innerHTML=1;
            functionisrunningred = true;
            functionisrunninggreen = false;
            movered = true;
            movedpiece = img_change.id;
            hide();
            winning();
        }
        else{
            alert("Red's turn");
        }
        return;
    }
    if(functionisrunninggreen){
        
        if(outsidegreens.innerHTML>0&&element.src == root+"/images/bg003.png"){
            outsidegreens.innerHTML-=1;
            img_change = document.getElementById(element.id);
            img_change.src = "images/green03.png";
            functionisrunningred = true;
            functionisrunninggreen = false;
            if(movegreen){
                document.getElementById(0).hidden = false;
                document.getElementById(1).hidden = false;
                document.getElementById(2).hidden = false;
                document.getElementById(3).hidden = false;
                document.getElementById(4).hidden = false;
                document.getElementById(5).hidden = false;
                document.getElementById(6).hidden = false;
                document.getElementById(7).hidden = false;
                document.getElementById(8).hidden = false;
                movegreen = false;
                
            }
            winning();
        }
        else if(outsidegreens.innerHTML<1&&element.src == root+"/images/green03.png"&&functionisrunninggreen){
            img_change = document.getElementById(element.id);
            img_change.src = "images/bg003.png";
            outsidegreens.innerHTML=1;
            functionisrunningred = false;
            functionisrunninggreen = true;
            movegreen = true;
            movedpiece = img_change.id;
            hide();
            winning();
        }
        else{
            alert("Green's turn");
        }
        return;
    }
}

function hide(){
    if(movedpiece == 0){
        document.getElementById(0).hidden = true;
        document.getElementById(2).hidden = true;
        document.getElementById(4).hidden = true;
        document.getElementById(5).hidden = true;
        document.getElementById(6).hidden = true;
        document.getElementById(7).hidden = true;
        document.getElementById(8).hidden = true;
    }
    if(movedpiece == 1){
        document.getElementById(1).hidden = true;
        document.getElementById(3).hidden = true;
        document.getElementById(5).hidden = true;
        document.getElementById(6).hidden = true;
        document.getElementById(7).hidden = true;
        document.getElementById(8).hidden = true;
    }
    if(movedpiece == 2){
        document.getElementById(0).hidden = true;
        document.getElementById(2).hidden = true;
        document.getElementById(3).hidden = true;
        document.getElementById(4).hidden = true;
        document.getElementById(6).hidden = true;
        document.getElementById(7).hidden = true;
        document.getElementById(8).hidden = true;
    }
    if(movedpiece == 3){
        document.getElementById(1).hidden = true;
        document.getElementById(2).hidden = true;
        document.getElementById(3).hidden = true;
        document.getElementById(5).hidden = true;
        document.getElementById(7).hidden = true;
        document.getElementById(8).hidden = true;
    }
    if(movedpiece == 4){
        document.getElementById(0).hidden = true;
        document.getElementById(2).hidden = true;
        document.getElementById(4).hidden = true;
        document.getElementById(6).hidden = true;
        document.getElementById(8).hidden = true;
    }
    if(movedpiece == 5){
        document.getElementById(0).hidden = true;
        document.getElementById(1).hidden = true;
        document.getElementById(3).hidden = true;
        document.getElementById(5).hidden = true;
        document.getElementById(6).hidden = true;
        document.getElementById(7).hidden = true;
    }
    if(movedpiece == 6){
        document.getElementById(0).hidden = true;
        document.getElementById(1).hidden = true;
        document.getElementById(2).hidden = true;
        document.getElementById(4).hidden = true;
        document.getElementById(5).hidden = true;
        document.getElementById(6).hidden = true;
        document.getElementById(8).hidden = true;
    }
    if(movedpiece == 7){
        document.getElementById(0).hidden = true;
        document.getElementById(1).hidden = true;
        document.getElementById(2).hidden = true;
        document.getElementById(3).hidden = true;
        document.getElementById(5).hidden = true;
        document.getElementById(7).hidden = true;
    }
    if(movedpiece == 8){
        document.getElementById(0).hidden = true;
        document.getElementById(1).hidden = true;
        document.getElementById(2).hidden = true;
        document.getElementById(3).hidden = true;
        document.getElementById(4).hidden = true;
        document.getElementById(6).hidden = true;
        document.getElementById(8).hidden = true;
    }
}

function winning(){
    arrayid = [];
    for(var i = 0; i<9;i++){
        checkimg = document.getElementById(i);
        checkimgid = checkimg.id;
        
        arrayid.push(checkimgid);
    }
    if(document.getElementById(arrayid[0]).src==document.getElementById(arrayid[1]).src&&document.getElementById(arrayid[0]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[1]).src==document.getElementById(arrayid[2]).src&&document.getElementById(arrayid[0]).src==root+"/images/red03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Red won :)")
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 1 Won :)";
        statusmsg.style.color="red";
        finish();
    }
    else if(document.getElementById(arrayid[3]).src==document.getElementById(arrayid[4]).src&&document.getElementById(arrayid[3]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[4]).src==document.getElementById(arrayid[5]).src&&document.getElementById(arrayid[3]).src==root+"/images/red03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Red won :)")
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 1 Won :)";
        statusmsg.style.color="red";
        finish();
    }
    else if(document.getElementById(arrayid[6]).src==document.getElementById(arrayid[7]).src&&document.getElementById(arrayid[6]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[7]).src==document.getElementById(arrayid[8]).src&&document.getElementById(arrayid[6]).src==root+"/images/red03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Red won :)")
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 1 Won :)";
        statusmsg.style.color="red";
        finish();
    }
    else if(document.getElementById(arrayid[0]).src==document.getElementById(arrayid[3]).src&&document.getElementById(arrayid[0]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[3]).src==document.getElementById(arrayid[6]).src&&document.getElementById(arrayid[0]).src==root+"/images/red03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Red won :)")
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 1 Won :)";
        statusmsg.style.color="red";
        finish();
    }
    else if(document.getElementById(arrayid[1]).src==document.getElementById(arrayid[4]).src&&document.getElementById(arrayid[1]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[4]).src==document.getElementById(arrayid[7]).src&&document.getElementById(arrayid[1]).src==root+"/images/red03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Red won :)")
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 1 Won :)";
        statusmsg.style.color="red";
        finish();
    }
    else if(document.getElementById(arrayid[2]).src==document.getElementById(arrayid[5]).src&&document.getElementById(arrayid[2]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[5]).src==document.getElementById(arrayid[8]).src&&document.getElementById(arrayid[2]).src==root+"/images/red03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Red won :)")
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 1 Won :)";
        statusmsg.style.color="red";
        finish();
    }
    else if(document.getElementById(arrayid[0]).src==document.getElementById(arrayid[1]).src&&document.getElementById(arrayid[0]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[1]).src==document.getElementById(arrayid[2]).src&&document.getElementById(arrayid[0]).src==root+"/images/green03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Green won :)");
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 2 Won :)";
        statusmsg.style.color="greenyellow";
        finish();
    }
    else if(document.getElementById(arrayid[3]).src==document.getElementById(arrayid[4]).src&&document.getElementById(arrayid[3]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[4]).src==document.getElementById(arrayid[5]).src&&document.getElementById(arrayid[3]).src==root+"/images/green03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Green won :)");
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 2 Won :)";
        statusmsg.style.color="greenyellow";
        finish();
    }
    else if(document.getElementById(arrayid[6]).src==document.getElementById(arrayid[7]).src&&document.getElementById(arrayid[6]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[7]).src==document.getElementById(arrayid[8]).src&&document.getElementById(arrayid[6]).src==root+"/images/green03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Green won :)");
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 2 Won :)";
        statusmsg.style.color="greenyellow";
        finish();
    }
    else if(document.getElementById(arrayid[0]).src==document.getElementById(arrayid[3]).src&&document.getElementById(arrayid[0]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[3]).src==document.getElementById(arrayid[6]).src&&document.getElementById(arrayid[0]).src==root+"/images/green03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Green won :)");
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 2 Won :)";
        statusmsg.style.color="greenyellow";
        finish();
    }
    else if(document.getElementById(arrayid[1]).src==document.getElementById(arrayid[4]).src&&document.getElementById(arrayid[1]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[4]).src==document.getElementById(arrayid[7]).src&&document.getElementById(arrayid[1]).src==root+"/images/green03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Green won :)");
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 2 Won :)";
        statusmsg.style.color="greenyellow";
        finish();
    }
    else if(document.getElementById(arrayid[2]).src==document.getElementById(arrayid[5]).src&&document.getElementById(arrayid[2]).src!==root+"/images/bg003.png"&&document.getElementById(arrayid[5]).src==document.getElementById(arrayid[8]).src&&document.getElementById(arrayid[2]).src==root+"/images/green03.png"){
        //alert(document.getElementById(arrayid[0]).src);
        //alert("Green won :)");
        var statusmsg = document.getElementById("status");
        statusmsg.innerHTML = "Player 2 Won :)";
        statusmsg.style.color="greenyellow";
        finish();
    }
    //done:)
}

function finish(){    
    document.getElementById(0).hidden = true;
    document.getElementById(1).hidden = true;
    document.getElementById(2).hidden = true;
    document.getElementById(3).hidden = true;
    document.getElementById(4).hidden = true;
    document.getElementById(5).hidden = true;
    document.getElementById(6).hidden = true;
    document.getElementById(7).hidden = true;
    document.getElementById(8).hidden = true;
    var button_color = document.getElementById("button_start_stop");
    button_color.style.backgroundColor='Yellow';
}