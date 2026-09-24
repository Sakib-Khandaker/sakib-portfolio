import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20">
      <SectionHeading
        eyebrow="Research"
        title="Research & Academic Work"
        description="Research topics, methodologies and current academic interests."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-blue-600">
            Undergraduate Research
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Spatio-Temporal Traffic Accident Risk Modeling in Bangladesh
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            This research investigates road accident prediction using
            division-wise and monthly data from Bangladesh. The study combines
            machine learning, time-series forecasting, feature engineering,
            temporal analysis and risk mapping.
          </p>

          <h3 className="mt-7 font-semibold">Methods explored</h3>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>XGBoost</Badge>
            <Badge>LightGBM</Badge>
            <Badge>CatBoost</Badge>
            <Badge>ARIMA</Badge>
            <Badge>SARIMA</Badge>
            <Badge>Time-Series</Badge>
            <Badge>Risk Mapping</Badge>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-2xl font-bold">Research Interests</h2>

          <div className="mt-6 space-y-4 text-slate-700">
            <div>Natural Language Processing (NLP)</div>
            <div>Machine Learning</div>
            <div>Deep Learning</div>
            <div>Spatio-Temporal Modeling</div>
            <div>Intelligent Systems</div>
            <div>Data-driven Decision Support</div>
          </div>
        </article>
      </div>
    </div>
  );
}