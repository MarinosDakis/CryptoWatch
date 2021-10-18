import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '&.MuiTextField-root': {
      margin: theme.spacing(1),
      textAlign: "center",
      color: "red",
    },
    '&.MuiDivider-root': {
      borderColor: "#857687",
      borderWidth: "1.5px",
    },
    '&.MuiTypography-root': {
        textAlign: "center",
        fontFamily: "Arial",
    },
    '&.MuiInputBase-root': {
        textAlign: "center",
        fontFamily: "Arial",
        color: "red",
    },
  },
  card: {
    padding: theme.spacing(2),
    margin: "20px 0",
    width: 300,
    borderRadius: 45,
    border: "2px black solid",
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
   '.MuiInputBase-input': {
      color: "red",
  }
}));