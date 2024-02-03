import { Button, Text } from 'react-native'
import { useCounter } from './libs/hooks/useCounter'
import styles from './styles/global';

export const Compter = ({initialValue=0,step=1}) => {
    const [count,increment,decrement] = useCounter(initialValue,step);
  return (<>
  
    
  <Button title={`Increment: ${count}`} onPress={increment}/>
    <Button title={`Decrement ${count}`} onPress={decrement}/>
  </>
  )
}
