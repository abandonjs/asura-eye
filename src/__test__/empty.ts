import { UnitTest } from 'unit-testing-js'
import { isEmpty, isNull, isNoEmpty, isUndefined, isNaN, isFunction } from '..'

const noEmpty = [new Error(), 1, 3, '', function () { }, 'aaa', new Map()]

new Array(
	isEmpty, isUndefined, isNaN, isNull
).forEach(fn => {
	if (isFunction(fn))
		UnitTest(fn)
			.addParamMap(noEmpty)
			.setDefaultValue(false)
			.buildCases()
			.run()
})


UnitTest(isNoEmpty)
	.addParamMap([...noEmpty, undefined, NaN, null])
	.setDefaultValue(true)
	.setIndexValues({
		7: false,
		8: false,
		9: false,
	})
	.buildCases()
	.run()

UnitTest(isEmpty)
	.addParamMap([undefined, NaN, null])
	.setDefaultValue(true)
	.buildCases()
	.run()


UnitTest(isNull)
	.addParamMap([undefined, NaN, null])
	.setDefaultValue(false)
	.setIndexValues({
		2: true
	})
	.buildCases()
	.run()

UnitTest(isUndefined)
	.addParamMap([undefined, NaN, null])
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	.buildCases()
	.run()

UnitTest(isNaN)
	.addParamMap([undefined, NaN, null])
	.setDefaultValue(false)
	.setIndexValues({
		1: true
	})
	.buildCases()
	.run()