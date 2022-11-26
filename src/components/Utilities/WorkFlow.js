import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ListAltIcon from '@mui/icons-material/ListAlt'; import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TaskIcon from '@mui/icons-material/Task'; 
import CheckBoxIcon from '@mui/icons-material/CheckBox'; 
import Typography from '@mui/material/Typography';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
function WorkFlow() {
  return (
      <Timeline position="alternate">
          <TimelineItem>
              <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
              >
        
                  
              </TimelineOppositeContent>
              <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                      <ListAltIcon />
                  </TimelineDot>
                  <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                      Project Brief
                  </Typography>
                  <Typography variant="body2"
                      color="text.secondary"> Provide us with a detailed brief for your project.This will include discussing sizes, detailing, 
                      location and other requirements for your project.
                  </Typography>           
              </TimelineContent>
          </TimelineItem>
          <TimelineItem>
              <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  variant="body2"
                  color="text.secondary"
              >
              
              </TimelineOppositeContent>
              <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                      <TextSnippetIcon />
                  </TimelineDot>
                  <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                      QUOTE
                  </Typography>
                  <Typography variant="body2"
                      color="text.secondary"> We provide you with a detailed quotation that outlines 
                all the details for your project. No hidden costs.</Typography>
              </TimelineContent>
          </TimelineItem>
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" variant="outlined">
                      <TaskIcon />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                    QUOTATION APPROVAL 
                  </Typography>
                  <Typography variant="body2"
                      color="text.secondary">
                    Once you are satisfied with the quotation and  provided us with approval,
                    your project begin.
                    </Typography>
              </TimelineContent>
          </TimelineItem>
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot color="secondary">
                      <HourglassEmptyIcon />
                  </TimelineDot>
                  <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                      PROJECT BEGINS
                  </Typography>
                  <Typography variant="body2"
                      color="text.secondary">
                    Once your project begins, our team will keep you up to date on developments. 
                    We pride ourselves on delivering steel structures on time and on budget.   
                    </Typography>
              </TimelineContent>
          </TimelineItem>


          <TimelineItem>
              <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  <TimelineDot color="success">
                      <CheckBoxIcon/>
                  </TimelineDot>
                  <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Typography variant="h6" component="span">
                      PROJECT COMPLETED
                  </Typography>
                  <Typography variant="body2"
                      color="text.secondary">
                      As soon as the project is completed, 
                      we inspect the work and final payments can be made. 
                  </Typography>
              </TimelineContent>
          </TimelineItem>
      </Timeline>
  )
}



export default WorkFlow
