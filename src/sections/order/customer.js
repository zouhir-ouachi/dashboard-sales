import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    InputAdornment,
    OutlinedInput,
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
  
  export const Customer = () => (
    <>
    <Stack spacing={3}>
    <Card >
        <CardHeader subheader="Add a customer from the list or create new one" title="Find or create a customer" />
    <Divider/>
      <CardContent>
      <OutlinedInput
        defaultValue=""
        placeholder="Search customers"
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
        <CardHeader  title="Tags" />
    <Divider/>
      <CardContent>
      <OutlinedInput
        defaultValue=""
        placeholder="Search tags"
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
    </Stack>
    </>
  );
  