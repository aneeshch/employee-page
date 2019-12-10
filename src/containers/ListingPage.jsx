import React from 'react';
// import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TableComp from '../components/TableComponent.jsx';
import { fetchListingData, getLogout, } from '../actions/employee';

class ListingPage extends React.Component{
    state={
        employeeData: [],
    }
    componentDidMount() {
        this.props.getEmployeeData();
    }
    handleLogoutClick=()=>{
        this.props.getLogout();
    }
    render(){
        if (!this.props.loggedIn) {
            return(
                <Redirect to='/' />
            )
        }
        return(
            <div className='login-main'>
                <TableComp employeeData={_get(this.props.employeeData, 'user')} handleLogoutClick={this.handleLogoutClick}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getEmployeeData: () => dispatch(fetchListingData()),
    getLogout: () => dispatch(getLogout()),
})

const mapStateToProps = (state) => {
    const { employeeData, loggedIn, } = state;
    return {
        employeeData,
        loggedIn,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingPage);
