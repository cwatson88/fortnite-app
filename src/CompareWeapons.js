import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import WeaponCard from './WeaponCard';

class CompareWeapons extends Component {
  constructor() {
    super();
    this.state = {
      weapon1: {
        name: '',
      },
      weapon2: {
        name: '',
      },
      bestWeapon: '',
    };

    this.updateWeapon1 = this.updateWeapon1.bind(this);
    this.updateWeapon2 = this.updateWeapon2.bind(this);
    this.bestWeapon = this.bestWeapon.bind(this);
  }

  updateWeapon1(event, index, value) {
    this.setState({ weapon1: value }, this.bestWeapon);
    // second option in setState is a callback
  }
  updateWeapon2(event, index, value) {
    this.setState({ weapon2: value }, this.bestWeapon);
  }

  bestWeapon() {
    const { weapon1 } = this.state;
    const { weapon2 } = this.state;

    this.setState({
      bestWeapon:
      weapon1.DPS > weapon2.DPS
        ? weapon1.Name
        : weapon2.Name,
    });
  }

  render() {
    const weaponsList = this.props.weaponList
      .reduce((previousWeapon, currentWeapon) =>
        previousWeapon.concat(currentWeapon))
      .reduce((previousWeapon, currentWeapon) =>
        previousWeapon.concat(currentWeapon));

    const rarityColorValue = {
      common: '#7e7e7e',
      uncommon: '#00aa58',
      rare: '#008fbd',
      epic: '#b018dd',
      legendary: '#de9c3c',
      mythic: '#ffd549',
    };

    const rarityColor = (item) => {
      const color = item.toLowerCase();
      return rarityColorValue[color] || 'grey';
    };

    return (
      <div>
        <SelectField
          floatingLabelText="Weapon:"
          value={this.state.weapon1}
          onChange={this.updateWeapon1}
        >
          {weaponsList.map(weapon => (
            <MenuItem
              key={`weapon1${weapon.Name}${weapon.Rarity}`}
              value={weapon}
              style={{ color: rarityColor(weapon.Rarity) }}
              primaryText={weapon.Name}
            />
          ))}
        </SelectField>

        <SelectField
          floatingLabelText="Weapon:"
          value={this.state.weapon2}
          onChange={this.updateWeapon2}
        >
          {weaponsList.map(weapon => (
            <MenuItem
              key={`weapon2${weapon.Name}${weapon.Rarity}`}
              value={weapon}
              style={{ color: rarityColor(weapon.Rarity) }}
              primaryText={`${weapon.Name} (${weapon.Rarity})`}
            />
          ))}
        </SelectField>
        <div style={{ display: 'inline-flex' }}>
          {this.state.weapon1.name === '' ? (
            ''
          ) : (
            <WeaponCard
              weaponRarity={rarityColor(this.state.weapon1.Rarity)}
              weapon={this.state.weapon1}
            />
          )}
          {this.state.weapon2.name === '' ? (
            ''
          ) : (
            <WeaponCard
              weaponRarity={rarityColor(this.state.weapon2.Rarity)}
              weapon={this.state.weapon2}
            />
          )}
        </div>
        <h5>{this.state.bestWeapon}</h5>
      </div>
    );
  }
}

CompareWeapons.propTypes = {
  weaponList: PropTypes.object,
  weaponCategory: PropTypes.string,
  weaponTypes: PropTypes.string,
};
export default CompareWeapons;
