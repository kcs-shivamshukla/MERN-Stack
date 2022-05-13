import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      flexDirection: "row",
    },
    "& .MuiAppBar-root": {
      flexDirection: "row",
    },
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "#6C63FF",
    textDecoration: "none",
    position: "relative",
    cursor: 'pointer'
  },
  icon: {
    marginLeft: "15px",
    fontSize: "60px",
    position: "absolute",
    color: "#6C63FF",
    top: "9px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  logout: {
    backgroundColor: "#6C63FF",
  },
}));
