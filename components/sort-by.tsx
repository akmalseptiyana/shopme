import { ListBulletIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

import { FormGroup } from "./ui/form/form-group";
import { InputSelect } from "./ui/form/input-select";
import { InputText } from "./ui/form/input-text";

type Props = {
  view: boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SortBy({ view, setView }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-y-8">
      <div>
        <h3 className="josefin-bold text-xl text-navy-blue">
          Ecommerce Accesories & Fashion item
        </h3>
        <p className="lato-regular mt-2 text-xs text-sub-text">
          About 20 result (0.62 seconds)
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
        <FormGroup className="items-center space-x-2">
          <label htmlFor="sort-by" className="shrink-0">
            Sort By:
          </label>
          <InputSelect
            name="sortBy"
            id="sort-by"
            className=" py-[5px] px-[11px]"
          >
            <option value="desc">desc</option>
            <option value="asc">asc</option>
          </InputSelect>
        </FormGroup>
        <FormGroup className="items-center space-x-2">
          <label htmlFor="view">View:</label>
          <button onClick={() => setView(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={clsx(
                view === true ? "fill-pink-primary" : "fill-navy-blue",
              )}
            >
              <path d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zM4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z"></path>
            </svg>
          </button>
          <button onClick={() => setView(false)}>
            <ListBulletIcon
              className={clsx(
                "h-6 w-6",
                view === false ? "text-pink-primary" : "text-navy-blue",
              )}
            />
          </button>
        </FormGroup>
        <InputText type="text" className="h-8 max-w-[162px] pl-2" />
      </div>
    </div>
  );
}
