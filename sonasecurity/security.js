function myFunctiondisp01() {
    var xpage = document.getElementById("securitypage");
    var xbutton = document.getElementById("myBtn02");
    if (xpage.style.display === "none") {
      xpage.style.display = "block";
      xbutton.innerHTML = "Hide page";
    } else {
      xpage.style.display = "none";
      xbutton.innerHTML = "Load page";
    }
  }


var id = '17hqp3raEZjjF10x66R_gVQp_Rf9L8Z7BP382ERl862g';
var gid = '0';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
    .then(response => response.text())
    .then(data => document.getElementById("json").innerHTML=myItems(data.substring(47).slice(0, -2))  
    );
function myItems(jsonString){
    var json = JSON.parse(jsonString);
    var table = '<table><tr>'
    json.table.cols.forEach(colonne => table += '<th>' + colonne.label + '</th>')
    table += '</tr>'
    json.table.rows.forEach(ligne => {
    table += '<tr>'
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += '<td>' + valeur + '</td>'
        }
    )
    table += '</tr>'
    }
    )
    table += '</table>'
    return table
}           