import { UiHeader } from "@/shared/ui/ui-header";
import { Outlet } from "react-router-dom";
import { NavLinks } from "./nav-links";
import { Profile } from "./profile";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <UiHeader links={<NavLinks />} right={<Profile />} />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
}
