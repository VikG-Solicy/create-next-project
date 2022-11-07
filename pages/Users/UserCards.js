import { useEffect, useState } from 'react';
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import axios from "axios";

const UserCards = () => {
    const [cards, setCards] = useState(null);
    
    useEffect(() => {
        const users = sessionStorage.getItem('users');
        if (users) setCards(JSON.parse(users));
        else setCards(undefined);
    }, []);
    
    const getUsers = async () => {
        const users = await axios('https://jsonplaceholder.typicode.com/users');
        setCards(users.data);
        sessionStorage.setItem('users', JSON.stringify(users.data));
    };
    
    return (
        <Grid container justifyContent="center">
            {cards === null ? null : !cards
                ? <Button variant="contained" onClick={getUsers}>get users</Button>
                : cards.map(c =>
                    <Grid item key={c.id} sx={{ m: 3, p: 2, width: 200, border: '2px solid #1976d2', textAlign: 'center' }}>
                        <Link style={{ textDecoration: 'none', color: " #1976d2" }} href={`/Users/${c.id}`}>{c.name}</Link>
                    </Grid>,
                )}
        </Grid>
    );
};

export default UserCards;