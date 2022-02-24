num=prompt("enter number");
function printEven() {
  for (let i=1; i<num; i++) {
    if(i % 2 === 0) {
      document.write(`${i} is Even number <br>`)
    }
  }
}
console.log(printEven());