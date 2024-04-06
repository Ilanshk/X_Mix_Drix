import { useState } from 'react';
import { StyleSheet, Text, View,Image,StatusBar, TouchableOpacity ,Alert,Button} from 'react-native';

export default function App() {
  const[currentPlayer,setCurrentPlayer] = useState("X");
  //const[isCellClicked,setIsCellClicked] = useState(false);
  const[cellState,setCellState] = useState(["E","E","E","E","E","E","E","E","E"]);
    console.log(cellState);

  const onCellClick = (index:number) =>{
    let currentCellsState = [...cellState];
    if(currentCellsState[index] === "E"){
      currentCellsState[index] = currentPlayer=="X" ?"X":"O";
      setCellState(currentCellsState);
      setCurrentPlayer(currentPlayer == "O"?"X":"O");
      console.log(currentCellsState);
    }
    
    // if(currentCellsState[index] != "E"){
    //   Alert.alert("Space is occupied");
    // }
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>X Mix Drix</Text>
      <View>
        <Text style={styles.guide}>It is player {currentPlayer}'s turn</Text>
      </View>
      <View style={styles.firstRow}>
        <TouchableOpacity onPress={() => {onCellClick(0)}}>
        {cellState[0] == "E" &&
             <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[0] == "X" && 
             <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[0] == "O" &&
             <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {onCellClick(1)}}>
        {cellState[1] == "E" &&
             <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[1] == "X" && 
             <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[1] == "O" &&
             <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onCellClick(2)}>
          {/* <Image style={styles.cell}source={require("./assets/gridCell.png")}/> */}
        {cellState[2] == "E" &&
          <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[2] == "X" && 
          <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[2] == "O" &&
          <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
      </View>

      <View style={styles.secondRow}>
        <TouchableOpacity onPress={() => {onCellClick(3)}}>
        {cellState[3] == "E" &&
          <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[3] == "X" && 
          <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[3] == "O" &&
          <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {onCellClick(4)}}>
        {cellState[4] == "E" &&
          <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[4] == "X" && 
          <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[4] == "O" &&
          <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {onCellClick(5)}}>
        {cellState[5] == "E" &&
          <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[5] == "X" && 
          <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[5] == "O" &&
          <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
      </View>

      <View style={styles.thirdRow}>
        <TouchableOpacity onPress={() => {onCellClick(6)}}>
        {cellState[6] == "E" &&
          <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[6] == "X" && 
          <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[6] == "O" &&
          <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {onCellClick(7)}}>
        {cellState[7] == "E" &&
          <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[7] == "X" && 
          <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[7] == "O" &&
          <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {onCellClick(8)}}>
        {cellState[8] == "E" &&
          <Image style={styles.cell} source={require("./assets/gridCell.png")}/>
        }
        {cellState[8] == "X" && 
          <Image style={styles.cell} source={require("./assets/x_image.png")}/>
        }
        {cellState[8] == "O" &&
          <Image style={styles.cell} source={require("./assets/o_image.png")}/>
        }
        </TouchableOpacity>
      </View>
      <Button
        title = "Restart"
        onPress = {() => setCellState(["E","E","E","E","E","E","E","E","E"])}
      >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:StatusBar.currentHeight,
    flexDirection:'column',
  },
  firstRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    // flex:1
  },
  secondRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    // flex:1
  },
  thirdRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    // flex:1

  },
  cell:{
   borderWidth:3,
   borderColor:'black',
   height:130,
   width:130
  },
  heading:{
    alignSelf:'center',
    padding:10,
    fontSize: 20
  },
  guide:{
    alignSelf:'center',
    backgroundColor:'blue',
    fontSize:30,
    marginHorizontal:20,
    paddingVertical:20

  },
  image:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'contain'
  }
  
});
