import { BaseValueMap, test, UnitTest } from 'unit-testing-js'
import { isEmptyObject, isEffectObject } from '..'
import * as _ from '..'

UnitTest(isEmptyObject)
	.addParamMap(
		new Array(
			{ a: undefined },
			{ a: 123 },
			{}
		).concat(BaseValueMap.get('@SIMPLE_PARAM'))
	)
	.setDefaultValue(false)
	.setIndexValues({
		2: true,
		6: true,
	})
	.buildCases()
	.run()

UnitTest(isEffectObject)
	.addParamMap(
		new Array(
			{ a: undefined },
			{ a: 123 },
			{}
		).concat(BaseValueMap.get('@SIMPLE_PARAM'))
	)
	.setDefaultValue(false)
	.setIndexValues({
		0: true,
		1: true,
	})
	.buildCases()
	.run()

test('isObject', _.isObject,
	{ param: {}, tobe: true },
	{ param: null, tobe: false },
	{ param: undefined, tobe: false },
	{ param: NaN, tobe: false },
	{ param: { a: 123 }, tobe: true },
)