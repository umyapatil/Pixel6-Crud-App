import React from 'react'
import { useState } from 'react';
import "./customers.css"
import { Typography, Grid, Button, Container, Drawer, TextField, DialogContentText, DialogContent, DialogTitle, Dialog } from '@mui/material';

const Customers = () => {

    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const AddCustomer = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };




    return (
        <Container className="container">
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h6" gutterBottom>
                    Customers
                </Typography>
                <Button variant="contained" onClick={AddCustomer}>Add Customer</Button>
            </Grid>



            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} PaperProps={{
                style: { width: '50vw', padding: "25px" }
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6" gutterBottom>
                        Add Customer
                    </Typography>
                    <div style={{margin:"0 20px"}}>
                    <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" type="submit" onClick={AddCustomer}>Add Customer</Button>
                    </div>
                </Grid>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="pan"
                    name="pan"
                    label="PAN"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="number"
                    name="number"
                    label="Mobile Number"
                    type="number"
                    fullWidth
                    variant="standard"
                />

              
            </Drawer>

        </Container>
    )
}

export default Customers