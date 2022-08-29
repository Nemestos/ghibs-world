import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import { ClientStyleContext } from "./lib/emotion/context";
import createEmotionCache from "./lib/emotion/createEmotionCache";
import { hydrateRoot } from "react-dom/client";
interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>
);
