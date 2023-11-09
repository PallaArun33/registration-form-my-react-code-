// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameErrorMsg: false,
    showLastNameErrorMsg: false,
    isFormSubmitted: false,
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSuccessView = () => (
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="para">Submitted Successfully</p>
      <button
        className="submit-another-button"
        type="button"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderFormaView = () => {
    const {
      firstName,
      lastName,
      showFirstNameErrorMsg,
      showLastNameErrorMsg,
    } = this.state
    return (
      <div className="form-card">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <label className="first-name" htmlFor="firstName">
            FIRST NAME
          </label>

          <input
            type="text"
            className="first-name-input"
            id="firstName"
            value={firstName}
            placeholder="First name"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {showFirstNameErrorMsg && <p className="error-msg">Required</p>}
          <br />
          <label className="last-name" htmlFor="lastName">
            LAST NAME
          </label>

          <input
            type="text"
            className="last-name-input"
            id="lastName"
            value={lastName}
            placeholder="Last name"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {showLastNameErrorMsg && <p className="error-msg">Required</p>}
          <br />
          <div className="btn-container">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    const isValidFirstName = firstName !== ''
    const isValidLastName = lastName !== ''

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameErrorMsg: !isValidFirstName,
        showLastNameErrorMsg: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({showFirstNameErrorMsg: true})
    } else {
      this.setState({showFirstNameErrorMsg: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({showLastNameErrorMsg: true})
    } else {
      this.setState({showLastNameErrorMsg: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? this.renderSuccessView() : this.renderFormaView()}
      </div>
    )
  }
}
export default RegistrationForm
