import { test } from 'unit-testing-js'
import { isHexColor } from '../isColor'

test('isHexColor', isHexColor,
	{ param: '123456', tobe: true },
	{ param: '123', tobe: true },
	{ param: '12', tobe: false },
	{ param: '123456', tobe: true },
)