import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: "%s | Acme Dashboard",
		default: "Acme Dashboard",
	},
	description: "The official Next.js Learn Dashboard built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<meta name="keywords" content="Invoice, Dashboard, Customers" />
			<meta property="og:title" content="Expenses dashboard" />
			<meta
				property="og:description"
				content="Manage customer invoices in single place"
			/>
			<meta property="og:image" content="/favicon.ico" />
			<link rel="icon" href="/favicon.ico" />
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
