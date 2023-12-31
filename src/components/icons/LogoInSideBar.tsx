import { memo } from "react"

const LogoComponent = (props : any) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 201.31 134.22"
    {...props}
  >
    <g data-name="Layer 2">
      <path
        d="M64.87 64.87A69.26 69.26 0 0 1 96.4 6.75 67.08 67.08 0 0 0 0 67.1v67.11h67.1a66.74 66.74 0 0 0 33.25-8.84 69.28 69.28 0 0 1-35.48-60.5ZM33.55 95.62A28.52 28.52 0 1 1 62.07 67.1a28.52 28.52 0 0 1-28.52 28.52ZM134.21 0A66.73 66.73 0 0 0 101 8.84a69.32 69.32 0 0 1 3.94 118.61 67.07 67.07 0 0 0 96.37-60.35V0Zm33.55 95.62a28.52 28.52 0 1 1 28.52-28.52 28.52 28.52 0 0 1-28.52 28.52ZM134.21 67.1A67 67 0 0 0 100.65 9a67.09 67.09 0 0 0 0 116.21 67.05 67.05 0 0 0 33.56-58.11Zm-33.55 28.52a28.52 28.52 0 1 1-2.14-57h2.14a28.52 28.52 0 0 1 2.91 56.9c-.96.05-1.93.1-2.91.1Z"
        transform="translate(0 .01)"
        style={{
          fill: "#fff",
        }}
        data-name="Layer 1-2"
      />
    </g>
  </svg>
)

const Memo = memo(LogoComponent)
export default Memo
