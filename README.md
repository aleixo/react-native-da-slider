# react-native-da-slider

This component does not relly on other libs besides react-native.

## Instalation
`yarn add react-native-da-slider`

## Usage
### Basic
```
<Slider>
        <View style={{ backgroundColor: 'red', height: 100, }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={{ backgroundColor: 'blue', height: 100 }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Slider>
```

### With some features
```
      <Slider
        height={100}
        autoplay
        autoplayInterval={2000}>
        <View style={{ backgroundColor: 'red', height: 100, }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={{ backgroundColor: 'blue', height: 100 }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Slider>
```
## Structure
- example - This folder has one usage example with `expo`. You can do `yarn start`.
- Slider - The component that you will use

## Props
| Prop                   | Default   | Type       | Description                                                                         |
|------------------------|-----------|------------|-------------------------------------------------------------------------------------|
| children               | []        | `array`    | The component uses the children as the slider pages.                                |
| autoplay               | false     | `bool`     |                                                                                     |
| autoplayInterval       | 2000      | `number`   | The number of milliseconds between each autoplay loop.                              |
| renderCustomPagination | () => {}  | `function` | This callback allows you to add custom element to the default pagination element    |
| height                 | undefined | number     | This props lets you specify the height of the slider. The default will lead to flex |

## TODO
- [ ] - Loop mode
