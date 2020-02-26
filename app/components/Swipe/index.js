import { Dimensions } from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import { View } from 'react-native';
import d1 from './d1.jpg';


export default class Swipe extends Component {
  state = {
    currentIndex: 0,
  };

  render = () => {
    // center items on screen
    const { width } = Dimensions.get('window');
    const contentOffset = (width - CustomComponent.WIDTH) / 2;

    return (
      <SideSwipe
        index={this.state.currentIndex}
        itemWidth={CustomComponent.WIDTH}
        style={{ width }}
        data={data}
        contentOffset={contentOffset}
        onIndexChange={index =>
          this.setState(() => ({ currentIndex: index }))
        }
        renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
         <View
            {...item}
            index={itemIndex}
            currentIndex={currentIndex}
            animatedValue={animatedValue}
          />
        )}
      />
    );
  };
}