"use client";

import { useState } from "react";
import LayoutSwitch from "@/ui/LayoutSwitch";
import clsx from "clsx";

export default function Dashboard() {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <main className="grid grid-cols-4">
      <nav>
        <LayoutSwitch checked={checked} onChange={setChecked} />
      </nav>
      <section className={clsx("col-span-3 grid gap-4", checked ? "grid-cols-4" : "grid-cols-1")}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">Card {item}</h2>
            <p>This is the content for card {item}.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
