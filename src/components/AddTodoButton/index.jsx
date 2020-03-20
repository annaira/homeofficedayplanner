import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';

const AddTodoButton = ({handleOpenAddTodo}) => {
    const classes = useStyles();

    return (
        <Fab color="secondary" aria-label="add" onClick={handleOpenAddTodo} className={classes.fab}>
            <AddIcon/>
        </Fab>
    )
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(5),
        right: theme.spacing(2),
    },
}));

export default AddTodoButton;