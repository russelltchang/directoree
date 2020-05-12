import React, {useState} from "react";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  movie: {
    width: 285,
    margin: 18,
    padding: 0,
    display: 'inline-block',
  },
  cardMedia: {
    objectFit: 'fill'
  },
  cardContent: {
    height: 70,
  },
  cardActions: {
    padding: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    margin: '0 auto',
    cursor: 'pointer !important'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    margin: '0 auto',
    cursor: 'pointer !important'
  },
}));

const Movie = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card	className={classes.movie} variant="outlined">
      <CardActionArea disableRipple>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt="Movie Poster"
          title="Movie Poster"
          height="350"
          image={"/images/" + props.image}
        />
        <CardContent className={classes.cardContent} align="center">
          <Typography>
            {props.name} ({props.year})
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton
            className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
            onClick={handleClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent align="left">
            {props.desc}
            <hr/>
            {"IMDB Rating: "}{props.rating}
          </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  )
}

export default Movie;