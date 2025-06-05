import "../globals.css";

import { headers } from "next/headers";

import AppDataProvider from "@/contexts/AppDataContext";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: "B&C Exteriors - Exterior Remodeling Services in Utah",
  description: "B&C Exteriors offers top-quality exterior remodeling services in Utah Valley, including...",
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  const [productsRes, inspirationsRes, categoriesRes] = await Promise.all([
    fetch(`${baseUrl}/api/products`),
    fetch(`${baseUrl}/api/inspirations`),
    fetch(`${baseUrl}/api/categories`),
  ]);

  const [products, inspirations, categories] = await Promise.all([
    productsRes.json(),
    inspirationsRes.json(),
    categoriesRes.json(),
  ]);

  console.log('Products:', products);
  console.log('Inspirations:', inspirations);
  console.log('Categories:', categories);

  return (
    <html lang="en">
      <body>
        <div className="frame">
          <AppDataProvider
            products={products}
            inspirations={inspirations}
            categories={categories}
          >
            <Header />
              <main>
                {children}
              </main>
            <Footer />
          </AppDataProvider>
        </div>
      </body>
    </html>
  );
}
