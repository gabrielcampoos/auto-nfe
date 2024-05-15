import { Box, Grid } from '@mui/material';
import { FormLogin } from './components/FormLogin';

export const Login = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Grid
				container
				spacing={{ xs: 2, sm: 2, md: 3 }}
				columns={{ xs: 12, sm: 12, md: 12 }}
			>
				<Grid item xs={12} sm={12} md={6}></Grid>
				<Grid item xs={12} sm={12} md={6}>
					<FormLogin />
				</Grid>
			</Grid>
		</Box>
	);
};
