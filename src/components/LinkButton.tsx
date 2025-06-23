import { Button } from "@mui/material";
import { forwardRef } from "react";
import { blue, grey } from "./Colours";
import { rem } from "polished";

interface LinkButtonProps {
  title: string;
}

export const LinkButton = forwardRef<HTMLElement, LinkButtonProps>(
  ({ title }, ref) => (
    <Button
      sx={{
        color: blue,
        fontWeight: "bold",
        fontSize: { xs: "0.7rem", md: "1.2rem" },
        width: { xs: "max-width", md: rem(160) },
        border: `${rem(2)} solid black`,
        borderRadius: 2,
        backgroundColor: "white",
        ml: {xs: 1, md: 2},
        height: {xs: rem(30), md: rem(40)},
        textTransform: "capitalize",
      }}
      onClick={() => {
        if (ref && typeof ref !== "function" && ref.current) {
          ref.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      }}
    >
      {title}
    </Button>
  ),
);
