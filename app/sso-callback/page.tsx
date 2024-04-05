import { type Metadata } from 'next';
import SSOCallback from '@/components/sso-callback';

export const metadata: Metadata = {
  title: 'SSO-Callback | Platforms Starter Kit',
};

export default function SSOCallbackPage() {
  return <SSOCallback />;
}
