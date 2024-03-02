import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

export default function Footer() {
  return (
    <Box mt="80x" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems='center' px="40px" pt="45px">
        <img src={Logo} alt='logo' width="200px" height="40px" />
        <Typography variant='h4' pb="40px">
          Made with ❤️
        </Typography>
      </Stack>
    </Box>
  )
}
