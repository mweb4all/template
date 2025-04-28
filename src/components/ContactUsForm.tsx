import { Stack, Typography, Box, Button, SxProps } from "@mui/material";
import { rem } from "polished";

export interface ContactUsFormProps {
     sx?: SxProps;
}

export const ContactUsForm = ({sx}: ContactUsFormProps) => {
    return(
        <Box
            sx={{
                maxWidth: 600,
                backgroundColor: "white",
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: 3,
                mt: 4,
                ...sx
            }}
        >
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
            Contact Us
        </Typography>
        <Box
            component="form"
            onSubmit={(e) => {}}
            sx={{
            backgroundColor: "white",
            padding: 3,
            }}
        >
            <Stack spacing={2}>
            <>
                <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                }}
                />
                <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                }}
                />
                <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                }}
                />
                <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ alignSelf: "flex-end" }}
                >
                Send Message
                </Button>
            </>
            </Stack>
        </Box>
    </Box>
    );
}