import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { dataLeft, dataRight } from "../../constans/header-data";

export default function GlobalHeader() {
  return (
    <header className="bg-purple-primary py-[14px]">
      <div className="container flex flex-wrap items-center justify-center md:justify-between gap-y-4">
        <div className="flex items-center gap-x-12">
          {dataLeft.map((data, index) => {
            return (
              <div key={index} className="flex items-center gap-x-3">
                <data.icon className="w-4 h-4 text-white" />
                <p className="text-base text-[#F1F1F1] josefin-semibold">
                  {data.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-6">
          <ul className="flex items-center gap-x-4">
            {dataRight.map((data, index) => {
              return (
                <li key={index} className="flex items-center gap-x-1">
                  <p className="text-base text-[#F1F1F1] josefin-semibold">
                    {data.text}
                  </p>
                  <data.icon className="w-4 h-4 text-white" />
                </li>
              );
            })}
          </ul>

          <button>
            <ShoppingCartIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
