import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto',
        marginTop: theme.spacing(3),
      },
      header: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
      },
      textField: {
        marginBottom: theme.spacing(2),
      },
      button: {
        marginTop: theme.spacing(2),
      },
      countryCode: {
        width: '30%',
        marginRight: theme.spacing(2),
      },
      phoneInput: {
        width: '70%',
      },
}));

export default useStyles;