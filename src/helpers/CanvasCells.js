export const adjustCellHeight = () => {
  const tableCells = document.querySelectorAll("#pixel_canvas td")

  if (tableCells.length > 0) {
    const tableCellWidth = document.querySelector("#pixel_canvas td").offsetWidth

    if (tableCellWidth < 22) {
      tableCells.forEach(cell => cell.style.height = tableCellWidth + 'px')
    }
  }
}
