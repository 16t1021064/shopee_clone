import React, { Component } from 'react'
import ProductList from '../../components/ProductList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'
import * as formActions from '../../actions/form'
import ProductForm from '../ProductForm'
import SearchBox from '../SearchBox'

class ProductBoard extends Component {

    componentDidMount() {
        const { productActionCreators } = this.props;
        const { fetchProductList } = productActionCreators;
        fetchProductList();
    }
    renderForm = () => {
        let xhtml = null;
        const { showForm, formActionCreators } = this.props;
        const { changeFormTitle } = formActionCreators;
        if (showForm) {
            changeFormTitle('Thêm mới');
            const { title } = this.props;
            xhtml = (
                <ProductForm title={title} />
            )
        } else {
            xhtml = (
                <div className="text-center col-md-12">
                    <button className="btn btn-primary w-50" onClick={this.changeFormStatus}>Thêm sản phẩm</button>
                </div>
            )
        }
        return xhtml;
    }
    changeFormStatus = () => {
        const { formActionCreators } = this.props;
        const { showForm } = formActionCreators;
        showForm();
    }
    render() {
        const { productList } = this.props
        return (
            <div className="row">
                <SearchBox />
                {
                    this.renderForm()
                }
                <ProductList productList={productList} />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        productList: state.product.productList,
        showForm: state.form.showForm,
        title: state.form.title
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
        formActionCreators: bindActionCreators(formActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductBoard)