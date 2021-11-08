/*document.addEventListener("DOMContentLoaded", function(e){
    var table1 = document.getElementById('json');
    for(var i=1; i <5; i++){
      var hi = table1.rows[i].cells[1].innerHTML;
      var hi1 = table1.rows.item(i).innerHTML;
      for(var j=0; j<hi1.length;j++){
          alert("hi");
      }
    }
    });



var table02 = document.getElementById('hi1');
if(document.getElementById("hi1") != null){
    var idPost=document.getElementById("hi1").innerHTML;
    console.log(table02.innerHTML);
}*/
var x = document.getElementById("nav");
function myFunction1(){
    if(true){//alert("Hello");
    var l1time = document.getElementById("hi2").innerHTML;
    //alert(l1time);
    var hi1 = document.getElementById("hi1").innerHTML;
    var hi2 = document.getElementById("hi2").innerHTML;
    var hi3 = document.getElementById("hi3").innerHTML;
    var hi4 = document.getElementById("hi4").innerHTML;
    var hi5 = document.getElementById("hi5").innerHTML;
    var hi6 = document.getElementById("hi6").innerHTML;
    var hi27 = document.getElementById("hi27").innerHTML;
    var hi28 = document.getElementById("hi28").innerHTML;
    var hi29 = document.getElementById("hi29").innerHTML;
    var hi30 = document.getElementById("hi30").innerHTML;
    var hi31 = document.getElementById("hi31").innerHTML;
    var hi32 = document.getElementById("hi32").innerHTML;
    var hi53 = document.getElementById("hi53").innerHTML;
    var hi54 = document.getElementById("hi54").innerHTML;
    var hi55 = document.getElementById("hi55").innerHTML;
    var hi56 = document.getElementById("hi56").innerHTML;
    var hi57 = document.getElementById("hi57").innerHTML;
    var hi58 = document.getElementById("hi58").innerHTML;
    var hi79 = document.getElementById("hi79").innerHTML;
    var hi80 = document.getElementById("hi80").innerHTML;
    var hi81 = document.getElementById("hi81").innerHTML;
    var hi82 = document.getElementById("hi82").innerHTML;
    var hi83 = document.getElementById("hi83").innerHTML;
    var hi84 = document.getElementById("hi84").innerHTML;
    var l2time = document.getElementById("hi28").innerHTML;
    //alert(l2time);
    var l3time = document.getElementById("hi54").innerHTML;
    //alert(l3time);
    var l4time = document.getElementById("hi80").innerHTML;
    //alert(l4time); 
    var systime = new Date(new Date().getTime() - (5*60-30)*60000);
    var isotime = systime.toISOString();
    //alert(systime.toISOString());
    var s0 = isotime.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    var s1 = l1time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    var s2 = l2time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    var s3 = l3time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    var s4 = l4time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    var split = s0.split('T');
    var split1 = s1.split('T');
    var split2 = s2.split('T');
    var split3 = s3.split('T');
    var split4 = s4.split('T');
    var hrmin = split[1].split(":");
    var hr = hrmin[0], min = hrmin[1], secon = hrmin[2];
    if(split[0]!==split1[0]&&split[0]!==split2[0]&&split[0]!==split3[0]&&split[0]!==split4[0]){
        //alert("hi");
        //alert(split[0]+split1[0]);
        //alert(split1);
        alert("Everything is Fine now");
    }
    else if(split[0]==split1[0]){
        //alert("last security breach at "+s1+" Check system");
        var hrmin1 = split1[1].split(":");
        var hr1 = hrmin1[0], min1 = hrmin1[1], secon1 = hrmin1[2];
        if(hr==hr1){
            if(min==min1){
                alert("immediate action required at Location : "+hi4+" Send drone immediately");
            }
            alert("Human movement found on "+hr1+"IST action needed at "+hi4+" ");
        }
    }
    else if(split[0]==split2[0]){
        //alert("last security breach at "+s2+" Check system");
        var hrmin2 = split2[1].split(":");
        var hr2 = hrmin2[0], min2 = hrmin2[1], secon2 = hrmin1[2];
        if(hr==hr2){
            if(min==min2){
                alert("immediate action required at Location : "+hi30+" Send drone immediately");
            }
            alert("Human movement found on "+hr2+"IST action needed at "+hi30+" ");
        }
    }
    else if(split[0]==split3[0]){
        //alert("last security breach at "+s3+" Check system");
        var hrmin3 = split3[1].split(":");
        var hr3 = hrmin3[0], min3 = hrmin3[1], secon3 = hrmin3[2];
        if(hr==hr3){
            if(min==min3){
                alert("immediate action required at Location : "+hi56+" Send drone immediately");
            }
            alert("Human movement found on "+hr3+"IST action needed at "+hi56+" ");
        }
    }
    else if(split[0]==split4[0]){
        //alert("last security breach at "+s4+" Check system");
        var hrmin4 = split4[1].split(":");
        var hr4 = hrmin4[0], min4 = hrmin4[1], secon1 = hrmin4[2];
        if(hr==hr4){
            if(min==min4){
                alert("immediate action required at Location : "+hi82+" Send drone immediately");
            }
            alert("Human movement found on "+hr4+"IST action needed at "+hi82+" ");
        }
    }
    else if(split[0]==""||split[0]=="null"||split==" "||s0==""){
        alert("Couldn't get system time; Stay alert");
    }
    else{
        alert("Unknown alert !,Couldn't fetch values now: Please check the entire system")
    }
}
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){ //alert("Hello");
        var l1time = document.getElementById("hi2").innerHTML;
        //alert(l1time);
        var hi1 = document.getElementById("hi1").innerHTML;
        var hi2 = document.getElementById("hi2").innerHTML;
        var hi3 = document.getElementById("hi3").innerHTML;
        var hi4 = document.getElementById("hi4").innerHTML;
        var hi5 = document.getElementById("hi5").innerHTML;
        var hi6 = document.getElementById("hi6").innerHTML;
        var hi27 = document.getElementById("hi27").innerHTML;
        var hi28 = document.getElementById("hi28").innerHTML;
        var hi29 = document.getElementById("hi29").innerHTML;
        var hi30 = document.getElementById("hi30").innerHTML;
        var hi31 = document.getElementById("hi31").innerHTML;
        var hi32 = document.getElementById("hi32").innerHTML;
        var hi53 = document.getElementById("hi53").innerHTML;
        var hi54 = document.getElementById("hi54").innerHTML;
        var hi55 = document.getElementById("hi55").innerHTML;
        var hi56 = document.getElementById("hi56").innerHTML;
        var hi57 = document.getElementById("hi57").innerHTML;
        var hi58 = document.getElementById("hi58").innerHTML;
        var hi79 = document.getElementById("hi79").innerHTML;
        var hi80 = document.getElementById("hi80").innerHTML;
        var hi81 = document.getElementById("hi81").innerHTML;
        var hi82 = document.getElementById("hi82").innerHTML;
        var hi83 = document.getElementById("hi83").innerHTML;
        var hi84 = document.getElementById("hi84").innerHTML;
        var l2time = document.getElementById("hi28").innerHTML;
        //alert(l2time);
        var l3time = document.getElementById("hi54").innerHTML;
        //alert(l3time);
        var l4time = document.getElementById("hi80").innerHTML;
        //alert(l4time); 
        var systime = new Date(new Date().getTime() - (5*60-30)*60000);
        var isotime = systime.toISOString();
        //alert(systime.toISOString());
        var s0 = isotime.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        var s1 = l1time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        var s2 = l2time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        var s3 = l3time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        var s4 = l4time.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        var split = s0.split('T');
        var split1 = s1.split('T');
        var split2 = s2.split('T');
        var split3 = s3.split('T');
        var split4 = s4.split('T');
        var hrmin = split[1].split(":");
        var hr = hrmin[0], min = hrmin[1], secon = hrmin[2];
        if(split[0]!==split1[0]&&split[0]!==split2[0]&&split[0]!==split3[0]&&split[0]!==split4[0]){
            //alert("hi");
            //alert(split[0]+split1[0]);
            //alert(split1);
            alert("Everything is Fine now");
        }
        else if(split[0]==split1[0]){
            //alert("last security breach at "+s1+" Check system");
            var hrmin1 = split1[1].split(":");
            var hr1 = hrmin1[0], min1 = hrmin1[1], secon1 = hrmin1[2];
            if(hr==hr1){
                if(min==min1){
                    alert("immediate action required at Location : "+hi4+" Send drone immediately");
                }
                alert("Human movement found on "+hr1+"IST action needed at "+hi4+" ");
            }
        }
        else if(split[0]==split2[0]){
            //alert("last security breach at "+s2+" Check system");
            var hrmin2 = split2[1].split(":");
            var hr2 = hrmin2[0], min2 = hrmin2[1], secon2 = hrmin1[2];
            if(hr==hr2){
                if(min==min2){
                    alert("immediate action required at Location : "+hi30+" Send drone immediately");
                }
                alert("Human movement found on "+hr2+"IST action needed at "+hi30+" ");
            }
        }
        else if(split[0]==split3[0]){
            //alert("last security breach at "+s3+" Check system");
            var hrmin3 = split3[1].split(":");
            var hr3 = hrmin3[0], min3 = hrmin3[1], secon3 = hrmin3[2];
            if(hr==hr3){
                if(min==min3){
                    alert("immediate action required at Location : "+hi56+" Send drone immediately");
                }
                alert("Human movement found on "+hr3+"IST action needed at "+hi56+" ");
            }
        }
        else if(split[0]==split4[0]){
            //alert("last security breach at "+s4+" Check system");
            var hrmin4 = split4[1].split(":");
            var hr4 = hrmin4[0], min4 = hrmin4[1], secon1 = hrmin4[2];
            if(hr==hr4){
                if(min==min4){
                    alert("immediate action required at Location : "+hi82+" Send drone immediately");
                }
                alert("Human movement found on "+hr4+"IST action needed at "+hi82+" ");
            }
        }
        else if(split[0]==""||split[0]=="null"||split==" "||s0==""){
            alert("Couldn't get system time; Stay alert");
        }
        else{
            alert("Unknown alert !,Couldn't fetch values now: Please check the entire system");
        }
}, 2000);
});