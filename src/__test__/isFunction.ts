import { isFunction, isEffectFunction, isAsyncFunction, likeFunction, isEmptyFunction } from '..'
import { BaseValueMap, UnitTest } from 'unit-testing-js'

const funcList = BaseValueMap.get('@FUNCTION')

UnitTest(isEmptyFunction)
	.addCases(
		{ param: function () { return true }, tobe: false },
		{ param: function () { }, tobe: true },
		{ param: "function(){return true}", tobe: false },
	)
	.run()

UnitTest(isEffectFunction)
	.addCases(
		{ param: function () { return true }, tobe: true },
		{ param: function () { }, tobe: false },
		{ param: "function(){return true}", tobe: false },
	)
	.run()

UnitTest(isFunction)
	.addParamMap(funcList)
	.setDefaultValue(false)
	.setIndexValues({
		0: true,
		1: true,
	})
	.buildCases()
	.run()

UnitTest(isAsyncFunction)
	.addParamMap(funcList)
	.setDefaultValue(false)
	.setIndexValues({
		2: true,
		3: true,
	})
	.buildCases()
	.run()

UnitTest(likeFunction)
	.addParamMap(funcList)
	.setDefaultValue(true)
	.setIndexValues({
		4: false
	})
	.buildCases()
	.run()