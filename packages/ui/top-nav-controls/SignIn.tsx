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
import { sign_in, google_sign_in, sign_up, sign_out } from "firebasepackage";

interface InputProps {
  goBack: () => void;
}

function SignIn({ goBack }: InputProps) {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeUsername = (event: any) => {
    setUsername(event.target.value);
    setErrorUsername("");
    setError("");
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
    setErrorPassword("");
    setError("");
  };

  const handleValidateInputs = () => {
    setError("");
    let passed = true;
    if (!username) {
      setErrorUsername(t("enter_username") as string);
      passed = false;
    }
    if (!password) {
      setErrorPassword(t("enter_password") as string);
      passed = false;
    }
    return passed;
  };
  const handleError = (error: any) => {
    let needToShowGenericError = true;
    if (error.includes("password")) {
      setErrorPassword(error);
      needToShowGenericError = false;
    }
    if (error.includes("user") || error.includes("email")) {
      setErrorUsername(error);
      needToShowGenericError = false;
    }
    if (needToShowGenericError) setError(error);
  };

  const handleSignIn = async () => {
    if (!handleValidateInputs()) return;
    await sign_in(username, password, goBack, handleError);
  };
  const handleGoogleSignIn = () => google_sign_in(goBack, handleError);
  const handleSignUp = () => {
    if (!handleValidateInputs()) return;
    sign_up(username, password, goBack, handleError);
  };

  return (
    <Paper sx={{ p: "20px 30px" }}>
      <Typography sx={{ fontSize: "2.25rem", pb: "20px" }}>
        {t("sign_in")}
      </Typography>

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
        {error && (
          <Typography
            sx={{ fontSize: "0.875rem", mt: "14px", color: "#d32f2f" }}
          >
            {error}
          </Typography>
        )}

        <Button
          onClick={handleSignIn}
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
        {t("use_social_media")}:
      </FormHelperText>

      <Stack direction="column" spacing={1}>
        <Button
          onClick={handleGoogleSignIn}
          variant="outlined"
          color="secondary"
        >
          {t("sign_in_with_google")}
        </Button>
        <Button onClick={() => {}} variant="outlined">
          {t("sign_in_with_facebook")}
        </Button>
        <FormHelperText sx={{ py: "6px", textAlign: "center" }}>
          {t("dont_have_an_account")}
        </FormHelperText>
        <Button onClick={handleSignUp} variant="contained" color="success">
          {t("sign_up")}
        </Button>
        <FormHelperText />
        <Button
          onClick={goBack}
          variant="outlined"
          color="error"
          fullWidth={true}
        >
          {t("cancel")}
        </Button>
      </Stack>
    </Paper>
  );
}

export default SignIn;
