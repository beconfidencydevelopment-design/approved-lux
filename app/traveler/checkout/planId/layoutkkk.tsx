// This can be a server component
export async function generateStaticParams() {
  // Pre-render some common plan IDs
  return [
    { planId: '4' },
    { planId: '5' },
    { planId: '6' },
  ];
}

export const dynamicParams = true;

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}