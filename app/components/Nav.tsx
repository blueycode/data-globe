import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <span
        className="flex text-slate-200 items-center gap-14"
      >
        <Link
          className="flex items-center gap-4"
          href="/"
        >
          <Image
            src="/logo.svg"
            height={32}
            width={32}
            alt="logo"
          />
          <span
            className="text-slate-200 font-bold"
          >
            DataGlobe
          </span>
        </Link>

        <div className="flex gap-8">
          <Link href="/" className="hover:underline">Home</Link>
          <Link
            href="https://www.youtube.com/@blueycode"
            className="hover:underline"
            target="_blank"
          >Learn More</Link>
        </div>
      </span>
    </nav>
  );
}

export default Nav;