import React from "react";

import { v4 } from 'uuid';

export default function CardTags({ tags }) {
  return (
    <div className="Card__tags h-1/5 flex items-center flex-wrap gap-2">
      {tags.map((tag) => {
        return (
          <span
            key={v4()}
            className="Card__tag px-2"
            style={{
              
              backgroundColor: tag.colorBG,
              color: tag.colorLetter,
              borderRadius: "5px"
            }}
          >
            {tag.name}
          </span>
        );
      })}
    </div>
  );
}
