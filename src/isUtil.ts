/**
 * @title FileType
 * @description 文件名后缀, 仅识别数字和字母组成的文件拓展名后缀
 * @version 0.1.0
 */
export type FileType = 'Image' | 'Video' | 'PDF' | 'Word' | 'Excel'

/**
 * @title FileTypeMap
 * @description 文件类型映射
 * @version 0.1.0
 */
export const FileTypeMap = new Map<FileType, string[]>([
	['Image', ['png', 'jpeg', 'jpg', 'png', 'bmp']],
	['Video', ['mp4', 'webm', 'ogg']],
	['PDF', ['pdf']],
	['Word', ['doc', 'docx']],
	['Excel', ['.xlsx', '.xls', '.csv']],
])

/**
 * @title isFileExtension
 * @description 是指定字符串结尾
 * @param {string} fileName 文件名
 * @param {string[]} list 文件拓展名数组
 * @returns boolean
 * @version 0.1.0
 */
export function isFileExtension(fileName: string, list: string[] = []): boolean {
	if (typeof fileName !== 'string') return false;
	if (/\.[a-zA-Z0-9]{1,}/.exec(fileName) === null) return false
	if (list.length === 0) return true
	const name = fileName.toLowerCase();
	return list.some(i => name.endsWith(i) === true)
}

/**
 * @title isFile
 * @param {string} fileName
 * @param {FileType} type 
 * @returns {boolean}
 * @version 0.1.0
 */
export function isFile(fileName: string, type: FileType): boolean {
	return isFileExtension(fileName, FileTypeMap.get(type))
}

/**
 * @title isImageFile
 * @param {string} fileName
 * @returns {boolean}
 * @version 0.1.0
 */
export function isImageFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Image'))
}

/**
 * @title isVideoFile
 * @param {string} fileName
 * @returns {boolean}
 * @version 0.1.0
 */
export function isVideoFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Video'))
}

/**
 * @title isPdfFile
 * @param {string} fileName
 * @returns {boolean}
 * @version 0.1.0
 */
export function isPdfFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('PDF'))
}

/**
 * @title isWordFile
 * @param {string} fileName
 * @returns {boolean}
 * @version 0.1.0
 */
export function isWordFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Word'))
}

/**
 * @title isExcelFile
 * @param {string} fileName
 * @returns {boolean}
 * @version 0.1.0
 */
export function isExcelFile(fileName: string): boolean {
	return isFileExtension(fileName, FileTypeMap.get('Excel'))
}

/**
 * @title isClient
 * @description 是否为客户端
 */
export const isClient = typeof window !== 'undefined';

/**
 * @title isBoolean
 * @description 是布尔值
 * @param {unknown} val
 * @returns {boolean}
 */
export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean';

/**
 * @title isWindow
 * @description 是否为window端
 * @param {unknown} val 
 * @returns {boolean}
 */
export const isWindow = (val: unknown): val is Window => typeof window !== 'undefined' && toString.call(val) === '[object Window]';

/**
 * @title isIOS
 * @returns {boolean}
 */
export const isIOS = /* #__PURE__ */ isClient && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent)

/**
 * @title hasOwn
 * @param {object} val 
 * @param {string} key 
 * @returns {boolean}
 */
export const hasOwn = <T extends object, K extends keyof T>(val: T, key: K): key is K => Object.prototype.hasOwnProperty.call(val, key);
