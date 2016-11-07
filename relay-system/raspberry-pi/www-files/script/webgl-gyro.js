var kub;
var gyro;
var renderer;
var gyroDomElement;

function setupGyro() {
    gyroDomElement = document.getElementById("webgl-gyro");
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    
    renderer = new THREE.WebGLRenderer({
        antialias: true
        , alpha: true
    });
    renderer.setClearColor(0x000500, 0);
    setRenderBoxSize();
    // var axis = new THREE.AxisHelper(15)
    // scene.add(axis);
    kub = new Thing("Kuben", new THREE.BoxGeometry(5, 5, 1), new THREE.MeshNormalMaterial());
    gyro = new Gyro();
    kub.Mesh.position.x = 0;
    kub.Mesh.position.y = 0;
    kub.Mesh.position.z = 0;
    scene.add(kub.Mesh);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 10;
    camera.lookAt(scene.position);
    gyroDomElement.appendChild(renderer.domElement);
    renderer.render(scene, camera);
    render();

    function render() {
        requestAnimationFrame(render);
        // kub.Mesh.rotation.y += .000;
        kub.Mesh.rotation.y = (gyro.x * Math.PI / 180) * 2;
        kub.Mesh.rotation.x = (gyro.y * Math.PI / 180) * 2;
        // if ((45 * Math.PI / 180) * 2 <= rotation_x) {
            // navigator.vibrate(300);
        renderer.render(scene, camera);
    }
}
function setRenderBoxSize() {
    renderer.setSize(gyroDomElement.clientWidth, gyroDomElement.clientWidth);
}
// Base object for things
var Thing = function (Name, Geometry, Material) {
    this.Name = Name;
    this.Geometry = Geometry;
    this.Material = Material;
    this.Mesh = new THREE.Mesh(this.Geometry, this.Material);
}

// Gyro object
var Gyro = function () {
    this.x = 0;
    this.y = 0;
    this.z = 0;
}
