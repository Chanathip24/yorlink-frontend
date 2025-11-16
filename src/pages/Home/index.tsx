import { css } from '@emotion/react'

const HomePage = () => {
  const style = css`
    color: hotpink;
  `
  return (
    <div css={style}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>This is a body text using your default font and color.</p>
      <p>This is a scrollable box but scrollbar is hidden.</p>

      <div>
        <p>The background and text color change automatically. ภาษาไทย</p>
      </div>
    </div>
  )
}

export default HomePage
