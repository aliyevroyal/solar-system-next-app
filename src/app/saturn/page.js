export default function Earth() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.0.33/build/spline-viewer.js"
      ></script>
      <spline-viewer url="https://prod.spline.design/F5OyLPrQ8WkJjq9D/scene.splinecode"></spline-viewer>
    </div>
  );
}
