import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { card } from "../../../e2e/test-ids";
import Button from "./Button";

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, index } = this.props;
    return (
      <View testID={card.item.container(index)}>
        <TouchableOpacity
          style={{
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 2
          }}
        >
          <Button />
          <Text
            style={{ color: "blue", margin: 20, fontSize: 16 }}
            testID={card.item.linkText}
          >
            {children}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Item;
