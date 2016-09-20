import React from 'react';

export var Main = React.createClass({
  render: () => {
    return (
      <div>
        <h1>Main</h1>
        {this.props.children}
      </div>
    );
  }
});

export default Main;
