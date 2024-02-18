import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './routes/DrawerNavigator';
import React,{ useState,useEffect } from 'react';
import { ThemeProvider } from './hooks/ThemeContext';
import NetInfo from '@react-native-community/netinfo'
import { StyleSheet, View,Text } from 'react-native';
import AuthNavigator from './routes/AuthNavigator';
export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
      setShowStatus(true);
      setTimeout(()=>setShowStatus(false), 3000);
    });   

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <ThemeProvider>
    {isConnected ? (
            <View style={[styles.statusContainer, { backgroundColor: 'green' }]}>
            {
                showStatus&&<Text style={styles.statusText}>Online</Text>
            }
            </View>
          ) : (
            <View style={[styles.statusContainer, { backgroundColor: 'red' }]}>
              {
                showStatus&&<Text style={styles.statusText}>Offline</Text>
              }

            </View>
          )}
     <AuthNavigator/>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  statusContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

