import Image from "next/image";
import Link from "next/link";

import logo from "../assets/images/logo-kodia-white.png";

export function KodiaLogo() {
  return (
    <Link
      href="/"
      className="mb-2 flex h-20 items-center justify-center rounded-md bg-black"
    >
      <Image src={logo} alt="Logo" width={100} height={80} priority />
    </Link>
  );
}
