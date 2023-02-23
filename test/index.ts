import { loadModule, TestSetting } from 'unit-testing-js'

TestSetting.set('isSummary', true)

function runTest() {
  loadModule(async () => {
    import('../src/__test__')
  })
}

runTest()