import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Card, Typography } from "@mui/material";

const Details = () => {
    const [user, setUser] = useState();
    const { id } = useRouter().query;
    
    useEffect(() => {
        getUsers();
    }, [id]);
    
    const getUsers = async () => {
        const userData = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(userData.data);
    };
    
    return (
        <Card sx={{ background: 'gray', color: 'white', m: 2, p: 2, width: 300, textAlign: 'center' }}>
            <Typography variant="h4">User Details</Typography>
            <Typography>User &gt; {user?.username}</Typography>
            <Typography>Username &gt; {user?.name}</Typography>
            <Typography>User email &gt; {user?.email}</Typography>
            <Typography>Address &gt; {user?.address?.street}</Typography>
        </Card>
    );
};

export default Details;