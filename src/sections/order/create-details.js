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
  InputAdornment,
  SvgIcon,
  OutlinedInput,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { SeverityPill } from "src/components/severity-pill";
import { getInitials } from "src/utils/get-initials";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const states = [
  {
    value: "FixedAmount",
    label: "Fixed amount",
  },
  {
    value: "Percentage",
    label: "Percentage",
  },
];

const statusMap = {
  pending: "warning",
  delivered: "success",
  refunded: "error",
};

export const OrderDetails = () => {
  const [values, setValues] = useState({
    firstName: "Anika",
    lastName: "Visser",
    email: "demo@devias.io",
    phone: "",
    state: "los-angeles",
    country: "",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  const product=[
    {
      id: "f69f88012978187a6c12897f",
      avatar: "/assets/products/product-1.png",
      name: "Erbology",
      price: '$ 30.5',
      quantity : 1,
      total : '$ 30.5',
      status: "Not tracked",
    },
  ];

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="Add order details" title="Order" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={12}>
              <OutlinedInput
        defaultValue=""
        placeholder="Search for products"
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
      />
              </Grid>
              <Grid xs={12} md={4}>
              <TextField
                  fullWidth
                  label="Discount"
                  name="discount"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid xs={12} md={4}>
              <TextField
                  fullWidth
                  label="Discount type"
                  name="state"
                  onChange={handleChange}
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Discount reason"
                  name="reason"
                  onChange={handleChange}
                  value={values.country}
                />
              </Grid>
              <Grid xs={12} md={12}>
            <Table>
            < TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>price</TableCell>
                <TableCell >Inventory</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.map((product) => {
                const createdAt = null;

                return (
                  <TableRow hover key={product.id}>
                    <TableCell><Stack alignItems="center" direction="row" spacing={2}>
                            <Avatar src={product.avatar}>{getInitials(product.name)}</Avatar>
                            <Button variant="text">
                            {product.name}
                            </Button>
                          </Stack></TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[product.status]}>{product.status}</SeverityPill>
                    </TableCell>
                    <TableCell>
                    <TextField
                  label="Qty"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  sx={{ maxWidth: 100 }}
                />
                    </TableCell>
                    <TableCell>{product.total}</TableCell>
                    <TableCell>
                    <Button
                              variant="outlined"
                              
                            >
                              <DeleteForeverIcon />
                            </Button>
                    </TableCell>

                    

                    
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
              </Grid>
              <Grid xs={12} md={12}>
                <Typography>Shipping Address</Typography>
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  multiline
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="State"
                  name="state"
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} md={12}>
            <Table>
            < TableHead>
              <TableRow>
                <TableCell>Subtotal</TableCell>
                <TableCell>Coupon</TableCell>
                <TableCell >Discount</TableCell>
                <TableCell>	Shipping fee</TableCell>
                <TableCell>VAT (0.00%)</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                  <TableRow hover>
                    <TableCell>
                    $ 30.5
                    </TableCell>
                    <TableCell>	- $ 0.00</TableCell>
                    <TableCell>	- $ 0.00</TableCell>
                    <TableCell>	- $ 0.00</TableCell>
                    <TableCell>	- $ 0.00</TableCell>
                    <TableCell style={{color : "#6366F1", fontWeight: 'bold'}}>$ 30.5</TableCell>
                  </TableRow>
            </TableBody>
          </Table>
              </Grid>
              <Grid xs={12} md={12}>
                <TextField
                  fullWidth
                  label="Note"
                  name="note"
                  onChange={handleChange}
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>
            
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
};
