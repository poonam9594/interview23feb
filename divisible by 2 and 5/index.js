function div()
{
for(let i=1;i<=100;i++)
{
    // if iteration number divisible to 3, block works.
    if(i%3==0 && i%5==0)
    {
        document.write(`${i} is divisble by 3 and 5<br>`); 
    }
}
}
console.log(div());