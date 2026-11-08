import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { allison, alternates, montserrat } from "./fonts";
import "@/styles/design-system/colors.css";
import "@/styles/design-system/typography.css";
import "@/styles/design-system/spacing.css";
import "@/styles/design-system/brand-classes.css";
import "./globals.css";

const title = "Ưu đãi tháng 11 · Koh Yam";
const description =
  "8 chương trình chung cho cả quần đảo, thêm 6 món quà riêng ở từng đảo Koh. Từ bữa trưa văn phòng tới bàn tiệc sinh nhật — bạn chọn, Koh lo phần nêm.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "vi_VN" },
};

export const viewport: Viewport = {
  themeColor: "#293d1f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${alternates.variable} ${allison.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
