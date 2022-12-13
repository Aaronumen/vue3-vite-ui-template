// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import Notel from '../../../packages/index'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app}) => {
    app.use(Notel)
  },
};