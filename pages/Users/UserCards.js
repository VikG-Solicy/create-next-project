import { useEffect, useState } from 'react';
import Link from "next/link";
import { Box, Button, Card } from "@mui/material";
import axios from "axios";

const UserCards = () => {
    const [cards, setCards] = useState();
    
    useEffect(() => {
        const store = localStorage.getItem('users');
        if (store) setCards(JSON.parse(store));
    }, []);
    
    const getUsers = async () => {
        const users = await axios('https://jsonplaceholder.typicode.com/users');
        setCards(users.data);
        localStorage.setItem('users', JSON.stringify(users.data));
    };
    
    return (
        <Box>
            {!cards && (<Button variant="contained" onClick={getUsers}>get users</Button>)}
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {cards && cards.map(c =>
                    <Card key={c.id} sx={{ m: 3, p: 2, width: 200, border: '2px solid #1976d2', textAlign: 'center' }}>
                        <Link href={`/Users/${c.id}`}>{c.name}</Link>
                    </Card>,
                )}
            </Box>
        </Box>
    );
};

export default UserCards;