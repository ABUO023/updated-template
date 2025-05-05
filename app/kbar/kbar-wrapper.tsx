// kbar-wrapper.tsx
"use client";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";
import clsx from "clsx";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import getActions from "./kbar-util";

export default function KBarWrapper({ children }: { children: ReactNode }) {
  const router = useRouter();
  const actions = getActions(router);

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="z-50 dark:bg-black/50 backdrop-blur-sm">
          <KBarAnimator className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-zinc-800">
            <KBarSearch className="w-full p-4 bg-neutral-100 dark:bg-black text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-500 outline-none rounded-xl" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="px-4 py-2 text-xs uppercase text-neutral-500 dark:text-neutral-400">
            {item}
          </div>
        ) : (
          <div
            className={clsx(
              "px-4 py-3 cursor-pointer flex items-center justify-between text-neutral-900 dark:text-white",
              active
                ? "bg-neutral-200 dark:bg-zinc-800"
                : "bg-transparent dark:bg-zinc-900"
            )}
          >
            {item.name}
            {item.shortcut?.length ? (
              <div className="flex gap-1">
                {item.shortcut.map((sc) => (
                  <kbd
                    key={sc}
                    className="px-1 py-0.5 text-xs "
                  >
                    {sc}
                  </kbd>
                ))}
              </div>
            ) : null}
          </div>
        )
      }
    />
  );
}
