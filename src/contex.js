import React, { Component, createContext } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
export const ContextApi = createContext();

class ContextApiProvider extends Component {
	state = {
		first_name: '',
		last_name: '',
		email_address: '',
		phone_cell: '',
		address: '',
		zip_code: '',
		city: '',
		state: '',
		dob: new Date(),
		pre_exisiting_conditions: true,
		landing_page: 'life.quotehound.com',
		lp_s1: '',
		lp_s2: '13',
		useragent: navigator.userAgent,

	};

	submit = async (value) => {
		let formData = new FormData();
		formData.append('lp_campaign_id', '601a0de952304');
		formData.append('lp_campaign_key', 'GBmvtHrcfW9C8bQ2DyFq');
		formData.append('dob', this.state.dob);
		formData.append('zip_code', this.state.zip);
		formData.append('first_name', this.state.first_name);
		formData.append('last_name', this.state.last_name);
		formData.append('email_address', this.state.email_address);
		formData.append('phone_cell', this.state.phone_cell);
		formData.append('landing_Page', 'life.quotehound.com');
		formData.append('user_agent', navigator.userAgent);
		try {
			let insurance = await axios.post('https://quotehound.leadspediatrack.com/post.do', formData);
			console.log(insurance);
			if (insurance.status === 201 || insurance.status === 200) {
				console.log(insurance);
				// this.setState({
				// 	show: true,
				// });
				window.MediaAlphaExchange = {
					data: {
						zip: this.state.zip,
					},
					placement_id: 'O_lLlIDgDp7Wt1W0Z2IzmjkLjux5FA',
					sub_1: 'test sub id',
					type: 'ad_unit',
					ua_class: 'auto',
					version: 17,
				};
				window.MediaAlphaExchange__load('mediaalpha_placeholder');
				this.props.history.push('thankyou');
			}
		} catch (err) {
			console.log(err);
			if (err.response && err.response.message) {
				console.log(err.response.message);
			}
		}
	};

	componentDidMount() {
	
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		const utmCampaign = urlParams.get('utm_campaign');
		this.setState({
			postData: {
				...this.state.postData,
				campaign: utmCampaign
			}
			
		})

		const utmMed = urlParams.get('utm_medium');

		if (utmMed == 'adwords'){
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '101'
				},
			});
		}
		if (utmMed == 'facebook'){
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '103'
				},
			});
		}
		if (utmMed == 'bing'){
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '108'
				},
			});
		}
		else{
			this.setState({
				postData: {
					...this.state.postData,
					lp_s1: '12'
				},
			});
		}

	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};
	reset = () => {
		this.setState({
			first_name: '',
			last_name: '',
			email_address: '',
			phone_cell: '',
			address: '',
			zip_code: '',
			city: '',
			state: '',
			dob: new Date(),
			pre_exisiting_conditions: true,
		});
	};

	handleChangeDate1 = (date) => {
		this.setState({
			date: date,
		});
	};
	render() {
		return (
			<ContextApi.Provider
				value={{
					...this.state,
					handleChangeDate1: this.handleChangeDate1,
					handleChange: this.handleChange,
					reset: this.reset,
					submit: this.submit,
				}}>
				{this.props.children}
			</ContextApi.Provider>
		);
	}
}

export default withRouter(ContextApiProvider);
