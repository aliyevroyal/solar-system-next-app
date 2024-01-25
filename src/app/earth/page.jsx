export default function Earth() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.0.33/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/WWb3wJP8TSG6qC8u/scene.splinecode"></spline-viewer>
    </div>
  );
}
