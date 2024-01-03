import { styled, Typography } from "@mui/material";

const CenteredTypography = styled(Typography)(({ theme }) => ({
  root: {
    textAlign: "center",
  },
  h2: {
    marginTop: theme.spacing(3),
  },
}));

export default CenteredTypography;
