var React = require("react");
var Login = React.createClass({

  // Render Comp
  render: function() {
    return (
      <div className="container">
    <div class="jumbotron text-center">
        <h1><span class="fa fa-lock"></span> ReFresh </h1>

        <p>Login or Register with:</p>

        <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
        <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
        <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
        <a href="/auth/twitter" class="btn btn-info"><span class="fa fa-twitter"></span> Twitter</a>
        <a href="/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google+</a>
        </div>
      </div>
    );
  }
});

module.exports = Login;