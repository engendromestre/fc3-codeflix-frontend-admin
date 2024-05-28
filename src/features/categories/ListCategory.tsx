import { Box, Button, IconButton, Typography } from "@mui/material";
import { deleteCategory, selectCategories } from "./categorySlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
  GridToolbar
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from "notistack";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const slotProps = {
    toolbar: {
      showQuickFilter: true,
    },
  };

  // use categories to create rows
  const rows: GridRowsProp = categories.map((categories) => ({
    id: categories.id,
    name: categories.name,
    description: categories.description,
    isActive: categories.is_active,
    createdAt: new Date(categories.created_at).toLocaleDateString('pt-BR'),
  }));

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: renderNameCell,
    },
    {
      field: 'isActive',
      headerName: 'Active',
      flex: 1,
      type: 'boolean',
      renderCell: renderIsActiveCell
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1
    },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: renderActionsCell
    },
  ];

function renderNameCell(params: GridRenderCellParams) {
  return (
    <Link
      to={`/categories/edit/${params.row.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Typography component={'span'} color="primary">{params.value}</Typography>
    </Link>
  );
}

function handleDeleteCategory(id: string) {
  dispatch(deleteCategory(id));
  enqueueSnackbar("Category deleted sucessfully", { variant: "success" });
}

function renderActionsCell(params: GridRenderCellParams) {
  return (
    <IconButton
      color="secondary"
      onClick={() => handleDeleteCategory(params.value)}
      aria-label="delete"
    >
      <DeleteIcon />
    </IconButton>
  );
}

function renderIsActiveCell(rowData: GridRenderCellParams) {
  return (
    <Typography color={rowData.value ? "primary" : "secondary"}>
      {rowData.value ? 'Active' : 'Inactive'}
    </Typography>
  );
}

return (
  <Box maxWidth={"lg"} sx={{ mt: 4, mb: 4 }}>
    <Box display="flex" justifyContent="flex-end">
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/categories/create"
        style={{ marginBottom: "1rem" }}
      >
        New Category
      </Button>
    </Box>

    <Box style={{ display: "flex", height: 600 }}>
      <DataGrid
        pageSizeOptions={[2, 10, 50, 100]}
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        // checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={ slotProps }
      />
    </Box>
  </Box>
);
};