let Canvas = document.getElementById("canvas");
const ctx = Canvas.getContext("2d");

let cells = [];
let running = false;

Rect = (x, y, bool = 0) => {
    ctx.beginPath();
    ctx.strokeStyle = "#6666ff";
    if(bool) ctx.fillStyle = "black"; else ctx.fillStyle = "#efefef";
    ctx.rect(x*20, y*20, 20, 20);
    ctx.fill();
    ctx.stroke();
}

color = (obj, col) => {
    if(typeof obj == "string") document.querySelector(obj).style.backgroundColor = col;
    else obj.style.backgroundColor = col
}

let top_cell ={
    x : 0,
    y : 0
}

function Cell(x, y, life = 0){
    this.x = x;
    this.y = y;
    this.life = life;

    this.ad = 0;
    this.ngb = 0;

    this.rect = function(){
        Rect(this.x, this.y, this.life)
    }
}

for (let i = -1; i < 41; i++) {
    cells[i] = [];
    for (let j = -1; j < 21; j++) {
        cells[i][j] = new Cell(i, j, 0)
    }
}

change = () => {
    if(cells[top_cell.x][top_cell.y].life==0) cells[top_cell.x][top_cell.y].life =1;
    else cells[top_cell.x][top_cell.y].life = 0;

    cells[top_cell.x][top_cell.y].rect();
}

decision = (x, y) => {
    let n = cells[x-1][y-1].life + cells[x][y-1].life + cells[x+1][y-1].life + 
            cells[x-1][y].life                        + cells[x+1][y].life + 
            cells[x-1][y+1].life + cells[x][y+1].life + cells[x+1][y+1].life;
    let ad;
    if(cells[x][y].life == 1){
        if(n == 2 || n==3) ad = 0; else ad = -1;
    }else{
        if(n == 3) ad = 1; else ad = 0;
    }

    cells[x][y].ngb = n;
    cells[x][y].ad = ad
}

function note(e){
    top_cell.x = Math.floor(e.offsetX/20);
    top_cell.y = Math.floor(e.offsetY/20);
}

for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 20; j++) {
        cells[i][j].rect();
    }
}