import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
      Click{" "}
      <Link href="/blogs">
        <a>here</a>
      </Link>{" "}
      to read more
    </div>
  );
}

export default Home;
