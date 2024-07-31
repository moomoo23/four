import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg:white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between vorder-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>LOGO</span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              {/*ADD BUTTON VARIANTS className={buttonVariants(variant:"ghost", size:"sm"*/}
              <Link
                href="/about"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                About us
              </Link>
              <Link
                href="/tools"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Tools
              </Link>
              <Link
                href="/academy"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Academy
              </Link>

              {/*add LoginLink and Register(link) from kinde!*/}
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Navbar;
