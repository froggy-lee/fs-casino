import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import ReactQuery from "../lib/react-query";
import StyledComponentsRegistry from "@/lib/styledComponents";
import ReduxProvider from "@/lib/redux";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import LayOutPage from "@/components/Layout";
import { GlobalStyles } from "@/styles/theme.config";
import ModalPage from "@/modules/ModalPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DynamicBootstrap = dynamic(
  () => require("bootstrap/dist/js/bootstrap.min.js"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSCasino",
  description: "Đánh bài đê",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyles />
        <StyledComponentsRegistry>
          <ReduxProvider>
            <ReactQuery>
              <ModalPage />
              <LayOutPage>{children}</LayOutPage>
            </ReactQuery>
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
