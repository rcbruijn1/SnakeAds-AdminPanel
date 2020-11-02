import { makeStyles } from '@material-ui/core';

export const useAppBarStyles = makeStyles(theme => ({
    appBar: {
        marginBottom: theme.spacing(5),
    },

    button: {
        marginLeft: theme.spacing(1.5),
    },
}));