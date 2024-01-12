import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  alternates: {
    canonical: '/customers',
  },
};

export default function Page() {
    return <p>Customers Page</p>;
}