function before_coma(b, o, arg){

    var arr = [];

    for(var i=0; i < arg; i++){
        arr.push(0);
    }
    var i = 0;
    while (b >= o){

        arr[i] = b % o;
        b = b / o;
        b = b - (b%1);

        i++;
    }
    arr[i]=b;
    /*for (var j = i; j >=0; j--) {
        console.log(arr[j]);
    }*/
    return arr;
}
    var val;
    var osn;
	var grid = [];
    var sign;
   
    osn = 2;
   
    var thead = document.getElementById('thead');
    var tbody = document.getElementById('tbody');
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

function add(){
    var more = [];
    for(var i=0; i< grid.length; i++){
        if(grid[i] == 0){
            more.push(1);
        }else more.push(0);
    }
    console.log('Bevor',more);
    var mem = 0;
    if(more[0] == 1 ){ 
        mem = 1;
        more[0] = 0;
    }else more[0] = 1;
    for(var i=1; i < more.length; i++){
        if(more[i] == 1 && mem == 1){
            more[i] = 0;
        }
        else if(more[i] == 0 && mem == 1){
            more[i] = 1;
            mem = 0;
        }
    }

    console.log('Nach',more);
    
    return more;

}
function griding(){
    for (var i=length-1; i>=0; i--) {

        var th = document.createElement('th');
        th.innerText = i;
        thead.appendChild(th);

        
        var td = document.createElement('td');
        td.innerText = grid[i];

        tr.appendChild(td);

    }
}
function sizing(arg){
    var number = document.getElementById('number');
    val = number.value;
    
    
    grid = before_coma(Math.abs(val), osn, arg);
    if(val < 0){
        grid = add();
    }
    var length = grid.length;
    console.log(grid);


    var children = thead.children;
    var childrenLen = thead.children.length;
    var childrenTR = tr.children;
    
    
    if (children.length > 0){
        for(var i=0; i<childrenLen;i++){
            thead.removeChild(thead.children[0]);
            tr.removeChild(tr.children[0]);
        }
    }

     for(var i=0; i<arg; i++){
        var th = document.createElement('th');
        th.innerText = arg-i-1;
        thead.appendChild(th);

        var td = document.createElement('td');
       
            td.innerText = 0;
        
     
        tr.appendChild(td);        
    }
    if (tr.children.length < length){
        alert('ПЕРЕПОВНЕННЯ');
    }else{
       
        for(var i=0; i<length; i++){
         
            childrenTR[children.length-i-1].innerText = grid[i];
         
        }
    }
    childrenTR[children.length-length].style = 'background : cyan';
    console.log(length);

}
