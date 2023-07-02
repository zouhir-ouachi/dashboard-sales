import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Button,
  SvgIcon,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { AccountProfileDetails } from "src/sections/customerAccount/account-profile-details";
import { AccountProfileAddreses } from "src/sections/customerAccount/account-profile-addreses";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Account | Create customer</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Create customer</Typography>
              </Stack>
              <div>
                <Button variant="outlined" onClick={() => router.push("/customers")}>
                  Customers
                </Button>
              </div>
            </Stack>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={12} lg={12}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={12} lg={12}>
                  <AccountProfileAddreses />
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
