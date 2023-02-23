import { BaseValueMap, UnitTest } from 'unit-testing-js'
import { isMap, isEmptyMap, isEffectMap } from '..'

UnitTest(isEmptyMap)
	.addParamMap(
		[new Map()].concat(BaseValueMap.get('@SIMPLE_PARAM'))
	)
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	.buildCases()
	.run()

UnitTest(isEffectMap)
	.addParamMap(
		[new Map([['a', 'b']]), new Map()]
			.concat(BaseValueMap.get('@SIMPLE_PARAM'))
	)
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	.buildCases()
	.run()

UnitTest(isMap)
	.addParamMap(
		[new Map()].concat(BaseValueMap.get('@SIMPLE_PARAM'))
	)
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	.buildCases()
	.run()