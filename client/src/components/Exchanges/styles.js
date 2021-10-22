import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  root: {
    '&.MuiCardMedia-root': {
      objectFit: "scale-down",
    },
    '&.MuiDivider-root': {
      borderColor: "#d1d1d1",
      borderWidth: "0.1px",
      margin: "10px 0",
    },
  },
  card: {
    backgroundColor: "white",
    padding: theme.spacing(3),
    margin: "20px 0",
    width: 450,
    height: "auto",
    borderRadius: 15,
    border: "#7e7878 solid 1px",
    boxShadow: "0 4px 5px 5px rgba(0, 0, 0, .2)",
  },
  url: {
    textDecoration: "none",
    color: "black",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    height: "200px",
    width: "300px",
  },
  text: {
    fontFamily: "Arial",
    marginTop: 5,
  }
}));