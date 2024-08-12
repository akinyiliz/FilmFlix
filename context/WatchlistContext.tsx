"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Movie from "@/types/movie";

type WatchlistContextType = {
  watchlist: Movie[];
  addToWatchlist: (item: Movie) => void;
  removeFromWatchlist: (id: number) => void;
};

const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    if (typeof window !== "undefined") {
      const storedWatchlist = localStorage.getItem("watchlist");
      return storedWatchlist ? JSON.parse(storedWatchlist) : [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
  }, [watchlist]);

  const addToWatchlist = (item: Movie) => {
    setWatchlist((prevWatchlist) => {
      const isAlreadyInWatchlist = prevWatchlist.some(
        (watchlistItem) => watchlistItem.id === item.id
      );

      if (!isAlreadyInWatchlist) {
        return [...prevWatchlist, item];
      }

      return prevWatchlist;
    });
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((item) => item.id !== id)
    );
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return context;
};
