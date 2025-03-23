/**
 * Хук принимает состояние и изменяет его через ms времени
 * @params callbackStart - колбек-функция, которая вызовется в начале функции
 * @params start - Начальное значение состояния
 * @params callbackEnd - колбек-функция, которая вызовется в конце функции
 * @params end - Конечное значение состояния
 * @params ms - Время между начальным и конечным состоянием
 * @params callback - Дополнительная функция, которая вызовется в последнюю очередь
 */
export const useTimeout = (
	callbackStart: (value: any) => void,
	start: any,
	callbackEnd: (value: any) => void,
	end: any,
	ms: number = 1000,
	callback?: (arg?: any) => void
) => {
	callbackStart(start)
	setTimeout(() => {
		callbackEnd(end)
		callback?.()
	}, ms)
}
