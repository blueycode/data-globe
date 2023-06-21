import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-between items-center mb-12 gap-28">
      <span className="text-slate-400 text-xl">
        Explore the World's Wonders:
        Discover Country Info and Culture at Your Fingertips!
      </span>

      <Image
        src="/world.svg"
        width={400}
        height={400}
        alt="World Map"
        className="opacity-60 -translate-y-8"
      />
    </div>
  );
}

export default Banner;