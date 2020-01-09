import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 200,
    backgroundColor: 'cyan'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardView(props) {
  const classes = useStyles();
  let style;
  switch(props.title){
    case 'Total Flights':
    style = {backgroundColor: '#fed8b1'};
    break;
    case 'Total Passengers':
    style = {backgroundColor: 'cyan'};
    break;
    case 'Total Seats':
    style = {backgroundColor: 'purple'};
    break;
    default:
  }
  return (
    <Card style = {style} className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <p> {props.total} </p>
      </CardContent>
    </Card>
  );
}