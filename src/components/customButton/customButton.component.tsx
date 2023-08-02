import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { ICustomButton, BUTTON_IMAGE_POSITION } from "./customButton.interface";
import defaultStyles from "../shared/styles/styles";
import { BUTTON_TITLE_POSITION } from "./customButton.enum";

const { flexDirectionRow, flexDirectionColumn, flexDirectionRowReverse, alignItemsCenter, justifyContentCenter, opacityOne, opacity5 } = defaultStyles;

const CustomButton = (props: ICustomButton) => {
  const {
    onPress,
    onLongPress,
    setLoangPressDelay = 500,
    image = null,
    imagePosition = BUTTON_IMAGE_POSITION.LEFT,
    title = "",
    titleStyle,
    containerStyle,
    disabled = false,
    disabledOpacity = opacity5,
    showAsDisabled = false,
    showImageLoadingIndicator = false,
    imageLoadingIndicator,
    titlePosition = BUTTON_TITLE_POSITION.MIDDLE,
  } = props;

  // State to manage the visibility of the loading indicator
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = () => {
    // Show the loading indicator while processing the button press
    setIsLoading(true);

    // Perform the button action (onPress)
    onPress && onPress();

    // Hide the loading indicator after the action is done (can be customized based on your logic)
    setIsLoading(false);
  };

  const renderImage = () => {
    if (image) {
      if (!showImageLoadingIndicator || !isLoading) {
        return <Image source={image} />;
      } else {
        return imageLoadingIndicator || <ActivityIndicator />;
      }
    }
    return null;
  };

  const renderImageTextPosition = () => {
    switch (imagePosition) {
      case BUTTON_IMAGE_POSITION.LEFT:
        return (
          <View style={[flexDirectionRow]}>
            {renderImage()}
            {title && title !== "" && <Text style={titleStyle}>{title}</Text>}
          </View>
        );
      case BUTTON_IMAGE_POSITION.RIGHT:
        return (
          <View style={[flexDirectionRowReverse]}>
            {title && title !== "" && <Text style={titleStyle}>{title}</Text>}
            {renderImage()}
          </View>
        );
      case BUTTON_IMAGE_POSITION.TOP:
        return (
          <View style={[alignItemsCenter]}>
            {renderImage()}
            {title && title !== "" && <Text style={titleStyle}>{title}</Text>}
          </View>
        );
      case BUTTON_IMAGE_POSITION.BOTTOM:
        return (
          <View style={[alignItemsCenter]}>
            {title && title !== "" && <Text style={titleStyle}>{title}</Text>}
            {renderImage()}
          </View>
        );
      case BUTTON_IMAGE_POSITION.MIDDLE:
        return (
          <View style={[justifyContentCenter, alignItemsCenter]}>
            {renderImage()}
            {title && title !== "" && <Text style={titleStyle}>{title}</Text>}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled || isLoading} // Disable the button when it's in a disabled state or while loading
      onPress={handlePress} // Use the custom handlePress function instead of directly calling onPress
      onLongPress={onLongPress}
      delayLongPress={setLoangPressDelay}
    >
      <View
        style={[
          containerStyle,
          disabled && showAsDisabled ? disabledOpacity : opacityOne,
        ]}
      >
        {/* Render the image/icon and title/text based on the specified titlePosition */}
        {titlePosition === BUTTON_TITLE_POSITION.TOP && renderImageTextPosition()}
        {titlePosition === BUTTON_TITLE_POSITION.BOTTOM && renderImageTextPosition()}
        {titlePosition === BUTTON_TITLE_POSITION.MIDDLE && renderImageTextPosition()}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
