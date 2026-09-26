import { ArrowRight, BarChart3, BrainCircuit, Database, Map } from "lucide-react";

const steps = [
  { number: "01", title: "Data", text: "Monthly accident indicators across Bangladesh divisions.", Icon: Database },
  { number: "02", title: "Features", text: "Temporal, contextual and lag-based feature engineering.", Icon: BarChart3 },
  { number: "03", title: "Models", text: "XGBoost, LightGBM, CatBoost and time-series baselines.", Icon: BrainCircuit },
  { number: "04", title: "Risk", text: "Forecast interpretation, comparison and spatial risk analysis.", Icon: Map },
];

export default function ResearchPipeline() {
  return (
    <div className="research-pipeline">
      {steps.map(({ number, title, text, Icon }, index) => (
        <div key={title} className="research-pipeline-step">
          <div className="research-pipeline-icon"><Icon size={20} /></div>
          <div>
            <span className="research-pipeline-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          {index < steps.length - 1 && <ArrowRight className="research-pipeline-arrow" size={18} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
