import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardActions, CardContent,
  Button, Typography, IconButton
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2,"0");
  const month = (date.getMonth() +1).toString().padStart(2,"0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`
};

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div>
      <IconButton onClick={() => routeTo("/home")}>
        <HomeIcon />
      </IconButton>

      {meetings.length > 0 ? (
        meetings.map((e) => (
          <Card key={e.meetingCode} variant="outlined" style={{ margin: '15px' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Meeting Code: {e.meetingCode}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date: {formatDate(e.date)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => routeTo(`/${e.meetingCode}`)}>
                Rejoin
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="body2" style={{ margin: "20px" }}>
          No meeting history found.
        </Typography>
      )}
    </div>
  );
}
