# react-native-da-slider

This component does not relly on other libs besides react-native.

The component uses nothing but react-native and PropTypes.

# Contributing 
Despite this is not a elaborated component, every contributing is very welcomed.

If you find using the component and having some problem, please file one **ISSUE**

If you think that you can improve the component, please open one **PR**

# Instalation
`yarn add react-native-da-slider`

# Usage

## Basic

```
<Slider
  pages={[
    () => <View style={{ backgroundColor: 'red', flex: 1 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'blue', height: 100 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'red', flex: 0.5 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'blue', height: 100 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'red', height: 100, }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'blue', height: 100 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  ]}
  >
</Slider>
```

## With some features
```
<Slider
  loop
  autoplay
  height={100}
  autoplayInterval={2000}
  defaultPaginationActiveColor="black"
  defaultPaginationInactiveColor="blue"
  pages={[
    () => <View style={{ backgroundColor: 'red', height: 100, }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'blue', height: 100 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'red', height: 100, }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'blue', height: 100 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'red', height: 100, }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
    ,
    () => <View style={{ backgroundColor: 'blue', height: 100 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  ]}
>
</Slider>
```
# Structure
- example - This folder has one usage example with `expo`. You can do `yarn start`.
- Slider - The component that you will use

# Props
| Prop                           | Default    | Type       | Description                                                                                            |
|--------------------------------|------------|------------|--------------------------------------------------------------------------------------------------------|
| pages                          | isRequired | `array`    | One array of function, where each function returns the page to be rendered by the splider              |
| overridePagination             | false      | 'bool'     | One boolean indicating if the component default pagination will be rendered                            |
| renderCustomPagination         | () => {    | 'function' | This callback allows you to add custom element to the default pagination element                       |
| autoplay                       | false      | `bool`     | One boolean to indicate if the slider is on autoplay mode or not                                       |
| autoplayInterval               | 2000       | `number`   | The number of milliseconds between each autoplay loop.                                                 |
| loop                           | false      | 'bool'     | Indicates if the component should allow to loop. Go from last index to the first and oposite           |
| onIndexChange                  | () => {}   | 'function' | One callback that will be called each time the index of sliding page has already changed.              |
| height                         | undefined  | number     | This props lets you specify the height of the slider. The default will lead to flex meaning it will default to the slider container sizes. Use height to set slider container size                   |
| defaultPaginationActiveColor   | black      | 'string    | This string is the color to be used on the active page dot, when default pagination is not overriden   |
| defaultPaginationInactiveColor | white      | 'string    | This string is the color to be used on the inactive page dot, when default pagination is not overriden |

# TODO
- [ ] Extract to multiple components
- [ ] Write unit tests

