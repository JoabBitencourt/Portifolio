import React from "react";

export default function PortifolioTagsFilter({ filter }) {
  return (
    <div className="PortifolioTagsFilters w-10/12 flex items-center justify-end">
      <div className="PortifolioTagsFilters__filter flex gap-2 items-center justify-end">
        <img src="./favicon.ico" alt="" width={30} height={30} />
        <span>Filtro </span>
      </div>
    </div>
  );
}
