
import './App.css';
import Password from './components/password';
import {
 Box,
  Text
} from '@chakra-ui/react'
function App() {
  return (
    <div className='App'>
        <Box w={600} h={500}ml={300} mt={70}  border="1px solid"
      borderColor="gray.200" 
      borderRadius="md" 
      p={4}>
        <Text fontSize='3xl' colorScheme='teal'>Password Generator</Text>
      <Password/>
    </Box>
    </div>
    
  );
}

export default App;
