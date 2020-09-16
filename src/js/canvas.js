export default function draw () {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    // const grass = 
    // const castle = 
    let xPos = 0;
    let yPos = 0;

    let map = [
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [0,0,2,2,0,0,0,0,0,0,0,0,2,2,2],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],
      [0,0,0,1,1,1,1,1,1,1,1,1,0,0,2],
      [0,0,0,1,1,0,0,0,0,0,1,1,0,0,2],
      [0,0,0,1,0,0,0,0,0,0,0,1,0,0,2],
      [0,0,0,1,0,0,0,0,1,1,1,1,0,0,2],
      [0,0,0,1,1,0,0,0,1,0,1,1,0,0,2],
      [0,0,0,1,1,1,1,1,1,1,1,1,0,2,2],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,2,2]
    ];

    for(let i=0; i<map.length; i++){
      for (let j=0; j<map[i].length; j++){
        if(map[i][j] == 0){
          ctx.fillStyle = "green";
          ctx.fillRect(xPos, yPos, 10, 10);
          ctx.strokeRect(xPos, yPos, 10, 10);
        }
        if(map[i][j] == 1){
          ctx.fillStyle = "grey";
          ctx.fillRect(xPos, yPos, 10, 10);
          // ctx.strokeRect(xPos, yPos, 10, 10);
        }
        if(map[i][j] == 2){
          ctx.fillStyle = "blue";
          ctx.fillRect(xPos, yPos, 10, 10);
          ctx.strokeRect(xPos, yPos, 10, 10);
        }
        xPos+=10;
      }
      xPos=0;
      yPos+=10;
    }
  }
}