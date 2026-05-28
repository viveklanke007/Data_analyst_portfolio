import "./globals.css";

export const metadata = {
  title: "Vivek Lanke | Data Analyst Portfolio",
  description:
    "Modern data analyst portfolio for Vivek Lanke, a BCA AI/ML student skilled in Python, SQL, Excel, Power BI, analytics, and visualization.",
  keywords: [
    "Vivek Lanke",
    "Data Analyst",
    "AI ML Graduate",
    "Power BI",
    "Python",
    "SQL",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Vivek Lanke" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
