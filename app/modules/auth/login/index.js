import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { loginRequest } from '../redux/actions';

import './style.scss';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (field) => (evt) => {
    this.setState({ [field]: evt.target.value });
  }

  onSubmit = () => {
    const { email, password } = this.state;
    this.props.loginRequest(email, password);
  }

  render() {
    const { email, password } = this.state;
    return (
      <Grid
        textAlign="center"
        className="page-login"
        verticalAlign="middle"
      >
        <Grid.Column className="column-login" onSubmit={this.onSubmit}>
          <Header>
            Login
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                value={email}
                onChange={this.onChange('email')}
                placeholder="Enter Email"
              />
              <Form.Input
                value={password}
                onChange={this.onChange('password')}
                placeholder="Enter Password"
                type="password"
              />
              <Button>Login</Button>
              <Link to="/signup" className="signup-link">Create account</Link>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  loginRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LoginPage);
