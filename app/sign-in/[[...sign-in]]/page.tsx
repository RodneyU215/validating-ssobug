'use client';
import { useSignIn } from '@clerk/nextjs';

export default function Page() {
  const { signIn, isLoaded: signInLoaded } = useSignIn();

  const continueWithGoogle = async () => {
    if (!signInLoaded) return null;
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/',
      });
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div className="flex justify-center py-24">
      <button onClick={continueWithGoogle}>
        Continue With Google
      </button>
    </div>
  );
}
