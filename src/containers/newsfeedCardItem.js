import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, View, CardItem, Text, Card, List, Left } from 'native-base';
import { SearchBar, Icon } from 'react-native-elements';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types */

export default class NewsfeedCardItem extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      numberOfLines: 3,
      isPraying: false,
      isGoing: false,
    }
  }

  handleNumberOfLines = () => {
    if (this.state.numberOfLines == 3) {
      this.setState({ numberOfLines: 0 })
    } else {
      this.setState({ numberOfLines: 3 })
    }
  }

  handleIsPraying = () => {
    this.setState({ isPraying: !this.state.isPraying })
  }

  handleIsGoing = () => {
    this.setState({ isGoing: !this.state.isGoing })
  }

  renderPrayerCard = () => {
    if (this.props.type === 'prayer') {
      return(
        <View style={cardItemStyles.prayerCard}>
          <Text style={cardItemStyles.prayerTitle}>This is the title of the prayer</Text>
          <Text style={cardItemStyles.prayerContent} numberOfLines={this.state.numberOfLines} ellipsizeMode={'tail'} >This is the content of the prayer and when clicking see more below, it will expand to see more details. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam donec adipiscing tristique risus nec. Sit amet nisl purus in mollis nunc sed id semper. Nulla facilisi etiam dignissim diam quis. Enim lobortis scelerisque fermentum dui faucibus. Tortor id aliquet lectus proin nibh nisl. Viverra orci sagittis eu volutpat odio. Sed enim ut sem viverra aliquet eget sit amet tellus.</Text>

          <TouchableOpacity
            onPress={this.handleNumberOfLines}
          >
            <Text style={[globalStyles.buttonTextOnly, cardItemStyles.readMore]}>{this.state.numberOfLines == 3 ? 'read more' : 'read less'}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderEventCard = () => {
    if (this.props.type == 'event') {
      return (
        <View style={cardItemStyles.eventCard}>
          <View style={cardItemStyles.eventImage} />

          <View style={cardItemStyles.eventDetailsRow}>
            <View style={cardItemStyles.eventDateColumn}>
              <Text style={cardItemStyles.eventDateDay}>14</Text>
              <Text style={cardItemStyles.eventDateMonth}>OCT</Text>
            </View>

            <View style={cardItemStyles.eventPlaceColumn}>
              <Text style={cardItemStyles.eventPlaceName}>Casting Crowns Concert</Text>
              <Text style={cardItemStyles.eventPlaceAddress}>412 Main St, Lincoln, NE</Text>
            </View>
          </View>

        </View>
      );
    }
  }

  renderPrayerCommentBar = () => {
    if (this.props.type === 'prayer') {
      return (
        <View style={cardItemStyles.commentBar}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => this.handleIsPraying()}
            >
              <Text style={[globalStyles.buttonTextOnly, { paddingRight: 10 }]}>{this.state.isPraying ? 'Im Praying' : 'Praying'}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={globalStyles.buttonTextOnly}>Comment</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[globalStyles.regularText, { paddingRight: 8 }]}>32 going</Text>
            <Text style={globalStyles.regularText}>7 comments</Text>
          </View>
        </View>
      );
    }
  }

  renderEventCommentBar = () => {
    if (this.props.type === 'event') {
      return (
        <View style={cardItemStyles.commentBar}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => this.handleIsGoing()}
            >
              <Text style={[globalStyles.buttonTextOnly, { paddingRight: 10 }]}>{this.state.isGoing ? 'Im Going' : 'Going'}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={globalStyles.buttonTextOnly}>Comment</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[globalStyles.regularText, { paddingRight: 8 }]}>32 praying</Text>
            <Text style={globalStyles.regularText}>7 comments</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <Card style={globalStyles.card}>
          <CardItem>
            <View style={{ flex: 1 }}>

              <View style={cardItemStyles.header}>
              <Icon
                name='account-circle'
                size={32}
                color={'#999999'}
              />

              <View style={cardItemStyles.headerText}>
                <Text style={cardItemStyles.name}>{this.props.name}</Text>
                <Text style={cardItemStyles.organization}>Watermark Community Church</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={cardItemStyles.timeText}>2m ago</Text>
              </View>

              </View>

              {this.renderPrayerCard()}

              {this.renderEventCard()}

              <View style={cardItemStyles.line}/>

              {this.renderPrayerCommentBar()}

              {this.renderEventCommentBar()}

            </View>

          </CardItem>
      </Card>
    );
  }
}

const cardItemStyles = {
  header: {
    flexDirection: 'row',
    flex: 1,
  },
  headerText: {
    flexDirection: 'column',
    paddingLeft: 8,
    paddingRight: 20
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#999999',
  },
  organization: {
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
    marginTop: 3,
  },
  timeText: {
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
    textAlign: 'right',
  },
  prayerCard: {
    flexDirection: 'column',
  },
  prayerTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999999',
  },
  prayerContent: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
  },
  readMore: {
    textAlign: 'right',
    paddingTop: 5,
    paddingBottom: 5
  },
  line: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#999999',
    marginLeft: -20,
    marginRight: -20,
  },
  commentBar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  eventCard: {
    flexDirection: 'column',
  },
  eventImage: {
    marginTop: 10,
    height: 130,
    flex: 1,
    backgroundColor: '#999999',
  },
  eventDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  eventDateColumn: {
    alignItems: 'center',
    backgroundColor: '#DEDEDE',
    width: 75,
  },
  eventDateDay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  eventDateMonth: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#DEDEDE',
    backgroundColor: '#999999',
    width: 75,
    textAlign: 'center',
    padding: 3,
  },
  eventPlaceColumn: {
    flex: 1,
    paddingLeft: 10,
  },
  eventPlaceName: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#999999',
  },
  eventPlaceAddress: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
  },
}
