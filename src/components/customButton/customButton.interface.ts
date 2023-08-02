import { ImageSourcePropType } from "react-native";
import type { export BUTTON_IMAGE_POSITION, BUTTON_TITLE_POSITION } from "./customButton.enum";

// Interface for custom button properties.
export interface ICustomButton {
  // Function to handle the regular button tap.
  onPress?: () => void;

  // Function to handle a long press of the button.
  onLongPress?: () => void;

  // The delay in milliseconds to set for long press recognition.
  setLoangPressDelay?: number;

  // When true, the button will be in a disabled state and won't respond to user interactions.
  disabled?: boolean;

  // When true, the button will be in a disabled state and won't respond to user interactions.
  disabledOpacity?: any;

  // When true, the button will be visually displayed as disabled.
  showAsDisabled?: boolean;

  // The image/icon to be displayed on the button.
  imageIcon?: any;

  // The URL for the image/icon to be displayed on the button.
  imageIconUrl?: string;

  // The title/text to be displayed on the button.
  title?: string;

  // Additional style for the title/text of the button.
  titleStyle?: any;

  // Additional container style for the button.
  containerStyle?: any;

  // When true, a loading indicator will be shown during image/icon loading.
  showImageLoadingIndicator?: boolean;

  // Custom loading indicator to be shown during image/icon loading.
  imageLoadingIndicator?: any;

  // The image to be displayed on the button.
  image?: ImageSourcePropType;

  // The position of the image relative to the title/text.
  imagePosition?: BUTTON_IMAGE_POSITION;

  titlePosition?: BUTTON_TITLE_POSITION;
}
