import React,{useState} from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles } from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//import { makeStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function Accodion() {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (e,isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Add Personal Recipe
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStyle: "none" }}>
              <li>Add URL</li>
              <li>Your very own</li>
              <li>Add photo</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Previously Selected Recipe
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStyle: "none" }}>
              <li>Curry</li>
              <li>Paneer</li>
              <li>Chicken</li>
              <li>Fried Dall</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Edit Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStyle: "none" }}>
              <li>Name</li>
              <li>Address</li>
              <li>Mobile Number</li>
              <li>Email</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Edit Preferences</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStyle: "none" }}>
              <li>Chicken</li>
              <li>Paneer</li>
              <li>Bread</li>
              <li>Rice</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>My Collections</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStyle: "none" }}>
              <li>Veg</li>
              <li>Non-Veg</li>
              <li>Juice</li>
              <li>Milk</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>My List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol style={{ listStyle: "none" }}>
              <li>Rice</li>
              <li>Paneer</li>
              <li>Daal</li>
              <li>Chicken</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

