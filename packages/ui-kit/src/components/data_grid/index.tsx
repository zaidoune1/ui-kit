import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { dataGridProps } from './types';

export default function DataGridDemo({
	rows,
	columns,
	pageSize = 5,
	pageSizeOptions = [5],
	dimention = { height: 400, width: '100%' },
	loading = false,
	slotProps,
	varientLoding,
	noRowsVariant,
	...rest
}: dataGridProps) {
	return (
		<Box sx={dimention}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: pageSize,
						},
					},
				}}
				pageSizeOptions={pageSizeOptions}
				checkboxSelection
				disableRowSelectionOnClick
				loading={loading}
				slotProps={{
					loadingOverlay: {
						variant: varientLoding,
						noRowsVariant: noRowsVariant,
					},
				}}
				{...rest}
			/>
		</Box>
	);
}
