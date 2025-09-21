import type { Metadata } from "next";
import "@/assets/css/index.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
    title: "Samawa",
    description: "Get your wedding done",
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                {children}

                {modal}
            </body>
        </html>
    );
}
