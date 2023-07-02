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
import { AccountProfileDetailsEdit } from "src/sections/customerAccount/account-profile-details-edit";
import { AccountProfileAddresesEdit } from "src/sections/customerAccount/account-profile-address-edit";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Account | Modify customer</title>
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
                <Typography variant="h4">Modify customer</Typography>
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
                  <AccountProfileDetailsEdit />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={12} lg={12}>
                  <AccountProfileAddresesEdit />
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
