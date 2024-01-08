import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "../components/AppBar"
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar"
import { Link } from "react-router-dom"
import { Typography } from "@material-ui/core"

const styles = (theme) => ({
    title: {
        fontSize: 24,
        color: theme.palette.common.white,
        textAlign: "center",
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    right: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
})

function AppAppBar(props) {
    const { classes } = props

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            underline="none"
                            color="inherit"
                            className={classes.title}
                        >
                            Group K - Real Estate Project
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    )
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppAppBar)
