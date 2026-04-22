"use client";

import dynamic from "next/dynamic";

const GSTC = dynamic(() => import("./gstc"), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <h1>Gantt Schedule Timeline Calendar</h1>
      <GSTC />
    </div>
  );
};