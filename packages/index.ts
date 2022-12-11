import NotelButton from "./notel-button/index.vue"
import NotelInput from "./notel-input/index.vue"

import type { App } from "vue"

const NotelUi = {
  install: (app: App) => {
    app.component(NotelButton.name, NotelButton)
    app.component(NotelInput.name, NotelInput)
  }
}

export { NotelButton }

export default NotelUi
