import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

interface InputProps {
  goBack: () => void;
}

function SignIn({ goBack }: InputProps) {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleChangeUsername = (event: any) => {
    setUsername(event.target.value);
    setErrorUsername("");
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
    setErrorPassword("");
  };

  const formSubmit = () => {};

  return (
    <Paper sx={{ p: "20px 30px" }}>
      <Typography sx={{ fontSize: "2.25rem", pb: "20px" }}>
        {t("sign_in")}
      </Typography>
      {/* <Typography sx={{ my: "10px" }}>
        {t("with_username_and_password")}:
      </Typography> */}

      <Box component="form">
        <Stack direction="column" spacing={2} sx={{ justifyContent: "center" }}>
          <TextField
            value={username}
            onChange={handleChangeUsername}
            placeholder="..."
            label={t("username")}
            size="small"
            error={errorUsername !== ""}
            helperText={errorUsername}
          />
          <TextField
            sx={{ my: "20px" }}
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="***"
            label={t("password")}
            size="small"
            error={errorPassword !== ""}
            helperText={errorPassword}
          />
        </Stack>

        <Button
          onClick={() => {}}
          variant="contained"
          sx={{
            mt: "16px",
          }}
          fullWidth={true}
        >
          {t("sign_in")}
        </Button>
      </Box>

      <FormHelperText
        id="my-helper-text"
        sx={{ m: "18px 0 14px 0", textAlign: "center" }}
      >
        - {t("use_social_media").toLowerCase()} -
      </FormHelperText>

      <Stack direction="column" spacing={1}>
        <Button onClick={() => {}} variant="outlined">
          {t("sign_in_with_google")}
        </Button>
        <Button onClick={() => {}} variant="outlined">
          {t("sign_in_with_facebook")}
        </Button>
        <FormHelperText sx={{ py: "6px", textAlign: "center" }}>
          - {t("go_back").toLowerCase()} -
        </FormHelperText>
        <Button
          onClick={goBack}
          variant="outlined"
          color="secondary"
          fullWidth={true}
        >
          {t("cancel")}
        </Button>
      </Stack>
    </Paper>
  );
}

export default SignIn;
