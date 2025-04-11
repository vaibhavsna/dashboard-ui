import "./globals.css";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "Quick Commerce Dashboard",
  description: "Created by nilesh vishwakarma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <div className=" flex gap-2 w-full">
            <Sidebar />
            <div className="w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
