import React,{useState,useEffect} from 'react'
import NetInfo from '@react-native-community/netinfo'

const useNetworkStatus = () => {
    const [isConnected, setIsConnected]=useState(true);
    useEffect(()=>{
        const unsubscribe=NetInfo.addEventListener((state)=>{
            setIsConnected(state.isConnected);
        });

        return ()=>{
            unsubscribe();
        }
    },[]);

return isConnected;
}

export default useNetworkStatus
