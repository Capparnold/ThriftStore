import { Truck, ShieldCheck, Headphones } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Fast Delivery",
      text: "Same-day delivery within Nairobi and next-day nationwide.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Secure Payments",
      text: "Pay safely with M-Pesa, debit cards, or credit cards.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      text: "Friendly and responsive customer service anytime.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Why Shop With Us 💎
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}