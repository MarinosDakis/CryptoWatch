import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: "20px 0",
  },
  priceButton: {
    marginBottom: 10,
  },
  card: {
      width: "200px",
  }
}));