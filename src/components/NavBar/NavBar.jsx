import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static" className="items-center p-4">
      <Box className="flex justify-between w-full lg:w-8/12">
        <Typography variant="h6" component="h1" color="inherit">
          Todo App
        </Typography>
        <Link
          color="inherit"
          className="text-white font-bold py-2 px-4 rounded"
          to="/login"
          component={RouterLink}
        >
          Login
        </Link>
      </Box>
    </AppBar>
  );
}
