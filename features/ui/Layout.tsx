import MainHeader from "./MainHeader";
import { Children } from "@/helpers/types";

function Layout({ children }: Children) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
