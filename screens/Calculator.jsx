import React,{useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } 
	from 'react-native'; 
import { useTheme } from '../hooks/ThemeContext';

export default function Calculator() {
	const {isDarkTheme}=useTheme();
	const displayContainer=[
		styles.container,
		{backgroundColor:isDarkTheme?'#000000':'#051460'}
	]
const [displayValue, setDisplayValue] = useState('0'); 
	const [operator, setOperator] = useState(null); 
	const [firstValue, setFirstValue] = useState(''); 

	const handleNumberInput = (num) => { 
		if (displayValue === '0') { 
			setDisplayValue(num.toString()); 
		} else { 
			setDisplayValue(displayValue + num); 
		} 
	}; 
	const handleOperatorInput = (operator) => { 
		setOperator(operator); 
		setFirstValue(displayValue); 
		setDisplayValue(''); 
	}; 
	const handleEqual = () => { 
		const num1 = parseFloat(firstValue); 
		const num2 = parseFloat(displayValue); 

		if (operator === '+') { 
			setDisplayValue((num1 + num2).toString()); 
		} else if (operator === '-') { 
			setDisplayValue((num1 - num2).toString()); 
		} else if (operator === '*') { 
			setDisplayValue((num1 * num2).toString()); 
		} else if (operator === '/') { 
			setDisplayValue((num1 / num2).toString()); 
		} 

		setOperator(null); 
		setFirstValue(''); 
	}; 

	const handleClear = () => { 
		setDisplayValue('0'); 
		setOperator(null); 
		setFirstValue(''); 
	}; 
  const handleDelete=()=>{
    setDisplayValue(displayValue.slice(0,-1));
  }

	return ( 
		<View style={displayContainer}> 
			<View style={styles.displayContainer}> 
				<Text style={styles.displayText}> 
					{displayValue} 
				</Text> 
			</View> 
			<View style={styles.buttonContainer}> 
				<View style={styles.row}> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(7)} 
					> 
						<Text style={styles.buttonText}>7</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(8)} 
					> 
						<Text style={styles.buttonText}>8</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(9)} 
					> 
						<Text style={styles.buttonText}>9</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={[styles.button, styles.operatorButton]} 
						onPress={() => handleOperatorInput('/')} 
					> 
						<Text style={[ 
							styles.buttonText, 
							styles.operatorButtonText 
						]}> 
							÷ 
						</Text> 
					</TouchableOpacity> 
				</View> 
				<View style={styles.row}> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(4)} 
					> 
						<Text style={styles.buttonText}>4</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(5)} 
					> 
						<Text style={styles.buttonText}>5</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(6)} 
					> 
						<Text style={styles.buttonText}>6</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={[styles.button, styles.operatorButton]} 
						onPress={() => handleOperatorInput('*')} 
					> 
						<Text style={[ 
							styles.buttonText, 
							styles.operatorButtonText 
						]}> 
							× 
						</Text> 
					</TouchableOpacity> 
				</View> 
				<View style={styles.row}> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(1)} 
					> 
						<Text style={styles.buttonText}>1</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(2)} 
					> 
						<Text style={styles.buttonText}>2</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={styles.button} 
						onPress={() => handleNumberInput(3)} 
					> 
						<Text style={styles.buttonText}>3</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={[styles.button, styles.operatorButton]} 
						onPress={() => handleOperatorInput('-')} 
					> 
						<Text style={[ 
							styles.buttonText, 
							styles.operatorButtonText 
						]}> 
							− 
						</Text> 
					</TouchableOpacity> 
				</View> 
				<View style={styles.row}> 
        <TouchableOpacity 
						style={[styles.operatorButton,styles.button]} 
						onPress={handleDelete} 
					> 
						<Text style={[ 
							styles.buttonText, 
							styles.operatorButtonText 
						]}> 
							Del
						</Text> 
					</TouchableOpacity> 

					<TouchableOpacity 
						style={[styles.button]} 
						onPress={() => handleNumberInput(0)} 
					> 
						<Text style={[ 
							styles.buttonText, 
							styles.zeroButtonText 
						]}> 
							0 
						</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={[styles.button, styles.operatorButton]} 
						onPress={() => handleOperatorInput('+')} 
					> 
						<Text style={[ 
							styles.buttonText, 
							styles.operatorButtonText 
						]}> 
							+ 
						</Text> 
					</TouchableOpacity> 
					<TouchableOpacity 
						style={styles.equalButton} 
						onPress={handleEqual} 
					> 
						<Text style={styles.equalButtonText}>=</Text> 
					</TouchableOpacity> 
				</View> 
				<TouchableOpacity 
					style={styles.clearButton} 
					onPress={handleClear}> 
					<Text style={styles.clearButtonText}>C</Text> 
				</TouchableOpacity> 
			</View> 
		</View> 
	); 
} 

// Styles 
const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
	
		alignItems: 'center', 
		justifyContent: 'center', 
    paddingBottom:2,
	}, 
	displayContainer: { 
		flex: 1.5, 
		justifyContent: 'flex-end', 
		alignItems: 'flex-start', 
		padding: 20, 
	}, 
	displayText: { 
		fontSize: 50, 
		color: 'white', 
	}, 
	buttonContainer: { 
		flex: 3, 
		width: '80%', 
	}, 
	row: { 
		flex: 1, 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		marginBottom: 10, 
	}, 
	button: { 
		flex: 1, 
		borderRadius: 50, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#fff', 
		elevation: 3, 
		margin: 1.5, 
		padding: 10, 
	}, 
	buttonText: { 
		fontSize: 15, 
		color: '#333', 
	}, 
	zeroButtonText: { 
		marginLeft: 1.5, 
	}, 
	operatorButton: { 
		backgroundColor: '#f0f0f0', 
	}, 
	operatorButtonText: { 
		color: '#ff9500', 
    fontWeight:'bold',
	}, 
	equalButton: { 
		flex: 1, 
		borderRadius: 50, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#ff9500', 
	}, 
	equalButtonText: { 
		fontSize: 25, 
		color: '#fff', 
	}, 
	clearButton: { 
		borderRadius: 50, 
		alignItems: 'center', 
		justifyContent: 'center', 
		backgroundColor: '#f0f0f0', 
		marginTop: 10, 
		elevation: 3, 
		padding: 10, 
    marginBottom:10,
	}, 
	clearButtonText: { 
		fontSize: 24, 
		color: '#333', 
	}, 
});
