import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  // CardActions,
  // CardHeader,
  // CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';

class WeaponCard extends Component {
  render() {
    const { weapon } = this.props;
    const bgColor = this.props.weaponRarity;

    return (
      <div style={{ width: '200px' }}>
        <Card>
          <CardTitle
            title={weapon.Name}
            titleColor="white"
            style={{ backgroundColor: bgColor, minHeight: '88px' }}
            subtitle={weapon.Rarity}
          />
          <CardText style={{ textAlign: 'left', paddingLeft: '20%' }}>
            <p>DPS: {weapon.DPS}</p>
            <p>Damage: {weapon.Damage}</p>
            <p>Fire Rate: {weapon['Fire Rate']}</p>
            <p>Magazine Size: {weapon.Mag}</p>
            <p>Reload: {weapon.Reload}</p>
          </CardText>
        </Card>
      </div>
    );
  }
}
WeaponCard.propTypes = {
  weapon: PropTypes.object,
  weaponRarity: PropTypes.string,
};

export default WeaponCard;
