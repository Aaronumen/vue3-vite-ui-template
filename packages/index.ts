import NotelButton from "./notel-button/index.vue"
import NotelInput from "./notel-input/index.vue"
import NotelTsx from "./notel-tsx/index"
import type { App } from "vue"

const NotelUi = {
  install: (app: App) => {
    app.component(NotelButton.name, NotelButton)
    app.component(NotelInput.name, NotelInput)
    app.component("NotelTsx", NotelTsx)
  }
}

export { NotelButton }

export default NotelUi
