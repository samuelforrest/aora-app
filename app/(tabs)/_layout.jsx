import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind'; 
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { icons } from "../../constants";


const StyledImage = styled(Image);
const StyledText = styled(Text);
const StyledView = styled(View);

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <StyledView>
      <StyledImage 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
        />
      <StyledText className={"${focused ? 'font-psemibold' : 'font-pregular'} text-xs"}>
      </StyledText>
    </StyledView>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false
      }}>
        
        <Tabs.Screen 
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused}) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        
        />
      </Tabs>
    </>
  )
}

export default TabsLayout