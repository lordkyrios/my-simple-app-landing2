// src/components/Pricing.tsx
import React from 'react';

const plans = [
  {
    title: '1 Month',
    price: '$17.99',
    original: '$34.99',
    duration: 'Monthly Plan',
    credits: '250 AI Credits / Month',
    features: [
      '1 License for 1 Computer',
      'AI Talking Bible Photo: Up to 15 sec',
      'Auto Subtitle: 50 mins',
      'AI Scripture Translation: 30K characters',
      'Bible TTS: 10 mins',
      'Story Video Auto-Pick: 15x',
      'Bible Story Image-to-Video: 1x',
    ],
  },
  {
    title: '1 Year',
    price: '$44.95',
    original: '$89.95',
    duration: 'Annual Plan',
    credits: '2,500 AI Credits / Year',
    features: [
      '1 License for 1 Computer',
      'AI Talking Bible Photo: Up to 150 sec',
      'Auto Subtitle: 500 mins',
      'AI Scripture Translation: 300K characters',
      'Bible TTS: 100 mins',
      'Story Video Auto-Pick: 150x',
      'Bible Story Image-to-Video: 15x',
    ],
    popular: true,
  },
  {
    title: 'Lifetime',
    price: '$64.95',
    original: '$129.95',
    duration: 'Lifetime Access',
    credits: '8,000 AI Credits / Lifetime',
    features: [
      'Lifetime Free Upgrades',
      '1 License for 1 Computer',
      'AI Talking Bible Photo: Up to 400 sec',
      'Auto Subtitle: 1500 mins',
      'AI Scripture Translation: 900K characters',
      'Bible TTS: 350 mins',
      'Story Video Auto-Pick: 500x',
      'Bible Story Image-to-Video: 50x',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border shadow-lg p-6 bg-white flex flex-col justify-between ${
                plan.popular ? 'border-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full w-max mb-4">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold">{plan.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{plan.duration}</p>
                <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                <div className="text-sm line-through text-gray-400">{plan.original}</div>
                <p className="mt-2 text-sm font-medium">{plan.credits}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
