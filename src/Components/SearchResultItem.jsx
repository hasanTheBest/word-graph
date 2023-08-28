import React from "react";

const SearchResultItem = ({ word: { word, defs, tags } }) => {
  let meta = tags?.join(", ");
  const definitions = defs?.map((def) => <li>{def}</li>);
  return (
    <div className="stat place-items-center">
      {meta && <div className="stat-title">{meta} </div>}
      <div className="stat-value">{word}</div>
      {defs && (
        <div className="stat-desc whitespace-normal">
          <ol className="list-decimal">{definitions}</ol>
        </div>
      )}
    </div>
  );
};

export default SearchResultItem;
