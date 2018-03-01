import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Guns extends Component {
  render() {
    const { weapons } = this.props;
    const { gunCategory } = this.props;
    weapons.gunCategory = gunCategory;

    return (
      <tr>
        <td>
          <img
          src=
          "http://oyster.ignimgs.com/mediawiki/apis.ign.com/fortnite/thumb/c/c4/Assaultgrey.jpg/50px-Assaultgrey.jpg"
           />
        </td>
        <td>
          <h5>{weapons.Name}</h5>
        </td>
        <td>
          <p>{weapons.Rarity}</p>
        </td>
        <td>
          <p>{weapons.DPS}</p>
        </td>
        <td>
          <p>{weapons.Damage}</p>
        </td>
        <td>
          <p>{weapons['Fire Rate']}</p>
        </td>
        <td>
          <p>{weapons.gunCategory}</p>
        </td>
      </tr>
    );
  }
}

Guns.propTypes = {
  weapons: PropTypes.object,
  gunCategory: PropTypes.string,
};

export default Guns;
