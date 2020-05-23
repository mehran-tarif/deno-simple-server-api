import ky from 'https://unpkg.com/ky/index.js';
import { serve } from "https://deno.land/std@0.52.0/http/server.ts";

	const s = serve({ port: 8000 });
	console.log("http://localhost:8000/");

	for await (const req of s) {
		const p = await ky.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').json();

		let body = "<img src='"+p.url+"'>"
		body+= "<h1>"+p.title+"</h1>"
		body+= "<time>"+p.date+"</time>"
		body+= "<p>"+p.explanation+"</p>"

		req.respond({ body: body });
	}
