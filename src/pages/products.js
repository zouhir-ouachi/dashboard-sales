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
import { ProductsSearch } from "src/sections/products/products-search";
import { ProductsTable } from "src/sections/products/products-table";

const now = new Date();

const data =[
    {
      id: "5ece2c077e39da27658aa8a9",
      image: "/assets/products/product-1.png",
      name: "Healthcare Erbology",
      updatedAt: subHours(now, 6).getTime(),
      price: '$ 40',
      inventory: 'Untracked',
      orders: 12,
      visibility: 'Visible',
    },
    {
      id: "5ece2c0d16f70bff2cf86cd8",
      image: "/assets/products/product-2.png",
      name: "Makeup Lancome Rouge",
      updatedAt: subDays(subHours(now, 8), 2).getTime(),
      price: '$ 55',
      inventory: 'Untracked',
      orders: 6,
      visibility: 'Invisible',
    },
    {
      id: "b393ce1b09c1254c3a92c827",
      image: "/assets/products/product-5.png",
      name: "Skincare Soja CO",
      updatedAt: subDays(subHours(now, 1), 1).getTime(),
      price: '$ 60',
      inventory: 'Tracked',
      orders: 3,
      visibility: 'Visible',
    },
    {
      id: "a6ede15670da63f49f752c89",
      image: "/assets/products/product-6.png",
      name: "Makeup Lipstick",
      updatedAt: subDays(subHours(now, 3), 3).getTime(),
      price: '$ 120',
      inventory: 'Untracked',
      orders: 2,
      visibility: 'Visible',
    },
    {
      id: "bcad5524fe3a2f8f8620ceda",
      image: "/assets/products/product-7.png",
      name: "Healthcare Ritual",
      updatedAt: subDays(subHours(now, 5), 6).getTime(),
      price: '$ 30',
      inventory: 'Untracked',
      orders: 5,
      visibility: 'Visible',
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
        <title>Products</title>
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
                <Typography variant="h4">Products</Typography>
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
                  onClick={() => router.push("/product")}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <ProductsSearch />
            <ProductsTable
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
