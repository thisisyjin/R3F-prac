# React Three Fiber (R3F) Practice

## Learn

### About Three.js

- 3D 웹 표준 기술에는 WebGL, WebGPU 가 존재하지만, 파이프라인 등을 학습해야 하기 때문에 사용하기 어려움
- Three.js 는 웹 표준 기술(WebGL, WebGPU)를 사용하기 쉽게 Wrapping 한 라이브러리
- R3F는 React 에서 Three.js 를 쉽게 사용할 수 있게 해주는 라이브러리

### 기본 원리

- Scene (3차원 공간)안에서 일어나는 일들을 Renderer 가 계산 처리하여 렌더링하고, Camera 가 영상화하여 보여줌

### Canvas

- 3D 그래픽을 위해 가장 먼저 생성해야 함
- 구성 요소 ⇒ Canvas 생성 시 자동으로 3개의 객체를 생성해줌
  - Renderer
  - Scene
    - 3D 모델
    - 조명
    - 카메라
  - Camera

```jsx
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas>
	    {// Mesh Component}
    <Canvas/>
  );
}

export default App;
```

### Mesh

- Three.js 에서는 렌더링할 3차원 모델을 `mesh` 라고 함.
- HTMLElement를 쓰듯이 `<mesh></mesh>` 와 같이 쓸 수 있음.
- Mesh를 정해주기 위해서는 두 가지 값을 정해줘야 함.
  1. Geometry
     - mesh의 모양을 정의하기 위해 (예> 박스) mesh 요소 안에 Geometry를 추가해야 함.
     - Geometry 는 3차원 객체의 형상을 정의해줌.
     - 기본적으로 BufferGeometry 를 상속받고 있음.
     - Geometry 종류
       - Box, Circle, Cone(원뿔), Cylinder(원통), Sphrere(구)
       - Ring, Plane, Shape, Text, Wireframe 등
  2. Material
     - mesh의 material 을 정의하기 위해 mesh 요소 안에 Matreial을 추가해야 함.
     - Material 종류
       - basic : 빛의 영향을 받지 않음
       - standard: 3D 에서 표준 물리 기준
       - depth: 간단한 음영 효과 (카메라와의 거리)

### Light

[Three.js Manual (Lights)](https://threejs.org/manual/?q=light#en/lights)

- 조명이 없으면 검정색으로 보임
- intensity: 밝기 (기본값은 1, 클수록 밝아짐)
- Light 종류
  - AmbitionLight
    - 광원이 없어 모든 오브젝트의 모든 면을 골고루 비춰줌
  - DirectionalLight
    - 무한대의 먼 거리에서 모든 오브젝트에 같은 각도로 비춰줌 (=태양)
  - PointLight
    - 한 지점에서 모든 방향으로 비춰줌 (=전구)
    - distance = 빛 방출 최대거리 (기본값 0) / decay = 거리에 따라 어두워지는 양 (기본값 1, 높을수록 어두워짐)
  - SpotLight
    - 한 지점에서 한 방향으로 원뿔형으로 방사 (=플래시라이트)
    - angle = 빛이 퍼지는 각도 (최대값 PI / 2)

### Camera

- Camera 종류
  - PerspectiveCamera
    - 가장 기본적인 3D 모드 카메라
    - fov = field of view. 시야각.
    - aspect = 화면 비율 (w/h)
    - far, near
  - OrthographicCamera
    - 원근법 없이 원본크기 드래고 보여줌
  - CubeCamera
    - 거울처럼 외부 상 반사되는 물체 만들때 사용
  - StreoCamera
    - 두개의 PerspectiveCamera 를 사용하여 입체화면 생성
- 카메라의 position 을 따로 지정하지 않으면 원점(0, 0, 0)에 카메라가 생김.
- 기본적으로 앞 방향 (-Z)를 바라보고 있음.

### requestAnimationFrame

- 브라우저의 프레임레이트가 갱신될 때 마다 함수 실행됨
