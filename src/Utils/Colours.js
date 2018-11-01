/**
 * @providesModule Colours
 * @flow
 */

import { StyleSheet } from 'react-native';

import type { ColourTheme } from 'AppTypes';
import ColourStyles from 'ColoursStyle';

type ColourDict = {
  [string]: ColourTheme
};

const availableColours : Array<String> = Object.keys(ColourStyles);
const colours : ColourDict = availableColours.reduce((dict, colour): void => {
  const copy = Object.assign({}, dict);
  copy[colour] = StyleSheet.create({
    action_button: {
      backgroundColor: ColourStyles[colour]['900'],
    },
    main_button: {
      backgroundColor: ColourStyles[colour]['800'],
    },
    top_half: {
      backgroundColor: ColourStyles[colour]['600'],
    },
    bottom_half: {
      backgroundColor: ColourStyles[colour]['700'],
    },
    placeholder: {
      color: ColourStyles[colour]['900'],
    },
    label: {
      color: ColourStyles[colour]['200'],
    },
    input_underline: {
      backgroundColor: ColourStyles[colour]['100'],
    },
    input: {
      color: ColourStyles[colour]['100'],
    },
    number_key: {
      backgroundColor: ColourStyles[colour]['900'],
    },
    number_key_label: {
      color: ColourStyles[colour]['100'],
    },
    action_key: {
      backgroundColor: ColourStyles[colour]['800'],
    },
  });
  return copy;
}, {});

// const colours : ColourDict = {
//   GREEN: StyleSheet.create({
//     action_button: {
//       backgroundColor: ColourStyles.green['900'],
//     },
//     main_button: {
//       backgroundColor: ColourStyles.green['800'],
//     },
//     top_half: {
//       backgroundColor: ColourStyles.green['600'],
//     },
//     bottom_half: {
//       backgroundColor: ColourStyles.green['700'],
//     },
//     placeholder: {
//       color: ColourStyles.green['900'],
//     },
//     label: {
//       color: ColourStyles.green['200'],
//     },
//     input_underline: {
//       backgroundColor: ColourStyles.green['100'],
//     },
//     input: {
//       color: ColourStyles.green['100'],
//     },
//     number_key: {
//       backgroundColor: ColourStyles.green['900'],
//     },
//     number_key_label: {
//       color: ColourStyles.green['100'],
//     },
//     action_key: {
//       backgroundColor: ColourStyles.green['800'],
//     },
//   }),
//   PURPLE: StyleSheet.create({
//     action_button: {
//       backgroundColor: ColourStyles.purple['900'],
//     },
//     main_button: {
//       backgroundColor: ColourStyles.purple['800'],
//     },
//     top_half: {
//       backgroundColor: ColourStyles.purple['600'],
//     },
//     bottom_half: {
//       backgroundColor: ColourStyles.purple['700'],
//     },
//     placeholder: {
//       color: ColourStyles.purple['900'],
//     },
//     label: {
//       color: ColourStyles.purple['200'],
//     },
//     input_underline: {
//       backgroundColor: ColourStyles.purple['100'],
//     },
//     input: {
//       color: ColourStyles.purple['100'],
//     },
//     number_key: {
//       backgroundColor: ColourStyles.purple['800'],
//     },
//     number_key_label: {
//       color: ColourStyles.purple['100'],
//     },
//     action_key: {
//       backgroundColor: ColourStyles.purple['900'],
//     },
//   }),
// };

export default colours;
