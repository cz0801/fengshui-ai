import Link from 'next/link';

export default function SwitchFeature() {
  return (
    <div className="text-center space-y-2">
      <p className="text-base text-default-500">
        🎯 This tool focuses on <strong>bedroom Feng Shui layout</strong> — analyzing bed, doors, windows, and more in your sleeping space.
      </p>
      <p className="text-sm text-default-600">
        🏠 Want to analyze your entire apartment layout — including kitchen, living room, and entrance?{' '} <br/>
        <Link href="/" className="text-primary underline hover:text-primary-700 transition">
          Click here for whole home Feng Shui analysis
        </Link>
        .
      </p>
    </div>
  );
}