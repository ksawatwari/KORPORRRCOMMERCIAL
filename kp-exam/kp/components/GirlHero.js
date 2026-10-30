export default function GirlHero() {
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-xs" role="img" aria-label="ภาพการ์ตูนเด็กผู้หญิงยิ้ม">
      <circle cx="160" cy="160" r="150" fill="#fff" fillOpacity=".08" />
      <circle cx="52" cy="92" r="5" fill="#F5A524" />
      <circle cx="274" cy="70" r="7" fill="#F5A524" fillOpacity=".8" />
      <circle cx="268" cy="208" r="4" fill="#fff" fillOpacity=".6" />
      {/* shoulders */}
      <path d="M62 320 C62 262 108 240 160 240 C212 240 258 262 258 320 Z" fill="#F5A524" />
      {/* neck */}
      <rect x="145" y="205" width="30" height="48" rx="12" fill="#F3C3A3" />
      {/* hair back */}
      <path d="M68 172 C68 82 118 48 160 48 C202 48 252 82 252 172 C252 216 242 232 226 234 L94 234 C78 232 68 216 68 172Z" fill="#2B1B17" />
      {/* face */}
      <ellipse cx="160" cy="166" rx="58" ry="62" fill="#FBD5BC" />
      {/* bangs */}
      <path d="M100 152 C106 98 140 84 160 84 C186 84 216 98 222 152 C196 138 176 122 160 106 C144 124 124 140 100 152Z" fill="#2B1B17" />
      {/* eyes */}
      <path d="M133 170 Q141 161 149 170" fill="none" stroke="#2B1B17" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M171 170 Q179 161 187 170" fill="none" stroke="#2B1B17" strokeWidth="3.5" strokeLinecap="round" />
      {/* blush */}
      <ellipse cx="123" cy="184" rx="10" ry="6" fill="#F7A8A0" fillOpacity=".7" />
      <ellipse cx="197" cy="184" rx="10" ry="6" fill="#F7A8A0" fillOpacity=".7" />
      {/* mouth */}
      <path d="M152 190 Q160 198 168 190" fill="none" stroke="#C0665F" strokeWidth="3.5" strokeLinecap="round" />
      {/* hairpin */}
      <circle cx="206" cy="108" r="7" fill="#F5A524" />
      <circle cx="206" cy="108" r="3" fill="#fff" />
    </svg>
  );
}
