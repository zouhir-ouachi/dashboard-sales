import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    FormControlLabel,
    InputAdornment,
    OutlinedInput,
    Paper,
    Stack,
    SvgIcon,
    Typography,
  } from "@mui/material";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
  
  const user = {
    avatar: "/assets/avatars/avatar-anika-visser.png",
    city: "Los Angeles",
    country: "USA",
    jobTitle: "Senior Developer",
    name: "Anika Visser",
    timezone: "GTM-7",
  };
  
  export const ProductInventory = () => (
    <>
    <Stack spacing={3}>
    <Card >
        <CardHeader  title="Visibility" />
    <Divider/>
      <CardContent>
      <Paper variant="outlined" sx={{padding: "8px"}} >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Online store" />
      </Paper>
      </CardContent>
    </Card>
    <Card>
        <CardHeader  title="Storage details" />
    <Divider/>
      <CardContent>
        <Stack spacing={1}>
        <OutlinedInput
        defaultValue=""
        placeholder="SKU"
        fullWidth
      />

<OutlinedInput
        defaultValue=""
        placeholder="Barcode"
        fullWidth
      />
      <OutlinedInput
        defaultValue=""
        placeholder="Weight"
        fullWidth
      />
        </Stack>
      </CardContent>
    </Card>
    <Card >
        <CardHeader  title="Inventory" />
    <Divider/>
      <CardContent>
      <Paper variant="outlined" sx={{padding: "8px"}} >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Track inventory" />
      </Paper>
      </CardContent>
    </Card>
    <Card>
        <CardHeader  title="Category" />
    <Divider/>
      <CardContent>
      <OutlinedInput
        defaultValue=""
        placeholder="Start typing to search for categories"
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
      />
      </CardContent>
    </Card>
    <Card>
        <CardHeader  title="Vendors" />
    <Divider/>
      <CardContent>
      <OutlinedInput
        defaultValue=""
        placeholder="Type in (comma separated)"
        fullWidth
      />
      </CardContent>
    </Card>
    </Stack>
    </>
  );
  