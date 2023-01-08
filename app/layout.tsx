import "styles/globals.css"

// https://beta.nextjs.org/docs/rendering/server-and-client-components#moving-client-components-to-the-leaves
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <body className="min-w-screen min-h-screen">
                {children}
            </body>
        </html>
    );
}
