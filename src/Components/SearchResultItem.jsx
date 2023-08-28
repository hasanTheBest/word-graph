import React from "react";

const SearchResultItem = ({ word: { word, defs, tags } }) => {
  let meta = tags?.join(", ")
  const definitions = defs?.map((def) => (
    <li>{def}</li>
  ))
  return (
    <div className="stat place-items-center">
      {meta && (<div className="stat-title">{meta} </div>)}
      <div className="capitalize text-xl mb-4 font-semibold">{word}</div>
      {defs && (<div className="stat-desc whitespace-normal">
        <ol className="list-decimal overflow-y-scroll max-h-32">
          {definitions}
        </ol>
      </div>)}
    </div>
  );
};

export default SearchResultItem;
