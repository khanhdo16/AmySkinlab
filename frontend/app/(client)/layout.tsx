import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Amy Skinlab - Chuyên chăm sóc da, tóc, móng",
    description:
        "Điểm đến dành cho các vấn đề về da, tóc, móng. Cung cấp những dịch vụ thẩm mỹ hiện đại, được áp dụng công nghệ cao và đạt tiêu chuẩn. Quy trình thực hiện được tư vấn và đồng hành bởi Thạc sĩ Bác sĩ Phạm Diễm Hương, đảm bảo yếu tố về tay nghề và chuyên môn tới các khách hàng.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
