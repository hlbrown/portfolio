var table = document.createElement('table');

var tr = [];


var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var text1 = document.createTextNode('Car');
var text2 = document.createTextNode('Top Speed');
var text3 = document.createTextNode('Price');

for (var i = 1; i < 4; i++){
    tr[i] = document.createElement('tr');   
    for (var j = 1; j < 4; j++){
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr[i].appendChild(td1);
        tr[i].appendChild(td2);
        tr[i].appendChild(td3);
    }

    table.appendChild(tr[i]);

}
var tr2 = [];
var r2td1 = document.createElement('td');
var r2td2 = document.createElement('td');
var r2td3 = document.createElement('td');
var r2t3 = document.createTextNode('$10,000.00');
var r2t2 = document.createTextNode('120mph');
var r2t1 = document.createTextNode('Chevy');
for (var i=1; i <4; i++){
    tr2[i] = document.createElement('tr'); 
    for (var j = 1; j < 4; j++){
        r2td1.appendChild(r2t1);
        r2td2.appendChild(r2t2);
        r2td3.appendChild(r2t3);

        tr2[i].appendChild(r2td1);
        tr2[i].appendChild(r2td2);
        tr2[i].appendChild(r2td3);
    }
    tr2[i].style.outline="solid 1px black";
    table.appendChild(tr2[i]);
}

var tr3 = [];
var r3td1 = document.createElement('td');
var r3td2 = document.createElement('td');
var r3td3 = document.createElement('td');
var r3t3 = document.createTextNode('$20,000.00');
var r3t1 = document.createTextNode('Pontiac'); 
var r3t2 = document.createTextNode('140mph');


for (var i = 1; i < 4; i++){
    tr3[i] = document.createElement('tr');
    for(var k = 1; k < 4; k++){
        r3td1.appendChild(r3t1);
        r3td2.appendChild(r3t2);
        r3td3.appendChild(r3t3);
        tr3[i].appendChild(r3td1);
        tr3[i].appendChild(r3td2);
        tr3[i].appendChild(r3td3);
    }
    tr3[i].style.outline="solid 1px black";
    table.appendChild(tr3[i]);
}


table.style.border='solid 1px black';
document.body.appendChild(table);
document.body.style.color = "navy";

table.style.backgroundColor = "tan";
table.setAttribute("align", "center");


