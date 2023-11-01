import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export const PrivateRoute = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);
