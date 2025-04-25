import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

// Configuração da fonte Poppins com pesos variados
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'UniGate | Sistema de Processos Seletivos',
  description: 'Solução integrada para inscrição e agendamento de candidatos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning className={poppins.variable}>
      <body className="font-sans antialiased">
        <main className="min-h-screen">
        {children}
        </main>
      </body>
    </html>
  );
}
