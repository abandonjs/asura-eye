import { test } from 'unit-testing-js'
import * as _ from '..'

test('isObject', _.isObject,
	{ param: {}, tobe: true },
	{ param: null, tobe: false },
	{ param: undefined, tobe: false },
	{ param: NaN, tobe: false },
	{ param: { a: 123 }, tobe: true },
)