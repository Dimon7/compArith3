function before_coma(b, o){

    var arr = [];

    var i = 0;
    while (b >= o){

        arr[i] = b % o;
        b = b / o;
        b = b - (b%1);

        i++;
    }
    arr[i]=b;
   
    return arr;
}

function after_coma(a, o){
    var mas = [];
    var i = 0 ;
    while( i <= 6 ){
        a = a * o;
        if (a >= 1.0){
            var cile =  Math.floor(a);
            mas[i] = cile;
            a = a - cile;
        }
        else{
            mas[i]=0;
        }
        i++;
    }

    return mas;


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
    var r = 0;
    var general;
    
    var number = document.getElementById('number').value;
    sign = number.indexOf('-');
    if (sign == -1){
       val = number;
    }else 
        {
            val =  number.substring(sign+1, number.length);

        }
    
   
    var k =  val.indexOf('.');
   
    var int = val.substring(0,k);
    var real = val - int;

  
    grid = before_coma(int, osn).reverse();
    r = after_coma(real, 2);
    console.log(grid);
    
    var len = before_coma(grid.length, osn).reverse();
    console.log(len);
    // console.log(grid.reverse());
    console.log(r);
    
    
    general = ( grid.concat(r) ).concat(len);
    general = general.reverse();
    console.log(general);
    
    
    var length = grid.length;
    console.log(grid);


    var children = thead.children;
    var childrenLen = thead.children.length;
    var childrenTR = tr.children;
    
    /**************clearing*****************/
    if (children.length > 0){
        for(var i=0; i<childrenLen;i++){
            thead.removeChild(thead.children[0]);
            tr.removeChild(tr.children[0]);
        }
    }
    
    /***************Boxes*************/
     for(var i=0; i<arg; i++){
        var th = document.createElement('th');
        th.innerText = arg-i-1;
        thead.appendChild(th);

        var td = document.createElement('td');
       
            td.innerText = 0;
        
     
        tr.appendChild(td);        
    }
    /***************Boxes*************/

    var length = general.length;
    if (tr.children.length < length){
        alert('ПЕРЕПОВНЕННЯ');
    }else{
       
        for(var i=0; i<length; i++){
         
            childrenTR[children.length-i-1].innerText = general[i];
         
        }
    }
    childrenTR[0].innerText = 1;
    childrenTR[arg-length].style = 'background : cyan';
    childrenTR[0].style = 'background : aqua';
    childrenTR[1].style = 'background : yellow';
    console.log('length => ', length);

}
