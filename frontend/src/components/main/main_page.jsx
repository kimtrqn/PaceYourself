import React from 'react';
import '../../stylesheets/main.scss';
import '../../stylesheets/modal.scss';
import MonthlyChart from '../pie/monthly_pie_container';
import AnnualChart from '../pie/annually_pie_container';
import IncomeForm from '../income/income_form_container'
import ExpenseForm from '../expense/create_expense_form_container';
import Navbar from '../nav/navbar_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
    
    this.openIncomeForm = this.openIncomeForm.bind(this);
    this.openExpenseForm = this.openExpenseForm.bind(this);
  }

  openIncomeForm() {
    document.querySelector('.avgrund-cover').style.visibility = "visible"
    document.querySelector('.income-modal').style.visibility = "visible"
  };

  openExpenseForm() {
    document.querySelector('.avgrund-cover').style.visibility = "visible"
    document.querySelector('.expense-modal').style.visibility = "visible"
  };

  render() {

    return (
      <div className="main-page">
        <Navbar />
        <div className="main-page-content">
          <div className="main-button-container">
            <button className="income-modal-button" onClick={this.openIncomeForm}>Make an Income</button>
            <button className="expense-modal-button" onClick={this.openExpenseForm}>Make An expense</button>
          </div>

          <div className="main-content-container">

            <div className="chart-month-div">
              <MonthlyChart />
            </div>

            <div className="chart-month-div">
              <AnnualChart />
            </div>

          </div>
        </div>

        
        <div className="avgrund-cover"></div>
        
        {/* <div className="flip-container">
          <div className="flipper"> */}
        <div className="income-modal">
          <IncomeForm/>
        </div>
        <div className="expense-modal">
          <ExpenseForm/>
        </div>
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Main;