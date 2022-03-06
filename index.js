function print2(){
    var n=prompt("enter a number")
    n=parseInt(n);
    function fizzbuzz(num){
        for(let i=1;i<=num;i++){
            if (i%3==0 && i%5==0) document.write(" <span style=color:green; >  FizzBuzz </span> ");
            else if (i%3==0) document.write(" <span style=color:red;>Fizz</span>  ");
            else if (i%5==0) document.write(" <span style=color:blue;> Buzz </span>");
            else document.write(i+   "  ");
        }
    }
    fizzbuzz (n)
    
    
}