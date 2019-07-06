import React from 'react';

import { View, FlatList } from 'react-native';

import styles from './index.styles';

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.currentIndex = 0;
    this.datasource = Array.isArray(props.children) ? props.children : [props.children];

    this.state = {
      layout: {},
      cellLayout: {},
      listKey: `${Math.random()}`,
    }
  }

  /**
   * This function acts on the will unmount life-cycle
   * 
   * When unmounting we must clear the autoplay interval.
   */
  componentWillUnmount() {
    clearInterval(this.autoPlayIntervalRef);
  }

  /**
   * This function starts the autoplay, if the autoplay prop is true.
   * 
   * The autoplay is started for the given interval time.
   * 
   * @param {number }interval - The inteval in milliseconds
   */
  _startAutoplay = (interval) => {
    const { onIndexChange } = this.props;
    const autoplayHandler = () => {
      this.currentIndex = this._nextIndexLeft();
      this._updateIndexState(this.currentIndex, onIndexChange);
      this.listRef.scrollToIndex({ animated: true, index: this.currentIndex });
    };

    this.autoPlayIntervalRef = setInterval(autoplayHandler, interval);
  }

  /**
   * This function is called when the FlatList is mounted.
   * 
   * The given reference will be stored on this.listRef and if
   * autoplay from props is true, the _startAutoplay will be called.
   * 
   * @param {Object} ref - The FlatList internal reference.
   */
  _handleFLatListMount = (ref) => {
    const { autoplay, autoplayInterval } = this.props;

    this.listRef = ref;

    autoplay && this._startAutoplay(autoplayInterval);
  }

  /**
   * This function is responsible to decide what will be the next index
   * when we are playing to right.
   * 
   * @returns {number} - The next index number
   */
  _nextIndexRight = () => {
    const nextObviousIndex = this.currentIndex - 1;
    return nextObviousIndex < 0 ? this.datasource.length - 1 : nextObviousIndex;
  }

  /**
   * This function is responsible to decide what will be the next index
   * when we are playing to left.
   * 
   * @returns {number} - The next index number
   */
  _nextIndexLeft = () => {
    const nextObviousIndex = this.currentIndex + 1;
    return nextObviousIndex > this.datasource.length - 1 ? 0 : nextObviousIndex;
  }

  /**
   * This function is used by the FlatList to render the next item
   * 
   * It will also soround the item with one view that as the widht of the window.
   * 
   * @param {Object} item - THe component to be mounted.
   */
  _handleFlatListRenderItem = ({ item }) => {
    return <View onLayout={this._onCellLayout} style={styles.fullWidth}>{item}</View>
  }
  _onCellLayout = (event) => {
    this.setState({
      cellLayout: event.nativeEvent.layout
    })
  }
  /**
   * THis function handles the beggining of the scroll.
   * 
   * It is used to clear the current autoplay in order to prevent
   * autoplay during long press.
   * 
   * @param {Object} event - The begin scroll event.
   */
  _handleScrollBegin = (event) => {
    clearInterval(this.autoPlayIntervalRef);

    this.scrollStartAt = event.nativeEvent.contentOffset.x;
  }

  /**
   * This function handles the scroll ending event.
   * 
   * Here, the list has to scroll to the next element depending if the 
   * scroll direction if RTL or LTR.
   * 
   * Also if autoplay props is true, we need to restart the already stoped autplay,
   * and we need to update the state with the new index.
   * 
   * @param {Object} event - The end scroll event.
   */
  _handleScrollEnd = (event) => {
    const { autoplay, autoplayInterval, onIndexChange } = this.props;
    const scrollingLeft = event.nativeEvent.contentOffset.x > this.scrollStartAt;

    this.currentIndex = scrollingLeft ? this._nextIndexLeft() : this._nextIndexRight();
    this.listRef.scrollToIndex({ animated: true, index: this.currentIndex });

    autoplay && this._startAutoplay(autoplayInterval)
    this._updateIndexState(this.currentIndex, onIndexChange);
  }

  /**
   * This function updates the component state with the current index
   * that is beeing show.
   * 
   * If also calls onIndexChange property callback with the current index
   * 
   * @param {number} newIndex - The new index to the state.
   * @param {function} onIndexChange - The callback to when the state has changed.
   */
  _updateIndexState = (newIndex, onIndexChange) => {
    this.setState({ currentIndex: newIndex, }, onIndexChange)
  }

  /**
   * THis function stores the layour on the state
   * 
   * @param {Object} event - The event containing the new layout info as nativeEvent.layout.
   */
  _onViewLayout = (event) => {
    this.setState({
      layout: event.nativeEvent.layout,
    })
  }

  render() {
    const { currentIndex, layout, listKey, cellLayout } = this.state;
    const { renderCustomPagination, height } = this.props;
    return (
      <View style={{ flex: 1, maxHeight: height, }} onLayout={this._onViewLayout}>
        <FlatList
          horizontal
          listKey={listKey}
          keyExtractor={() => `${Math.random()}`}
          ref={this._handleFLatListMount}
          data={this.datasource}
          renderItem={this._handleFlatListRenderItem}
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={this._handleScrollBegin}
          onScrollEndDrag={this._handleScrollEnd}
        />
        <View style={[styles.paginationContainer, { width: layout.width, }]}>
          {
            renderCustomPagination &&
            <View style={{ width: layout.width }}>
              {renderCustomPagination(currentIndex)}
            </View>
          }
          <View style={styles.defaultPaginationContainer}>
            {
              this.datasource.map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.defaultPaginationItem,
                    index === currentIndex && styles.defaultPagination__Active
                  ]}
                />
              ))
            }
          </View>
        </View>
      </View>
    );
  }
}

Slider.defaultProps = {
  autoplay: false,
  autoplayInterval: 2000,
  defaultPaginationStyleActive: undefined,
  overrideDefaultPaginationStyle: false,
  onIndexChange: () => { },
  renderCustomPagination: () => { },
  children: [],
}
export default Slider;