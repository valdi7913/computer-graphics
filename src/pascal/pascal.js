function generatePascal(size) {
  let pascal = [[]];
  for(let i = 0; i < size; i++) {
    pascal.push([]);
    for(let j = 0; j <= i; j++) {
      let nextNum = 1;
      if(!(j==0 || j==i)){
        nextNum = (pascal[i-1][j] + pascal[i-1][j-1])%4;
      }
      pascal[i].push(nextNum);
    }
  }
  return pascal;
}


let canvas = document.getElementById("canv");
let ctx = canvas.getContext("2d")
ctx.canvas.width = window.innerWidth;
// ctx.canvas.width = 3840;
// ctx.canvas.height = 2160;
ctx.canvas.height = window.innerHeight;
let width = canvas.width;
let height = canvas.height;

let lineHeight = 5;
let size = 128;
ctx.fillStyle = "black";
ctx.fillRect(0,0, width, height);
ctx.fillStyle = "green";
ctx.textAlign = "center";
ctx.font = `${lineHeight-2} serif`;

let pascal = generatePascal(size);
pascal.forEach((line, i) => {
    line.forEach((num, i) => {
      if(line[i] == 0) {line[i]="  ";}
      else {line[i]=num}
    });
    ctx.fillText(line.join(""), width/2, (i+1) * lineHeight);
});
