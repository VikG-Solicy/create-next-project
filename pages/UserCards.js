import { useState } from 'react';
import { Box, Button, Card } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const UserCards = () => {
    const [cards, setCards] = useState();
    
    const getUsers = async () => {
        const users = await axios('https://jsonplaceholder.typicode.com/users');
        setCards(users.data);
    };
    
    return (
        <Box>
            <Button variant="contained" onClick={getUsers}>get users</Button>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {cards && cards.map(c =>
                    <Card key={c.id} sx={{ m: 3, p: 2, width: 200, border: '2px solid #1976d2', textAlign: 'center' }}>
                        <Link href={`/${c.id}`}>{c.name}</Link>
                    </Card>,
                )}
            </Box>
        </Box>
    );
};

export default UserCards;