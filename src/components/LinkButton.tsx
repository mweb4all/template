import { Button } from "@mui/material";
import { forwardRef } from "react";
import { blue, grey } from "./Colours";
import { rem } from "polished";

interface LinkButtonProps {
    title: string
}

export const LinkButton = forwardRef<HTMLElement, LinkButtonProps>(({title}, ref) => (
        <Button
              sx={{
                color: blue,
                fontWeight: "bold",
                width: rem(120),
                border: `${rem(2)} solid black`,
                borderRadius: 2,
                backgroundColor: "white",
                ml: 2,
                height: rem(40),
                "&:hover": {
                  fontSize: rem(15),
                  backgroundColor: "white",
                },
              }}
              onClick={() => {
                if (ref && typeof ref !== "function" && ref.current) {
                    ref.current.scrollIntoView({
                      behavior: "smooth",
                    });
                }
                }
              }
            >
              {title}
        </Button>
    )
)

