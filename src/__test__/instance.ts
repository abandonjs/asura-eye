import { UnitTest } from 'unit-testing-js'
import { isInstance } from '..'


UnitTest(isInstance)
	.addCases(
		{ params: [[], Array], tobe: true },
		{ params: [1, Number], tobe: true },
		{ params: [NaN, Number], tobe: true },
		{ params: [[{}, Object]], tobe: true },
		{ params: [[()=>{}, Function]], tobe: true },
	)
	.buildCases()
	.run()