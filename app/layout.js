import "./globals.css";
import Navbar from "@/components/Navigator1";
export const metadata = {
  title: "네이버 지도 예제",
  description: "Next.js App Router에서 네이버 지도 구현",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
