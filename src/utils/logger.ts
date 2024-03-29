import type { SqlTag } from 'd1-sql-tag'
import { insertLogLine } from '../db/statements'

export type PersistentLogger = (
	level: 'info' | 'warn' | 'error',
	message: string
) => void

export function createPersistentLogger(
	sql: SqlTag,
	context: ExecutionContext
): PersistentLogger {
	return (level, message) => {
		console[level](message)
		context.waitUntil(insertLogLine(sql, level, message).run())
	}
}
