import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container className="mt-4" component="main">
      <Typography variant="h3" component="h2">
        Hello World
      </Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad ipsa,
        sunt sit earum excepturi voluptatem quae. Eum itaque sequi modi odio
        quae, magnam, pariatur autem ratione iste quidem repellat.
      </Typography>
    </Container>
  );
}
