import React from "react";
import { useSelector } from "react-redux";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

import GroupList from "./GroupList";

const useStyles = makeStyles(() => ({
  // Hide drag handle icon since this isn't the home page
  widgetIcon: {
    display: "none",
  },
  widgetPaperDiv: {
    padding: "1rem",
    height: "100%",
  },
  widgetPaperFillSpace: {
    marginTop: "1rem",
  },
  container: {
    padding: "1rem",
  },
}));

const GroupManagement = () => {
  const classes = useStyles();
  const allGroups = useSelector((state) => state.groups.all)?.filter(
    (group) => !group.single_user_group
  );

  return (
    <Paper className={classes.container}>
      <Typography variant="h5">Group Management</Typography>
      <GroupList title="All Groups" groups={allGroups} classes={classes} />
    </Paper>
  );
};

export default GroupManagement;
