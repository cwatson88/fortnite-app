import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class PlayerStyleProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }


  updateCheck() {
    this.setState(oldState => ({
      checked: !oldState.checked,
    }));
  }

  render() {
    return (
    <div style = {
        styles.block
      } >
      <Checkbox checkedIcon = { < ActionFavorite / >
      }
      uncheckedIcon = { < ActionFavoriteBorder / >
      }
      label = "Custom icon"
      style = {
        styles.checkbox
      }
      />

      </div>
    );
  }
}

export default PlayerStyleProfile;
