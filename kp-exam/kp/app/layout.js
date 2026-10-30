import "./globals.css";
import { Prompt, Source_Serif_4 } from "next/font/google";
import { Provider } from "@/lib/store";
import Header from "@/components/Header";

const prompt = Prompt({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-prompt" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = { title: "ติว ก.พ. รายวิชา", description: "สรุปเนื้อหาและเตรียมสอบ ก.พ. วิชาละ 99 บาท" };

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${prompt.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
          <footer className="mx-auto max-w-5xl px-4 pb-10 text-sm text-slate-500">
            เนื้อหาเพื่อการเตรียมสอบ ควรตรวจสอบตัวบทกฎหมายฉบับล่าสุดก่อนสอบ
          </footer>
        </Provider>
      </body>
    </html>
  );
}
