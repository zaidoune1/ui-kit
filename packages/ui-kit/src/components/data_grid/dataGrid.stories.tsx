import { rows, columns } from '../../utils/dataTest';
import DataGridDemo from '.';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

type metaType = Meta<typeof DataGridDemo>;
type Story = StoryObj<metaType>;

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const meta: metaType = {
	title: 'Components/DataGridDemo',
	component: DataGridDemo,
	args: {
		rows: rows,
		columns: columns,
		slotProps: {
			loadingOverlay: {
				variant: 'skeleton',
				noRowsVariant: 'skeleton',
			},
		},
		dimention: { height: 400, width: '100%' },
		pageSizeOptions: [5],
		pageSize: 5,
	},
	argTypes: {
		loading: {
			control: 'radio',
			options: [true, false],
		},
		varientLoding: {
			control: 'radio',
			options: ['skeleton', 'linear-progress', 'circular-progress'],
		},

		noRowsVariant: {
			control: 'radio',
			options: ['skeleton', 'linear-progress', 'circular-progress'],
		},
	},
};

export default meta;

export const defaultStory: Story = {};
export const DarkModeTheme: Story = {
	render: ({ ...args }) => {
		return (
			<div>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<DataGridDemo columns={columns} {...args} />
				</ThemeProvider>
			</div>
		);
	},
};
