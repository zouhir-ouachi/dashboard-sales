import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Link, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { applyPagination } from "src/utils/apply-pagination";
import { useRouter } from "next/router";
import { OrdersSearch } from "src/sections/orders/ordersSearch";
import { OrdersTable } from "src/sections/orders/orders-table";

const now = new Date();

const data = [
  {
    id: "f69f88012978187a6c12897f",
    ref: "DEV1049",
    amount: 30.5,
    customer: {
      name: "Ekaterina Tankova",
      avatar: "/assets/avatars/avatar-carson-darrin.png",
    },
    product : {
      image: "/assets/products/product-1.png",
      name: "Healthcare Erbology",
    },
    createdAt: 1555016400000,
    status: "pending",
  },
  {
    id: "9eaa1c7dd4433f413c308ce2",
    ref: "DEV1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    },
    product : {
      image: "/assets/products/product-2.png",
                  name: "Makeup Lancome Rouge",
    },
    createdAt: 1555016400000,
    status: "delivered",
  },
  {
    id: "01a5230c811bd04996ce7c13",
    ref: "DEV1047",
    amount: 10.99,
    customer: {
      name: "Alexa Richardson",
    avatar: "/assets/avatars/avatar-jie-yan-song.png",
    },
    product : {
      image: "/assets/products/product-5.png",
                  name: "Skincare Soja CO",
    },
    createdAt: 1554930000000,
    status: "refunded",
  },
  {
    id: "1f4e1bd0a87cea23cdb83d18",
    ref: "DEV1046",
    amount: 96.43,
    customer: {
      name: "Anje Keizer",
    avatar: "/assets/avatars/avatar-anika-visser.png",

    },
    product : {
      image: "/assets/products/product-7.png",
                  name: "Healthcare Ritual",
    },
    createdAt: 1554757200000,
    status: "pending",
  },
  {
    id: "9f974f239d29ede969367103",
    ref: "DEV1045",
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert",
    avatar: "/assets/avatars/avatar-miron-vitold.png",

    },
    product : {
      image: "/assets/products/product-1.png",
      name: "Healthcare Erbology",
    },
    createdAt: 1554670800000,
    status: "delivered",
  },
  {
    id: "ffc83c1560ec2f66a1c05596",
    ref: "DEV1044",
    amount: 16.76,
    customer: {
      name: "Adam Denisov",
    avatar: "/assets/avatars/avatar-penjani-inyene.png",

    },
    product : {
      image: "/assets/products/product-1.png",
      name: "Healthcare Erbology",
    },
    createdAt: 1554670800000,
    status: "delivered",
  },
];



const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
  const router = useRouter();

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Orders</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => router.push("/order")}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <OrdersSearch />
            <OrdersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
