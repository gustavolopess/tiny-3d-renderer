function setup() {
  const canvas = createCanvas(400, 300);
  canvas.parent("canvas-container");
}

let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;

function draw() {
  background(256);
  const cameraPosition = new Vector3D(params.cameraX, params.cameraY, params.cameraZ);
  const camera = new Camera(params.fovFactor, cameraPosition);

  const cubeVertices = [
    new Vector3D(-1, -1, -1),
    new Vector3D(-1, 1, -1),
    new Vector3D( 1, 1, -1),
    new Vector3D( 1, -1, -1),
    new Vector3D( 1, 1, 1), 
    new Vector3D( 1, -1, 1),
    new Vector3D(-1, 1, 1), 
    new Vector3D(-1, -1, 1) 
  ];
  

  rotationX += params.rotationSpeedX;
  rotationY += params.rotationSpeedY;
  rotationZ += params.rotationSpeedZ;

  const projected = cubeVertices.map(cv => {
    const rotated = cv.rotateX(rotationX).rotateY(rotationY).rotateZ(rotationZ);
    return camera.projectInto2D(rotated);
  })
  projected.forEach(p => p.drawIt());

  const cubeLines = [
    // front
    //   { a: 1, b: 2, c: 3 },
    //   { a: 1, b: 3, c: 4 },
    new Line(projected[0], projected[1]),
    new Line(projected[1], projected[2]),
    new Line(projected[2], projected[3]),
    new Line(projected[3], projected[0]),

    // bottom
    //   { a: 6, b: 8, c: 1 },
    //   { a: 6, b: 1, c: 4 }
    new Line(projected[2], projected[4]),
    new Line(projected[1], projected[6]),
    new Line(projected[4], projected[6]),


    // // top
    new Line(projected[0], projected[7]),
    new Line(projected[5], projected[7]),
    new Line(projected[3], projected[5]),

    new Line(projected[5], projected[4]),
    new Line(projected[7], projected[6]),
  ]

  cubeLines.map(l => l.drawIt());
  // const cubeFaces = [
  //   // front
  //   { a: 1, b: 2, c: 3 },
  //   { a: 1, b: 3, c: 4 },
  //  // right
  //   { a: 4, b: 3, c: 5 },
  //   { a: 4, b: 5, c: 6 },
  //  // back
  //   { a: 6, b: 5, c: 7 },
  //   { a: 6, b: 7, c: 8 },
  //  // left
  //   { a: 8, b: 7, c: 2 },
  //   { a: 8, b: 2, c: 1 },
  //  // top
  //   { a: 2, b: 7, c: 5 },
  //   { a: 2, b: 5, c: 3 },
  //  // bottom
  //   { a: 6, b: 8, c: 1 },
  //   { a: 6, b: 1, c: 4 }
  // ]

  

  // cubeFaces.forEach(f => {
  //   const rotatedVertices = [
  //     cubeVertices[f.a-1],
  //     cubeVertices[f.b-1],
  //     cubeVertices[f.c-1],
  //   ];

  //   const faceVertices = [
  //     camera.projectInto2D(rotatedVertices[0]),
  //     camera.projectInto2D(rotatedVertices[1]),
  //     camera.projectInto2D(rotatedVertices[2]),
  //   ];
    

  //   const triangle = new Triangle(
  //     faceVertices[0],
  //     faceVertices[1],
  //     faceVertices[2],
  //   );
    
    
  //   faceVertices.map(f => {

  //   })

  //   triangle.drawIt();
  // });

}
