import { UnitTest } from 'unit-testing-js'
import { isError } from '..'

const values = [new Error(), 1, 3, '', function () { }, 'aaa', new Map()]

UnitTest(isError)
	.addParamMap(values)
	.setDefaultValue(false)
	.setIndexValues({
		0: true
	})
	.buildCases()
	.run()

