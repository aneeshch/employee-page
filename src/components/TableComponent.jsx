import React from 'react';

const TableComp = (props) => {
    return (
        <div className='table-comp'>
            <div className='logout-button'>
            <button onClick={props.handleLogoutClick} className='btn-custom'>
                    LOGOUT
            </button>
            </div>
            <h1>Employee Details</h1>
            <table className='employee-table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                        <td>Email</td>
                        <td>Phone No</td>
                    </tr>
                </thead>
                <tbody>
                        {
                        props.employeeData && Array.isArray(props.employeeData) &&
                         props.employeeData.map(eachEmployee =>{
                            return (
                                <tr key={eachEmployee.id}>
                                    <td>{eachEmployee.id}</td>
                                    <td>{eachEmployee.name}</td>
                                    <td>{eachEmployee.age}</td>
                                    <td>{eachEmployee.gender}</td>
                                    <td>{eachEmployee.email}</td>
                                    <td>{eachEmployee.phoneNo}</td>
                                </tr>
                            )
                        }
                        )}
               </tbody>
            </table>
        </div>
    )
}

export default TableComp;