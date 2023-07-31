class Triangle {
    constructor(p0, p1, p2) {
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
    }

    drawIt() {
        const line0 = new Line(this.p0, this.p1);
        const line1 = new Line(this.p1, this.p2);
        const line2 = new Line(this.p2, this.p0);
        
        line0.drawIt();
        line1.drawIt();
        line2.drawIt();
    }
}