class Line {
    constructor(p0, p1) {
        this.p0 = p0;
        this.p1 = p1;
    }

    drawIt() {
        const deltaX = this.p1.x - this.p0.x;
        const deltaY = this.p1.y - this.p0.y;

        const longestDelta = abs(deltaX) > abs(deltaY) ? 
            abs(deltaX) : abs(deltaY);

        const xInc = deltaX / longestDelta;
        const yInc = deltaY / longestDelta;
        

        const currentPoint = new Vector2D(this.p0.x, this.p0.y);
        for (let i = 0; i < longestDelta; i++) {
            currentPoint.drawIt();
            currentPoint.x = currentPoint.x + xInc;
            currentPoint.y = currentPoint.y + yInc;
        }
     }
}