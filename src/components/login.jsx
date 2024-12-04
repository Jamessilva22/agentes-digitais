import React, { useState } from "react";
import axios from "axios";
import logoGovPernambuco from "../assets/logoGovPernambuco.jpg";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      if (response.data.success) {
        console.log("usuário logado.");
        navigate("/beneficiario");
      } else {
        console.log("credenciais incorretas", response.data.message);
      }
    } catch (error) {
      console.error("algo de errado não está certo:", error);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "center",
      }}
    >
      {/* Formulário de login */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          Tela de login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <a href="?seFoda">Esqueceu a senha?</a>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Imagem no rodapé */}
      <Box
        component="img"
        src={logoGovPernambuco}
        alt="Logo Governo de Pernambuco"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "300px",
          paddingBottom: 2,
        }}
      />
    </Container>
  );
};

export default Login;
