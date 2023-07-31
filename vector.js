class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    drawIt() {
        rect(this.x, this.y,5 , 5);
    }
}

class Vector3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    rotateX(angle) {
        const rotated = new Vector3D(
            this.x,
            this.y * Math.cos(angle) - this.z * Math.sin(angle),
            this.y * Math.sin(angle) + this.z * Math.cos(angle),
        )
        return rotated;
    }

    rotateY(angle) {
        const rotated = new Vector3D(
            this.x * Math.cos(angle) - this.z * Math.sin(angle),
            this.y,
            this.x * Math.sin(angle) + this.z * Math.cos(angle),
        )
        return rotated;
    }

    rotateZ(angle) {
        const rotated = new Vector3D(
            this.x * Math.cos(angle) - this.y * Math.sin(angle),
            this.x * Math.sin(angle) + this.y * Math.cos(angle),
            this.z,
        )
        return rotated
    }
}
