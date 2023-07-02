import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import {
  Button,
  Card,
  CardActions,
  Grid,
  InputAdornment,
  OutlinedInput,
  Stack,
  SvgIcon,
} from "@mui/material";

export const OrdersSearch = () => (
  <Card sx={{ p: 2 }}>
    <Stack direction="row" spacing={3}>
      <OutlinedInput
        defaultValue=""
        placeholder="Search orders"
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
      />

      <OutlinedInput
        defaultValue=""
        placeholder="Search products"
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
      />

      <Button variant="contained" fullWidth sx={{ maxWidth: 200 }}>
        {" "}
        Filter
      </Button>
    </Stack>
  </Card>
);
