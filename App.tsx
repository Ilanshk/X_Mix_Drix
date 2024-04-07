import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image,StatusBar, TouchableOpacity ,Alert,Button} from 'react-native';

export default function App() {
  const[currentPlayer,setCurrentPlayer] = useState("X");
  const[cellState,setCellState] = useState(["E","E","E","E","E","E","E","E","E"]);
  const[isThereAwinner,setIsThereAwinner] = useState(false); 


  const checkForWinner = (cells: string[]) =>{
    console.log("Checking Winner");
    
    const winnerSequence = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i = 0;i<winnerSequence.length;i++){
      const [pos1,pos2,pos3] = winnerSequence[i];
      if(cells[pos1] == "X" && cells[pos1] == cells[pos2] && cells[pos2] == cells[pos3]){
        Alert.alert("Congratulations!","Player X won!");
        setIsThereAwinner(true);
        setCurrentPlayer("X");
        
      }
      if(cells[pos1] == "O" && cells[pos1] == cells[pos2] && cells[pos2] == cells[pos3]){
        Alert.alert("Congratulations!","Player O won!");
        setIsThereAwinner(true);
        setCurrentPlayer("X");
      }
    }
  }

  const onCellClick = (index:number) =>{
     
   if(cellState[index] != "E"){
      Alert.alert("Space is occupied");
    }
    
    let currentCellsState = [...cellState];
    if(currentCellsState[index] === "E"){
      currentCellsState[index] = currentPlayer=="X" ?"X":"O";
      setCellState(currentCellsState);
      setCurrentPlayer(currentPlayer == "O"?"X":"O");
      console.log(currentCellsState);
    }
  }
  useEffect(()=>
     checkForWinner(cellState)
  ,[cellState]);
  
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>X Mix Drix</Text>
      <View>
        <Text style={[currentPlayer == "X" && styles.xTurn, currentPlayer == "O" && styles.oTurn ]}>It is player {currentPlayer}'s turn</Text>
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
      {isThereAwinner &&
        <Button onPress = {
          () => {
            setCellState(["E","E","E","E","E","E","E","E","E"]);
            setIsThereAwinner(false);
          }
        }
          title= "Play Again"
        >
        </Button>
      }
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
    backgroundColor:'#21c49e'
  },
  firstRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  secondRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  thirdRow:{
    flexDirection:'row',
    justifyContent:'space-evenly',
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
    fontSize: 20,
    fontWeight: '700',
  },
  xTurn:{
    alignSelf:'center',
    backgroundColor:'#db2c52',
    fontSize:30,
    marginHorizontal:20,
    paddingVertical:20,
    marginBottom:5
  },
  oTurn:{
    alignSelf:'center',
    backgroundColor:'#17a4e6',
    fontSize:30,
    marginHorizontal:20,
    paddingVertical:20,
    marginBottom:5
  }
  
});
