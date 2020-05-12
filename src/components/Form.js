import React from 'react';

const Form = (props) => {
    console.log(props);
    return (
        <div className="form-container">
            <form className="form">
                <div>
                    <label for="date">Date: </label>
                    <input name="date" id="date" type="date"></input>
                </div>
                <div>
                    <label for="description">Item Description: </label>
                    <input type="text" name="description" id="description"></input>
                </div>
                <div>
                    <label for="credit-debit">Credit or Debit: </label>
                    <div>
                        <input type="radio" id="credit" name="credit-debit" value="credit"></input>
                        <label for="credit">Credit</label>
                    </div>
                    <div>
                        <input type="radio" id="debit" name="credit-debit" value="debit"></input>
                        <label for="debit">Debit</label>
                    </div>
                    <div>
                        <label for="amount">Amount: </label>
                        <input type="number" name="amount" id="amount" step=".01"></input>
                    </div>
                </div>
            </form>
            <div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Form;