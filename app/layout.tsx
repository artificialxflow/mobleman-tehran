import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { CompanyProvider } from "../mobleman-tehran/hooks/use-company";
import { PermissionsProvider } from "../mobleman-tehran/hooks/use-permissions";
import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "سیستم ERP مبلمان تهران",
  description: "سیستم مدیریت یکپارچه مبلمان تهران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body>
        {React.createElement(
          CompanyProvider as any,
          null,
          React.createElement(
            PermissionsProvider as any,
            null,
            React.createElement(Layout, null, children)
          )
        )}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}