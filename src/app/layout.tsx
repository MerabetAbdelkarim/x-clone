import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className="max-w-screen-md lg:max-w-screen-lg mx-auto flex justify-between ">
            <div className="left-bar">LeftBar</div>
            <div className="content">{children}</div>
            <div className="right-bar">RightBar</div>
          </div>
      </body>
    </html>
  );
}
