import Script from "next/script";

import "@/public/styles/styles.css";

export const metadata = {
  title: "Solar System",
  description: "Web Application about our Solar System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.0.38/build/spline-viewer.js"
        ></Script>
      </body>
    </html>
  );
}
