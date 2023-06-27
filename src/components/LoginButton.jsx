import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginButton () {

    return (
        <Button variant="contained" >
            <Link to="Login">Login or Register</Link>
        </Button>
    )
}