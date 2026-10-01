<section className="pt-8 border-t border-stone-200">
<div className="text-center max-w-xl mx-auto mb-10">
  <h2 className="font-serif text-2xl text-stone-900 font-normal">Our Craft in Numbers</h2>
  <p className="text-stone-500 text-sm mt-1">A decade dedicated to perfection, precision, and personal expression.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
  {stats.map((stat) => (
    <div
      key={stat.id}
      className="group relative bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-100/50 rounded-full blur-2xl group-hover:bg-amber-200/60 transition-colors" />

      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 group-hover:scale-110 transition-transform">
          {stat.icon}
        </div>
        <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
          Stat 0{stat.id}
        </span>
      </div>

      <div className="space-y-2">
        <div className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 tracking-tight">
          {stat.number}
        </div>
        <div className="text-lg font-medium text-stone-800">
          {stat.label}
        </div>
        <p className="text-xs text-stone-500 leading-relaxed pt-1">
          {stat.sublabel}
        </p>
      </div>
    </div>
  ))}
</div>
</section>