import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '&.MuiTextField-root': {
      textAlign: "center",
      justifyContent: "center",
    },
    '&.MuiDivider-root': {
      borderColor: "#857687",
      borderWidth: "1.5px",
    },
    '&.MuiTypography-root': {
      textAlign: "center",
      fontFamily: "Arial",
    },
    '&.MuiCardMedia-root': {
      objectFit: "scale-down",
    },
  },
  input: {
    textAlign: "center",
    fontSize: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: theme.spacing(3),
    margin: "20px 5px",
    width: "350px",
    borderRadius: 15,
    border: "#7e7878 solid 1px",
    boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
  },
  paper: {
    backgroundColor: "white",
    padding: theme.spacing(1),
    margin: "20px 5px",
    width: "600px",
    border: "#7e7878 solid 1px",
    boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
  },
  url: {
    textDecoration: "none",
    color: "black",
  },
  img: {
    height: "200px",
    width: "300px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    margin: theme.spacing(1),
    fontFamily: "Arial",
    textAlign: "center",
  },
  button: {
    color: "black",
    backgroundColor: "white",
    width: "fit-content",
    height: "50px",
  },
  alert: {
    marginBottom: 5,
    width: 500,
    justifyContent: "center",
    fontFamily: "Arial",
  }
}));