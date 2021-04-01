import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../../assets/css/authentication/signup.module.css";
import logo from "../../images/Logo/icon.png";
import Input from "../../Helper/Input/Input";
import { updatedObject, checkValidity } from "../../Helper/shared/shared";
import Spinner from "../../UI/Spinner/Spinner";

export class Verify extends Component {
  state = {
    controls: {
      code: {
        value: "",
        valid: false,
        validation: {
          required: true,
          minLength: 4,
        },
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Verify Code",
        },
        touched: false,
      },

      phone: {
        value: "",
        valid: false,
        validation: {
          required: true,
          isPhone: true,
        },
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Phone",
          id: "phone",
        },
        touched: false,
      },
    },
    loading: false,
    error: null,
  };

  on(event, elementName) {
    const updated = updatedObject(this.state.controls, {
      [elementName]: updatedObject(this.state.controls[elementName], {
        valid: checkValidity(
          event.target.value,
          this.state.controls[elementName].validation
        ),
        value: event.target.value,
        touched: true,
      }),
    });
    this.setState({ controls: updated });
  }
  submitHandler = (e) => {
    if (this.state.controls.code.valid && this.state.controls.email.valid) {
      this.setState({ loading: true, error: null });

      let p = "+2";
      let phone = p.concat(this.state.controls.phone.value);

      e.preventDefault();
      const data = {
        phone: phone,
        code: this.state.controls.code.value,
      };

      axios({
        url: "verify",
        method: "POST",
        data: data,
      })
        .then((res) => {
          this.setState({ loading: false, error: null });
          // window.location.href='/'
          localStorage.setItem("token", res.data.token);
          this.props.openHandler2("/login");
        })
        .catch((err) => {
          this.setState({ loading: false, error: err.response.data.message });
        });
    }
  };

  render() {
    let body = (
      <React.Fragment>
        {this.state.error ? (
          <p className={style.Error}> {this.state.error} </p>
        ) : (
          ""
        )}
        <div className={style.signup}>
          <form onSubmit={this.submitHandler}>
            <div>
              <img src={logo} className={style.logo} alt="logo" />
            </div>

            <div className={style.input}>
              {/* <input type="text" placeholder="Phone" className={style.inp}
            onChange={(e)=> this.phone = e.target.value}/> */}
              <Input
                inValid={!this.state.controls.phone.valid}
                changed={(e) => this.on(e, "phone")}
                value={this.state.controls.phone.value}
                elementType={this.state.controls.phone.elementType}
                hasValidity
                touched={this.state.controls.phone.touched}
                elementConfig={this.state.controls.phone.elementConfig}
                class={style.inp}
              />
            </div>

            <div className={style.input}>
              {/* <input type="text" placeholder="Enter the code"
              className={style.inp}
            onChange={(e)=> this.code = e.target.value}/> */}
              <Input
                inValid={!this.state.controls.code.valid}
                changed={(e) => this.on(e, "code")}
                value={this.state.controls.code.value}
                elementType={this.state.controls.code.elementType}
                hasValidity
                touched={this.state.controls.code.touched}
                elementConfig={this.state.controls.code.elementConfig}
                class={style.inp}
              />
            </div>

            <button type="submit" className={style.btn}>
              Verify
            </button>

            <div className={style.anchor}>
              <Link onClick={() => this.props.openHandler2("/login")}>
                {" "}
                go to login{" "}
              </Link>
            </div>

            <hr />
          </form>
        </div>
      </React.Fragment>
    );
    if (this.state.loading) body = <Spinner />;

    return body;
  }
}

export default Verify;
