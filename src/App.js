import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Container } from '@mui/material';

const App = () => {
  const [blueTokens, setBlueTokens] = useState(0);
  const [bluePrefix, setBluePrefix] = useState('');
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(3);
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState('');
  const [redTokensPerRow, setRedTokensPerRow] = useState(3);
  const [tokensDisplay, setTokensDisplay] = useState([]);

  const generateTokens = () => {
    const blueTokensList = Array.from({ length: blueTokens }, (_, i) => `${bluePrefix}${i + 1}`);
    const redTokensList = Array.from({ length: redTokens }, (_, i) => `${redPrefix}${i + 1}`);
    setTokensDisplay({ blue: blueTokensList, red: redTokensList });
  };

  const clearFields = () => {
    setBlueTokens(0);
    setBluePrefix('');
    setBlueTokensPerRow(3);
    setRedTokens(0);
    setRedPrefix('');
    setRedTokensPerRow(3);
    setTokensDisplay([]);
  };

  const renderTokens = (tokens, perRow, color) => (
    <Grid container spacing={2}>
      {tokens.map((token, index) => (
        <Grid item key={index} xs={12 / perRow}>
          <Box
            textAlign="center"
            padding={1}
            borderRadius={1}
            style={{ backgroundColor: color, color: 'white' }} // Set token color here
          >
            {token}
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>Token Generator Application</Typography>

      <Box component="form" mb={4}>
        <TextField fullWidth label="Number of blue tokens" type="number" value={blueTokens} onChange={(e) => setBlueTokens(Number(e.target.value))} margin="normal" />
        <TextField fullWidth label="Blue token prefix" value={bluePrefix} onChange={(e) => setBluePrefix(e.target.value)} margin="normal" />
        <TextField fullWidth label="Blue tokens per row" type="number" value={blueTokensPerRow} onChange={(e) => setBlueTokensPerRow(Number(e.target.value))} margin="normal" />
        
        <TextField fullWidth label="Number of red tokens" type="number" value={redTokens} onChange={(e) => setRedTokens(Number(e.target.value))} margin="normal" />
        <TextField fullWidth label="Red token prefix" value={redPrefix} onChange={(e) => setRedPrefix(e.target.value)} margin="normal" />
        <TextField fullWidth label="Red tokens per row" type="number" value={redTokensPerRow} onChange={(e) => setRedTokensPerRow(Number(e.target.value))} margin="normal" />
        
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary" onClick={generateTokens}>Generate</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="secondary" onClick={clearFields}>Clear</Button>
          </Grid>
        </Grid>
      </Box>

      {tokensDisplay.blue && (
        <Box mb={4}>
          <Typography variant="h6">Blue Tokens</Typography>
          {renderTokens(tokensDisplay.blue, blueTokensPerRow, 'blue')}
        </Box>
      )}

      {tokensDisplay.red && (
        <Box mb={4}>
          <Typography variant="h6">Red Tokens</Typography>
          {renderTokens(tokensDisplay.red, redTokensPerRow, 'red')}
        </Box>
      )}
    </Container>
  );
};

export default App;
