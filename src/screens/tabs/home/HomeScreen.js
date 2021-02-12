import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { fetchItems, } from '../../../redux/actions/HomeActions';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  main: {
    flex: 1, paddingTop: 6, paddingBottom: 8
  },
  listContainer: {
    width: '100%', backgroundColor: 'white', justifyContent: 'center',
    marginBottom: 6, paddingLeft: 18, paddingTop: 6, paddingRight: 6, paddingBottom: 4
  },
  item: {
    marginBottom: 5,
  }
})
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _renderList() {
    let myItems = this.props.items;
    return (
      <ScrollView>
        {myItems !== null &&
          myItems.map((item, index) => {
            return (
              <View
                key={index}
                style={styles.listContainer}
              >
                <Text
                  style={styles.item}
                >{`name : ${item.name}`}</Text>
                <Text
                  style={styles.item}
                >{`username : ${item.username}`}</Text>
                <Text
                  style={styles.item}
                >{`email : ${item.email}`}</Text>
                <Text
                  style={styles.item}
                >{`address : ${JSON.stringify(item.address)}`}</Text>
                <Text
                  style={styles.item}
                >{`phone : ${item.phone}`}</Text>
                <Text
                  style={styles.item}
                >{`website : ${item.website}`}</Text>
                <Text
                  style={styles.item}
                >{`company : ${JSON.stringify(item.company)}`}</Text>


              </View>
            )
          })
        }
      </ScrollView>
    )

  }

  async componentDidMount() {
    await this.props.fetchItems();
    console.log('items :', this.props.items);
  }

  render() {
    return (
      <View
        style={styles.main}
      >
        {
          this._renderList()
        }

      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.HomeReducer.items,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
//export default HomeScreen;
