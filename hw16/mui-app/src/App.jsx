import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Мой сайт
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Доброго времени суток!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          Сайт на базе Material UI.
        </Typography>

        <Button variant="contained" onClick={handleOpen}>
          Открыть окно
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Приветствие</DialogTitle>
        <DialogContent>
          <DialogContentText>
            САЛАМАЛЕЙКУУМ
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;