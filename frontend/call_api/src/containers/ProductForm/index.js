import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as formActions from '../../actions/form'
import { isEmpty } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}
const rating = (value) => {
    if (value > 5 && value < 0) {
        return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
    }
}
class ProductForm extends Component {
    // onChange = (e) => {
    //     console.log(e.target.value);
    // }
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }
    onSubmit(e) {
        e.preventDefault();

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            alert('success');
        }
    }
    render() {
        const { formActionCreators } = this.props;
        const { hideForm } = formActionCreators;
        return (
            <>
                <div className="col-md-3"></div>
                <div className="login-container col-md-6">
                    <div id="output"></div>
                    <div className="avatar"></div>
                    <div className="form-box">
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            <Input
                                name="email"
                                onChange={this.onChangeHandler}
                                type="text"
                                placeholder="Email"
                                className="form-control"
                                validations={[required]}
                            />
                            <Input
                                name="password"
                                onChange={this.onChangeHandler}
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                validations={[required]}
                            />
                            <div className="float-left">
                                <button className="btn btn-primary mr-2" type="submit">Lưu</button>
                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                <button className="btn btn-info btn-warning " onClick={hideForm}>Bỏ qua</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        formActionCreators: bindActionCreators(formActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ProductForm)

