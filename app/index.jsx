import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { withExpoSnack } from 'nativewind'; 
import { Link } from 'expo-router';

import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">

      <StyledText className="text-3xl font-pblack">Aora!</StyledText>

      <StatusBar style="auto" />
      
      <Link href="/home" style={{ color: "blue" }}>Go to Home</Link>
    </StyledView>
  );
}

export default withExpoSnack(App);
