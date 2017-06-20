function translate(val){
    var mas;
    var general = [];
    if (f) {
        mas = arr;
    }else mas = arr1;
    console.log(val.length);
    for(var i = 0; i < val.length; i++){
        general.push(mas[val[i]]);
    }
    console.log(general);
 
}

    const arr = ["0000","0001","0010","0011","0100","0101","0110","0111","1000","1001" ];
    const arr1 = ["00000000","00000001","00000010","00000011","00000100","00000101","00000110","00000111","00001000","00001001" ];
    var val;
    var f = false;
   
   
    var thead = document.getElementById('thead');
    var tbody = document.getElementById('tbody');
    var tr = document.createElement('tr');
    tbody.appendChild(tr);


function sw(arg){
    f = arg;
    var number = document.getElementById('number').value;
    var digits = number.split("");

	  translate(digits);

		var children = thead.children;
		var childrenLen = thead.children.length;
		var childrenTR = tr.children;
    
    if (children.length > 0){
        for(var i=0; i<childrenLen;i++){
            thead.removeChild(thead.children[0]);
            tr.removeChild(tr.children[0]);
        }
    }
    
}