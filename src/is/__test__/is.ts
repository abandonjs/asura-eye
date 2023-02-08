import { UnitTest } from 'unit-testing-js'
import { IS as is } from '..'

UnitTest((v, b) => is(v)(b), 'is')
	.addCases(
		{ params: [('String'), ('')], tobe: true },
		{ params: [('String[]'), ([''])], tobe: true },
		{ params: [('String[]'), ('')], tobe: false },
		{ params: [('[]'), ('')], tobe: false },
		{ params: [('[]'), ([])], tobe: true },

		{ params: [('Object[]'), ([{}])], tobe: true },
		{ params: [('Object[]'), ('')], tobe: false },

		{ params: [('[Object, String]'), ([])], tobe: false },
		{ params: [('[Object, String]'), ([{}, ''])], tobe: true },
		{ params: [('[Object,String]'), ([{}, ''])], tobe: true },
		{ params: [('[Object,String]'), ([{}, {}])], tobe: false },

		{ params: [`{a: Object, b: String}`, { a: {}, b: '' }], tobe: true },
		{
			params: [`{a: Object, b: {
			bc: String
		}}`, {
					a: {}, b: {
						bc: 'bbcc'
					}
				}], tobe: true
		},
		{
			params: [{
				a: 'Object',
				b: {
					bc: 'String'
				}
			}, {
				a: {}, b: {
					bc: 'bbcc'
				}
			}], tobe: true
		},
		{
			params: [
				`{a: Object, b: {
					bc: Number
				}}`
				, {
					a: {}, b: {
						bc: 'bbcc'
					}
				}], tobe: false
		},
		{ params: [{ bc: 'String' }, { bc: 'bcbc' }], tobe: true },
		{ params: [['String', 'Number'], ['123', '123']], tobe: false },
		{ params: [['String', 'Number'], ['123']], tobe: false },
		{ params: [['String', 'Number'], ['123', 123]], tobe: true },
		{ params: ['String[]', ['123', 123]], tobe: false },
		{ params: ['String[]', ['123', 'b']], tobe: true },


		{ params: ['String|Number', '123'], tobe: true },
		{ params: ['String|Number', 123], tobe: true },
		{ params: ['String|Number[]', ['123', 123]], tobe: true },
	)
	.run()