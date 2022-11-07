import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, Typography } from "@mui/material";
import axios from "axios";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

const Details = () => {
    const [user, setUser] = useState();
    const { id } = useRouter().query;
    
    useEffect(() => {
        if (id) getUsers();
    }, [id]);
    
    const getUsers = async () => {
        const userData = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(userData.data);
    };
    
    return user && (
        <Card sx={{ border: '1px solid #1976d2', backgroundColor: '#f1f7fd', color: '#1976d2', m: 2, p: 2, width: 300, textAlign: 'center' }}>
            <Typography variant="h5" m="15px" fontWeight="bold">About {user.name}</Typography>
            <Typography><PersonIcon fontSize="inherit" /> {user.username}</Typography>
            <Typography><AlternateEmailIcon fontSize="inherit" /> {user.email}</Typography>
            <Typography><HomeIcon fontSize="inherit" /> {user.address.street}</Typography>
        </Card>
    );
};

export default Details;