class Camera {
    constructor(fovFactor, position) {
        this.fovFactor = fovFactor;
        this.position = position;
    } 

    projectInto2D(point3d) {
        const translatedPoint = new Vector3D(
            point3d.x,
            point3d.y,
            point3d.z - this.position.z,
        )
        const projected = new Vector2D(
            ((this.fovFactor * translatedPoint.x) / translatedPoint.z) + 200,
            ((this.fovFactor * translatedPoint.y) / translatedPoint.z) + 150,
        );
        return projected;
    }
}