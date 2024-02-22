import { type HandleOAuthCallbackParams } from '@clerk/types';
import SSOCallback from '@/components/sso-callback';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSO-Callback | Platforms Starter Kit',
};

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams;
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  debugger;
  console.log(searchParams);
  return <SSOCallback searchParams={searchParams} />;
}
