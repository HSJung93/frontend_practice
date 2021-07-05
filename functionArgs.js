function a() {
    if(arguments.length < 4) return;
    
    for(var i =0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
} 
a(1, 2, "hoesung");