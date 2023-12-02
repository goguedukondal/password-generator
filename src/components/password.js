import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Stack,
  Checkbox,
  Button,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaHandPointDown, FaCopy } from "react-icons/fa";
import { useState } from "react";
function Password() {
  const [isUpperCaseInclude, setIsUpperCaseInclude] = useState(false);
  const [isNumbersInclude, setIsNumbersInclude] = useState(false);
  const [isSymbolsInclude, setIsSymbolsInclude] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);
  const [originalpassword, setOriginalPassword] = useState("");

  const genPassword = () => {
    const UppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = "0123456789";
    const Symbols = "@#$%^&*!?";
    let password = LowerCaseLetters;

    if (isUpperCaseInclude) {
      password += UppercaseLetters;
    }
    if (isNumbersInclude) {
      password += Numbers;
    }
    if (isSymbolsInclude) {
      password += Symbols;
    }
    let finalPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * password.length);
      finalPassword += password[randomIndex];
    }
    setOriginalPassword(finalPassword);
  };
  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = originalpassword;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    
  };

  return (
    <Box>
      <label>Enter the length of the password</label>
      <NumberInput
        value={passwordLength}
        onChange={(value) => setPasswordLength(value)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Stack spacing={5} direction="column" ml={200} mt={5}>
        <Checkbox onChange={() => setIsUpperCaseInclude(!isUpperCaseInclude)}>
          Include Uppercase
        </Checkbox>
        <Checkbox onChange={() => setIsNumbersInclude(!isNumbersInclude)}>
          Include Numbers
        </Checkbox>
        <Checkbox onChange={() => setIsSymbolsInclude(!isSymbolsInclude)}>
          Include Symbols
        </Checkbox>
      </Stack>
      <Button colorScheme="teal" size="md" mt={3} onClick={genPassword}>
        Generate Password
      </Button>
      <Text mt={4}>
        Generate Password{" "}
        <Icon mt={4} as={FaHandPointDown} boxSize={5} color="yellow.300" />
      </Text>
      <Box
        style={{
          width: "300px",
          height: "30px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
        ml={200}
        mt={5}
      >
        <Text>{originalpassword}</Text>
        <Button size="sm" onClick={handleCopy} mt={8} ml={40}  colorScheme="teal">
          <Icon as={FaCopy} mr={1} />
          Copy
        </Button>
      </Box>
    </Box>
  );
}

export default Password;
