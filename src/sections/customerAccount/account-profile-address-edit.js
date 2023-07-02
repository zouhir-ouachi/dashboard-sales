import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Avatar,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
  {
    value: "los-angeles",
    label: "Los Angeles",
  },
];

export const AccountProfileAddresesEdit = () => {
  const [values, setValues] = useState({
    firstName: "Anika",
    lastName: "Visser",
    email: "demo@devias.io",
    phone: "",
    state: "los-angeles",
    country: "USA",
    city: "Westlake",
  });

  const [showAddresses, setShowAddresses] = useState(false);

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
         
        <CardHeader
          subheader="The information can be edited"
          title="Customer addresses          "
          action={
            !showAddresses ? (
              <Button variant="contained" onClick={() => setShowAddresses(true)}>
                Add Address
              </Button>
            ) : (
              <Button variant="outlined" onClick={() => setShowAddresses(false)}>
                <DeleteForeverIcon />
              </Button>
            )
          }
        />
        {showAddresses && (
          <>
            <CardContent sx={{ pt: 0 }}>
              <Box sx={{ m: -1.5 }}>
                <Grid container spacing={3}>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Last name"
                      name="lastName"
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      onChange={handleChange}
                      type="number"
                      value={values.phone}
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Country"
                      name="country"
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Select State"
                      name="state"
                      onChange={handleChange}
                      required
                      select
                      SelectProps={{ native: true }}
                    >
                      {states.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>

            <Divider />
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button variant="contained">Save details</Button>
            </CardActions>
          </>
        )}
      </Card>
    </form>
  );
};
