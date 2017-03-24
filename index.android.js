/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

class AnimeListItem extends Component {

  render() {
    const { title } = this.props;
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{ title }</Text>
      </View>
    );
  }

}

class AnimeList extends Component {

  render() {
    const { films } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            films.map((film, key) => <AnimeListItem {...film} key={key} />)
          }
        </View>
      </ScrollView>
    );
  }

}

export default class test2 extends Component {

    constructor(props) {
      super(props);
      this.state = {
        films: [
          {
            "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            "title": "Castle in the Sky",
            "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
            "director": "Hayao Miyazaki",
            "producer": "Isao Takahata",
            "release_date": "1986",
            "rt_score": "95",
            "people": [
              "https://ghibliapi.herokuapp.com/people/"
            ],
            "species": [
              "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
            ],
            "locations": [
              "https://ghibliapi.herokuapp.com/locations/"
            ],
            "vehicles": [
              "https://ghibliapi.herokuapp.com/vehicles/"
            ],
            "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
          }
        ]
      };
    }

    async fetchData() {
      const url = "https://ghibliapi.herokuapp.com/films/"
      const data = await fetch(url);
      const json = await data.json();
      this.setState({
        films: json
      });
    }

    onPressAction() {
      this.fetchData();
    }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.onPressAction()} title="Download"/>
        <AnimeList films={this.state.films} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3c5d7',
  },
  listItem: {
    flex: 1,
    backgroundColor: '#c5d5ea',
    margin: 20,
    marginTop: 0,
    borderRadius: 8
  },
  listItemText: {
    flex: 1,
    width: '100%',
    height: 60,
    paddingTop: 20,
    paddingHorizontal: 20,
    color: '#759eb8'
  }
});

AppRegistry.registerComponent('test2', () => test2);
