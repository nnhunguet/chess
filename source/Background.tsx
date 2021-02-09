import React from "react";
import { Text, View } from 'react-native';
const WHITE = 'rgb(100,133,68)'
const BLACK = 'rgb(230,233,198)'
interface BackgroundProps { }
interface RowProps {
  row: number;
}
interface SquareProps extends RowProps {
  col: number;
}
const Square = ({ row, col }: SquareProps) => {
  const offset = row % 2 === 0 ? 1 : 0
  const backgroundColor = (col + offset) % 2 === 0 ? WHITE : BLACK;
  return (
    <View style={{ flex: 1, backgroundColor }} >
      <Text>
        {row}
      </Text>
      <Text>
        {col}
      </Text>
    </View>
  )
}
const Row = ({ row }: RowProps) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }} >
      {
        new Array(8).fill(0).map((_, col) => (<Square key={col} row={row} col={col} />))
      }
    </View>
  )
}

const Background = () => {
  return <View style={{ flex: 1 }} >
    {
      new Array(8).fill(0).map((_, row) => (
        <Row key={row} row={row} />
      ))
    }
  </View>
};

export default Background;
