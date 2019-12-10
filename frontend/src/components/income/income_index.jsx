import React from 'react';
import '../../stylesheets/index.scss';
import Navbar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import DeleteIncome from './delete_income_container'

class IncomeIndex extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      incomeId: ''
    }

    this.openDeleteForm = this.openDeleteForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllIncome();
  }

  openDeleteForm(incomeId) {
    this.setState({
      incomeId: incomeId
    })
    document.querySelector('.avgrund-cover').style.visibility = "visible";
    document.querySelector('.delete-modal').style.visibility = "visible";
  };

  // sortByAmount() {
  //   this.props.incomes.sort(function (a, b) {
  //     return a.amount - b.amount
  //   })
  // }

  render(){

    // let usersIncome = []

    // this.props.incomes.map(incomePojo => {
    //   if (incomePojo.user === this.props.currentUser.id) {
    //     usersIncome.push(incomePojo);
    //   }
    // })

    return (
      <div className="income-index">
        <Navbar />
        <div className="income-index-container">
          <div className="income-index-table">
            <table>
              <th>Year</th>
              <th>Month</th>
              <th>Income</th>
              <th>Actions</th>
            </table>
            {this.props.incomes.map(income => (
              <table>
                <tr>
                  <td>{income.year}</td>
                  <td>{income.month}</td>
                  <td>{income.income.toFixed(2)}</td>
                  <td>
                    <div className="income-index-buttons">
                      <Link to={`/updateincome/${income._id}`}>Edit</Link>
                      <button className="index-button index-edit-button">Edit</button>
                      <button 
                        className="index-button index-delete-button"
                        onClick={() => this.openDeleteForm(income._id)}
                      >Delete</button>
                    </div>
                  </td>
                </tr>
              </table>
            ))}
          </div>
        </div>

        <div className="avgrund-cover"></div>

        <div className="income-edit-modal">
          
        </div>
        <div className="delete-modal">
          <DeleteIncome incomeId={this.state.incomeId}/>
        </div>
      </div>
    );
  }
}

export default IncomeIndex;