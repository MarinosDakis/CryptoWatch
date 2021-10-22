import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '&.MuiTextField-root': {
      textAlign: "center",
    },
    '&.MuiDivider-root': {
      borderColor: "#857687",
      borderWidth: "1.5px",
    },
    '&.MuiTypography-root': {
      textAlign: "center",
      fontFamily: "Arial",
    },
  },
  input: {
    textAlign: "center",
    fontSize: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: theme.spacing(2),
    margin: "20px 0",
    borderRadius: 5,
    border: "#7e7878 solid 1px",
    boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
  },
  url: {
    textDecoration: "none",
    color: "black",
  },
  img: {
    borderRadius: "45px",
    marginBottom: "10px",
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
}));