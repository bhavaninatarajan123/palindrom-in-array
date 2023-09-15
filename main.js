var a=[];
var n=parseInt(prompt("enter the size of the array"));

for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");


var b=[];
var c;

function bhavani(){
    for (i=0;i<a.length;i++){
        var d=0;
        var temp= a[i];
        while(a[i]>0){
            c=a[i]%10;
            a[i]=parseInt(a[i]/10);
            d=d*10+c;


        }
        console.log(d)
        if(temp==d){
            b.push(temp);
            
    }
   
}document.write( "the palindrom number is"+b);

}
bhavani(a);
