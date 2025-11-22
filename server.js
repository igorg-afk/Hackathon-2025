// server.js
const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = 8080;

// Permite que o front acesse o back
app.use(cors());
app.use(express.json());

// SEU TOKEN (Cole o token gigante aqui se ele mudar)
const FLOW_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IlBmNEhwSlJPNlB5TTd2eU00amRiaHV0T2NMRy0xQTlnZHpQMnNISzM3dHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI3NmYwMWRhZi01NWQ5LTQ2N2UtYTBmZi03NWUzODgxNGJmOWYiLCJpc3MiOiJodHRwczovL2NpdGZsb3dwcmRiMmMuYjJjbG9naW4uY29tLzBhODc5MDU0LWY3YTUtNDdmYS1iODhlLWE1NmIzYzMwYjIwMS92Mi4wLyIsImV4cCI6MTc2Mzg0MTUyMSwibmJmIjoxNzYzNzU1MTIxLCJzdWIiOiI4ZTBiZWZjYy04NTE4LTQzOTctYmIxOC1kYzBmNTliMGU3NzAiLCJlbWFpbCI6Imlnb3JnQGNpYW5kdC5jb20iLCJnaXZlbl9uYW1lIjoiSWdvciIsImZhbWlseV9uYW1lIjoiQmVuZWRpdG8gQ29zdGEgR29uY2FsdmVzIiwibmFtZSI6Iklnb3IgQmVuZWRpdG8gQ29zdGEgR29uY2FsdmVzIiwiaWRwIjoiZ29vZ2xlLmNvbSIsImNoYW5uZWwiOiJwb3J0YWwiLCJ0ZW5hbnQiOiJjaWFuZHRpdCIsInJvbGVzIjoiZmxvd2NvcmUudXNlcixjaGF0d2l0aGRvY3MudXNlcixiYWNrbG9ncmVmaW5lci51c2VyLGJhY2tsb2dyZWZpbmVyLmFkbWluLGFnZW50cnVubmVyLnVzZXIsbWFrZXIudXNlcixmbG93b3BzLnVzZXIiLCJpbmZyYVRlbmFudCI6ImNpYW5kdGl0MiIsInRpZCI6IjBhODc5MDU0LWY3YTUtNDdmYS1iODhlLWE1NmIzYzMwYjIwMSIsImF6cCI6Ijc2ZjAxZGFmLTU1ZDktNDY3ZS1hMGZmLTc1ZTM4ODE0YmY5ZiIsInZlciI6IjEuMCIsImlhdCI6MTc2Mzc1NTEyMX0.ruEVAmhlwdnhrntUBXb3aibPqzPf2GZvPL48nQTNfg1YWqPaGMfzNmEYkqN24J24HuAoJRE2fxTV-oVsut3A9JNdWvalPVOhGbqryFgMNbwP7jU2rZ5qZEhtHvxxPDFPlrlyDhL_ghvvlrCVECKueZS35Mba9ifAEy1UIFFkalYR-_OFGFupzr50T2E7hnFI-zrHp83qRumITQ6MEGnaOozslt0fCreC-ar3UDIui0Uwc7MVNufkjxqADffKa6rhlFiZooUqjs4zizZK63gULXayQXaGRZlvoY3a3x1aHi-H4HbsOTQWGWKxzsqV6_-ufdm_FhKYsHz2dHUeti2dCg';

// Serve os arquivos estáticos (o HTML que vamos criar)
app.use(express.static('public'));

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    const payload = {
        "output_type": "chat",
        "input_type": "chat",
        "input_value": userMessage
    };

    try {
        const apiResponse = await fetch('https://flow.ciandt.com/advanced-flows/api/v1/run/1d9291b5-74b7-44eb-91ba-c1b6b795001c', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "FlowToken": FLOW_TOKEN,
            },
            body: JSON.stringify(payload)
        });

        const data = await apiResponse.json();
        res.json(data); // Devolve a resposta da API para o nosso site
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ops, algo deu errado no servidor!" });
    }
});

app.listen(PORT, () => {
    console.log(`✨ Servidor fofo rodando em http://localhost:${PORT}`);
});