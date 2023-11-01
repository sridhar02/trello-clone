import React from "react";

import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  ClerkProvider,
} from "@clerk/clerk-react";

export const PrivateRoute = ({ children }) => {

  return (
    <>
      <SignedIn >
        {children}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
