function report(ip: string): void {
  console.log(ip)
	try {
		const config: RequestInit = {
			body: JSON.stringify({
				domain: 'visit',
				data: {
					ip,
					date: new Date(),
					to: 'homepage'
				}
			}),
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'access-control-allow-origin': '*'
			},
			mode: 'cors'
		};
		fetch('https://report-srvr.herokuapp.com/report', config);
	} catch (err) {}
}

export { report };
