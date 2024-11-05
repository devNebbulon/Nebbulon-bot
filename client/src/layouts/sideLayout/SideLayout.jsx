import { Link, Outlet } from "react-router-dom";
import "./sideLayout.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

const SideLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="sideLayout">
          <header>
            <div className="headerSection">
            <Link to="/" className="logo">
              <img src="/logoIcon.png" alt="" />
              {/* <span>NEBBULON</span> */}
            </Link>
            <div className="user">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            </div>
            <main>
              <Outlet />
            </main>
          </header>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default SideLayout;
