import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    margin: "20px 0",
    width: 400,
    borderRadius: 45,
    border: "#7e7878 solid 1px",
    boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)", 
  },
  url: {
    textDecoration: "none",
    color: "black",
  },
  img: {
    borderRadius: "45px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  }
}));