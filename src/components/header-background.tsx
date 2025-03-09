type HeaderBackgroundProps = {
  title: string
  subtitle?: string
}

export default function HeaderBackground({ title, subtitle }: HeaderBackgroundProps) {
  return (
    <div className="gradient-header">
      {/* Floating rings */}
      <div className="floating-ring right-0 top-4">
        <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="75" cy="40" rx="70" ry="35" stroke="white" strokeWidth="5" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="floating-ring left-10 top-20" style={{ animationDelay: "1s" }}>
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="50" rx="95" ry="45" stroke="white" strokeWidth="5" strokeOpacity="0.3" />
        </svg>
      </div>

      <div className="floating-ring right-20 bottom-10" style={{ animationDelay: "2s" }}>
        <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="75" cy="40" rx="70" ry="35" stroke="white" strokeWidth="5" strokeOpacity="0.5" />
        </svg>
      </div>

      {/* Header content */}
      <div className="relative z-10">
        {subtitle && <p className="text-purple-200 mb-1">{subtitle}</p>}
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </div>
  )
}

