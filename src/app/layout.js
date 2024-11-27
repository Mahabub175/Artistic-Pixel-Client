import { Open_Sans } from "next/font/google";
import "./globals.css";
import AntDProvider from "@/components/Shared/AntDProvider";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Artistic Pixel",
  description:
    "Artistic Pixel is a marketing agency that specializes in creating visually stunning and effective marketing campaigns for businesses of all sizes. Our team of experienced designers, developers, and marketers work together to create custom solutions that help our clients achieve their goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <AntDProvider>{children}</AntDProvider>
      </body>
    </html>
  );
}
