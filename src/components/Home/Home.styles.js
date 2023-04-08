import { createUseStyles } from "react-jss";

export const useHomeStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    color: "white",
  },
  top: {
    width: "100%",
    minHeight: "70px",
    position: "relative",
    background: "#535353FF",
    "& div": {
      position: "absolute",
      right: 10,
      top: 10,
    },
  },
  main: {
    marginTop: 60,
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    background: "#333333",
    textAlign: "center",
  },
  types: {
    "& span": {
      display: "inline-block",
      width: "450px",
      height: "80px",
      fontSize: "50px",
      background: "#519A98",
      borderRadius: "5px",
      margin: "auto",
      letterSpacing: 5,
    },
  },

  downArrowIcon: {
    width: "40px",
    height: "50px",
    margin: "10px 0",
  },

  type: {
    color: "#519A98",
    fontWeight: "900",
    letterSpacing: 2,
    fontSize: 20,
    "& div": {
      padding: 5,
      transition: "0.3s",
    },

    "& div span": {
      transition: "0.3s",
    },
    "& div span:hover": {
      display: "inline-block",
      color: "orange",
      transform: "scale(1.05)",
    },
  },

  description: {
    width: "70%",
    color: "#9F95EC",
    fontFamily: "verdana",
    margin: "auto",
    padding: "20px",
    transition: "0.5s",
    "&:hover": {
      color: "orange",
    },
  },
  label: {
    "& button": {
      width: "250px",
      height: "65px",
      fontSize: "35px",
      letterSpacing: 3,
    },
  },

  task: {
    padding: "20px 0",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 1fr",
  },
  taskType: {
    color: "#519A98FF",
  },

  bottom: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#333333",
  },
  tasks: {
    border: "2px solid white",
  },
});
