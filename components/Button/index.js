export default function Button ({ children, handleClick, type, style }) {
  return (
    <>
      <button onClick={handleClick} type={type} className={style}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            display: flex;
            background: black;
            color: white;
            border: none;
            border-radius: 9999px;
            font-weight: bold;
            cursor: pointer;
            font-size: 16px;
            font-weight: 800;
            padding: 8px 24px;
            transition: opacity 300ms ease;
          }

          button > :global(svg) {
            margin-right: 8px;
          }

          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </>
  )
}
