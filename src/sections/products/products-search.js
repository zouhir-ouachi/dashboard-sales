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

export const ProductsSearch = () => (
  <Card sx={{ p: 2 }}>
      <OutlinedInput
        defaultValue=""
        placeholder="Search products"
        fullWidth
        sx={{ maxWidth: 500 }}
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
      />

  </Card>
);
