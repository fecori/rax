import {createElement, Component} from 'universal-rx';
import {isWeex} from 'universal-env';
import View from './View';

class TouchableHighlight extends Component {
  render() {
    let props = this.props;
    let nativeProps = {
      ...props,
      style: {
        ...styles.initial,
        ...props.style
      },
      onClick: props.onPress
    };

    delete nativeProps.onPress;

    return <View {...nativeProps} />;
  }
}

const styles = {
  initial: {
    cursor: 'pointer'
  }
};

export default TouchableHighlight;
