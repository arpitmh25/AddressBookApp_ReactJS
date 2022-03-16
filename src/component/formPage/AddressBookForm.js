import React, { Component } from 'react';
import AddressBookService from '../../service/AddressBookService';
import '../formPage/AddessBookForm.css';
import cancelBtn from '../../asset/icons/cancel.svg';
import AddressBookHome from '../homePage/AddressBookHome';

//Created address form page and added methods
class AddressBookForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nameError: '',
			id: '',
			isUpdated: false
		};

		//To set  the object
		this.onSave = this.onSave.bind(this);
		this.onReset = this.onReset.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	//componentDidMount() method runs after the component output has been rendered to the DOM
	componentDidMount() {
		this.setState({ id: this.props.addressId });

		AddressBookService.getAddressById(this.props.addressId).then((result) => {
			this.setState({
				name: result.data.data.name,
				address: result.data.data.address,
				city: result.data.data.city,
				state: result.data.data.state,
				zip: result.data.data.zip,
				phone: result.data.data.phone
			});
		});
	}

	//Method for saving and updating user information
	onSave(event) {
		event.preventDefault();

		let object = {
			name: this.state.name,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			phone: this.state.phone
		};

		if (this.state.id) {
			AddressBookService.updateAddress(object, this.state.id).then((result) => {
				alert('updated successfully');
				this.setState({
					name: '',
					address: '',
					city: '',
					state: '',
					zip: '',
					phone: '',
					nameError: '',
					isUpdated: true
				});
			});
		} else {
			AddressBookService.addAddress(object).then((result) => {
				alert('saved successfully');
				this.setState({
					name: '',
					address: '',
					city: '',
					state: '',
					zip: '',
					phone: '',
					nameError: ''
				});
				this.onReset();
			});
		}
	}

	//Method for reset
	onReset() {
		this.setState({
			name: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
			nameError: ''
		});
	}

	handleChange(event) {
		if (event.target.name === 'name') {
			let name = RegExp('^[A-Z]{1}[a-z]{2,}[ ][A-Z]{1}[a-z]{2,}$');
			if (name.test(event.target.value)) this.setState({ nameError: '' });
			else this.setState({ nameError: 'Invalid name' });
		}

		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		if (this.state.isUpdated) {
			return <AddressBookHome />;
		}

		return (
			<div>
				<div className="form-content">
					<div className="form-container">
						<form action="" className="form" autoComplete="off">
							<div className="header-row">
								<div className="form-head">Person Address form</div>
								<a href="/">
									{' '}
									<img src={cancelBtn} alt="" className="cancel-btn" />
								</a>
							</div>

							<div className="form-rows">
								<div className="row-content">
									<label className="input">Full Name</label>
									<input
										className="input__field"
										type="text"
										placeholder=" "
										name="name"
										value={this.state.name}
										onChange={this.handleChange}
									/>

									<error-output className="name-error">{this.state.nameError}</error-output>
								</div>

								<div className="row-content">
									<label className="input">Phone Number</label>
									<input
										className="input__field"
										type="tel"
										placeholder=" "
										name="phone"
										value={this.state.phone}
										onChange={this.handleChange}
									/>
									<error-output className="phone-error" />
								</div>

								<div className="row-content">
									<label className="input">Address</label>
									<textarea
										className="input__field address-field"
										type="text"
										placeholder=" "
										name="address"
										value={this.state.address}
										onChange={this.handleChange}
									/>
									<error-output className="address-error" />
								</div>

								<div className="add-content">
									<div className="row-content">
										<label className="input">City</label>
										<select
											name="city"
											id="city"
											className="dropDown"
											value={this.state.city}
											onChange={this.handleChange}
										>
											<option value="Select City">Select City</option>
											<option value="Jammu">Jammu</option>
											<option value="Srinagar">Srinagar</option>
											<option value="Leh">Leh</option>
											<option value="Ladakh">Ladakh</option>
											<option value="Amritsar">Amritsar</option>
											<option value="Ludhiana">Ludhiana</option>
											<option value="Jalandhar">Jalandhar</option>
											<option value="Pathankot">Pathankot</option>
											<option value="Shimla">Shimla</option>
											<option value="Manali">Manali</option>
											<option value="Dharamshala">Dharamshala</option>
											<option value="Haridwar">Haridwar</option>
											<option value="Rishikesh">Rishikesh</option>
											<option value="Rudraprayag">Rudraprayag</option>
											<option value="Chamoli">Chamoli</option>
											<option value="Dehradun">Dehradun</option>
											<option value="Almora">Almora</option>
											<option value="Ranikhet">Ranikhet</option>
											<option value="Rohtak">Rohtak</option>
											<option value="Sonipat">Sonipat</option>
											<option value="Gurgaon">Gurgaon</option>
											<option value="Faridabad">Faridabad</option>
											<option value="Ambala">Ambala</option>
											<option value="Chandigarh">Chandigarh</option>
											<option value="Karnal">Karnal</option>
											<option value="New Delhi">New Delhi</option>
											<option value="Aligarh">Aligarh</option>
											<option value="Noida">Noida</option>
											<option value="Ghaziabad">Ghaziabad</option>
											<option value="Agra">Agra</option>
											<option value="Kotdwar">Kotdwar</option>
											<option value="Lucknow">Lucknow</option>
											<option value="Allahabad">Allahabad</option>
											<option value="Kanpur">Kanpur</option>
											<option value="Merrut">Merrut</option>
											<option value="Patna">Patna</option>
											<option value="Vaishali">Vaishali</option>
											<option value="Darbhanga">Darbhanga</option>
											<option value="Jaipur">Jaipur</option>
											<option value="Alwar">Alwar</option>
											<option value="Kota">Kota</option>
											<option value="Jodhpur">Jodhpur</option>
											<option value="Jaisalmer">Jaisalmer</option>
											<option value="Bikaner">Bikaner</option>
											<option value="Ahmedabad">Ahmedabad</option>
											<option value="Gandhinagar">Gandhinagar</option>
											<option value="Vadodra">Vadodra</option>
											<option value="Bhopal">Bhopal</option>
											<option value="Indore">Indore</option>
											<option value="Raipur">Raipur</option>
											<option value="Kolkata">Kolkata</option>
											<option value="Murshidabad">Murshidabad</option>
											<option value="Hooghly">Hooghly</option>
											<option value="Asansol">Asansol</option>
											<option value="Durgapur">Durgapur</option>
											<option value="Bardhman">Bardhman</option>
											<option value="Dhanbad">Dhanbad</option>
											<option value="Ranchi">Ranchi</option>
											<option value="Jamshedpur">Jamshedpur</option>
											<option value="Puri">Puri</option>
											<option value="Paradip">Paradip</option>
											<option value="Bhubhneshwar">Bhubhneshwar</option>
											<option value="Gangtok">Gangtok</option>
											<option value="Hyderabad">Hyderabad</option>
											<option value="Amravati">Amravati</option>
											<option value="Vishakapatnam">Vishakapatnam</option>
											<option value="Itanagar">Itanagar</option>
											<option value="Guwahati">Guwahati</option>
											<option value="Dispur">Dispur</option>
											<option value="Kazringa">Kazringa</option>
											<option value="Panaji">Panaji</option>
											<option value="Bangalore">Bangalore</option>
											<option value="Surathkal">Surathkal</option>
											<option value="Mangalore">Mangalore</option>
											<option value="Kochi">Kochi</option>
											<option value="Thiruvanthapuram">Thiruvanthapuram</option>
											<option value="Mumbai">Mumbai</option>
											<option value="Nagpur">Nagpur</option>
											<option value="Pune">Pune</option>
											<option value="Nasik">Nasik</option>
											<option value="Thane">Thane</option>
											<option value="Imphal">Imphal</option>
											<option value="Shillong">Shillong</option>
											<option value="Aizwal">Aizwal</option>
											<option value="Kohima">Kohima</option>
											<option value="Dimapur">Dimapur</option>
											<option value="Agartala">Agartala</option>
											<option value="Port Blair">Port Blair</option>
											<option value="Kargil">Kargil</option>
											<option value="Kavaratti">Kavaratti</option>
											<option value="Pondicherry">Pondicherry</option>
										</select>
									</div>

									<div className="row-content">
										<label className="input">State</label>
										<select
											name="state"
											id="State"
											className="dropDown"
											value={this.state.state}
											onChange={this.handleChange}
										>
											<option value="Select State">Select State</option>
											<option value="Andhra Pradesh">Andhra Pradesh</option>
											<option value="Arunachal Pradesh">Arunachal Pradesh</option>
											<option value="Assam">Assam</option>
											<option value="Bihar">Bihar</option>
											<option value="Chandigarh">Chandigarh</option>
											<option value="Chhattisgarh">Chhattisgarh</option>
											<option value="Daman and Diu">Daman and Diu</option>
											<option value="Delhi">Delhi</option>
											<option value="Lakshadweep">Lakshadweep</option>
											<option value="Puducherry">Puducherry</option>
											<option value="Goa">Goa</option>
											<option value="Gujarat">Gujarat</option>
											<option value="Haryana">Haryana</option>
											<option value="Himachal Pradesh">Himachal Pradesh</option>
											<option value="Jammu and Kashmir">Jammu and Kashmir</option>
											<option value="Jharkhand">Jharkhand</option>
											<option value="Karnataka">Karnataka</option>
											<option value="Kerala">Kerala</option>
											<option value="Madhya Pradesh">Madhya Pradesh</option>
											<option value="Maharashtra">Maharashtra</option>
											<option value="Manipur">Manipur</option>
											<option value="Meghalaya">Meghalaya</option>
											<option value="Mizoram">Mizoram</option>
											<option value="Nagaland">Nagaland</option>
											<option value="Odisha">Odisha</option>
											<option value="Punjab">Punjab</option>
											<option value="Rajasthan">Rajasthan</option>
											<option value="Sikkim">Sikkim</option>
											<option value="Tamil Nadu">Tamil Nadu</option>
											<option value="Telangana">Telangana</option>
											<option value="Tripura">Tripura</option>
											<option value="Uttar Pradesh">Uttar Pradesh</option>
											<option value="Uttarakhand">Uttarakhand</option>
											<option value="West Bengal">West Bengal</option>
										</select>
									</div>

									<div className="row-content zip-content">
										<label className="input">Zip Code</label>
										<input
											className="input__field"
											type="number"
											placeholder=" "
											name="zip"
											value={this.state.zip}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="buttonParent">
									<button
										className="button submitButton"
										id="submitButton"
										onClick={this.onSave}
										type="submit"
									>
										Add
									</button>

									<button className="button resetButton" type="reset" onClick={this.onReset}>
										Reset
									</button>
									<button
										className="button submitButton"
										id="submitButton"
										onClick={this.onSave}
										type="submit"
									>
										Update
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddressBookForm;
