"use client";
import Breadcrumb from "@/components/ComponentHeader/ComponentHeader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MoleculeStructure from "../../components/MoleculeStructure/index";
import React, { useState } from "react";

interface Molecule {
    valid_smile?: string;
    qed_score?: number;
}

const CustomModelLayout = () => {
  const [smiles, setSmiles] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT2");
  const [loading, setLoading] = useState(false);
  

  const [molecule, setMolecule] = useState<Molecule>({});
  const [error, setError] = useState("");

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    const maxLength = selectedModel === "GPT2" ? 10 : 20;

    if (smiles.length > maxLength) {
      setError(
        `For ${selectedModel}, SMILES length must not exceed ${maxLength} characters.`,
      );
      return;
    }

    setLoading(true);
    const payload = {
        smiles,
        model: selectedModel,
    }

    try{

        const response = await fetch("/api/customModel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });


        const data = await response.json();
        setMolecule(data);

    }catch(err){
        console.error("Error during submission:", err);
        setError("An error occurred while processing your request.");
    }finally{
        setLoading(false);
    }
    setError("");
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Custom Model Inference" />

      <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-[#121212] dark:bg-[#181818] max-w-2xl mx-auto">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Use Fine-tuned Model
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                SMILES String
              </label>
              <input
                type="text"
                value={smiles}
                onChange={(e) => setSmiles(e.target.value)}
                placeholder="Enter SMILES string"
                className="w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-gray-2 dark:bg-[#181818] dark:text-white dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                Select Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black dark:border-gray-2 dark:bg-[#181818] dark:text-white focus:border-primary"
              >
                <option value="GPT2">Fine-tuned GPT2</option>
                <option value="LLAMA3">Fine-tuned LLAMA3</option>
              </select>
            </div>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-primary p-3 font-medium text-white hover:bg-opacity-90"
            >
                {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>
      </div>

      {molecule?.valid_smile && molecule?.qed_score && (
        <div className="mt-8 rounded-lg bg-white p-2">
            <div className="mt-8 flex flex-col gap-2">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <MoleculeStructure 
                        id="molecule-structure"
                        structure={molecule.valid_smile}
                        scores={molecule.qed_score}
                    />
                </div>
            </div>
        </div>
    )}    

    </DefaultLayout>
  );
};

export default CustomModelLayout;
