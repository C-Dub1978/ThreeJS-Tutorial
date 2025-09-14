import * as THREE from 'three';

// CONSTS
const sizes = {
    width: 800,
    height: 600
};
// Our canvas element
const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement | null;
if (!canvas) {
    throw new Error("Canvas element with class 'webgl' not found.");
}

//////////////////////////////////////////////////////////////////////////////
// We need 4 elements for basics - Scene, Objects, Camera, and Renderer
//////////////////////////////////////////////////////////////////////////////

// Create the Scene
const scene = new THREE.Scene();

// We need to create a 'Mesh' - which is a combination of a geometry (the shape) and a material (how it looks)

// Next create a BoxGeometry as our 'Object' in the 4 needs above
const geom = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
});
const mesh = new THREE.Mesh(geom, material);
scene.add(mesh);

// Camera
// PerspectiveCamera is used for 3d, whereas Orthographic would be 2d, outside the scope of this tutorial
// The Field of View in a camera, is hwo many degress you can see, 360 would be like a full GoPro 360 video, whereas 10 would be a super narrow view.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas as HTMLCanvasElement
});
renderer.setSize(sizes.width, sizes.height);
// Right here were saying 'take a picture of our scene, with this current camera were using'
renderer.render(scene, camera);
// To 'transform' objects, we can use position, rotation and scale.... In our case well move the camera backwards using position!
// Position is an object with x.y,z properties, where z is backwards/forwards axis (thats how Three.js sees it)

