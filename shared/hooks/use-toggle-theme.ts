import { useStore } from "effector-react";
import { useCallback } from "react";
import { $theme, toggleThemeFx } from "../model/toggle-teme";

export const useToggleTheme = () => {
  const theme = useStore($theme);

  const toggleTheme = useCallback(() => {
    toggleThemeFx();
  }, []);
  return {
    theme,
    toggleTheme,
  };
};
