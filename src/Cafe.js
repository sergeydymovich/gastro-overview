import React from 'react';


class Cafe extends React.Component {

  render() {
		const { name} = this.props;
    return (
			<li className="list-item">
				{name}
			</li>
    )
  }
  
}

export default Cafe;