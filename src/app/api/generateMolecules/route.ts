export async function POST(request: Request) {

    const {num_molecules, min_similarity, particles, iterations, smi} = await request.json();
    
    const payload = {
            algorithm: "CMA-ES",
            num_molecules: parseInt(num_molecules),
            property_name: "QED",
            minimize: false,
            min_similarity: parseFloat(min_similarity),
            particles: parseInt(particles),
            iterations: parseInt(iterations),
            smi: smi,
        };

    const API_KEY = process.env.NEXT_PUBLIC_NVIDIA_API_KEY;

    const invokeUrl = "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate";
    
    const response = await fetch(invokeUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data));
    
}