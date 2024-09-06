"use client";

import { Button } from "../@/components/ui/button";
import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
        <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
