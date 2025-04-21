import type { DataGridProps } from '@mui/x-data-grid';

type slotPropsProps = DataGridProps['slotProps'];

type dimention = {
	height: number | string;
	width: number | string;
};

export type dataGridProps = {
	rows?: DataGridProps['rows'];
	columns: DataGridProps['columns'];
	pageSize?: number;
	pageSizeOptions?: Array<number>;
	dimention?: dimention;
	loading?: boolean;
	slotProps?: slotPropsProps;
	varientLoding?: 'skeleton' | 'linear-progress' | 'circular-progress';
	noRowsVariant?: 'skeleton' | 'linear-progress' | 'circular-progress';
};
