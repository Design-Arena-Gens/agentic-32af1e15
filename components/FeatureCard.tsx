type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="glass p-6 md:p-8">
      <div className="text-3xl mb-3" aria-hidden>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </div>
  );
}
