export default function Earth() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.0.33/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/GYDyKM7e2FfyR-WK/scene.splinecode"></spline-viewer>
    </div>
  );
}
