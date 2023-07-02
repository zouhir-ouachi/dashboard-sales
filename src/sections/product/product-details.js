import React, { useCallback, useState } from "react";
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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
  Alert,
  IconButton,
  Container,
  Paper,
  Fab,
} from "@mui/material";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { SeverityPill } from "src/components/severity-pill";
import { getInitials } from "src/utils/get-initials";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CenterFocusStrong, PhotoCamera } from "@mui/icons-material";

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

export const ProductDetails = () => {
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
        <Stack spacing={3}>
        <Card>
        <CardHeader subheader="Add product details" title="Product" />
        <Divider />

        <CardContent sx={{ pt: 2 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={12}>
              <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  onChange={handleChange}
                  type="text"
                    placeholder="Ex: blue summer shirt.."
                />
              </Grid>
              <Grid xs={12} md={12}>
                <Card>
                <Stack direction="row" alignItems='center'spacing={0.5} padding={2}>
            <Typography>https://dashy.store.shop/products/</Typography>
              <OutlinedInput
                  fullWidth
                  name="slug"
                  onChange={handleChange}
                placeholder="slug"
                />
            </Stack></Card>     
              </Grid>
            </Grid>
            <Grid xs={12} md={12}>
            <TextField
                  fullWidth
                  label="Description"
                  name="desc"
                  onChange={handleChange}
                  type="text"
                  multiline
                  rows={5}
                />
            </Grid>
            
          </Box>
        </CardContent>
      </Card>
      <Card >
        <CardHeader title="Pricing" />
        <Divider />

        <CardContent sx={{ pt: 2 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={4}>
              <TextField
                  fullWidth
                  label="Price"
                  name="price"
                  onChange={handleChange}
                  type="text"
                />
              </Grid>
              <Grid xs={12} md={4}>
              <TextField
                  fullWidth
                  label="Compare at price"
                  name="cprice"
                  onChange={handleChange}
                  type="text"
                />
              </Grid>
              <Grid xs={12} md={4}>
              <TextField
                  fullWidth
                  label="Cost price"
                  name="costPrice"
                  onChange={handleChange}
                  type="text"
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Card >
        <CardHeader title="Images" action={
            <Stack direction='row' spacing={3}>
                <Button variant="contained"  > 
            <Stack direction='row' spacing={3}>
            <ImageIcon/>Upload images

            </Stack>
                </Button>
                <Button variant="contained"  > 
            <Stack direction='row' spacing={3}>
            <VideocamIcon/>Add video link

            </Stack>

                </Button>
            </Stack>
            
        } />
        <Divider />

        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
            <Grid xs={12} md={12}>
            <Alert severity="info" color="info">
            Note: For best visual appearance, use a product image with a size of 800x800.
</Alert>
            </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <CardHeader  title="SEO" />
        <Divider />

        <CardContent sx={{ pt: 2 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
              <TextField
                  fullWidth
                  label="Meta slug"
                  name="meatSlug"
                  onChange={handleChange}
                  type="text"
                />
              </Grid>
              <Grid xs={12} md={6}>
              <TextField
                  fullWidth
                  label="Meta title"
                  name="meatTitle"
                  onChange={handleChange}
                  type="text"
                />
              </Grid>
              <Grid xs={12} md={12}>
            <TextField
                  fullWidth
                  label="Meta description"
                  name="desc"
                  onChange={handleChange}
                  type="text"
                  multiline
                  rows={5}
                />
            </Grid>
            <Grid>Meta images</Grid>
            <Grid xs={12} md={12}>
            <Paper variant="outlined" elevation={3} sx={{bgcolor: '#FDFCFD'}}>
            <Stack direction="column" alignItems="center" justifyContent='center' spacing={2} margin={10} >
                <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                 >
                        <input hidden accept="image/*" type="file" />
                        <CloudUploadIcon />
                        
                </IconButton>
                <Typography>Choose file to upload</Typography>
      </Stack>
            </Paper>
            
            </Grid>
            
          
            </Grid>
            
          </Box>
        </CardContent>
      </Card>
      <Grid xs={12} md={12} >
      <Button variant="contained" fullWidth>

Save
</Button>
      </Grid>
        </Stack>
      
    </form>
  );
};
