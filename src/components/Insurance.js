import React, { useContext } from 'react';
import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../assets/img/logoQh.png'
import { Link } from 'react-router-dom';

import { TextField, Grid } from '@material-ui/core';
import { ContextApi } from '../contex';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import './insurance.css';
function MainNavbar() {
	return (
		<div className='white-bfr container'>
			<Navbar expand='lg' bg='' variant=''>
				<Navbar.Brand href='/'>
					<img src={Logo} width='181' alt='logo' />
				</Navbar.Brand>
			</Navbar>
		</div>
	);
}

function Footer() {
	return (
		<Container>
			<Row className='foot-ser'>
				<Col xd={2} md={{ span: 2 }}>
					<Link to=''>Terms of Service</Link>
				</Col>
				<Col xd={2} md={{ span: 2 }}>
					<Link to=''>Privacy Policy</Link>
				</Col>
				<Col xd={2} md={{ span: 3 }}>
					<Link to=''>Do Not Sell My Personal Information</Link>
				</Col>
				<Col xd={2} md={{ span: 2 }}>
					<Link to=''>Insurance Licenses</Link>
				</Col>
			</Row>
			<Row className='fooot-r'>
				<Col xd={2} md={{ offset: 5 }}>
					© Copyright Quotehound 2021
				</Col>
			</Row>
		</Container>
	);
}

function Layout(props) {
	return (
		<div className='main-container'>
			<MainNavbar />
			<div className='container'>
				<Container>
					<Row>
						<Col lg={12} xs={12}>
							{props.children}
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</div>
	);
}

export function InsuranceForm() {
	const context = useContext(ContextApi);
	return (
		// <Layout>
		<div className='form-group form-container'>
			<Row>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='first_name' onChange={context.handleChange} label='First Name' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='last_name' onChange={context.handleChange} label='Last Name' variant='outlined' />
					</div>
				</Col>
				<Col lg={12} xs={12}>
					<div className='frm-step'>
						<TextField type='text' required className='fullWidth responsiveField' id='outlined-basic' name='email_address' onChange={context.handleChange} label='Email' variant='outlined' />
					</div>
				</Col>
				<Col lg={12} xs={12}>
					<div className='frm-step'>
						<TextField type='text' required className='fullWidth responsiveField' id='outlined-basic' name='phone_cell' onChange={context.handleChange} label='Phone' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='address' onChange={context.handleChange} label='Address' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='zip' onChange={context.handleChange} label='zip' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='city' onChange={context.handleChange} label='City' variant='outlined' />
					</div>
				</Col>
				<Col lg={6} xs={12}>
					<div className='frm-step'>
						<TextField type='text' className='fullWidth responsiveField' id='outlined-basic' name='state' onChange={context.handleChange} label='State' variant='outlined' />
					</div>
				</Col>
				<Col lg={12} xs={12}>
					<div className='frm-step'>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<Grid container>
								<KeyboardDatePicker
									disableToolbar
									variant='inline'
									format='MM/dd/yyyy'
									margin='normal'
									id='dob'
									label='DOB'
									value={context.dob}
									onChange={context.handleChangeDate1}
									style={{ width: '100%' }}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
									inputVariant='outlined'
								/>
							</Grid>
						</MuiPickersUtilsProvider>
					</div>
				</Col>
				<Col lg={12} xs={12}>
					<div className='terms-and-condition'>
						<div>
							By clicking "Get My Instant Quote", you provide an electronic signature by which you agree to the following: "I give my express consent to receive emails, notifications, and calls, which may be auto-dialed, use artificial or pre-recorded voices, and/or be text messages,
							about auto insurance plans or products from QuoteHound, these companies, and their agents and to the email address and or telephone number(s), including wireless phone number(s), I have provided, even if I have previously registered the provided number on the Do Not Call
							Registry. I understand that my consent to receive calls is not required in order to purchase any property, goods or services. My telephone company may impose additional charges for messages. I may revoke my consent to receiving messages at any time. By submitting my
							information, I confirm that I have read, understand, and agree to these Terms of Use and Privacy Policy
						</div>
					</div>
				</Col>

				<Col lg={12} xs={12}>
					<div className='steo-frm'>
						<Button disabled={context.email_address === '' || context.phone_cell === ''} onClick={context.submit} size='md' variant='secondary' className='light-shadow'>
							VIEW MY QUOTE
						</Button>
					</div>
				</Col>
			</Row>
		</div>
		// </Layout>
	);
}

export function ThankYouPage() {
	return (
		<Layout>
			<div id='mediaalpha_placeholder'></div>
		</Layout>
	);
}
