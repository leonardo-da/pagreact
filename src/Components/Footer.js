import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
	return(
		<div>
			<AppBar position = 'static'>
				<Toolbar>
					<Typography variant='title' color='inherit'>
						FOOTER
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
		)
}
export default Footer;