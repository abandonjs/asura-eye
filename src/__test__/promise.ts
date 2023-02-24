import { BaseValueMap, UnitTest } from 'unit-testing-js'
import { isPromise } from '..'


UnitTest(isPromise)
	.addParamMap([
		new Promise(r => r(1)),
		Promise.resolve(1),
		(async () => 1)()
	].concat(BaseValueMap.get('@SIMPLE_PARAM')))
	.setDefaultValue(false)
	.setIndexValues({
		0: true,
		1: true,
		2: true,
	})
	.buildCases()
	.run()