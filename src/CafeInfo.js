import React from 'react';


class CafeInfo extends React.Component {

  render() {
		const { name, dishes, stars} = this.props;
    return (
      <>
			  <h2>{name}</h2>
        <p>starsCount:{stars}</p>
        <ul>
          {dishes.map((elem) =>(
            <li>{elem}</li>
          ))}
        </ul>
      </>

    )
  }
  
}

export default CafeInfo;