import React from 'react';
import { Image } from 'semantic-ui-react';
import artPlaceholder from '../../../resources/media/art_placeholder.png';

import styles from './styles.scss';

var classNames = require('classnames');

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          classNames({
            [`${styles.card}`]: true,
            [`${styles.small}`]: this.props.small
          })
        }
        onClick={this.props.onClick}
      >
        <Image src={this.props.image || artPlaceholder}></Image>
        <div className={styles.container}>
          <h4>{this.props.header}</h4>
          {
            this.props.content
            ? <p>{this.props.content}</p>
            : null
          }
        </div>
      </div>
    );
  }
}

export default Card;
