const blessed = require('blessed')

module.exports = displayEnvironment

const screen = blessed.screen()
const box = blessed.box({
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  tags: true,
  style: {
    fg: 'yellow',
    bg: 'black'
  }
})
screen.append(box)

screen.key(['escape', 'q', 'C-c'], () => process.exit(0))

function displayEnvironment (environment) {
  const frame = createFrame(environment)
  box.setContent(frame)
  screen.render()
}

function createFrame (environment) {
  let frame = ''
  environment.forEach(row => {
    const transformed = row.map(node => node ? '❄' : ' ')
    frame += transformed.join(' ') + '\n'
  })
  return frame
}
