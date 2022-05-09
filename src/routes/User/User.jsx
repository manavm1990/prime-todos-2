import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function User() {
  const { username } = useParams();

  return (
    <Container>
      <Typography component="h2" variant="h3">
        User: {username}
      </Typography>
    </Container>
  );
}
