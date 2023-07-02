import PropTypes from "prop-types";
import { format } from "date-fns";
import { formatDistanceToNow } from "date-fns";

import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  ListItemText,
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouter } from "next/router";
import { useState } from "react";
import { SeverityPill } from "src/components/severity-pill";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const statusMap = {
    Visible: "success",
    Invisible: "error",
  };

export const ProductsTable = (props) => {
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
    p: 2,
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
                  <TableCell>Price</TableCell>
                  <TableCell>Inventory</TableCell>
                  <TableCell>Orders</TableCell>
                  <TableCell>Visibility</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((product) => {
                  const isSelected = selected.includes(product.id);
                  const ago = formatDistanceToNow(product.updatedAt);
                  return (
              
                      <TableRow hover key={product.id} selected={isSelected}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isSelected}
                            onChange={(event) => {
                              if (event.target.checked) {
                                onSelectOne?.(product.id);
                              } else {
                                onDeselectOne?.(product.id);
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                            <Avatar src={product.image}>{getInitials(product.name)}</Avatar>
                            <ListItemText
                            primary={product.name}
                primaryTypographyProps={{ variant: "subtitle1" }}
                secondary={`Updated ${ago} ago`}
                secondaryTypographyProps={{ variant: "body2" }}
              />
                          </Stack>
                        </TableCell>
                        <TableCell>
                          {product.price}
                        </TableCell>
                        <TableCell>
                          {product.inventory}
                        </TableCell>
                        <TableCell>
                          {product.orders}
                        </TableCell>
                        <TableCell>
                            <SeverityPill color={statusMap[product.visibility]}>{product.visibility}</SeverityPill>
                        </TableCell>
                        <TableCell>
                          <Stack alignItems="center" direction="row" spacing={2}>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                router.push('product');
                              }}
                            >
                              <VisibilityIcon/>
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                router.push('product');
                              }}
                            >
                              <ModeEditOutlineIcon/>
                            </Button>
                            <Button
                              variant="outlined"
                              onClick={() => {
                                setOpen(true);
                                setOnDeleteUser(product.name);
                              }}
                            >
                              <DeleteForeverIcon/>
                            </Button>
                           
                          </Stack>
                        </TableCell>
                      </TableRow>

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
            Product <span
              style={{
                color: "#6366F1",
              }}
            >
              {onDeleteUser}
            </span>{" "} will be deleted?
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

ProductsTable.propTypes = {
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
