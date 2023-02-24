import { UnitTest, BaseValueMap } from 'unit-testing-js'
import { isArray, isEffectArray, isEmptyArray } from '..'


UnitTest(isEmptyArray)
	.addCases(
		{ params: [[]], tobe: true },
		{ params: [1], tobe: false },
		{ params: [33], tobe: false },
		{ params: [[{}, 1]], tobe: false }
	)
	.addParamMap([
		new Array().concat(BaseValueMap.get('@EMPTY'))
	])
	.setDefaultValue(false)
	.buildCases()
	.run()

UnitTest(isEffectArray)
	.addParamMap([
		new Array().concat(BaseValueMap.get('@EMPTY'))
	])
	.addCases(
		{ params: [[]], tobe: false },
		{ params: [1], tobe: false },
		{ params: [33], tobe: false },
		{ params: [[{}, 1]], tobe: true }
	)
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	.buildCases()
	.run()

UnitTest(isArray)
	.addParamMap([
		new Array().concat(BaseValueMap.get('@EMPTY'))
	])
	.addCases(
		{ params: [[]], tobe: true },
		{ params: [1], tobe: false },
		{ params: [33], tobe: false },
		{ params: [[{}, 1]], tobe: true }
	)
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	.buildCases()
	.run()
