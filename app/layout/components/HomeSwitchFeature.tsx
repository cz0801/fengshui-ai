import Link from 'next/link';


export default function HomeSwitchFeature() {
  return (
    <div className="text-center space-y-2">
      <p className="text-base text-default-500">
        🏠 This tool focuses on <strong>home Feng Shui analysis</strong> — including entrance, kitchen, living room, bathroom, and bedrooms.
      </p>
      <p className="text-sm text-default-600">
        🛏️ Looking for bedroom — focusing on bed, mirrors, windows, and restful energy?{' '} <br/>
        <Link href="/bedroom-layout" className="text-primary underline hover:text-primary-700 transition">
          Click here for bedroom Feng Shui analysis
        </Link>
        .
      </p>
    </div>
  );
}