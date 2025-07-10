import { useState } from "react";

const ReadMore = () => {
  const [more, setMore] = useState(false);
  return (
    <div>
      <button onClick={() => setMore(true)}>ReadMore</button>
      {more && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores
          corporis ad. Ratione quas deleniti esse ut minus soluta odit.
        </p>
      )}
    </div>
  );
};

export default ReadMore;
