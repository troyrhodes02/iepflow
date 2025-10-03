'use client';

import { Button, Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        minHeight: '100dvh',
        gap: 2
      }}
    >
      <Typography variant="h1" component="h1">
        IEPFlow
      </Typography>
      <Button variant="contained" color="primary">
        Themed MUI Button
      </Button>
    </Box>
  );
}
