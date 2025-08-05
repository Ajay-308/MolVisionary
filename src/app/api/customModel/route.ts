export async function POST(request: Request) {

    const {smiles, model} = await request.json();
    
    const payload = {
            seed: smiles
        };

    const invokeUrl = model === "GPT2" ? "https://79f9-35-240-222-110.ngrok-free.app/fineTunedGPT2" : "https://79f9-35-240-222-110.ngrok-free.app/llama3" 
    
    const response = await fetch(invokeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();
    
    return new Response(JSON.stringify(data));
    
}