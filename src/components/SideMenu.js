import React from "react";
import { makeStyles, FormControl, Select, Typography } from "@material-ui/core";
import * as employeeService from "../services/employeeService";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: "0px",
    width: "320px",
    height: "100%",
    paddingTop: "200px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: "#253053",
  },
  select: {
    minHeight: "100vh",
    overflow: "hidden",
    color: "white",
  },
  title: {
    color: "white",
  },
});

export default function SideMenu(props) {
  const classes = useStyles();
  const {department, setDepartment} = props;

  const onSelectDepartment = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(+options[i].value);
      }
    }
    setDepartment(value);
  };

  return (
    <div className={classes.sideMenu}>
      <Typography variant="h5" className={classes.title}>
        Department
      </Typography>
      <FormControl>
        <Select
          multiple
          native
          value={department}
          onChange={onSelectDepartment}
          label="Department"
          inputProps={{
            id: "department",
            className: classes.select,
          }}
        >
          <option value={0}>ALL</option>
          {employeeService.getDepartmentCollection().map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
