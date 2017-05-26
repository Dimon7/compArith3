function before_coma(arg){
    var o = 2;
    var arr = [];

    var i = 0;
    while (arg >= o){

        arr[i] = arg % o;
        arg = arg / o;
        arg = arg - (arg%1);

        i++;
    }
    arr[i]=arg;
   
    return arr;
}

function after_coma(arg){
    var o = 2;
    var mas = [];
    var i = 0 ;
    while( i <= 7 ){
        arg = arg * o;
        if (arg >= 1.0){
            var cile =  Math.floor(arg);
            mas[i] = cile;
            arg = arg - cile;
        }
        else{
            mas[i]=0;
        }
     i++;
    }

    return mas;
}

function fillBuildTable(f, arg, exp, man){

    var thead = document.getElementById('thead');
    var tbody = document.getElementById('tbody');
    


    var headChildren = thead.children;
    var bodyChildren = tbody.children;
    var len = headChildren.length;

    if (len > 0){
         tbody.children[0].remove();
        for(var i=0; i < len; i++){
            
            thead.children[0].remove();
            
        }
    }

    var tr = document.createElement('tr');
    var childrenTR = tr.children;
    tbody.appendChild(tr);



    for(var i=0; i<arg; i++){
        var th = document.createElement('th');
        th.innerText = arg-i-1;
        thead.appendChild(th);

        var td = document.createElement('td');
       
        td.innerText = 0;
        
     
        tr.appendChild(td);        
    }

     if (f) {
        childrenTR[0].innerText = 1;
    }
    var count = 0;
    if(arg == 32){
        count = 8;
    }else {
         count = 11;
    }

    for(var i=1; i <= count; i++){
        
        childrenTR[i].style = 'background : lightgreen';
    }
    count ++;
    childrenTR[count].style = 'background: #f2f2f2; border : none;';
    childrenTR[count].innerText = '1,';
    

    // console.log('exp',exp);
    // console.log('man',man);

    for(var i=1; i <= exp.length; i++){
         
        childrenTR[i].innerText = exp[i-1];
         
    }
    
    var i=count+1;
    for(var j=0; j < man.length; j++){
        childrenTR[i].innerText = man[j];
        i++;
    }
    // console.log(count);

}

    var val;

    var sign, mantis = [], exponent = 0;
    var _real = 0, _int = 0; 

function sizing(arg){
    
    var f = false;    

    var number = document.getElementById('number').value;
    sign = number.indexOf('-');
    if (sign == -1){
       val = number;
    }
    else{
            val =  number.substring(sign+1, number.length);
            f = true;
        }
    
   
    var k =  val.indexOf('.');
   
    var int = val.substring(0,k);
    var real = val - int;
  
    _int = before_coma(int).reverse();
    _real = after_coma(real);
    
    var len = _int.length;

    if(arg == 32){
        len += 127;
        
    }else len += 1023;
    
    exponent = before_coma(len).reverse();

    mantis = _int.concat(_real);
    mantis.shift();

    fillBuildTable(f, arg, exponent, mantis);
    
}
