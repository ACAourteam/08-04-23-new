import { createUseStyles } from "react-jss";

export const useTasksStyle = createUseStyles({
  parent: {
    background: "#333333",
    color: "white",
    height: "100%",
    width: "100%",
  },
  menu: {
    width: "100%",
    minHeight: "50px",
    position: "fixed",
    zIndex: "10",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#535353",
  },
  main: {
    paddingTop: "120px",
    width: "100%",
    background: "#333333",
  },
  table: {
    position: "relative",
    left: 0,
    right: 0,
    margin: "auto",
    width: "80%",
    textAlign: "center",
    "& table, thead, tr, tbody": {
      width: "100%",
    },

    "& td": {
      textAlign: "center",
      padding: "16px",
    },
    "& td:last-child": {
      position: "relative",
    },
    "& td:last-child button": {
      position: "absolute",
      top: 12,
      right: 30,
    },
    "& tr:nth-child(even) ": {
      backgroundColor: "gray",
      color: "black",
    },
  },
});
