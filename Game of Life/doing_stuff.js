var t = null;

living = () => {
    for (let i = 0; i < 40; i++) {
        for (let j = 0; j < 20; j++) {
            decision(i, j);
        }
    }
    for (let i = 0; i < 40; i++) {
        for (let j = 0; j < 20; j++) {
            cells[i][j].life+=cells[i][j].ad;
            cells[i][j].rect();
        }
    }
    console.log(69)
}

start_time = () => {
    t = setInterval(living, 500);
}

stop_time = () => {
    clearInterval(t);
}