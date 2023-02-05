export const Loader = ({ color, size, height = 24, width = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    height={size || height}
    width={size || width}
    aria-hidden="true"
    fill={color}
  >
    <g>
      <circle cx="12" cy="12" r="10" fill="none" opacity="0.4" stroke={color || "rgb(29, 155, 240)"} strokeWidth="1" />
      <circle cx="12" cy="12" r="10" fill="none" stroke={color || "rgb(29, 155, 240)"} strokeDasharray="20,70" strokeWidth="1" />
    </g>
  </svg>
)
