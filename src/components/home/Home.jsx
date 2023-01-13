import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home-wrapper container max-w-full px-4">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3 ...">01</div>
          <div class="col-span-2 ...">02</div>
          <div class="row-span-2 col-span-2 ...">03</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
