import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      fontSize: "2rem",
    },
    '& .MuiDivider-root': {
      borderColor: "white",
    }
  },
  sideBarText: {
    color: "orange",
    fontSize: "20px",
  },
  sideBarIcon: {
    color: "red",
  },
  text: {
    color: "white",
    textDecoration: "none",
  },
}));