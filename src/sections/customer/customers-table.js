import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { useRouter } from "next/router";
import { useState } from "react";
export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "3px solid #6366F1",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [onDeleteUser, setOnDeleteUser] = useState();
  const [isDeleted, setIsDeleted] = useState();

  return (
    <>
      <Card>
        <Scrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAll}
                      indeterminate={selectedSome}
                      onChange={(event) => {
                        if (event.target.checked) {
                          onSelectAll?.();
                        } else {
                          onDeselectAll?.();
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Signed Up</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((customer) => {
                  const isSelected = selected.includes(customer.id);
                  const createdAt = format(customer.createdAt, "dd/MM/yyyy");
                  const deleted = isDeleted === customer.name;

                  return (
                    !deleted && (
                      <TableRow hover key={customer.id} selected={isSelected}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isSelected}
                            onChange={(event) => {
                              if (event.target.checked) {
                                onSelectOne?.(customer.id);
                              } else {
                                onDeselectOne?.(customer.id);
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <Stack alignItems="center" direction="row" spacing={2}>
                            <Avatar src={customer.avatar}>{getInitials(customer.name)}</Avatar>
                            <Typography variant="subtitle2">{customer.name}</Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>
                          {customer.address.city}, {customer.address.state},{" "}
                          {customer.address.country}
                        </TableCell>
                        <TableCell>{customer.phone}</TableCell>
                        <TableCell>{createdAt}</TableCell>
                        <TableCell>
                          <Stack alignItems="center" direction="row" spacing={2}>
                            <Button
                              variant="outlined"
                              onClick={() => router.push("/modifyCustomer")}
                            >
                              <ModeEditOutlineIcon />
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                setOpen(true);
                                setOnDeleteUser(customer.name);
                              }}
                            >
                              <DeleteForeverIcon />
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    )
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span
              style={{
                color: "#6366F1",
              }}
            >
              {onDeleteUser}
            </span>{"  "}
            will be deleted?
          </Typography>
          <Stack alignItems="center" direction="row" spacing={2} justifyContent={"end"} pt={5}>
            <Button variant="outlined" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(false);
                setIsDeleted(onDeleteUser);
              }}
            >
              confirm
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};
