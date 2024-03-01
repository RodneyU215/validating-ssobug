import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSO-Callback | Platforms Starter Kit',
};

export default function SSOCallbackPage() {
  return <AuthenticateWithRedirectCallback />;
}
