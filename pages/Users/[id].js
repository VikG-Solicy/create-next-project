import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Card, Typography } from "@mui/material";

const Details = () => {
    const [user, setUser] = useState();
    const { id } = useRouter().query;
    console.log(id);
    useEffect(() => {
        if (id) getUsers();
    }, [id]);
    
    const getUsers = async () => {
        const userData = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(userData.data);
    };
    
    return user && (
        <Card sx={{ border: '1px solid #1976d2', color: '#1976d2', m: 2, p: 2, width: 300, textAlign: 'center' }}>
            <Typography variant="h4" m="15px" fontWeight="bold">About {user.name}</Typography>
            <Typography>username &gt; {user?.username}</Typography>
            <Typography>email &gt; {user?.email}</Typography>
            <Typography>address &gt; {user?.address?.street}</Typography>
        </Card>
    );
};

export default Details;