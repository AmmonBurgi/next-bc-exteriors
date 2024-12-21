export async function generateStaticParams() {
  return [
    { product: 'natural-stone' },
    { product: 'siding' },
    { product: 'manufactured-stone' },
    { product: 'brick' },
  ]
}

export default function ProductLayout({children}) {
  return children;
}