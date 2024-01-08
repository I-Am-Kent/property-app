import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Typography from "../components/Typography"
import TextField from "../components/TextField"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

// function Copyright() {
//     return (
//         <React.Fragment>
//             {"© "}
//             <Link color={"inherit"} href="https://material-ui.com/">
//                 Your Website
//             </Link>{" "}
//             {new Date().getFullYear()}
//         </React.Fragment>
//     )
// }

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: theme.palette.primary.dark,
        color: "dark",
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: "flex",
        color: "white",
    },
    iconsWrapper: {
        height: 120,
    },
    icons: {
        display: "flex",
    },
    icon: {
        width: 48,
        height: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#36b38d",
        marginRight: theme.spacing(1),
        "&:hover": {
            backgroundColor: "#ff3366",
        },
    },
    list: {
        margin: 0,
        listStyle: "none",
        padding: 0,
    },
    listItem: {
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },
    language: {
        marginTop: theme.spacing(1),
        width: 150,
    },
    textcol: {
        color: "#36b38d",
    },
    text: {
        textAlign: "center",
    },
    HLine: {
        width: "100%",
    },
}))

const LANGUAGES = [
    {
        code: "en-US",
        name: "English",
    },
    {
        code: "fr-FR",
        name: "Français",
    },
]

export default function AppFooter() {
    const classes = useStyles()

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
            <Grid container spacing={0} columns={{ xs: 5, sm: 8, md: 12 }}>
                <Grid item xs={2}>
                    <p className = {classes.text}>Real Estate For Sale</p>
                    <hr className={classes.HLine}></hr>
                </Grid>
                <Grid item xs={2}>
                    <p className = {classes.text}>Houses</p>
                    <hr className={classes.HLine}></hr>
                </Grid>
                <Grid item xs={2}>
                    <p className = {classes.text}>Apartments & Units</p>
                    <hr className={classes.HLine}></hr>
                </Grid>
                <Grid item xs={2}>
                    <p className = {classes.text}>New Homes</p>
                    <hr className={classes.HLine}></hr>
                </Grid>
                <Grid item xs={2}>
                    <p className = {classes.text}>Popular Areas</p>
                    <hr className={classes.HLine}></hr>
                </Grid>
                <Grid item xs={2}>
                    <p className = {classes.text}>Popular Searches</p>
                    <hr className={classes.HLine}></hr>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate NSW</p>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate QLD</p>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate SA</p>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate ACT</p>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate VIC</p>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate WA</p>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate TAS</p>
                </Grid>
                <Grid item xs={3}>
                    <p className = {classes.text}>Real Estate NT</p>
                </Grid>
            </Grid>
          
            </Container>
        </Typography>
    )
}
