export async function logToLoggerApi(input: {
	level: "debug" | "info" | "warn" | "error";
	message: string;
	context?: Record<string, string | number | boolean | null>;
	env?: string;
}) {
	const baseUrl = import.meta.env.VITE_LOGGER_API_BASE_URL;
	const ingestKey = import.meta.env.VITE_LOGGER_INGEST_KEY;
	if (!baseUrl || !ingestKey) return;

	const payload = {
		timestamp: new Date().toISOString(),
		level: input.level,
		message: input.message,
		env: input.env || import.meta.env.MODE,
		context: input.context,
	};

	try {
		await fetch(`${baseUrl}/v1/ingest`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"x-ingest-key": ingestKey,
			},
			body: JSON.stringify(payload),
		});
	} catch {
		// Swallow: logging must not crash app flow.
	}
}

function report(ip: string): void {
	logToLoggerApi({
		level: "info",
		message: "Visit to homepage",
		context: {
			ip,
			domain: "visit",
			to: "homepage",
		},
	});
}

export { report };
