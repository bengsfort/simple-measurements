/**
 * @providesModule Routes
 * @flow
 */

import type { RouteType } from 'AppTypes';
import Colours from 'Colours';

export const Categories = {
  temperature: 'Temperature',
  weight: 'Weight',
};

const routes: Array<RouteType> = [
  {
    path: '/lbs_to_kgs',
    label: 'lbs / kgs',
    // Lbs
    calcX: x => x * 0.45359237,
    labelX: 'lbs',
    placeholderX: '1',
    // KGs
    calcY: y => y / 2.20462262185,
    labelY: 'kgs',
    placeholderY: '0.45',
    theme: Colours.GREEN,
    category: Categories.weight,
  },
  {
    path: '/f_to_c',
    label: `${String.fromCharCode(176)}F / ${String.fromCharCode(176)}C`,
    allowNegatives: true,
    // °F
    calcX: x => ((x - 32) * 5) / 9,
    labelX: `${String.fromCharCode(176)}F`,
    placeholderX: '32',
    // °C
    calcY: y => ((y * 9) / 5) + 32,
    labelY: `${String.fromCharCode(176)}C`,
    placeholderY: '0',
    theme: Colours.PURPLE,
    category: Categories.temperature,
  },
];

export default routes;
