export default defineComponent({
  setup() {
    const demo = ref("demo page")
    const test = ref("test")
    return () => (
      <>
        {demo.value}
        <div>{test.value}</div>
        <button>测试</button>
      </>
    )
  }
})
