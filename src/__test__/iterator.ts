import { UnitTest, BaseValueMap, toBe } from 'unit-testing-js'
import { isIterator, isArrayIterator, isFunction, isMapIterator, isSetIterator } from '..'

const cmmCases = (handler) => isFunction(handler) ? [
	// false
	{ param: handler(function* () { }), tobe: false },
	{ param: handler(1), tobe: false },
	{ param: handler('1'), tobe: false },
].concat(BaseValueMap.get('@EMPTY').map(item => ({
	param: handler(item), tobe: false
}))) : []

UnitTest(toBe, 'isIterator')
	.addCases(
		// true
		...((handler) => [
			{ param: handler([1, 23].keys()), tobe: true },
			{ param: handler([1, 23].entries()), tobe: true },
			{ param: handler([1, 23].values()), tobe: true },
			{ param: handler(new Map().entries()), tobe: true },
			{ param: handler(new Set().entries()), tobe: true },
		])(isIterator),
		...cmmCases(isIterator))
	.run()

UnitTest(toBe, 'isArrayIterator')
	.addCases(
		...((handler) => [
			{ param: handler([1, 23].keys()), tobe: true },
			{ param: handler([1, 23].entries()), tobe: true },
			{ param: handler([1, 23].values()), tobe: true },
			{ param: handler(new Map().entries()), tobe: false },
			{ param: handler(new Set().entries()), tobe: false },
		])(isArrayIterator),
		...cmmCases(isArrayIterator))
	// .log('cases')
	.run()

UnitTest(toBe, 'isMapIterator')
	.addCases(
		...((handler) => [
			{ param: handler([1, 23].keys()), tobe: false },
			{ param: handler([1, 23].entries()), tobe: false },
			{ param: handler([1, 23].values()), tobe: false },
			{ param: handler([1, 5, 23].values()), tobe: false },
			{ param: handler(new Map().entries()), tobe: true },
			{ param: handler(new Set().entries()), tobe: false },
		])(isMapIterator),
		...cmmCases(isMapIterator))
	// .log('cases')
	.run()


UnitTest(toBe, 'isSetIterator')
	.addCases(
		...((handler) => [
			{ param: handler([1, 23].keys()), tobe: false },
			{ param: handler([1, 23].entries()), tobe: false },
			{ param: handler([1, 23].values()), tobe: false },
			{ param: handler([1, 5, 23].values()), tobe: false },
			{ param: handler(new Map().entries()), tobe: false },
			{ param: handler(new Set().entries()), tobe: true },
		])(isSetIterator),
		...cmmCases(isSetIterator))
	// .log('cases')
	.run()



