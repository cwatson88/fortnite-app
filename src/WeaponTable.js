import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Guns from './Guns';

class WeaponTable extends Component {
  render() {
    // TODO: add this code to the parent so it can be used in other compnents.
    const weaponTypes = this.props.weaponTypes.map(item => Object.keys(item)[0]);

    const weaponsList = this.props.weaponList
      .map(weaponObject => Object.values(weaponObject))
      .reduce((previousWeaponArray, currentWeaponArray) => previousWeaponArray.concat(currentWeaponArray))
      .map((multipleWeaponArray, index) => multipleWeaponArray.map((weaponArrays) => {
        const weponArrayWithtypes = { ...weaponArrays, type: weaponTypes[index] };
        return weponArrayWithtypes;
      }))
      .reduce((previousWeaponArray, currentWeaponArray) => previousWeaponArray.concat(currentWeaponArray));

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>image</th>
              <th>
                <h5>Weapon</h5>
              </th>
              <th>
                <h5>Rarity</h5>
              </th>
              <th>
                <h5>DPS</h5>
              </th>
              <th>
                <h5>Damage</h5>
              </th>
              <th>
                <h5>Fire Rate</h5>
              </th>
            </tr>
            {
              weaponsList.map((item, index) => <Guns key={index} weapons={item}/>)
            }

          </tbody>
        </table>
      </div>
    );
  }
}

WeaponTable.propTypes = {
  weaponList: PropTypes.object,
  weaponTypes: PropTypes.string,
};

export default WeaponTable;
