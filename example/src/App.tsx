// Import necessary dependencies
import React from "react";
import { View} from "react-native";
import CustomButton, { BUTTON_IMAGE_POSITION, BUTTON_TITLE_POSITION } from "rn_custom_ui_components";

const App = () => {
  // Sample onPress handler for the button
  const handleButtonPress = () => {
    console.log("Button Pressed!");
  };

  // Sample onLongPress handler for the button
  const handleButtonLongPress = () => {
    console.log("Button Long Pressed!");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Usage 1: Button with Image on the Left and Text in the Middle */}
      <CustomButton
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
        image={require("./google-logo.png")} // Replace with actual image path
        imagePosition={BUTTON_IMAGE_POSITION.LEFT}
        title="Button with Image on the Left"
        titlePosition={BUTTON_TITLE_POSITION.MIDDLE}
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        containerStyle={{ backgroundColor: "blue", padding: 10, borderRadius: 8 }}
      />

      {/* Usage 2: Button with Text on the Left and Image in the Middle */}
      <CustomButton
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
        image={require("./google-logo.png")} // Replace with actual image path
        imagePosition={BUTTON_IMAGE_POSITION.MIDDLE}
        title="Button with Image in the Middle"
        titlePosition={BUTTON_TITLE_POSITION.LEFT}
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        containerStyle={{ backgroundColor: "green", padding: 10, borderRadius: 8, marginVertical: 10 }}
      />

      {/* Usage 3: Button with Text on the Right and Image in the Middle */}
      <CustomButton
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
        image={require("./google-logo.png")} // Replace with actual image path
        imagePosition={BUTTON_IMAGE_POSITION.MIDDLE}
        title="Button with Image in the Middle"
        titlePosition={BUTTON_TITLE_POSITION.RIGHT}
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        containerStyle={{ backgroundColor: "orange", padding: 10, borderRadius: 8 }}
      />

      {/* Usage 4: Button with Image on Top and Text in the Middle */}
      <CustomButton
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
        image={require("./google-logo.png")} // Replace with actual image path
        imagePosition={BUTTON_IMAGE_POSITION.TOP}
        title="Button with Image on Top"
        titlePosition={BUTTON_TITLE_POSITION.MIDDLE}
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        containerStyle={{ backgroundColor: "purple", padding: 10, borderRadius: 8 }}
      />

      {/* Usage 5: Button with Text on Top and Image in the Middle */}
      <CustomButton
        onPress={handleButtonPress}
        onLongPress={handleButtonLongPress}
        image={require("./google-logo.png")} // Replace with actual image path
        imagePosition={BUTTON_IMAGE_POSITION.MIDDLE}
        title="Button with Image in the Middle"
        titlePosition={BUTTON_TITLE_POSITION.TOP}
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        containerStyle={{ backgroundColor: "red", padding: 10, borderRadius: 8 }}
      />
    </View>
  );
};

export default App;
