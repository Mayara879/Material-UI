import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="Clique aqui">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}