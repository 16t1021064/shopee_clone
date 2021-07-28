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
        return <small className="form-text text-danger">Vui lòng điền trường còn trống</small>;
    }
}
const rating = (value) => {
    if (value < 0 || value > 5) {
        return <small className="form-text text-danger">Đánh giá phải lớn hơn 0 và nhỏ hơn hoặc bằng 5</small>;
    }
}
class ProductForm extends Component {
    // onChange = (e) => {
    //     console.log(e.target.value);
    // }
    onSubmit(e) {
        e.preventDefault();

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            alert('success');
        }
    }
    onCreateProduct = () => {

    }
    render() {
        const { formActionCreators, title } = this.props;
        const { hideForm } = formActionCreators;
        return (
            <>
                <div className="col-md-3"></div>
                <div className="login-container col-md-6">
                    <h2><span className="badge badge-primary">{title}</span></h2>
                    <div className="form-box">
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            <div className="form-group">
                                <label htmlFor="name">Tên sản phẩm:</label>
                                <Input
                                    name="name"
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Tên sản phẩm"
                                    className="form-control"
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Xếp hạng:</label>
                                <Input
                                    name="rating"
                                    onChange={this.onChangeHandler}
                                    type="number"
                                    placeholder="Xếp hạng:"
                                    className="form-control"
                                    validations={[required, rating]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Giá:</label>
                                <Input
                                    name="price"
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Giá"
                                    className="form-control"
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo">Link ảnh:</label>
                                <Input
                                    name="photo"
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Link ảnh"
                                    className="form-control"
                                    validations={[required]}
                                />
                            </div>
                            <div className="float-right">
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

