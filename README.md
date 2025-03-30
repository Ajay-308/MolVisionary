<div align="center">


If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

## <a name="introduction">🤖 Introduction</a>

**molVisonary** is a drug discovery and molecule-binding prediction tool built with the latest in machine learning and natural language processing (NLP) technology. Powered by NVIDIA NIM and molecule structure prediction models, this project enables users to simulate molecular interactions and predict molecule structures.

The platform is designed to help researchers accelerate drug discovery by leveraging cutting-edge AI models for molecule folding, docking, and molecular dynamics.

If you're getting started and need assistance or face any bugs, join our active Discord community. It's a place where people help each other out.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js**
- **TypeScript**
- **NVIDIA** (for molecule structure prediction)
- **Tailwind CSS**
- **React Chart.js** (for visualizing molecule data)

## <a name="features">🔋 Features</a>

👉 **molecule Structure Prediction**: Predicts 2D molecule structures using NVIDIA models.

👉 **Collaborative Research**: Researches can create groups and colloborate with other research online

👉 **Responsive Design**: Ensures seamless experience across all devices, from desktops to mobile.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### **Prerequisites**

Make sure you have the following installed on your machine:


```bash
git clone https://github.com/Ajay-308/molVisonary.git
```

```
cd molVisonary
```

### **Installation**

Install the project dependencies using npm:

```bash
npm install
```

### **Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_NVIDIA_API_KEY=your-nvidia-api-key
ABLY_API_KEY='your-ably-api-key'
MONGODB_URL='your-mongodb-url'
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
RESEND_KEY='your-resend-api-key'
```

### **Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="molecule-data">🧬 molecule Data Processing</a>

This section covers the molecule data processing pipeline, including loading molecule structure files (e.g., PDB format), performing molecular docking simulations, and visualizing the results.

### **molecule Structure Input**

Users can upload PDB files for molecule structures, which will then be processed by NVIDIA NeMo's molecule-folding models.

### **Docking Simulation**

Using molecular docking algorithms, the system predicts how small molecules (such as drug candidates) bind to molecule targets.
