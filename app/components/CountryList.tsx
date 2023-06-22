"use client";

import { ChangeEvent, useEffect, useState } from "react";
import ICountry from "../interfaces/ICountry";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

const CountryList = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const c = await response.json();

      setCountries(c);
      setFilteredCountries(c);
    }

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((c) => {
      return c.name.common.toLowerCase().includes(search.toLocaleLowerCase());
    });

    setFilteredCountries(filtered);
  }, [search]);

  const filterCountries = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <section className="flex flex-col gap-6">
      <input
        type="search"
        value={search}
        className="w-60 px-4 py-2 rounded-full outline-none bg-slate-400 placeholder:text-slate-900"
        placeholder="Search..."
        onChange={(e) => filterCountries(e)}
      />
      <h3 className="text-slate-200 font-bold text-3xl">
        Country List
      </h3>

      <div className="grid grid-cols-5 gap-5 justify-between">
        {
          filteredCountries && filteredCountries.map((c, k) => {
            return (
              <Fade triggerOnce={true} key={k}>
                <div
                  className="bg-gradient-to-t from-slate-500 to-slate-400 h-72 rounded-lg flex flex-col px-4 py-8 items-center justify-between shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Image
                    src={c.flags.svg}
                    width={72}
                    height={72}
                    alt={`${c.name.common} flag`}
                    className="shadow-lg rounded-full h-14 w-14"
                  />

                  <div className="flex flex-col items-center">
                    <h3 className="font-bold text-center fext-slate-900">{c.name.common}</h3>
                    <div className="text-slate-900">{c.region}</div>
                  </div>

                  <Link
                    href={`/country/${c.ccn3}`}
                    className="bg-slate-800 text-slate-200 py-1 px-6 rounded-2xl text-sm hover:bg-slate-700"
                  >
                    View Details
                  </Link>
                </div>
              </Fade>
            )
          })
        }
      </div>
    </section>
  )
}

export default CountryList;