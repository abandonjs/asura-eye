import { test, toBe } from 'unit-testing-js'
import * as _ from '..'

test('type', _.type,
	{ param: '', tobe: 'String' },
	{ param: new String(), tobe: 'String' },
	{ param: [], tobe: 'Array' },
	{ param: new Array(), tobe: 'Array' },
	{ param: {}, tobe: 'Object' },
	{ param: new Object(), tobe: 'Object' },
	{ param: () => { }, tobe: 'Function' },
	{ param: new Function(), tobe: 'Function' },
	{ param: async () => { }, tobe: 'AsyncFunction' },
	{ param: function* a() { }, tobe: 'GeneratorFunction' },
	{ param: 123, tobe: 'Number' },
	{ param: 123.1, tobe: 'Number' },
	{ param: parseInt('aa'), tobe: 'NaN' },
	{ param: /a/, tobe: 'RegExp' },
	{ param: new Date(), tobe: 'Date' },
	{ param: undefined, tobe: 'Undefined' },
)

test('type:Iterator', toBe,
	{ param: _.type([1, 23].keys()), tobe: 'Iterator' },
	{ param: _.type([1, 23].entries()), tobe: 'Iterator' },
	{ param: _.type([1, 23].values()), tobe: 'Iterator' },
)

test('types', _.types,
	{ params: [['a', 123, 4]], tobe: ['String', 'Number'] },
	{ params: [['a', 123, 4], true], tobe: ['String', 'Number', 'Number'] },
)