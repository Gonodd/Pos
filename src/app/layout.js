import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"]
});
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <div>
          <NavBar />
        </div>
        <div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
