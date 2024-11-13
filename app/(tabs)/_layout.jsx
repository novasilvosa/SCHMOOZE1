import { Text, View, Image, StyleSheet, Animated } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';


const TabIcon = ({ icon, color, focused }) => {
  const scale = focused ? 1.2 : 1;

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }}
      />
    </Animated.View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >

      {/* Home Screen */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={color} focused={focused} size={30} />
          ),
        }}
      />

<Tabs.Screen
        name="matchnavigator"
        options={{
          title: 'Match',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.favorite} color={color} focused={focused} size={30} />
          ),
        }}
      />

      {/* Chat Screen */}
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.chat} color={color} focused={focused} size={30} />
          ),
        }}
      />

      {/* User Screen */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.user} color={color} focused={focused} size={30} />
          ),
        }}
      />

      {/* Hidden Screens */}
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.login} color={color} focused={focused} size={30} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.register} color={color} focused={focused} size={30} />
          ),
        }}
      />

    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'aquamarine',
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default TabLayout;
