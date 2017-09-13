/**
 * @providesModule Colours
 * @flow
 */

'use strict';

import { StyleSheet } from 'react-native';

import { ColourTheme } from 'AppTypes';
import ColourStyles from 'ColoursStyle';

type ColourDict = { [string]: ColourTheme };

const colours: ColourDict = {
	GREEN: StyleSheet.create({
		cancel_button: { backgroundColor: ColourStyles.green['900'] },
		main_button: { backgroundColor: ColourStyles.green['800'] },
		top_half: { backgroundColor: ColourStyles.green['600'] },
		bottom_half: { backgroundColor: ColourStyles.green['700'] },
		placeholder: { color: ColourStyles.green['900'] },
		label: { color: ColourStyles.green['200'] },
		input: { color: ColourStyles.green['100'] },
	}),
	PURPLE: StyleSheet.create({
		cancel_button: { backgroundColor: ColourStyles.purple['900'] },
		main_button: { backgroundColor: ColourStyles.purple['800'] },
		top_half: { backgroundColor: ColourStyles.purple['600'] },
		bottom_half: { backgroundColor: ColourStyles.purple['700'] },
		placeholder: { color: ColourStyles.purple['900'] },
		label: { color: ColourStyles.purple['200'] },
		input: { color: ColourStyles.purple['100'] },
	}),
};

export default colours;
