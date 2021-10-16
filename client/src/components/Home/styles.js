import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@mui/system';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      display: flexbox,
      margin: theme.spacing(1),
    },
  },
  card: {
    padding: theme.spacing(2),
    margin: "20px 0",
    width: 400,
    borderRadius: 45,
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