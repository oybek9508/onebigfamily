import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qs9d6la",
        "template_ejqrhke",
        form.current,
        "6Ba7R8wlOsjVo2o6p"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Grid sx={{ py: "4rem", px: "5rem" }} id="contacts">
      <form ref={form} onSubmit={sendEmail}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "47%", display: "grid", placeContent: "center" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Rufina",
                  fontWeight: 700,
                  mb: 4,
                }}
              >
                Get In Touch With One Big Family
              </Typography>
              <Typography
                sx={{ mt: 2, fontFamily: "PT_Serif", fontSize: "14px" }}
              >
                We&apos;re here to help. Fill out the form below and a member of
                the One Big Family team will get back to you as soon as
                possible.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "47%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  mb: 2,
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ flex: 1, width: "100%" }}>
                  <Typography sx={{ fontFamily: "PT_Serif", fontSize: "14px" }}>
                    Name
                  </Typography>
                  <TextField
                    sx={{ width: "97%" }}
                    type="text"
                    name="user_name"
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontFamily: "PT_Serif", fontSize: "14px" }}>
                    E-mail
                  </Typography>
                  <TextField
                    sx={{ width: "100%" }}
                    type="email"
                    name="user_email"
                  />
                </Box>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "PT_Serif", fontSize: "14px" }}>
                  Message
                </Typography>
                <TextField
                  multiline
                  rows={5}
                  sx={{ width: "100%" }}
                  name="message"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#4A7F51",
              mt: 4,
              fontSize: "16px",
              color: "#fff",
              px: 2,
              py: 1.5,
              width: "144px",
              fontFamily: "PT_Serif",
              textTransform: "capitalize",
            }}
            type="submit"
          >
            Send
          </Button>
        </Box>
      </form>
    </Grid>
  );
};

export default Contacts;
