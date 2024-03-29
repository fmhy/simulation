import type { HonoRequest } from 'hono'
import type { WebhookResult } from './webhook-types'

export async function parseGithubWebhook(
	req: HonoRequest
): Promise<WebhookResult | null> {
	// biome-ignore lint: I don't care
	const type = req.header('x-github-event')!

	await req.text()

	return {
		result: 'success',
		category: type,
		description: null
	}
}
