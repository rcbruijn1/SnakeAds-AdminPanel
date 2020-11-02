import { makeStyles } from '@material-ui/core';

export const useDashboardStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        padding: theme.spacing(4),
        maxWidth: 1280,
        minHeight: 700,
    },

    divider: {
        backgroundColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(3),
    },

    dialogContent: {
        padding: theme.spacing(5), 
        backgroundColor: theme.palette.primary.main, 
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        '&:first-child': {
            paddingTop: theme.spacing(5),
        },
    },

    select: {
        width: '50%',
    },
}));