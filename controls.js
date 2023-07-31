const params = {
    fovFactor: 320,
    rotationSpeedX: 0.01,
    rotationSpeedY: 0.01,
    rotationSpeedZ: 0.01,
    cameraX: 0,
    cameraY: 0,
    cameraZ: -5,
};

const X_AXIS = "X", Y_AXIS = "Y", Z_AXIS = "Z";


function updateFovFactor(elt) {
    params.fovFactor = Number(elt.value);
    document.getElementById("fov-factor-output").innerHTML = elt.value;

}

function updateRotationSpeed(elt, axis) {
    switch (axis) {
        case X_AXIS:
            params.rotationSpeedX = Number(elt.value) / 100.0;
            document.getElementById("rotation-speed-x-output").innerHTML = elt.value;
            break;
        case Y_AXIS:
            params.rotationSpeedY = Number(elt.value) / 100.0;
            document.getElementById("rotation-speed-y-output").innerHTML = elt.value;
            break;
        case Z_AXIS:
            params.rotationSpeedZ = Number(elt.value) / 100.0;
            document.getElementById("rotation-speed-z-output").innerHTML = elt.value;
            break;
        default:
            break;
    }
   
    
   
}

function updateCameraPosition(elt, axis) {
    switch (axis) {
        case X_AXIS:
            params.cameraX = Number(elt.value); 
            document.getElementById("camera-x-position-output").innerHTML = elt.value;
            break;
        case Y_AXIS:
            params.cameraY = Number(elt.value);
            document.getElementById("camera-y-position-output").innerHTML = elt.value;
            break;
        case Z_AXIS:
            params.cameraZ = Number(elt.value);
            document.getElementById("camera-z-position-output").innerHTML = elt.value;
            break;
        default:
            break;
    }

}