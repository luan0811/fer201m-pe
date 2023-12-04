
import { useFormik } from "formik";
import * as Yup from 'yup';
import { TextField, Button } from "@mui/material";
import * as React from 'react';
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DialogActions from "@mui/material/DialogActions";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddStaff() {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const postStaffUrl = 'https://6530c54b6c756603295f027d.mockapi.io/api/v1/news';
    const currDate = new Date();

    const formik = useFormik({
        initialValues: {
            name: "",
            color: "",
            price: "",
            Imprice: "",
            isTopOfTheWeek: "",
            color: "",
            origin: "",
            category: ""
        },

        // onSubmit: (values) => {
        //     values.isTopOfTheWeek = new Date(values.isTopOfTheWeek);
        //     axios.post(postStaffUrl, values)
        //     .then(
        //         response => {
        //             return response.data;
        //         })
        //         .then(data=> setOpen(true))
        //         .catch(error=>console.log(error.messprice));

        // },

        validationSchema: Yup.object({
            name: Yup.string().required("Required.").typeError("Please enter a name"),
            color: Yup.string().required("Required.").typeError("Please enter a color"),
            price: Yup.number().integer().required("Required.").typeError("Please enter a valid number"),
            image: Yup.string().url().required("Required.").typeError("Please enter a valid url"),
            isTopOfTheWeek: Yup.boolean().required("Required.").typeError("Please enter true/false"),
            color: Yup.string().required("Required.").typeError("Please enter a color"),
            origin: Yup.string().required("Required.").typeError("Please enter a origin"),
            category: Yup.string().required("Required.").typeError("Please enter a category"),
        }),

    });


    return (
        <div>
            <h1 className="font-pprices">Add new flower</h1>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
                    <TextField
                        label="color"
                        name="color"
                        value={formik.values.color}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.color && (<Typography variant="caption" color="red">{formik.errors.color}</Typography>)}
                    <TextField
                        label="price"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.price && (<Typography variant="caption" color="red">{formik.errors.price}</Typography>)}

                    <TextField
                        label="image"
                        name="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.image && (<Typography variant="caption" color="red">{formik.errors.image}</Typography>)}

                    <TextField
                        label="isTopOfTheWeek"
                        name="isTopOfTheWeek"
                        disabled
                        value={formik.values.isTopOfTheWeek}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        label="color"
                        name="color"
                        value={formik.values.color}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        label="origin"
                        name="origin"
                        value={formik.values.origin}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        label="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                    />


                </Stack>

                <Button variant="contained" size="small"
                    type='submit'>
                    Save
                </Button>

            </form>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Congraturation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}