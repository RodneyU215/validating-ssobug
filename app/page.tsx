import {
  OrganizationSwitcher,
  SignedIn,
  UserButton,
} from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen">
        <SignedIn>
          <div className="block">
            <OrganizationSwitcher afterCreateOrganizationUrl="/" />
          </div>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </main>
  );
}
