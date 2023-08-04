import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const space = Space_Mono({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description: "Catat-Catat aja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " " + ""}>
        <div className=" px-5 py-3">
          <nav>
            <p className="text-2xl text-amber-500">
              KuliKode
              <small className="text-gray-400" style={space.style}>
                .online
              </small>
            </p>
          </nav>
          <main className="flex w-full flex-col items-center bg-slate-100 shadow-lg rounded-md p-3 bg-amber-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
