import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { FirstLine } from './components/FirstLine';
import { SecondLine } from './components/SecondLine';
import { FourthLine } from './components/FourthLine';
import { FifthLine } from './components/FifthLine';
import { SixthLine } from './components/SixthLine';
import generatePDF, { Margin, Options } from 'react-to-pdf';
import { useState } from 'react';

export const Nfe = () => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));

	const [disabledFirstLine, setDisabledFirstLine] = useState(false);
	const [disabledSecondLine, setDisabledSecondLine] = useState(false);
	const [disabledFifthLine, setDisabledFifhtLine] = useState(false);
	const [disabledSixthLine, setDisabledSixthLine] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [widthPdf, setWidthPdf] = useState('100%');

	const targetRef = () => document.getElementById('targetRef');

	const options: Options = {
		method: 'save',

		page: {
			// margin is in MM, default is Margin.NONE = 0
			margin: Margin.SMALL,
			// default is 'A4'
			format: 'A4',
			// default is 'portrait'
			orientation: 'portrait',
		},
	};

	return (
		<>
			{(smDown && (
				<>
					<Container
						sx={{
							width: widthPdf,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100vh',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Container
								id="targetRef"
								disableGutters
								sx={{
									width: '100%',
									pl: 4,
									pt: 6,
								}}
							>
								<FirstLine
									disabledFirstLine={disabledFirstLine}
									setDisabledFirstLine={setDisabledFirstLine}
								/>
								<SecondLine
									disabledSecondLine={disabledSecondLine}
									setDisabledSecondLine={
										setDisabledSecondLine
									}
								/>

								<FourthLine
									disabled={disabled}
									setDisabled={setDisabled}
								/>
								<FifthLine
									disabledFifthLine={disabledFifthLine}
									setDisabledFifthLine={setDisabledFifhtLine}
								/>
								<SixthLine
									disabled={disabledSixthLine}
									setDisabled={setDisabledSixthLine}
								/>
								<Button
									onClick={() => {
										setWidthPdf('2480px');
										setTimeout(() => {
											generatePDF(targetRef, options);
										}, 1000);
									}}
								>
									Download PDF
								</Button>
							</Container>
						</Box>
					</Container>
				</>
			)) || (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
						}}
					>
						<Container
							id="targetRef"
							disableGutters
							sx={{
								pt: 5,
								pl: 4,
							}}
						>
							<FirstLine
								disabledFirstLine={disabledFirstLine}
								setDisabledFirstLine={setDisabledFirstLine}
							/>
							<SecondLine
								disabledSecondLine={disabledSecondLine}
								setDisabledSecondLine={setDisabledSecondLine}
							/>

							<FourthLine
								disabled={disabled}
								setDisabled={setDisabled}
							/>
							<FifthLine
								disabledFifthLine={disabledFifthLine}
								setDisabledFifthLine={setDisabledFifhtLine}
							/>
							<SixthLine
								disabled={disabledSixthLine}
								setDisabled={setDisabledSixthLine}
							/>
						</Container>
						<Button onClick={() => generatePDF(targetRef, options)}>
							Download PDF
						</Button>
					</Box>
				</>
			)}
		</>
	);
};
