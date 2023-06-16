function generateSparsityImage(columnSparsity, rowSparsity, spacing = 1) {
  // Use the golden ratio for visually appealing image dimensions
  let goldenRatio = 1.618
  let width = Math.round(Math.sqrt((columnSparsity.length + rowSparsity.length) * goldenRatio))
  let height = Math.round(width / goldenRatio)
  let canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  let ctx = canvas.getContext("2d")
  let imageData = ctx.createImageData(width, height)

  let greens = [
    [235, 237, 240, 255], // #ebedf0
    [199, 233, 192, 255], // #c7e9c0
    [161, 217, 155, 255], // #a1d99b
    [116, 196, 118, 255], // #74c476
    [65, 171, 93, 255], // #41ab5d
    [35, 139, 69, 255], // #238b45
    [0, 90, 50, 255] // #005a32
  ]

  // Create a heatmap function
  let heatMap = function (value) {
    // Scale value to fit within the number of buckets
    let scaledValue = Math.floor(value * greens.length)
    if (scaledValue >= greens.length) {
      scaledValue = greens.length - 1
    }
    return greens[scaledValue]
  }

  for (let i = 0; i < columnSparsity.length; i++) {
    let x = i % width
    let y = Math.floor(i / width)
    let pixelIndex = (y * width + x) * 4
    let color = heatMap(columnSparsity[i])
    imageData.data.set(color, pixelIndex)
  }

  let offset = Math.ceil(columnSparsity.length / width) * width

  for (let i = 0; i < rowSparsity.length; i++) {
    let x = (i + offset) % width
    let y = Math.floor((i + offset) / width)
    let pixelIndex = (y * width + x) * 4
    let color = heatMap(rowSparsity[i])
    imageData.data.set(color, pixelIndex)
  }

  ctx.putImageData(imageData, 0, 0)

  // Append the image to a specific element on your HTML page
  document.getElementById("imageContainer").appendChild(canvas)
}
