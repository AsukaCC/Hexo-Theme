<a name="z61Q6"></a>
# 安装
<a name="fglhH"></a>
## NPM安装
```markdown
# three.js
npm install --save three

# 引入
import * as THREE from 'three';
```
<a name="DZmjh"></a>
## 从 CDN 导入
```markdown
<script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@<version>/build/three.module.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@<version>/examples/jsm/"
    }
  }
</script>
 
```
<a name="kk4rN"></a>
# WebGL兼容性检查
```javascript
import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGLAvailable() ) {

  // Initiate function or other initializations here
  animate();

} else {

  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById( 'container' ).appendChild( warning );

}
```

<a name="NhSWU"></a>
# 摄像机（Camera）
<a name="WmMYp"></a>
## 摄像机阵列（ArrayCamera）
包含多个相机的数组
<a name="lsNtI"></a>
## 透视相机（PerspectiveCamera）
模仿现实世界相机的透视投影，能够创建深度感和现实感，使远处的物体看起来更小，近处的物体看起来更大
```javascript
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(x, y, z);
```
<a name="XMhQe"></a>
## 正交相机（OrthographicCamera）
正交相机提供一种正交投影，物体的大小不会因距离相机的远近而变化，这种相机常用于2D游戏或建筑可视化。
```javascript
const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
camera.position.set(x, y, z);
```
<a name="P5p0O"></a>
## 立方体相机（CubeCamera）
立方体相机用于从特定位置捕捉场景的全景视图。它会渲染场景六次，每次捕捉立方体一个面的视图，常用于创建反射或环境图。
```javascript
const cubeCamera = new THREE.CubeCamera(near, far, resolution);
cubeCamera.position.set(x, y, z);
scene.add(cubeCamera);
cubeCamera.update(renderer, scene);
```
<a name="HmFwM"></a>
## 立体相机（StereoCamera）
立体相机用于创建立体3D效果，通过为左眼和右眼渲染不同的视图来提供深度感知，常用于虚拟现实（VR）或增强现实（AR）应用
```javascript
const camera = new THREE.StereoCamera();
// 设置左右相机
const leftCamera = camera.cameraL;
const rightCamera = camera.cameraR;
leftCamera.position.set(x, y, z);
rightCamera.position.set(x, y, z);
leftCamera.focalLength = 10;
rightCamera.focalLength = 10;
// 更新并渲染立体视图
camera.update(renderer, scene);
renderer.setRenderTarget(renderer.getRenderTarget().left);
renderer.render(scene, leftCamera);
renderer.setRenderTarget(renderer.getRenderTarget().right);
renderer.render(scene, rightCamera);
renderer.setRenderTarget(null);
```
场景
