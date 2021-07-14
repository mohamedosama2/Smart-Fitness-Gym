import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../../assets/css/authentication/signup.module.css';
import logo from '../../images/Logo/icon.png';

import Input from '../../Helper/Input/Input';
import { updatedObject, checkValidity } from '../../Helper/shared/shared';
import Spinner from '../../UI/Spinner/Spinner';

export class Signup extends Component {
	state = {
		controls: {
			email: {
				value: '',
				valid: false,
				validation: {
					required: true,
					isEmail: true
				},
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Email Address',
					id: 'Email'
				},
				touched: false
			},
			name: {
				value: '',
				valid: false,
				validation: {
					required: true,
					minLength: 4
				},
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Username',
					id: 'name'
				},
				touched: false
			},

			password: {
				value: '',
				valid: false,
				validation: {
					required: true,
					minLength: 6
				},
				elementType: 'input',
				elementConfig: {
					type: 'Password',
					placeholder: 'Password'
				},
				touched: false
			},
			phone: {
				value: '',
				valid: false,
				validation: {
					required: true,
					isPhone: true
				},
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Phone',
					id: 'phone'
				},
				touched: false
			}
		},
		loading: false,
		error: null
	};
	on(event, elementName) {
		const updated = updatedObject(this.state.controls, {
			[elementName]: updatedObject(this.state.controls[elementName], {
				valid: checkValidity(event.target.value, this.state.controls[elementName].validation),
				value: event.target.value,
				touched: true
			})
		});
		this.setState({ controls: updated });
	}

	submitHandler = (e) => {
		e.preventDefault();
		let url;
		console.log(this.props.method);
		url = this.props.method === 'phone' ? 'signup-phone' : 'signup';
		if (
			this.state.controls.name.valid &&
			this.state.controls.email.valid &&
			this.state.controls.password.valid &&
			this.state.controls.phone.valid
		) {
			this.setState({ loading: true, error: null });

			let p = '+2';
			let phone = p.concat(this.state.controls.phone.value);

			const data = {
				username: this.state.controls.name.value,
				password: this.state.controls.password.value,
				email: this.state.controls.email.value,
				phone: phone
			};

			axios({
				// url: '/signup-phone',
				url,
				method: 'POST',
				data: data
			})
				.then((res) => {
					// console.log(res.data);
					this.setState({ loading: false, error: null });
					this.props.method === 'phone'
						? this.props.openHandler2('/verify')
						: this.props.openHandler2('/verifyEmail');
				})
				.catch((err) => {
					console.log(err.response.data.message);
					this.setState({ loading: false, error: err.response.data.message });
				});
		}
	};

	nextHandler = () => {
		const modal = document.querySelector('#modal');
		modal.style.display = "block";
	}
	closeModal = () => {
		const modal = document.querySelector('#modal');
		modal.style.display = "none";
	}

	render() {
		let code = (
			<React.Fragment>
				{this.state.error ? <p className={style.Error}> {this.state.error} </p> : ''}
				<div className={style.signup}>
					<form onSubmit={this.submitHandler}>
						<div>
							<img src={logo} className={style.logo} alt="logo" />
						</div>
						<div className={style.signup__container}>
							<div className={style.input}>
								{/* <input type="text" placeholder="User Name" className={style.inp}
              onChange={e => this.userName = e.target.value} /> */}
								<Input
									inValid={!this.state.controls.name.valid}
									changed={(e) => this.on(e, 'name')}
									value={this.state.controls.name.value}
									elementType={this.state.controls.name.elementType}
									hasValidity
									touched={this.state.controls.name.touched}
									elementConfig={this.state.controls.name.elementConfig}
									class={style.inp}
								/>
							</div>

							<div className={style.input}>
								{/* <input type="email" placeholder="Email Address"  className={style.inp}
              onChange={(e) => this.email = e.target.value} /> */}
								<Input
									inValid={!this.state.controls.email.valid}
									changed={(e) => this.on(e, 'email')}
									value={this.state.controls.email.value}
									elementType={this.state.controls.email.elementType}
									hasValidity
									touched={this.state.controls.email.touched}
									elementConfig={this.state.controls.email.elementConfig}
									class={style.inp}
								/>
							</div>

							<div className={style.input}>
								{/* <input type="password" placeholder="Password" className={style.inp}
              onChange={(e) => this.password = e.target.value} /> */}
								<Input
									inValid={!this.state.controls.password.valid}
									changed={(e) => this.on(e, 'password')}
									value={this.state.controls.password.value}
									elementType={this.state.controls.password.elementType}
									hasValidity
									touched={this.state.controls.password.touched}
									elementConfig={this.state.controls.password.elementConfig}
									class={style.inp}
								/>
							</div>

							<div className={style.input}>
								{/* <input type="text" placeholder="phone"  className={style.inp}
              onChange={(e) => this.phone = e.target.value} /> */}
								<Input
									inValid={!this.state.controls.phone.valid}
									changed={(e) => this.on(e, 'phone')}
									value={this.state.controls.phone.value}
									elementType={this.state.controls.phone.elementType}
									hasValidity
									touched={this.state.controls.phone.touched}
									elementConfig={this.state.controls.phone.elementConfig}
									class={style.inp}
								/>
							</div>
						</div>

						<span className={style.btn__next} onClick={this.nextHandler}>Next</span>

						<div className={style.modal} id="modal">
							<button className={style.close_modal} onClick={this.closeModal}>&times;</button>
							<h1 className={style.question}>
								When was the last time you were at your ideal weight?
							</h1>
                <div className={style.answer}>
                  <button >
                    Less than a year ago
                  </button>
                  <button >
                    1-2 years ago
                  </button>
                  <button>
                    more than 3 years ago
                  </button>
                  <button>never</button>
							</div>
							<button className={style.backBtn}>Back</button>
							<button className={style.nextBtn}>Next</button>
						</div>

						

						<button type="submit" className={style.btn}>
							sign up
						</button>

						<div className={style.anchor}>
							<Link
								className="d-block mb-3"
								onClick={() => {
									this.props.method === 'phone'
										? this.props.openHandler2('/verify', this.props.method)
										: this.props.openHandler2('/verifyEmail', this.props.method);
								}}
							>
								verify account
							</Link>
						</div>
						<hr />
					</form>
				</div>
			</React.Fragment>
		);
		if (this.state.loading) {
			code = <Spinner />;
		}
		return code;
	}
}

export default Signup;
